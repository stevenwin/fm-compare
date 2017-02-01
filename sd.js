const sherdog = require('sherdog');
const request = require('request');
const async = require('async');
var fighter_url = require('./sherdogurl.js')
var fm_list = require('./fm_list.js')

var fighters = []
var fights = []
var url_fm = 'http://liveapi.fightmetric.com/V1/802/Fnt.json';
var url_fmLinkSource 
var url_fighterA = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var url_fighterB = "";

for (var i=0;i<3;i++) {
  getEvent(fm_list[i].fm_url, getFightData)
}

setTimeout(function() {
  for (var i=0;i<2;i++) {
    getSherdog(fights[i].fighter1_url, getFighter1Data(data, combineFighters))
  }
}, 10000)

// fightmetric main stats
function getEvent(urlfm, callback) {
    request({
      url: /*fm_list[i].fm_url*/urlfm,
      json: true
    }, function getFights(error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(null, body);
      }
    })
}

// callback function to push to fights
function getFightData(err, data) {
  if (err) {
    console.log(err);
  }

  for (var i=0;i<data.FMLiveFeed.Fights.length;i++) {
    var fight = {
    date: data.FMLiveFeed.Date,
    fighter1_name: "",
    fighter1_url: "",
    fighter1_outcome: "",
    fighter2_name: "",
    fighter2_url: ""
    }

    fight.fighter2_name = data.FMLiveFeed.Fights[i].Fighters[1].FullName
    fight.fighter2_url = findSherdogURL(data.FMLiveFeed.Fights[i].Fighters[1].FullName)
    fight.fighter1_name = data.FMLiveFeed.Fights[i].Fighters[0].FullName
    fight.fighter1_outcome = data.FMLiveFeed.Fights[i].Fighters[0].Outcome
    fight.fighter1_url = findSherdogURL(data.FMLiveFeed.Fights[i].Fighters[0].FullName)
    fights.push(fight);
  }
  //console.log(data.FMLiveFeed.Fights.length)
}

function getSherdog(url, callback) {
    sherdog.getFighter(url, function (data) {
      callback(data);
    })
}

function getFighter1Data(data) {
  
  var fighter_a = data
  var fighter1 = {
    a_name: "",
    a_points : 0,
    a_age : "",
    a_nationality : "",
    a_win_ko : "",
    a_win_dec : "",
    a_win_sub : "",
    a_win_total : "",
    a_win_dec_total : 0,
    a_lose_ko : "",
    a_lose_sub : "",
    a_lose_dec : "",
    a_lose_total : "",
    a_lastfight_date : "",
    a_lose_ko_total : 0
  }
  
  fighter1.a_name = fighter_a.name;
  fighter1.a_age = Number(fighter_a.age);
  fighter1.a_nationality = fighter_a.nationality;
  fighter1.a_win_ko = fighter_a.wins.knockouts;
  fighter1.a_win_dec = fighter_a.wins.decisions;
  fighter1.a_win_sub = fighter_a.wins.submissions;
  fighter1.a_win_total = fighter_a.wins.total;
  fighter1.a_lose_ko = fighter_a.losses.knockouts;
  fighter1.a_lose_sub = fighter_a.losses.submissions;
  fighter1.a_lose_dec = fighter_a.losses.decisions;
  fighter1.a_lose_total = fighter_a.losses.total;
  fighter1.a_lastfight_date = dateToDay(fighter_a.fights.date);


}

function getFighter2Data(data, callback) {

}

function combineFighters(data) {
  console.log(fighter1);
}

function findSherdogURL (fighterName) {
   for (var i=0;i<fighter_url.length;i++) {
      for (var name in fighter_url[i]) {
         if (fighter_url[i][name] == fighterName) {
            return "http://www.sherdog.com"+fighter_url[i].url;
            //console.log('fighter_url.'+name, '=', fighter_url[i][name]);
         }
      }
   }
}







































































function lessSubLoss(fighter_a, fighter_b, points) {
  if (fighter_a.losses.submissions < fighter_b.losses.submissions) {
    console.log(fighter_a.name+" has fewer sub losses than "+fighter_b.name+". A add "+points);
    a_points += points;
  }
  else if (fighter_b.losses.submissions < fighter_a.losses.submissions) {
    console.log(fighter_b.name+" has fewer sub losses than "+fighter_a.name+". B add "+points);
    b_points += points;
  }
  else {
    console.log("No sub loss advantage");
  }
}

function youngerThanThree(fighter_a, fighter_b, points) {
  if (a_age - b_age > 3) {
    console.log(fighter_b.name+" is at least 3 years younger than "+fighter_a.name+". B adds "+points);
    b_points += points;
  }
  else if (b_age - a_age >3) {
    console.log(fighter_a.name+" is at least 3 years younger than "+fighter_b.name+". A adds "+points);
    a_points += points;
  }
  else {
    console.log("No age advantage");
  }
}

function b4b_loss(fighter_a, fighter_b, points) {
}

function sub_loss(fighter_a, fighter_b, points) {
  if (fighter_a.losses.submissions > 4 && fighter_b.losses.submissions < 5) {
    console.log(fighter_a.name+" has a bunch of sub losses. B add"+points);
    b_points += points;
  }
  else if (fighter_b.losses.submissions > 4 && fighter_a.losses.submissions < 5) {
    console.log(fighter_b.name+" has a bunch of sub losses. A add"+points);
    a_points += points;
  }
  else {
    console.log("They both got the jits.");
  }
}

function win_loss_compare(fighter_a, fighter_b, points) {
  if (fighter_a.wins.total > 14 && fighter_b.losses.total/fighter_a.losses.total >=  2) {
    console.log(fighter_a.name+" has lots of wins and fewer losses. A add"+points);
    a_points += points;
  }
  else if (fighter_b.wins.total > 14 && fighter_a.losses.total/fighter_b.losses.total >=  2) {
    console.log(fighter_b.name+" has lots of wins and fewer losses. B add"+points);
    b_points += points;
  }
  else {
    console.log("No win loss compare advantage");
  }
}

function win_loss_compare2(fighter_a, fighter_b, points) {
  if (fighter_a.wins.total /fighter_b.wins.total === 2 && fighter_b.fight[0].result === 'loss') {
    console.log(fighter_a.name+" has lots of wins. A add"+points);
    a_points += points;
  }
  else if (fighter_b.wins.total /fighter_a.wins.total === 2 && fighter_a.fight[0].result === 'loss') {
    console.log(fighter_b.name+" has lots of wins. B add"+points);
    b_points += points;
  }
  else {
    console.log("No win loss compare numba 2 advantage");
  }
}

function zero_tko_win(fighter_a, fighter_b, points) {
  if (fighter_a.wins.knockouts === 0 && fighter_b.wins.knockouts > 0) {
    console.log(fighter_a.name+" has no KOs. B add"+points);
    b_points += points;
  }
  else if (fighter_b.wins.knockouts === 0 && fighter_a.wins.knockouts > 0) {
    console.log(fighter_b.name+" has no KOs. A add"+points);
    a_points += points;
  }
  else {
    console.log("Both fighters are not pillowfisted.");
  }
}

function dec_win(fighter_a, fighter_b, points) {
  if (fighter_a.wins.decisions/fighter_b.wins.decisions >= 3) {
    console.log(fighter_a.name+" has 3x more dec wins. A add "+points);
    a_points += points
  }
  else if(fighter_b.wins.decisions/fighter_a.wins.decisions >= 3) {
    console.log(fighter_b.name+" has 3x more dec wins. B add "+points);
    b_points += points
  } else {
    "These two aren't decisionators."
  }
}

function b2b_loss(fighter_a, fighter_b, points) {
  if (fighter_a.fights[0].result === 'loss' && fighter_a.fights[1].result === 'loss' && (fighter_b.fights[0].result === 'win' || fighter_b.fights[1].result === 'win')) {
    console.log(fighter_a.name+" has b2b losses. B add "+points);
    b_points += points;
  }
  else if (fighter_b.fights[0].result === 'loss' && fighter_b.fights[1].result === 'loss' && (fighter_a.fights[0].result === 'win' || fighter_a.fights[1].result === 'win')) {
    console.log(fighter_b.name+" has b2b losses. A add "+points);
    a_points += points;
  }
  else {
    console.log("Nobody has recent b2b losses.")
  }
}

// Compare KO losses
function ko_loss(fighter_a, fighter_b, points) {
  for (i=0;i<fighter_b.fights.length;i++) {
    if (fighter_b.fights[i].result === 'loss' && fighter_b.fights[i].method.match(/\bKO\b/)) {
      b_lose_ko_total += points;
    }
  }

  for (i=0;i<fighter_a.fights.length;i++) {
    if (fighter_a.fights[i].result === 'loss' && fighter_a.fights[i].method.match(/\bKO\b/)) {
      a_lose_ko_total += points;
    }
  }

  if ( a_lose_ko_total > 1 && b_lose_ko_total < 2) {
    console.log(fighter_a.name+" lost "+a_lose_ko_total+" KOs. B add "+points);
    b_points += points;
  }
  else if ( b_lose_ko_total > 1 && a_lose_ko_total < 2) {
    console.log(fighter_b.name+" lost "+b_lose_ko_total+" KOs. A add "+points);
    a_points += points;
  } else {
    console.log("Both fighters have hard chins");
  }
}

// var stat1= 'FIGHTERS OLDER THAN 32 YEARS OF AGE WILL MORE LIKELY LOSE  62%'
function compare_age(a_age, b_age, points) {
  if (a_age > 32 && b_age < 32) { // b wins
    console.log(fighter_a.name+" is older than 32. B add "+points);
    b_points += points
  } else if (b_age > 32 && a_age < 32) { // a wins
    console.log(fighter_b.name+" is older than 32. A add "+points);
    a_points += points
  } else {
    console.log("Both fighters are younger than 32.");
  }
}

// var stat3= 'FIGHTERS FROM JAPAN WILL MORE LIKELY LOSE  71%'
function nationality(a_nationality, b_nationality, points) {
  if (a_nationality === "Japan" && b_nationality !== "Japan") {
    console.log(fighter_a.name+ " is Japanese and will lose 71% of the time. B add "+points);
    b_points += points;
  } else if (a_nationality !== "Japan" && b_nationality === "Japan") {
    console.log(fighter_b.name+ " is Japanese and will lose 71% of the time. A add "+points);
    a_points += points;
  } else {
    console.log("Neither fighter has the Japanese Curse");
  }
}

// 6 TKOs fighting opponents older than 32 years win 78%
function TKO_age(a_win_ko, a_age, b_win_ko, b_age, points) {
  if (a_win_ko > 6 && a_age < b_age && b_age > 32) {
    console.log(fighter_a.name+" has more then 6 TKOs and his opponent is older than 32. A add "+points)
    a_points += points;
  } else if (b_win_ko > 6 && b_age < 32 && a_age > 32) {
    console.log(fighter_b.name+" has more then 6 TKOs and his opponent is older than 32. B add "+points)
    b_points += points;
  } else {
    console.log("Neither fighter has a TKO/Age advantage")
  }
}

function six_losses(a_lose_total, b_lose_total, points) {
  if (a_lose_total > 5 && b_lose_total < 6) {
    console.log(fighter_a.name+ " has more than 6 losses while his opponent has fewer than 6. B add "+points)
    b_points += points;
  } else if (a_lose_total < 6 && b_lose_total > 5) {
    console.log(fighter_b.name+ " has more than 6 losses while his opponent has fewer than 6. A add "+points)
    a_points += points;
  } else {
    console.log("Neither fighters have lossed a bunch")
  }
}


function ringrust(fighter_a, fighter_b, points) {
  if ((dateToDay(todayDate) - dateToDay(fighter_a.fights[0].date) > 210 && (dateToDay(todayDate) - dateToDay(fighter_b.fights[0].date) < 210))) {
    console.log(fighter_a.name+" hasn't fought in over 210 days. B add "+points);
    b_points += points;
  }
  else if ((dateToDay(todayDate) - dateToDay(fighter_b.fights[0].date) > 210 && (dateToDay(todayDate) - dateToDay(fighter_a.fights[0].date) < 210))) {
    console.log(fighter_b.name+" hasn't fought in over 210 days. A add "+points);
    a_points += points;
  }
  else {
    console.log("Both fighters have fought recently.  No ring rust advantage");
  }
}


// Date string parser into int(date)
function dateToDay(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return day;
}