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


compareFighters("Frank Mir", "Anderson Silva", "11:51:06 08/05/2013", calcWinner)

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

function compareFighters(fighterA, fighterB, dateTime, callback) {

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
            }
            // calculate b2b loss
            for (var z=0;z<fighter1_bucket.length;z++) {
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
            if (dateToDay(fighter1_bucket[0].date) - date >= 210) {
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
            for (var z=0;z<fighter2_bucket.length;z++) {
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

   callback(fighter1, fighter2)
}


function calcWinner(f1, f2) {
   var f1_points = 0
   var f2_points = 0

   // age compare
   if (f1.older_32 === true && f2.older_32 != true) {
      f2_points += 1
   }
   if (f2.older_32 === true && f1.older_32 != true) {
      f1_points += 1
   }

   // 6 tko & opponent > 32yo
   if (f1.older_32 === true && f2.wins.knockouts > 6) {
      f2_points += 1
   }
   if (f2.older_32 === true && f1.wins.knockouts >6) {
      f1_points += 1
   }

   // 2 or more KO loss
   if (f1.losses.knockouts >= 2 && f2.losses.knockouts < 2) {
      f2_points += 1
   }
   if (f2.losses.knockouts >= 2 && f1.losses.knockouts < 2) {
      f1_points += 1
   }

   // lost less subs
   if (f1.losses.submissions < f2.losses.submissions) {
      f1_points += 1
   }
   if (f2.losses.submissions < f1.losses.submissions) {
      f2_points += 1
   }

   // lost 6 or more
   if (f1.losses.total >= 6) {
      f2_points += 1
   }
   if (f2.losses.total >= 6) {
      f1_points += 1
   }

   // 18+ wins and no b2b loss
   if (f1.wins.total >= 18 && f1.b2b_loss === false) {
      f1_points += 1
   }
   if (f2.wins.total >= 18 && f2.b2b_loss === false) {
      f2_points += 1
   }

   // b2b loss
   if (f1.b2b_loss === true) {
      f2_points += 1
   }
   if (f2.b2b_loss === true) {
      f2_points += 1
   }

   // no tkos
   if (f1.wins.knockouts === 0) {
      f2_points += 1
   }
   if (f2.wins.knockouts === 0) {
      f1_points += 1
   }

   // 
   console.log(
      "f1: "+f1_points+"\n"+
      "f2: "+f2_points+"\n"
      )
}


/*function win_ratio(p1, p2) {
   if (p1>p2)


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

function dateToYear(date) {
  var d = today.getTime() - Date.parse(date);
  var minutes = 1000 * 60;
  var minute = d / minutes
  var hour = minute / 60
  var day = hour / 24
  var year = day / 365
  return year;
}