
var fm_list = require('./helpers/fm_list.js')
var sherdogData = require('./helpers/sherdogdata.js')
var fights = require('./helpers/fights.js')
var fm_api = require('./api/fm_api.js')
var manual_test = require('./api/manual_test.js')
var bfo = require('./bfoUniqueFights.js')

const async = require('async')
const fs = require('fs')
var today = new Date()
// Have:
// f1, f2, odds, date, outcome
// 
// Want:
// relevant sherdog data based on date

function calculatePrediction(fighter1, fighter2, outcome, odds1, odds2, dateTime) {
   f1 = getFighterStat(fighter1, dateTime)
   f2 = getFighterStat(fighter2, dateTime)




console.log(f1)
}

// function to get fighter stats into an object
function getFighterStat(fName, dateTime) {
   var date = dateToDay(dateTime)
   var year = dateToYear(dateTime)
   var relevantBucket = []
   var fighter = {
      name: "",
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

   fighter.name = fName
   
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