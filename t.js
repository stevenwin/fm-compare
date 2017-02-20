var fighter_url = require('./helpers/sherdogdata.js')
var fm_list = require('./helpers/fm_list.js')
var indivFightStat = require('./indivFightStat.js')
var sherdogdata = require('./helpers/sherdogdata')
var fights = require('./fights.js')

/*console.log(fighter_url.length)
console.log(fm_list.length)*/

var name = "Anderson Silva"
var fighter1 = {
   name: "",
   wins: {
      "total": 0,
      "knockouts": 0,
      "submissions": 0,
      "decisions": 0,
      "others": 0
   },
   losses: {
      "total": 0,
      "knockouts": 0,
      "submissions": 0,
      "decisions": 0,
      "others": 0
   },
   last_fight: false,
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
   last_fight: false,
}

function compareFighter(i, j) {
   fighter1.name = indivFightStat[i].fighter1_name

   for (var x=0;x<sherdogdata[j].fights.length;x++) {
      if (dateToDay(sherdogdata[j].fights[x].date) < dayToDay(indivFightStat[i].date) && sherdogdata[j].fights[x].result = "loss") {
         if (sherdogdata[j].fights[x].method.match(/\bKO\b/) || sherdogdata[j].fights[x].method.match(/\bTKO\b/)) {
            fighter1.losses.knockouts += 1
         }
         else if (sherdogdata[j].fights[x].method.match(/\bSubmission\b/)) {
            fighter1.losses.submissions += 1
         }
         else if (sherdogdata[j].fights[x].method.match(/\bDecision\b/)) {
            fighter1.losses.decisions += 1
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




sherdogdata[i].name
sherdogdata[i].losses.submissions
sherdogdata[i].age




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