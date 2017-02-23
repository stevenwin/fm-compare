var fighter_url = require('./helpers/sherdogdata.js')
var fm_list = require('./helpers/fm_list.js')
var indivFightStat = require('./indivFightStat.js')
var sherdogdata = require('./helpers/sherdogdata')
var fights = require('./fights.js')

var today = new Date()

/*console.log(fighter_url.length)
console.log(fm_list.length)*/

var fighter1_bucket = []
var fighter2_bucket = []
var score = {
      win: 0,
      lose: 0,
      total: 0
   }

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
   older_32: false

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
   older_32: false

}

console.log(dateToDay("11:51:06 08/05/2013"))


compareFighters("Frank Mir", "Anderson Silva", "11:51:06 08/05/2013")

setTimeout(function() {
   console.log(
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
      "b2b loss?"+fighter1.b2b_loss+"\n"+"\n"+"\n"+

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
      "b2b loss?"+fighter2.b2b_loss+"\n")
}, 5000)

function compareFighters(fighterA, fighterB, dateTime) {

   fighter1.name = fighterA
   fighter2.name = fighterB
   var date = dateToDay(dateTime)
   var year = dateToYear(dateTime)
   

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

               // calculate b2b loss
               for (var z=0;z<fighter1_bucket.length;z++) {
                  for (var y=1;y<fighter1_bucket.length;y++) {
                     if (fighter1_bucket[z].result === "loss" && fighter1_bucket[y].result == "loss") {
                     fighter1.b2b_loss = true
                  }
                  }
               }

            }
            // calculate age
            fighter1.age = dateToYear(sherdogdata[i].birthday) - dateToYear(fighter1_bucket[0].date)
            if (dateToYear(sherdogdata[i].birthday) - dateToYear(fighter1_bucket[0].date) > 32) {
               fighter1.older_32 = true
            }

            // calculate ring rust
            //console.log(fighter1_bucket[0].date)
            if (dateToDay(fighter1_bucket[0].date) - date >= 210) {
                  fighter1.ring_rust = true
               }
            

            // calculate last fight win
            //for (var p=0;p<fighter1_bucket.length;p++) {
            //console.log(fighter1_bucket[p].date)
            //}
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

               // calculate b2b loss
               for (var z=0;z<fighter2_bucket.length;z++) {
                  for (var y=1;y<fighter2_bucket.length;y++) {
                     if (fighter2_bucket[z].result === "loss" && fighter2_bucket[y].result == "loss") {
                     fighter2.b2b_loss = true
                  }
                  }
               }

            }
            // calculate age
            fighter2.age = dateToYear(sherdogdata[i].birthday) - dateToYear(fighter2_bucket[0].date)
            if (dateToYear(sherdogdata[i].birthday) - dateToYear(fighter2_bucket[0].date) > 32) {
               fighter2.older_32 = true
            }

            // calculate ring rust
            if (dateToDay(fighter2_bucket[0].date) - date >= 210) {
                  fighter2.ring_rust = true
               }
            
            // calculate last fight win
            if (fighter2_bucket[0].result === "win") {
               fighter2.last_fight_win = true
            }
         }
      }
   }
}


function calcWinner(f1, f2, callback) {
   var f1_points = 0
   var f2_points = 0

   // age compare
   if (f1.older_32 === true) {
      f2_points += 1
   }
   else if (f2.older_32 === true) {
      f1_points += 1
   }

   // 

   callback(f1_points, f2_points)
}


function win_ratio(p1, p2) {
   if (p1>p2)


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