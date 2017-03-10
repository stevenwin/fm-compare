var sherdogData = require('./helpers/sherdogdata.js')
var bfo = require('./bfoUniqueFights.js')
var fs = require('fs')
var today = new Date()

// parameter statCombo is an Array of integers representing the stats to activate 1-4
// 1--- Older Than 32 Will Likely Lose (62%)
// 2--- 6+ Losses more Likely to Lose (60%)
// 3--- 15+ win and 50% of Opponent Losses Likely Win (78%)
// 4--- 3x Decisions Wins of Opponent (60%)
var statCombo = [1, null, null, null]
var err_count = 0
var score = {
   mWin: 0,
   mLose: 0,
   win: 0,
   lose: 0,
   noBet: 0
}

for (var d=0; d<bfo.length; d++) {
   try {
      calcTotal(bfo[d].fighterOne.fighterName, bfo[d].fighterTwo.fighterName, bfo[d].fighterOne.outcome, bfo[d].fighterOne.openOdds, bfo[d].fighterTwo.openOdds, bfo[d].eventDate, 100)
   }
   catch(e) {
         err_count += 1
         //console.log("error: "+err_count)
         //fs.appendFileSync("./error.js", "error: "+err_count+"\n")
      }
}

// calculate win/loss ratio and dollar amount
// f1 = fighter1
// f2 = fighter2
// outcome = fighter1's fight outcome
// odds1 = fighter1 odds
// odds2 = fighter2 odds
// dateTime = date of event
// bet = bet amt
function calcTotal(f1, f2, outcome, odds1, odds2, dateTime, bet) {
   winner = calculatePrediction(f1, f2, outcome, odds1, odds2, dateTime)
   //betPrediction(winner.odds, winner.outcome)
   betChanceOverOdds(winner.wChance, winner.pOdds, winner.odds, winner.outcome)

   // Bet winning prediction
   function betPrediction(odds, outcome) {
   	if (outcome === "win") {
   		if (Number(odds) < 0) {
			score.mWin += (-bet/(Number(odds)/100))
			score.win += 1
		}
		else {
			score.mWin += (bet*(Number(winner.odds)/100))
			score.win += 1
		}
   	}
   	else if (outcome === "loss") {
   		score.mLose += bet
   		score.lose += 1
   	}
   	else {
   		score.noBet += 1
   	}
   }

   // Bet if win chance is greater than odds
   function betChanceOverOdds(chance, percentOdds, odds, outcome) {
   		if (outcome === "win") {
   			if (chance > percentOdds) {
   				if (Number(odds) < 0) {
   					score.mWin += (-bet/(Number(winner.odds)/100))
   					score.win += 1
   				}
   				else {
   					score.mWin += (bet*(Number(winner.odds)/ 100))
   					score.win += 1
   				}
   			}
   			else {
   				score.noBet += 1
   			}
   		}
   		else if (winner.outcome === "loss") {
   			if (chance > percentOdds) {
   				score.mLose += bet
   				score.lose += 1
   			}
   			else {
   				score.noBet += 1
   			}
   		}
   }
   console.log(winner)
   console.log(score)
}

function calculatePrediction(f1, f2, outcome, odds1, odds2, dateTime) {
   f1 = getFighterStat(f1, dateTime)
   f2 = getFighterStat(f2, dateTime)
   pOdds1 = oddsToPercent(odds1)
   pOdds2 = oddsToPercent(odds2)
   winner = {
      name: "",
      opponent: "",
      opponentChance: "",
      wChance: "",
      odds: "",
      pOdds: "",
      outcome: ""
   }

   if (outcome === "win") {
      outcome2 = "loss"
   }
   else {
      outcome2 = "win"
   }

   if (f1.wins.total != 0 && f2.wins.total != 0) {
      wChance = calcWinChance(statCombo, f1, f2) 
   }
   else {
      return //console.log("SherdogData error for fight between "+f1.name+" and "+f2.name)
   }

   if (wChance[0] > wChance[1] ) {
      winner.name = f1.name
      winner.opponent = f2.name
      winner.opponentChance = wChance[1]
      winner.wChance = wChance[0]
      winner.odds = odds1
      winner.pOdds = pOdds1
      winner.outcome = outcome
   }
   else if (wChance[1] > wChance[0]) {
      winner.name = f2.name
      winner.opponent = f1.name
      winner.opponentChance = wChance[0]
      winner.wChance = wChance[1]
      winner.odds = odds2
      winner.pOdds = pOdds2
      winner.outcome = outcome2
   }
   return winner
}


function calcWinChance(sc, f1, f2) {
   var wChance = []
   var totalWeight = {
      f1: {
         totalFights: 0,
         singleFights: 0
      },
      f2: {
         totalFights: 0,
         singleFights: 0
      }
   }
   var sWeight = {
      totalF: {
         s1: 277,
         s2: 291,
         s3: 307,
         s4: 235
      },
      singleF: {
         s1: 173,
         s2: 172,
         s3: 239,
         s4: 142
      }
   }

   // 1--- Older Than 32 Will Likely Lose (62%)
   if (sc[0] === 1) {
      if (f1.older_32 === true && f2.older_32 != true) {
         totalWeight.f2.totalFights += sWeight.totalF.s1
         totalWeight.f2.singleFights += sWeight.singleF.s1
         totalWeight.f1.totalFights += sWeight.totalF.s1
      }
      if (f2.older_32 === true && f1.older_32 != true) {
         totalWeight.f1.totalFights += sWeight.totalF.s1
         totalWeight.f1.singleFights += sWeight.singleF.s1
         totalWeight.f2.totalFights += sWeight.totalF.s1
      }
   }
   // 2--- 6+ Losses more Likely to Lose (60%)
   if (sc[1] === 2) {
      if (f1.losses.total >= 6) {
         totalWeight.f2.totalFights += sWeight.totalF.s2
         totalWeight.f2.singleFights += sWeight.singleF.s2
         totalWeight.f1.totalFights += sWeight.totalF.s2
      }
      if (f2.losses.total >= 6) {
         totalWeight.f1.totalFights += sWeight.totalF.s2
         totalWeight.f1.singleFights += sWeight.singleF.s2
         totalWeight.f2.totalFights += sWeight.totalF.s2
      }
   }
   // 3--- 15+ win and 50% of Opponent Losses Likely Win (78%)
   if (sc[2] === 3) {
      if (f1.wins.total > 14 && f2.losses.total/f1.losses.total >= 2) {
         totalWeight.f1.totalFights += sWeight.totalF.s3
         totalWeight.f1.singleFights += sWeight.singleF.s3
         totalWeight.f2.totalFights += sWeight.totalF.s3
      }
      if (f2.wins.total > 14 && f1.losses.total/f2.losses.total >= 2) {
         totalWeight.f2.totalFights += sWeight.totalF.s3
         totalWeight.f2.singleFights += sWeight.singleF.s3
         totalWeight.f1.totalFights += sWeight.totalF.s3
      }
   }
   // 4--- 3x Decisions Wins of Opponent (60%)
   if (sc[3] === 4) {
      if (f1.wins.decisions/f2.wins.decisions >= 3) {
         totalWeight.f1.totalFights += sWeight.totalF.s4
         totalWeight.f1.singleFights += sWeight.singleF.s4
         totalWeight.f2.totalFights += sWeight.totalF.s4
      }
      if (f2.wins.decisions/f1.wins.decisions >= 3) {
         totalWeight.f2.totalFights += sWeight.totalF.s4
         totalWeight.f2.singleFights += sWeight.singleF.s4
         totalWeight.f1.totalFights += sWeight.totalF.s4
      }
   }
   wChance[0] = (totalWeight.f1.singleFights/totalWeight.f1.totalFights)*100
   wChance[1] = (totalWeight.f2.singleFights/totalWeight.f2.totalFights)*100

   return wChance
}

function oddsToPercent(odds) {
   if (Number(odds) != 0 && Number(odds) < 0) {
      pOdds = ((-1*Number(odds)) / ((-1*(Number(odds)))+100))*100
   }
   else if (Number(odds) != 0) {
      pOdds = (100 / (Number(odds)+ 100))*100
   }
   return pOdds
}

// function to get fighter stats into an object
function getFighterStat(fName, dateTime) {
   var date = dateToDay(dateTime)
   var year = dateToYear(dateTime)
   var relevantBucket = []
   var fighter = {
      name: fName,
      age: "",
      date: "",

      wins: {
         total: 0,
         knockouts: 0,
         submissions: 0,
         decisions: 0,
         others: 0
      },
      losses: {
         total: 0,
         knockouts: 0,
         submissions: 0,
         decisions: 0,
         others: 0
      },
      last_fight_win: false,
      ring_rust: false,
      b2b_loss: false,
      older_32: false
   }
   
   for (var i=0;i<sherdogData.length;i++) {
      for (var k in sherdogData[i]) {
         if (sherdogData[i][k] === fName) {
            // calculate record of fighter based on data snapshot for relevant dates
            for (var x=0;x<sherdogData[i].fights.length;x++) {
               // add to fight bucket
               if (dateToDay(sherdogData[i].fights[x].date) > date) {
                  var bucket = {
                     date: "",
                     result: ""
                  }
                  bucket.date = sherdogData[i].fights[x].date
                  bucket.result = sherdogData[i].fights[x].result
                  relevantBucket.push(bucket)
               }

               // calculate losses from snapshot
               if (dateToDay(sherdogData[i].fights[x].date) > date && sherdogData[i].fights[x].result === "loss") {
                  if (sherdogData[i].fights[x].method.match(/\bKO\b/) || sherdogData[i].fights[x].method.match(/\bTKO\b/)) {
                     fighter.losses.knockouts += 1
                     fighter.losses.total += 1
                  }
                  else if (sherdogData[i].fights[x].method.match(/\bSubmission\b/)) {
                     fighter.losses.submissions += 1
                     fighter.losses.total += 1
                  }
                  else if (sherdogData[i].fights[x].method.match(/\bDecision\b/)) {
                     fighter.losses.decisions += 1
                     fighter.losses.total += 1
                  }
               }

               // calculate wins from snapshot
               if (dateToDay(sherdogData[i].fights[x].date) > date && sherdogData[i].fights[x].result === "win") {
                  if (sherdogData[i].fights[x].method.match(/\bKO\b/) || sherdogData[i].fights[x].method.match(/\bTKO\b/)) {
                     fighter.wins.knockouts += 1
                     fighter.wins.total += 1
                  }
                  else if (sherdogData[i].fights[x].method.match(/\bSubmission\b/) || sherdogData[i].fights[x].method.match(/\bTechnical Submission\b/)) {
                     fighter.wins.submissions += 1
                     fighter.wins.total += 1
                  }
                  else if (sherdogData[i].fights[x].method.match(/\bDecision\b/)) {
                     fighter.wins.decisions += 1
                     fighter.wins.total += 1
                  }
               }
            }
            // calculate b2b loss
            for (var z=0;z<relevantBucket.length-1;z++) {
               if (relevantBucket[z].result === "loss" && relevantBucket[z+1].result === "loss") {
               fighter.b2b_loss = true
               }
            }

            // calculate age
            fighter.age = dateToYear(sherdogData[i].birthday) - dateToYear(relevantBucket[0].date)
            if (dateToYear(sherdogData[i].birthday) - dateToYear(relevantBucket[0].date) > 32) {
               fighter.older_32 = true
            }

            // calculate ring rust
            if (dateToDay(relevantBucket[0].date) - date >= 300) {
                  fighter.ring_rust = true
               }
            
            // calculate last fight win
            if (relevantBucket[0].result === "win") {
               fighter.last_fight_win = true
            }
         }
      }
   }
   return fighter
}


function dateToDay(date) {
   var d = today.getTime() - Date.parse(date);
   var minutes = 1000 * 60;
   var minute = d / 60000
   var hour = minute / 60
   var day = hour / 24
   return day;
}

function dateToYear(date) {
   var d = today.getTime() - Date.parse(date);
   var minute = d / 60000
   var hour = minute / 60
   var day = hour / 24
   var year = day / 365
   return year;
}