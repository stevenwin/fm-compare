var fighter_url = require('./helpers/sherdogdata.js')
var fm_list = require('./helpers/fm_list.js')
var indivFightStat = require('./indivFightStat.js')
var sherdogdata = require('./helpers/sherdogdata')
var fights = require('./fights.js')

var today = new Date()

/*console.log(fighter_url.length)
console.log(fm_list.length)*/

var relevant_fight_bucket = []

var fighter1 = {
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

}

var fighter2 = {
    wins: {
      "total": "",
      "knockouts": "",
      "submissions": "",
      "decisions": "",
      "others": ""
   },
   losses: {
      "total": "",
      "knockouts": "",
      "submissions": "",
      "decisions": "",
      "others": ""
   },
   last_fight_win: false,
}

console.log(dateToDay("11:51:06 08/05/2013"))


compareFighters("Frank Mir", "Anderson Silva", "11:51:06 08/05/2013")

setTimeout(function() {
   console.log(
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
      "b2b loss?"+fighter1.b2b_loss+"\n")
}, 5000)

function compareFighters(fighterA, fighterB, dateTime) {

   fighter1.name = fighterA
   fighter2.name = fighterB
   var date = dateToDay(dateTime)
   


   // find fighter1 in sherdog data list
   for (var i=0;i<sherdogdata.length;i++) {
      for (var k in sherdogdata[i]) {
         if (sherdogdata[i][k] === fighterA) {
            // calculate record of fighter 1 based on data snapshot for relevant dates
            for (var x=0;x<sherdogdata[i].fights.length;x++) {
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

               // calculate b2b loss
               for (z=1;z<sherdogdata[i].fights.length;z++) {
                  if (dateToDay(sherdogdata[i].fights[x].date) > date && sherdogdata[i].fights[x].result === "loss" && sherdogdata[i].fights[z].result === "loss") {
                     fighter1.b2b_loss = true
                  }
               }

               // add to fight bucket
               if (dateToDay(sherdogdata[i].fights[x].date) > date) {
                  var bucket = {
                     date: "",
                     result: ""
                  }
                  bucket.date = sherdogdata[i].fights[x].date
                  bucket.result = sherdogdata[i].fights[x].result
                  relevant_fight_bucket.push(bucket)
               }

            }
            // calculate ring rust
            //console.log(relevant_fight_bucket[0].date)
            if (dateToDay(relevant_fight_bucket[0].date) - date >= 210) {
                  fighter1.ring_rust = true
               }
            

            // calculate last fight win
            //for (var p=0;p<relevant_fight_bucket.length;p++) {
            //console.log(relevant_fight_bucket[p].date)
            //}
            if (relevant_fight_bucket[0].result === "win") {
               fighter1.last_fight_win = true
            }
         }
      }
   }

}





   /*for (var i=0;i<sherdogdata.length;i++) {
      for (var k in sherdogdata[i]) {
         if (sherdogdata[i][k] === fighter1) {
            console.log(sherdogdata[i].nickname)
            console.log(fighter1)
         }
      }
   }*/







function dateToDay(date) {
  var d = today.getTime() - Date.parse(date);
  var minutes = 1000 * 60;
  var minute = d / minutes
  var hour = minute / 60
  var day = hour / 24
  var year = day / 365
  return day;
}







function compareFighters2(fighters) {
   for (var c=0;c<fighters.length;c++) {
      var fighter1_points = 0
      var fighter2_points = 0
      // subLossCompare 57% -- 1.75
      if (fighters[c].fighter1_lose_sub - fighters[c].fighter2_lose_sub < 0) {
         fighter1_points += 1
         console.log('1.75 Sub loss add 1 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter1_lose_sub - fighters[c].fighter2_lose_sub > 0) {
         fighter2_points += 1
         console.log('1.75 Sub loss add 1 to '+fighters[c].fighter2_name)
      }

      // youngerThanThree 58% -- 1.72
      if (fighters[c].fighter1_age - fighters[c].fighter2_age > 3) {
         fighter2_points += 1
         console.log('1.72 youngerThanThree add 1 to '+fighters[c].fighter2_name)
      }
      else if (fighters[c].fighter2_age - fighters[c].fighter1_age > 3) {
         fighter1_points+= 1
         console.log('1.72 youngerThanThree 1 to '+fighters[c].fighter1_name)
      }

      // older than 32 62% -- 1.61
      if (fighters[c].fighter1_age >= 32 && fighters[c].fighter2_age < 32) {
        //fighter2_points += 1
        console.log('FYI 1.61 older than 32')
      }
      else if (fighters[c].fighter2_age >= 32 && fighters[c].fighter1_age <32) {
        //fighter1_points += 1
        console.log('FYI 1.61 older than 32')
      }

      // 15 more wins and half as many losses 78% -- 1.28
      if (fighters[c].fighter1_win_total > 14 && fighters[c].fighter2_lose_total/fighters[c].fighter1_lose_total >= 2) {
         fighter1_points += 2
         console.log('1.28 15 Wins 50% Losses add 2 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter2_win_total > 14 && fighters[c].fighter1_lose_total/fighters[c].fighter2_lose_total >= 2) {
         fighter2_points += 2
         console.log('1.28 15 Wins 50% Losses add 2 to '+fighters[c].fighter2_name)
      }

      // Twice as many wins and opponents lost last fight 68% -- 1.47
      if (fighters[c].fighter1_win_total/fighters[c].fighter2_win_total >= 2 && fighters[c].fighter2_lastfight == "loss") {
         fighter1_points += 1
         console.log('1.47 2x Wins OpponentLoseLast add 1 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter2_win_total/fighters[c].fighter1_win_total >= 2 && fighters[c].fighter1_lastfight == "loss") {
         fighter2_points += 1
         console.log('1.47 2x Wins OpponentLoseLast add 1 to '+fighters[c].fighter2_name)
      }

      // 3x Decision wins 60% 
      if (fighters[c].fighter1_win_dec/fighters[c].fighter2_win_dec >=3) {
         fighter1_points += 1
         console.log('1.66 3x Dec wins add 1 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter2_win_dec/fighters[c].fighter1_win_dec >=3) {
         fighter2_points += 1
         console.log('1.66 3x Dec wins add 1 to '+fighters[c].fighter2_name)
      }
      
      console.log(fighters[c].fighter1_name.green+": ".green+fighter1_points+"  ".green+fighters[c].fighter2_name.green+": ".green+fighter2_points)
   }
}