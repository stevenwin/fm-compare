var fighter_url = require('./helpers/sherdogdata.js')
var fm_list = require('./helpers/fm_list.js')
var sherdogdata = require('./helpers/sherdogdata')
var fights = require('./helpers/fights.js')
var fm_api = require('./api/fm_api.js')
var manual_test = require('./api/manual_test.js')
var bfo = require('./bfoUniqueFights.js')

const async = require('async')
const fs = require('fs')

var today = new Date()

/*console.log(fighter_url.length)
console.log(fm_list.length)*/
var err_count = 0
var score = {
   total: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat1: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat2: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat3: {
     mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat4: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat5: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat6: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat7: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat8: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat9: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat10: {
     mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat11: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat12: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   },
   stat13: {
      mWin: 0,
      win: 0,
      mLose: 0,
      lose: 0,
      na: 0,
      total: 0
   }
}

// parameter sC is an Array of integers representing the stats to activate 0-12
// 1--- Older Than 32 Will Likely Lose (62%)
// 2--- 6+ KO Wins & Opponent Older Than 32 (78%)
// 3--- 2+ KO Loss Likely Lose (64%)
// 4--- More Sub Losses Than Oppoenent Likely Lose (57%)
// 5--- 6+ Losses more Likely to Lose (60%)
// 6--- 18+ Wins and No B2B Losses Likely to Win (63%)
// 7--- B2B Losses Likely to Lose (57%)
// 8--- No KO Wins Likely to Lose (55%)
// 9--- 15+ win and 50% of Opponent Losses Likely Win (78%)
// 10--- 2x More wins and Opponent Lose Last Fight (68%)
// 11--- 3x Decisions Wins of Opponent (60%)
// 12--- Ring Rust 210+ Days Likely to Lose (59%)
// 13--- Younger Than 3 (58%)

var statCombo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


for (var d=0; d<bfo.length; d++) {
	try {
		compareFighters(bfo[d].fighterOne.fighterName, bfo[d].fighterTwo.fighterName, bfo[d].eventDate, bfo[d].fighterOne.outcome, statCombo, bfo[d].fighterOne.bestWorseOdds, calcWinner)
	}
	catch(e) {
         err_count += 1
         //fs.appendFileSync("./error.js", "error: "+err_count+"\n")
      }
}



function compareFighters(fighterA, fighterB, dateTime, outcome, statCombo, bfoOdds, callback) {
   var pOdds
   var odds = bfoOdds
   if (Number(bfoOdds) != 0 && Number(bfoOdds) < 0) {
      pOdds = ((-1*Number(bfoOdds)) / ((-1*(Number(bfoOdds)))+100))*100
   }
   else if (Number(bfoOdds) != 0) {
      pOdds = (100 / (number(bfoOdds)+ 100))*100
   }
   

   var fighter1 = {
   name: "",
   age: "",
   height: "",
   reach: "",
   outcome: "",
   odds: "",
   pOdds: "",
   potentWin: "",
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
   older_32: false,
   younger_than_three: false
   }

   var fighter2 = {
   name: "",
   age: "",
   height: "",
   reach: "",

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
   older_32: false,
   younger_than_three: false
   }

   var fighter1_bucket = []
   var fighter2_bucket = []
   fighter1.outcome = outcome
   fighter1.odds = bfoOdds
   fighter1.date = dateTime
   fighter1.pOdds = pOdds
   fighter1.name = fighterA
   fighter2.name = fighterB
   var f1_outcome = outcome
   var date = dateToDay(dateTime)
   var year = dateToYear(dateTime)

   if (odds < 0) {
      fighter1.potentWin = (-50/(Number(odds)/100))
   }
   else {
      fighter1.potentWin = (50*(Number(odds)/100))
   }
   

   // CALCULATE FIGHTER A
   // find fighter1 in sherdog data list
   for (var i=0;i<sherdogdata.length;i++) {
      for (var k in sherdogdata[i]) {
         if (sherdogdata[i][k] === fighterA) {
            // calculate record of fighter 1 based on data snapshot for relevant dates
            for (var x=0;x<sherdogdata[i].fights.length;x++) {
               // add to fight bucket
               if (dateToDay(sherdogdata[i].fights[x].date) > date) {
                  var bucket = {
                     date: "",
                     result: ""
                  }
                  bucket.date = sherdogdata[i].fights[x].date
                  bucket.result = sherdogdata[i].fights[x].result
                  fighter1_bucket.push(bucket)
               }

               // calculate losses from snapshot
               if (dateToDay(sherdogdata[i].fights[x].date) > date && sherdogdata[i].fights[x].result === "loss") {
                  if (sherdogdata[i].fights[x].method.match(/\bKO\b/) || sherdogdata[i].fights[x].method.match(/\bTKO\b/)) {
                     fighter1.losses.knockouts += 1
                     fighter1.losses.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bSubmission\b/)) {
                     fighter1.losses.submissions += 1
                     fighter1.losses.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bDecision\b/)) {
                     fighter1.losses.decisions += 1
                     fighter1.losses.total += 1
                  }
               }

               // calculate wins from snapshot
               if (dateToDay(sherdogdata[i].fights[x].date) > date && sherdogdata[i].fights[x].result === "win") {
                  if (sherdogdata[i].fights[x].method.match(/\bKO\b/) || sherdogdata[i].fights[x].method.match(/\bTKO\b/)) {
                     fighter1.wins.knockouts += 1
                     fighter1.wins.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bSubmission\b/) || sherdogdata[i].fights[x].method.match(/\bTechnical Submission\b/)) {
                     fighter1.wins.submissions += 1
                     fighter1.wins.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bDecision\b/)) {
                     fighter1.wins.decisions += 1
                     fighter1.wins.total += 1
                  }
               }
            }
            // calculate b2b loss
            for (var z=0;z<fighter1_bucket.length-1;z++) {
               if (fighter1_bucket[z].result === "loss" && fighter1_bucket[z+1].result === "loss") {
               fighter1.b2b_loss = true
               }
            }

            // calculate age
            fighter1.age = dateToYear(sherdogdata[i].birthday) - dateToYear(fighter1_bucket[0].date)
            if (dateToYear(sherdogdata[i].birthday) - dateToYear(fighter1_bucket[0].date) > 32) {
               fighter1.older_32 = true
            }


            // calculate ring rust
            var dateCalc1a = dateToDay(fighter1_bucket[0].date)-date
            var dateCalc1b = dateToDay(fighter1_bucket[1].date)-date
            if (dateToDay(fighter1_bucket[1].date) - date >= 300) {
                  fighter1.ring_rust = true
               }
            
            // calculate last fight win
            if (fighter1_bucket[0].result === "win") {
               fighter1.last_fight_win = true
            }
         }
      }
   }

   // CALCULATE FIGHTER B
   for (var i=0;i<sherdogdata.length;i++) {
      for (var k in sherdogdata[i]) {
         if (sherdogdata[i][k] === fighterB) {
            // calculate age
            fighter2.age = sherdogdata[i].age

            // calculate record of fighter 2 based on data snapshot for relevant dates
            for (var x=0;x<sherdogdata[i].fights.length;x++) {
               // add to fight bucket
               if (dateToDay(sherdogdata[i].fights[x].date) > date) {
                  var bucket2 = {
                     date: "",
                     result: ""
                  }
                  bucket2.date = sherdogdata[i].fights[x].date
                  bucket2.result = sherdogdata[i].fights[x].result
                  fighter2_bucket.push(bucket2)
               }

               // calculate losses from snapshot
               if (dateToDay(sherdogdata[i].fights[x].date) > date && sherdogdata[i].fights[x].result === "loss") {
                  if (sherdogdata[i].fights[x].method.match(/\bKO\b/) || sherdogdata[i].fights[x].method.match(/\bTKO\b/)) {
                     fighter2.losses.knockouts += 1
                     fighter2.losses.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bSubmission\b/)) {
                     fighter2.losses.submissions += 1
                     fighter2.losses.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bDecision\b/)) {
                     fighter2.losses.decisions += 1
                     fighter2.losses.total += 1
                  }
               }

               // calculate wins from snapshot
               if (dateToDay(sherdogdata[i].fights[x].date) > date && sherdogdata[i].fights[x].result === "win") {
                  if (sherdogdata[i].fights[x].method.match(/\bKO\b/) || sherdogdata[i].fights[x].method.match(/\bTKO\b/)) {
                     fighter2.wins.knockouts += 1
                     fighter2.wins.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bSubmission\b/) || sherdogdata[i].fights[x].method.match(/\bTechnical Submission\b/)) {
                     fighter2.wins.submissions += 1
                     fighter2.wins.total += 1
                  }
                  else if (sherdogdata[i].fights[x].method.match(/\bDecision\b/)) {
                     fighter2.wins.decisions += 1
                     fighter2.wins.total += 1
                  }
               }

            }
            // calculate b2b loss
            for (var z=0;z<fighter2_bucket.length-1;z++) {
               if (fighter2_bucket[z].result === "loss" && fighter2_bucket[z+1].result === "loss") {
               fighter2.b2b_loss = true
               }
            }
            // calculate age
            fighter2.age = dateToYear(sherdogdata[i].birthday) - dateToYear(fighter2_bucket[0].date)
            if (dateToYear(sherdogdata[i].birthday) - dateToYear(fighter2_bucket[0].date) > 32) {
               fighter2.older_32 = true
            }

            

            // calculate ring rust
            var dateCalc2a = dateToDay(fighter2_bucket[0].date)-date
            var dateCalc2b = dateToDay(fighter2_bucket[1].date)-date
            if (dateToDay(fighter2_bucket[1].date) - date >= 300) {
                  fighter2.ring_rust = true
               }
            
            // calculate last fight win
            if (fighter2_bucket[0].result === "win") {
               fighter2.last_fight_win = true
            }
         }
      }
   }

   if (fighter1.age - fighter2.age > 3) {
      fighter2.younger_than_three = true
   }

   if (fighter2.age - fighter1.age > 3) {
      fighter1.younger_than_three = true
   }

   // Output fighter statistics
   /*console.log(
      "name: "+fighter1.name+"\n"+
      "age: "+fighter1.age+"\n"+
      "total wins: "+fighter1.wins.total+"\n"+
      "ko wins: "+fighter1.wins.knockouts+"\n"+
      "sub wins: "+fighter1.wins.submissions+"\n"+
      "dec wins: "+fighter1.wins.decisions+"\n"+"\n"+
      "total losses: "+fighter1.losses.total+"\n"+
      "ko loss: "+fighter1.losses.knockouts+"\n"+
      "sub loss: "+fighter1.losses.submissions+"\n"+
      "dec loss: "+fighter1.losses.decisions+"\n"+"\n"+
      "win last fight? "+fighter1.last_fight_win+"\n"+
      "ring rust? "+fighter1.ring_rust+"\n"+
      "b2b loss?"+fighter1.b2b_loss+"\n"+"\n"+

      "name: "+fighter2.name+"\n"+
      "age: "+fighter2.age+"\n"+
      "total wins: "+fighter2.wins.total+"\n"+
      "ko wins: "+fighter2.wins.knockouts+"\n"+
      "sub wins: "+fighter2.wins.submissions+"\n"+
      "dec wins: "+fighter2.wins.decisions+"\n"+"\n"+
      "total losses: "+fighter2.losses.total+"\n"+
      "ko loss: "+fighter2.losses.knockouts+"\n"+
      "sub loss: "+fighter2.losses.submissions+"\n"+
      "dec loss: "+fighter2.losses.decisions+"\n"+"\n"+
      "win last fight? "+fighter2.last_fight_win+"\n"+
      "ring rust? "+fighter2.ring_rust+"\n"+
      "b2b loss?"+fighter2.b2b_loss+"\n")*/
   callback(fighter1, fighter2, f1_outcome, statCombo, pOdds, odds)
}


function calcWinner(f1, f2, outcome, statCombo, pOdds, odds) {
   var p = {
      f1: {
         total: 0,
         stat1: 0,
         stat2: 0,
         stat3: 0,
         stat4: 0,
         stat5: 0,
         stat6: 0,
         stat7: 0,
         stat8: 0,
         stat9: 0,
         stat10: 0,
         stat11: 0,
         stat12: 0,
         stat13: 0
      },

      f2: {
         total: 0,
         stat1: 0,
         stat2: 0,
         stat3: 0,
         stat4: 0,
         stat5: 0,
         stat6: 0,
         stat7: 0,
         stat8: 0,
         stat9: 0,
         stat10: 0,
         stat11: 0,
         stat12: 0,
         stat13: 0
      }
   }

   compareStats(statCombo)

   // parameter sC is an Array of integers representing the stats to activate
   function compareStats(sC) {
      if (sC[0] === 1) {
         if (f1.older_32 === true && f2.older_32 != true) {
            p.f2.total += 1
            p.f2.stat1 += 1
         }
         if (f2.older_32 === true && f1.older_32 != true) {
            p.f1.total += 1
            p.f1.stat1 += 1
         }
      }

      if (sC[1] === 2) {
         if (f1.older_32 === true && f2.wins.knockouts > 6) {
            p.f2.total += 1
            p.f2.stat2 += 1
         }
         if (f2.older_32 === true && f1.wins.knockouts >6) {
            p.f1.total += 1
            p.f1.stat2 += 1
         }
      }

      if (sC[2] === 3) {
         if (f1.losses.knockouts >= 2 && f2.losses.knockouts < 2) {
            p.f2.total += 1
            p.f2.stat3 += 1
         }
         if (f2.losses.knockouts >= 2 && f1.losses.knockouts < 2) {
            p.f1.total += 1
            p.f1.stat3 += 1
         }
      }

      if (sC[3] === 4) {
         if (f1.losses.submissions < f2.losses.submissions) {
            p.f1.total += 1
            p.f1.stat4 += 1
         }
         if (f2.losses.submissions < f1.losses.submissions) {
            p.f2.total += 1
            p.f2.stat4 += 1
         }
      }

      if (sC[4] === 5) {
         if (f1.losses.total >= 6) {
            p.f2.total += 1
            p.f2.stat5 += 1
         }
         if (f2.losses.total >= 6) {
            p.f1.total += 1
            p.f1.stat5 += 1
         }
      }

      if (sC[5] === 6) {
         if (f1.wins.total >= 18 && f1.b2b_loss === false) {
            p.f1.total += 1
            p.f1.stat6 += 1
         }
         if (f2.wins.total >= 18 && f2.b2b_loss === false) {
            p.f2.total += 1
            p.f2.stat6 += 1
         }
      }

      if (sC[6] === 7) {
         if (f1.b2b_loss === true) {
            p.f2.total += 1
            p.f2.stat7 += 1
         }
         if (f2.b2b_loss === true) {
            p.f1.total += 1
            p.f1.stat7 += 1
         }
      }

      if (sC[7] === 8) {
         if (f1.wins.knockouts === 0) {
            p.f2.total += 1
            p.f2.stat8 += 1
         }
         if (f2.wins.knockouts === 0) {
            p.f1.total += 1
            p.f1.stat8 += 1
         }
      }

      if (sC[8] === 9) {
         if (f1.wins.total > 14 && f2.losses.total/f1.losses.total >= 2) {
            p.f1.total += 2
            p.f1.stat9 += 2
         }
         if (f2.wins.total > 14 && f1.losses.total/f2.losses.total >= 2) {
            p.f2.total += 2
            p.f2.stat9 += 2
         }
      }

      if (sC[9] === 10) {
         if (f1.wins.total/f2.wins.total >= 2 && f2.last_fight_win === false) {
            p.f1.total += 1
            p.f1.stat10 += 1
         }
         if (f2.wins.total/f1.wins.total >= 2 && f1.last_fight_win === false) {
            p.f2.total += 1
            p.f2.stat10 += 1
         }
      }

      if (sC[10] === 11) {
         if (f1.wins.decisions/f2.wins.decisions >= 3) {
            p.f1.total += 1
            p.f1.stat11 += 1
         }
         if (f2.wins.decisions/f1.wins.decisions >= 3) {
            p.f2.total += 1
            p.f2.stat11 += 1
         }
      }

      if (sC[11] === 12) {
         if (f1.ring_rust === true) {
            p.f2.total += 1
            p.f2.stat12 += 1
         }
         if (f2.ring_rust === true) {
            p.f1.total += 1
            p.f1.stat12 += 1
         }
      }

      if (sC[12] === 13) {
         if (f1.younger_than_three === true) {
            p.f1.total += 1
            p.f1.stat13 += 1
         }
         if (f2.younger_than_three === true) {
            p.f2.total += 1
            p.f2.stat13 += 1
         }
      }
      calcResults(outcome, p, f1, f2, 50)
      outputPrediction()
   }


   // age compare
   /*if (f1.older_32 === true && f2.older_32 != true) {
      p.f2.total += 1
      p.f2.stat1 += 1
   }
   if (f2.older_32 === true && f1.older_32 != true) {
      p.f1.total += 1
      p.f1.stat1 += 1
   }*/

   // 6 tko & opponent > 32yo
   /*if (f1.older_32 === true && f2.wins.knockouts > 6) {
      //p.f2.total += 1
      p.f2.stat2 += 1
   }
   if (f2.older_32 === true && f1.wins.knockouts >6) {
      //p.f1.total += 1
      p.f1.stat2 += 1
   }*/

   // 2 or more KO loss
   /*if (f1.losses.knockouts >= 2 && f2.losses.knockouts < 2) {
      //p.f2.total += 1
      p.f2.stat3 += 1
   }
   if (f2.losses.knockouts >= 2 && f1.losses.knockouts < 2) {
      //p.f1.total += 1
      p.f1.stat3 += 1
   }

   // lost less subs
   if (f1.losses.submissions < f2.losses.submissions) {
      p.f1.total += 1
      p.f1.stat4 += 1
   }
   if (f2.losses.submissions < f1.losses.submissions) {
      p.f2.total += 1
      p.f2.stat4 += 1
   }

   // lost 6 or more
   if (f1.losses.total >= 6) {
      //p.f2.total += 1
      p.f2.stat5 += 1
   }
   if (f2.losses.total >= 6) {
      //p.f1.total += 1
      p.f1.stat5 += 1
   }

   // 18+ wins and no b2b loss
   if (f1.wins.total >= 18 && f1.b2b_loss === false) {
      //p.f1.total += 1
      p.f1.stat6 += 1
   }
   if (f2.wins.total >= 18 && f2.b2b_loss === false) {
      //p.f2.total += 1
      p.f2.stat6 += 1
   }

   // b2b loss
   if (f1.b2b_loss === true) {
      //p.f2.total += 1
      p.f2.stat7 += 1
   }
   if (f2.b2b_loss === true) {
      //p.f1.total += 1
      p.f1.stat7 += 1
   }*/

   // no tkos
   /*if (f1.wins.knockouts === 0) {
      //p.f2.total += 1
      p.f2.stat8 += 1
   }
   if (f2.wins.knockouts === 0) {
      //p.f1.total += 1
      p.f1.stat8 += 1
   }

   // 15+ wins and 50% of opponent losses
   if (f1.wins.total > 14 && f2.losses.total/f1.losses.total >= 2) {
      p.f1.total += 2
      p.f1.stat9 += 2
   }
   if (f2.wins.total > 14 && f1.losses.total/f2.losses.total >= 2) {
      p.f2.total += 2
      p.f2.stat9 += 2
   }

   // 2x more wins than opponent and opponent lost last
   if (f1.wins.total/f2.wins.total >= 2 && f2.last_fight_win === false) {
      p.f1.total += 1
      p.f1.stat10 += 1
   }
   if (f2.wins.total/f1.wins.total >= 2 && f1.last_fight_win === false) {
      p.f2.total += 1
      p.f2.stat10 += 1
   }

   // 3x decisions wins as opponent
   if (f1.wins.decisions/f2.wins.decisions >= 3) {
      p.f1.total += 1
      p.f1.stat11 += 1
   }
   if (f2.wins.decisions/f1.wins.decisions >= 3) {
      p.f2.total += 1
      p.f2.stat11 += 1
   }

   // Ring Rust
   if (f1.ring_rust === true) {
      //p.f2.total += 1
      p.f2.stat12 += 1
   }
   if (f2.ring_rust === true) {
      //p.f1.total += 1
      p.f1.stat12 += 1
   }*/

   // Calc results
   function calcResults(outcome, p, f1, f2, bet) {
      if (f1.wins.total != 0 && f2.wins.total != 0) {
         if (outcome === "win") {
            if (p.f1.total > p.f2.total) {
               if (odds < 0) {
                  score.total.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.total.mWin += (bet*(Number(odds)/100))
               }
               
               score.total.win += 1
               score.total.total += 1
               //fs.appendFileSync("./test/total.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
               /*console.log(
                  "Prediction: "+f1.name+"\n"+
                  "Outcome: "+f1.name)*/
            }
            else if (p.f2.total > p.f1.total) {
               score.total.mLose += bet
               score.total.lose += 1
               score.total.total += 1
               //fs.appendFileSync("./test/totalw.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
               /*console.log(
                  "Prediction: "+f2.name+"\n"+
                  "Outcome: "+f1.name)*/
            }
            else {
               score.total.na += 1
               //console.log("Prediction: No Prediction")
            }
            // Older than 32
            if (p.f1.stat1 > p.f2.stat1) {
               if (odds < 0) {
                  score.stat1.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat1.mWin += (bet*(Number(odds)/100))
               }
               score.stat1.win += 1
               score.stat1.total += 1
               //fs.appendFileSync("./test/stat1.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat1 > p.f1.stat1) {
               score.stat1.mLose += bet
               score.stat1.lose += 1
               score.stat1.total += 1
               //fs.appendFileSync("./test/stat1w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat1.na += 1
            }
            // More than 6 KOs and opponent older than 32
            if (p.f1.stat2 > p.f2.stat2) {
               if (odds < 0) {
                  score.stat2.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat2.mWin += (bet*(Number(odds)/100))
               }
               score.stat2.win += 1
               score.stat2.total += 1
               //fs.appendFileSync("./test/stat2.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat2 > p.f1.stat2) {
               score.stat2.mLose += bet
               score.stat2.lose += 1
               score.stat2.total += 1
               //fs.appendFileSync("./test/stat2w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat2.na += 1
            }
            // Lose 2 or more KOs
            if (p.f1.stat3 > p.f2.stat3) {
               if (odds < 0) {
                  score.stat3.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat3.mWin += (bet*(Number(odds)/100))
               }
               score.stat3.win += 1
               score.stat3.total += 1
               //fs.appendFileSync("./test/stat3.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if(p.f2.stat3 > p.f1.stat3) {
               score.stat3.mLose += bet
               score.stat3.lose += 1
               score.stat3.total += 1
               //fs.appendFileSync("./test/stat3w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat3.na += 1
            }
            // Lose less by subs
            if (p.f1.stat4 > p.f2.stat4) {
               if (odds < 0) {
                  score.stat4.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat4.mWin += (bet*(Number(odds)/100))
               }
               score.stat4.win += 1
               score.stat4.total += 1
               //fs.appendFileSync("./test/stat4.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat4 > p.f1.stat4) {
               score.stat4.mLose += bet
               score.stat4.lose += 1
               score.stat4.total +=1
               //fs.appendFileSync("./test/stat4w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat4.na += 1
            }
            // Lose more than 6 fights
            if (p.f1.stat5 > p.f2.stat5) {
               if (odds < 0) {
                  score.stat5.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat5.mWin += (bet*(Number(odds)/100))
               }
               score.stat5.win += 1
               score.stat5.total += 1
               //fs.appendFileSync("./test/stat5.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat5 > p.f1.stat5) {
               score.stat5.mLose += bet
               score.stat5.lose += 1
               score.stat5.total += 1
               //fs.appendFileSync("./test/stat5w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat5.na += 1
            }
            // 18 or more wins and no b2b lose
            if (p.f1.stat6 > p.f2.stat6) {
               if (odds < 0) {
                  score.stat6.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat6.mWin += (bet*(Number(odds)/100))
               }
               score.stat6.win += 1
               score.stat6.total += 1
               //fs.appendFileSync("./test/stat6.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat6 > p.f1.stat6) {
               score.stat6.mLose += bet
               score.stat6.lose += 1
               score.stat6.total += 1
               //fs.appendFileSync("./test/stat6w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat6.na += 1
            }
            // b2b losses
            if (p.f1.stat7 > p.f2.stat7) {
               if (odds < 0) {
                  score.stat7.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat7.mWin += (bet*(Number(odds)/100))
               }
               score.stat7.win += 1
               score.stat7.total += 1
               //fs.appendFileSync("./test/stat7.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat7 > p.f1.stat7) {
               score.stat7.mLose += bet
               score.stat7.lose += 1
               score.stat7.total += 1
               //fs.appendFileSync("./test/stat7w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat7.lose += 1
            }
            // no KOs
            if (p.f1.stat8 > p.f2.stat8) {
               if (odds < 0) {
                  score.stat8.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat8.mWin += (bet*(Number(odds)/100))
               }
               score.stat8.win += 1
               score.stat8.total += 1
               //fs.appendFileSync("./test/stat8.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat8 > p.f1.stat8) {
               score.stat8.mLose += bet
               score.stat8.lose += 1
               score.stat8.total += 1
               //fs.appendFileSync("./test/stat8w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat8.na += 1
            }
            // 15+ wins and 50% of opponent losses
            if (p.f1.stat9 > p.f2.stat9) {
               if (odds < 0) {
                  score.stat9.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat9.mWin += (bet*(Number(odds)/100))
               }
               score.stat9.win += 1
               score.stat9.total += 1
               //fs.appendFileSync("./test/stat9.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat9 > p.f1.stat9) {
               score.stat9.mLose += bet
               score.stat9.lose += 1
               score.stat9.total += 1
               //fs.appendFileSync("./test/stat9w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat9.na += 1
            }
            // 2x more wins than opponent and opponent lost last
            if (p.f1.stat10 > p.f2.stat10) {
               if (odds < 0) {
                  score.stat10.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat10.mWin += (bet*(Number(odds)/100))
               }
               score.stat10.win += 1
               score.stat10.total += 1
               //fs.appendFileSync("./test/stat10.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat10 > p.f1.stat10) {
               score.stat10.mLose += bet
               score.stat10.lose += 1
               score.stat10.total += 1
               //fs.appendFileSync("./test/stat10w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat10.na += 1
            }
            // 3x decisions wins as opponent
            if (p.f1.stat11 > p.f2.stat11) {
               if (odds < 0) {
                  score.stat11.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat11.mWin += (bet*(Number(odds)/100))
               }
               score.stat11.win += 1
               score.stat11.total += 1
               //fs.appendFileSync("./test/stat11.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat11 > p.f1.stat11) {
               score.stat11.mLose += bet
               score.stat11.lose += 1
               score.stat11.total += 1
               //fs.appendFileSync("./test/stat11w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat11.na += 1
            }
            // Ring Rust
            if (p.f1.stat12 > p.f2.stat12) {
               if (odds < 0) {
                  score.stat12.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat12.mWin += (bet*(Number(odds)/100))
               }
               score.stat12.win += 1
               score.stat12.total += 1
               //fs.appendFileSync("./test/stat12.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat12 > p.f1.stat12) {
               score.stat12.mLose += bet
               score.stat12.lose += 1
               score.stat12.total += 1
               //fs.appendFileSync("./test/stat12w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat12.na += 1
            }
            // Younger Than Three
            if (p.f1.stat13 > p.f2.stat13) {
               if (odds < 0) {
                  score.stat13.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat13.mWin += (bet*(Number(odds)/100))
               }
               score.stat13.win += 1
               score.stat13.total += 1
               //fs.appendFileSync("./test/stat13.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat13 > p.f1.stat13) {
               score.stat13.mLose += bet
               score.stat13.lose += 1
               score.stat13.total += 1
               //fs.appendFileSync("./test/stat13w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat13.na += 1
            }
         }

         if (outcome === "loss") {
            if (p.f1.total > p.f2.total) {
               score.total.mLose += bet
               score.total.lose += 1
               score.total.total += 1
               /*console.log(
                  "Prediction: "+f1.name+"\n"+
                  "Outcome: "+f2.name)*/
            }
            else if (p.f2.total > p.f1.total) {
               if (odds < 0) {
                  score.total.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.total.mWin += (bet*(Number(odds)/100))
               }
               score.total.win += 1
               score.total.total += 1
               fs.appendFileSync("./test/total.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
               /*console.log(
                  "Prediction: "+f2.name+"\n"+
                  "Outcome: "+f2.name)*/
            }
            else {
               score.total.na += 1
               //console.log("Prediction: No Prediction")
            }
            // Older than 32
            if (p.f1.stat1 > p.f2.stat1) {
               score.stat1.mLose += bet
               score.stat1.lose += 1
               score.stat1.total += 1
            }
            else if (p.f2.stat1 > p.f1.stat1) {
               if (odds < 0) {
                  score.stat1.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat1.mWin += (bet*(Number(odds)/100))
               }
               score.stat1.win += 1
               score.stat1.total += 1
                fs.appendFileSync("./test/stat1.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat1.na += 1
            }
            // More than 6 KOs and opponent older than 32
            if (p.f1.stat2 > p.f2.stat2) {
               score.stat2.mLose += bet
               score.stat2.lose += 1
               score.stat2.total += 1
            }
            else if (p.f2.stat2 > p.f1.stat2) {
               if (odds < 0) {
                  score.stat2.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat2.mWin += (bet*(Number(odds)/100))
               }
               score.stat2.win += 1
               score.stat2.total += 1
               fs.appendFileSync("./test/stat2.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat2.na += 1
            }
            // Lose 2 or more KOs
            if (p.f1.stat3 > p.f2.stat3) {
               score.stat3.mLose += bet
               score.stat3.lose += 1
               score.stat3.total += 1
            }
            else if(p.f2.stat3 > p.f1.stat3) {
               if (odds < 0) {
                  score.stat3.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat3.mWin += (bet*(Number(odds)/100))
               }
               score.stat3.win += 1
               score.stat3.total += 1
               fs.appendFileSync("./test/stat3.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat3.na += 1
            }
            // Lose less by subs
            if (p.f1.stat4 > p.f2.stat4) {
               score.stat4.mLose += bet
               score.stat4.lose += 1
               score.stat4.total += 1
            }
            else if (p.f2.stat4 > p.f1.stat4) {
               if (odds < 0) {
                  score.stat4.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat4.mWin += (bet*(Number(odds)/100))
               }
               score.stat4.win += 1
               score.stat4.total +=1
               fs.appendFileSync("./test/stat4.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat4.na += 1
            }
            // Lose more than 6 fights
            if (p.f1.stat5 > p.f2.stat5) {
               score.stat5.mLose += bet
               score.stat5.lose += 1
               score.stat5.total += 1
            }
            else if (p.f2.stat5 > p.f1.stat5) {
               if (odds < 0) {
                  score.stat5.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat5.mWin += (bet*(Number(odds)/100))
               }
               score.stat5.win += 1
               score.stat5.total += 1
               fs.appendFileSync("./test/stat5.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat5.na += 1
            }
            // 18 or more wins and no b2b lose
            if (p.f1.stat6 > p.f2.stat6) {
               score.stat6.mLose += bet
               score.stat6.lose += 1
               score.stat6.total += 1
            }
            else if (p.f2.stat6 > p.f1.stat6) {
               if (odds < 0) {
                  score.stat6.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat6.mWin += (bet*(Number(odds)/100))
               }
               score.stat6.win += 1
               score.stat6.total += 1
               fs.appendFileSync("./test/stat6.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat6.na += 1
            }
            // b2b losses
            if (p.f1.stat7 > p.f2.stat7) {
               score.stat7.mLose += bet
               score.stat7.lose += 1
               score.stat7.total += 1
            }
            else if (p.f2.stat7 > p.f1.stat7) {
               if (odds < 0) {
                  score.stat7.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat7.mWin += (bet*(Number(odds)/100))
               }
               score.stat7.win += 1
               score.stat7.total += 1
               fs.appendFileSync("./test/stat7.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat7.na += 1
            }
            // no KOs
            if (p.f1.stat8 > p.f2.stat8) {
               score.stat8.mLose += bet
               score.stat8.lose += 1
               score.stat8.total += 1
            }
            else if (p.f2.stat8 > p.f1.stat8) {
               if (odds < 0) {
                  score.stat8.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat8.mWin += (bet*(Number(odds)/100))
               }
               score.stat8.win += 1
               score.stat8.total += 1
               fs.appendFileSync("./test/stat8.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat8.na += 1
            }
            // 15+ wins and 50% of opponent losses
            if (p.f1.stat9 > p.f2.stat9) {
               score.stat9.mLose += bet
               score.stat9.lose += 1
               score.stat9.total += 1
            }
            else if (p.f2.stat9 > p.f1.stat9) {
               if (odds < 0) {
                  score.stat9.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat9.mWin += (bet*(Number(odds)/100))
               }
               score.stat9.win += 1
               score.stat9.total += 1
               fs.appendFileSync("./test/stat9.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat9.na += 1
            }
            // 2x more wins than opponent and opponent lost last
            if (p.f1.stat10 > p.f2.stat10) {
               score.stat10.mLose += bet
               score.stat10.lose += 1
               score.stat10.total += 1
            }
            else if (p.f2.stat10 > p.f1.stat10) {
               if (odds < 0) {
                  score.stat10.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat10.mWin += (bet*(Number(odds)/100))
               }
               score.stat10.win += 1
               score.stat10.total += 1
               fs.appendFileSync("./test/stat10.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat10.na += 1
            }
            // 3x decisions wins as opponent
            if (p.f1.stat11 > p.f2.stat11) {
               score.stat11.mLose += bet
               score.stat11.lose += 1
               score.stat11.total += 1
            }
            else if (p.f2.stat11 > p.f1.stat11) {
               if (odds < 0) {
                  score.stat11.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat11.mWin += (bet*(Number(odds)/100))
               }
               score.stat11.win += 1
               score.stat11.total += 1
               fs.appendFileSync("./test/stat11.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat11.na += 1
            }
            // Ring Rust
            if (p.f1.stat12 > p.f2.stat12) {
               score.stat12.mLose += bet
               score.stat12.lose += 1
               score.stat12.total += 1
            }
            else if (p.f2.stat12 > p.f1.stat12) {
               if (odds < 0) {
                  score.stat12.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat12.mWin += (bet*(Number(odds)/100))
               }
               score.stat12.win += 1
               score.stat12.total += 1
               fs.appendFileSync("./test/stat12.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat12.na += 1
            }
            // Younger Than Three
            if (p.f1.stat13 > p.f2.stat13) {
               score.stat13.mLose += bet
               score.stat13.lose += 1
               score.stat13.total += 1
               fs.appendFileSync("./test/stat13w.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else if (p.f2.stat13 > p.f1.stat13) {
               if (odds < 0) {
                  score.stat13.mWin += (-bet/(Number(odds)/100))
               }
               else {
                  score.stat13.mWin += (bet*(Number(odds)/100))
               }
               score.stat13.win += 1
               score.stat13.total += 1
               fs.appendFileSync("./test/stat13.js", "["+"\n"+JSON.stringify(f1, null, "\t")+","+"\n"+JSON.stringify(f2, null, "\t")+"\n"+"]"+","+"\n")
            }
            else {
               score.stat13.na += 1
            }
         }
      }
   }
   
   

   
   
   // Output Prediction Stats
   function outputPrediction() {
      var prediction_p = (score.total.win/score.total.total)*100
      var stat1_p = (score.stat1.win/score.stat1.total)*100
      var stat2_p = (score.stat2.win/score.stat2.total)*100
      var stat3_p = (score.stat3.win/score.stat3.total)*100
      var stat4_p = (score.stat4.win/score.stat4.total)*100
      var stat5_p = (score.stat5.win/score.stat5.total)*100
      var stat6_p = (score.stat6.win/score.stat6.total)*100
      var stat7_p = (score.stat7.win/score.stat7.total)*100
      var stat8_p = (score.stat8.win/score.stat8.total)*100
      var stat9_p = (score.stat9.win/score.stat9.total)*100
      var stat10_p = (score.stat10.win/score.stat10.total)*100
      var stat11_p = (score.stat11.win/score.stat11.total)*100
      var stat12_p = (score.stat12.win/score.stat12.total)*100
      var stat13_p = (score.stat13.win/score.stat13.total)*100
      

      function outputText(label, sTotal, sWin, sLose, sP, score) {
         console.log(
            label+" Total: "+sTotal+"\n"+
            label+" Right: "+sWin+"\n"+
            label+" Wrong: "+sLose+"\n"+
            label+" Percentage: "+sP+"%"+"\n"
            )
      }

      /*outputText("Predictions", score.total.total, score.total.win, score.total.lose, prediction_p, score)
      outputText("Stat1", score.stat1.total, score.stat1.win, score.stat1.lose, stat1_p, score)
      outputText("Stat2", score.stat2.total, score.stat2.win, score.stat2.lose, stat2p, score)
      outputText("Stat3", score.stat3.total, score.stat3.win, score.stat3.lose, stat3_p, score)
      outputText("Stat4", score.stat4.total, score.stat4.win, score.stat4.lose, stat4_p, score)
      outputText("Stat5", score.stat5.total, score.stat5.win, score.stat5.lose, stat5_p, score)
      outputText("Stat6", score.stat6.total, score.stat6.win, score.stat6.lose, stat6_p, score)
      outputText("Stat7", score.stat7.total, score.stat7.win, score.stat7.lose, stat7_p, score)
      outputText("Stat8", score.stat8.total, score.stat8.win, score.stat8.lose, stat8_p, score)
      outputText("Stat9", score.stat9.total, score.stat9.win, score.stat9.lose, stat9_p, score)
      outputText("Stat10", score.stat10.total, score.stat10.win, score.stat10.lose, stat10_p, score)
      outputText("Stat11", score.stat11.total, score.stat11.win, score.stat11.lose, stat11_p, score)
      outputText("Stat12", score.stat12.total, score.stat12.win, score.stat12.lose, stat12_p, score)
       outputText("Stat13", score.stat13.total, score.stat13.win, score.stat13.lose, stat13_p, score)*/


      console.log(
         "Win Total: "+score.total.mWin+"\n"+
         "Lose Total: "+score.total.mLose+"\n"+
         "Predictions Total: "+score.total.total+"\n"+
         "Predictions Right: "+score.total.win+"\n"+
         "Predictions Wrong: "+score.total.lose+"\n"+
         "Prediction Percentage: "+prediction_p+"%"+"\n"+

         "Win Total: "+score.stat1.mWin+"\n"+
         "Lose Total: "+score.stat1.mLose+"\n"+
         "Stat1 Total: "+score.stat1.total+"\n"+
         "Stat1 Right: "+score.stat1.win+"\n"+
         "Stat1 Wrong: "+score.stat1.lose+"\n"+
         "Stat1 Percentage: "+stat1_p+"%"+"\n"+

         "Win Total: "+score.stat2.mWin+"\n"+
         "Lose Total: "+score.stat2.mLose+"\n"+
         "stat2 Total: "+score.stat2.total+"\n"+
         "stat2 Right: "+score.stat2.win+"\n"+
         "stat2 Wrong: "+score.stat2.lose+"\n"+
         "stat2 Percentage: "+stat2_p+"%"+"\n"+

         "Win Total: "+score.stat3.mWin+"\n"+
         "Lose Total: "+score.stat3.mLose+"\n"+
         "stat3 Total: "+score.stat3.total+"\n"+
         "stat3 Right: "+score.stat3.win+"\n"+
         "stat3 Wrong: "+score.stat3.lose+"\n"+
         "stat3 Percentage: "+stat3_p+"%"+"\n"+

         "Win Total: "+score.stat4.mWin+"\n"+
         "Lose Total: "+score.stat4.mLose+"\n"+
         "stat4 Total: "+score.stat4.total+"\n"+
         "stat4 Right: "+score.stat4.win+"\n"+
         "stat4 Wrong: "+score.stat4.lose+"\n"+
         "stat4 Percentage: "+stat4_p+"%"+"\n"+

         "Win Total: "+score.stat5.mWin+"\n"+
         "Lose Total: "+score.stat5.mLose+"\n"+
         "stat5 Total: "+score.stat5.total+"\n"+
         "stat5 Right: "+score.stat5.win+"\n"+
         "stat5 Wrong: "+score.stat5.lose+"\n"+
         "stat5 Percentage: "+stat5_p+"%"+"\n"+

         "Win Total: "+score.stat6.mWin+"\n"+
         "Lose Total: "+score.stat6.mLose+"\n"+
         "stat6 Total: "+score.stat6.total+"\n"+
         "stat6 Right: "+score.stat6.win+"\n"+
         "stat6 Wrong: "+score.stat6.lose+"\n"+
         "stat6 Percentage: "+stat6_p+"%"+"\n"+

         "Win Total: "+score.stat7.mWin+"\n"+
         "Lose Total: "+score.stat7.mLose+"\n"+
         "stat7 Total: "+score.stat7.total+"\n"+
         "stat7 Right: "+score.stat7.win+"\n"+
         "stat7 Wrong: "+score.stat7.lose+"\n"+
         "stat7 Percentage: "+stat7_p+"%"+"\n"+

         "Win Total: "+score.stat8.mWin+"\n"+
         "Lose Total: "+score.stat8.mLose+"\n"+
         "stat8 Total: "+score.stat8.total+"\n"+
         "stat8 Right: "+score.stat8.win+"\n"+
         "stat8 Wrong: "+score.stat8.lose+"\n"+
         "stat8 Percentage: "+stat8_p+"%"+"\n"+

         "Win Total: "+score.stat9.mWin+"\n"+
         "Lose Total: "+score.stat9.mLose+"\n"+
         "stat9 Total: "+score.stat9.total+"\n"+
         "stat9 Right: "+score.stat9.win+"\n"+
         "stat9 Wrong: "+score.stat9.lose+"\n"+
         "stat9 Percentage: "+stat9_p+"%"+"\n"+

         "Win Total: "+score.stat10.mWin+"\n"+
         "Lose Total: "+score.stat10.mLose+"\n"+
         "stat10 Total: "+score.stat10.total+"\n"+
         "stat10 Right: "+score.stat10.win+"\n"+
         "stat10 Wrong: "+score.stat10.lose+"\n"+
         "stat10 Percentage: "+stat10_p+"%"+"\n"+

         "Win Total: "+score.stat11.mWin+"\n"+
         "Lose Total: "+score.stat11.mLose+"\n"+
         "stat11 Total: "+score.stat11.total+"\n"+
         "stat11 Right: "+score.stat11.win+"\n"+
         "stat11 Wrong: "+score.stat11.lose+"\n"+
         "stat11 Percentage: "+stat11_p+"%"+"\n"+

         "Win Total: "+score.stat12.mWin+"\n"+
         "Lose Total: "+score.stat12.mLose+"\n"+
         "stat12 Total: "+score.stat12.total+"\n"+
         "stat12 Right: "+score.stat12.win+"\n"+
         "stat12 Wrong: "+score.stat12.lose+"\n"+
         "stat12 Percentage: "+stat12_p+"%"+"\n"+

         "Win Total: "+score.stat13.mWin+"\n"+
         "Lose Total: "+score.stat13.mLose+"\n"+
         "stat13 Total: "+score.stat13.total+"\n"+
         "stat13 Right: "+score.stat13.win+"\n"+
         "stat13 Wrong: "+score.stat13.lose+"\n"+
         "stat13 Percentage: "+stat13_p+"%"+"\n"
         )

      // Write results to f_results
      /*fs.appendFileSync("./f_results.js", "["+"\n")
      fs.appendFileSync("./f_results.js", JSON.stringify(f1, null, "\t"))
      fs.appendFileSync("./f_results.js", ","+"\n")
      fs.appendFileSync("./f_results.js", JSON.stringify(f2, null, "\t"))
      fs.appendFileSync("./f_results.js", "]"+","+"\n")*/
   }
}


function dateToDay(date) {
  var d = today.getTime() - Date.parse(date);
  var minutes = 1000 * 60;
  var minute = d / minutes
  var hour = minute / 60
  var day = hour / 24
  var year = day / 365
  return day;
}

function dateToYear(date) {
  var d = today.getTime() - Date.parse(date);
  var minutes = 1000 * 60;
  var minute = d / minutes
  var hour = minute / 60
  var day = hour / 24
  var year = day / 365
  return year;
}