const mma = require("mma");
const request = require("request");

// Declare Variables
var fighter_a;
var fighter_b;
var a_age;
var a_nationality;
var a_win_ko;
var a_win_dec;
var a_win_sub;
var a_win_total;
var a_lose_ko;
var a_lose_sub;
var a_lose_dec;
var a_lose_total;
var a_lastfight_date;
var a_lose_ko_total = 0;

var b_age;
var b_nationality;
var b_win_ko;
var b_win_dec;
var b_win_sub;
var b_win_total;
var b_lose_ko;
var b_lose_sub;
var b_lose_dec;
var b_lose_total;
var b_lastfight_date;
var b_lose_ko_total = 0;

//var url = "http://www.sherdog.com/fighter/Matt-Riddle-34072";
var fighter_a = "Alistair Overeem";
var fighter_b = "Chuck Liddell";

// Grab Sherdog stats for two fighters based on their URLs
mma.fighter(fighter_a, data_a);
mma.fighter(fighter_b, data_b);

function data_a(data) {
  fighter_a = data;
  a_age = Number(fighter_a.age);
  a_nationality = fighter_a.nationality;
  a_win_ko = fighter_a.wins.knockouts;
  a_win_dec = fighter_a.wins.decisions;
  a_win_sub = fighter_a.wins.submissions;
  a_win_total = fighter_a.wins.total;
  a_lose_ko = fighter_a.losses.knockouts;
  a_lose_sub = fighter_a.losses.submissions;
  a_lose_dec = fighter_a.losses.decisions;
  a_lose_total = fighter_a.losses.total;
  a_lastfight_date = dateToDay(fighter_a.fights.date);
}

function data_b(data) {
  fighter_b = data;
  b_age = Number(fighter_b.age);
  b_nationality = fighter_b.nationality;
  b_win_ko = fighter_b.wins.knockouts;
  b_win_dec = fighter_b.wins.decisions;
  b_win_sub = fighter_b.wins.submissions;
  b_win_total = fighter_b.wins.total;
  b_lose_ko = fighter_b.losses.knockouts;
  b_lose_sub = fighter_b.losses.submissions;
  b_lose_dec = fighter_b.losses.decisions;
  b_lose_total = fighter_b.losses.total;
  b_lastfight_date = dateToDay(fighter_b.fights.date);
}

// Runs the App
setTimeout(function () {
  compare_age(a_age, b_age);
  nationality(a_nationality, b_nationality);
  TKO_age(a_win_ko, a_age, b_win_ko, b_age);
  six_losses(a_lose_total, b_lose_total);
  ko_loss(fighter_a, fighter_b);
  //console.log(b_lose_ko_total);
  //console.log(heightz);
}, 5000);

// Log fighter_a
function log_fightera(fighter_a) {
	console.log(fighter_a);
}


// Compare KO losses
function ko_loss(fighter_a, fighter_b) {
	for (i=0;i<fighter_b.fights.length;i++) {
		if (fighter_b.fights[i].result === 'loss' && fighter_b.fights[i].method.match(/\bKO\b/)) {
			b_lose_ko_total += 1;
		}
	}

	for (i=0;i<fighter_a.fights.length;i++) {
		if (fighter_a.fights[i].result === 'loss' && fighter_a.fights[i].method.match(/\bKO\b/)) {
			a_lose_ko_total += 1;
		}
	}

	if ( a_lose_ko_total > 1 && b_lose_ko_total < 2) {
		console.log(fighter_a.name+" lost "+a_lose_ko_total+" KOs -- loses 64% of the time");
	}
	else if ( b_lose_ko_total > 1 && a_lose_ko_total < 2) {
		console.log(fighter_b.name+" lost "+b_lose_ko_total+" KOs -- loses 64% of the time");
	} else {
		console.log("Both fighters have 2 or more KOs -- no advantage");
	}
}

// Compare Age of Fighters -- 32 and over loses 62% of the time
function compare_age(a_age, b_age) {
  if (a_age > 32 && b_age < 32) {
    console.log(fighter_a.name+" is older than 32 -- Will lose 62% of the time");
  } else if (a_age < 32 && b_age > 32) {
    console.log(fighter_b.name+" is older than 32 -- Will lose 62% of the time");
  } else {
    console.log("Both fighters are younger than 32.");
  }
}

// Compare nationality -- Japanese fighters lose 71% of the time
function nationality(a_nationality, b_nationality) {
  if (a_nationality === "Japan" && b_nationality !== "Japan") {
    console.log(fighter_a.name+ " is Japanese and will lose 71% of the time");
  } else if (a_nationality !== "Japan" && b_nationality === "Japan") {
    console.log(fighter_b.name+ " is Japanese and will lose 71% of the time");
  } else {
    console.log("Both fighters are Japanese and hold no advantageous");
  }
}

// 6 TKOs fighting opponents older than 32 years win 78%
function TKO_age(a_win_ko, a_age, b_win_ko, b_age) {
  if (a_win_ko > 6 && a_age < 32 && b_age > 32) {
    console.log(fighter_a.name+" has more then 6 TKOs and his opponent is older than 32 -- "+ fighter_a.name+" wins 78% of the time")
  } else if (b_win_ko > 6 && b_age < 32 && a_age > 32) {
    console.log(fighter_b.name+" has more then 6 TKOs and his opponent is older than 32 -- "+ fighter_b.name+" wins 78% of the time")
  } else {
    console.log("Neither fighter has a TKO/Age advantage")
  }
}

function six_losses(a_lose_total, b_lose_total) {
  if (a_lose_total > 5 && b_lose_total < 6) {
    console.log(fighter_a.name+ " has more than 6 losses while his opponent has fewer than 6 -- "+ fighter_a.name+ " loses 60% of the time")
  } else if (a_lose_total < 6 && b_lose_total > 5) {
    console.log(fighter_b.name+ " has more than 6 losses while his opponent has fewer than 6 -- "+ fighter_b.name+ " loses 60% of the time")
  } else {
    console.log("Both fighters have less than 6 losses and holds no advantage over the other.")
  }
}

// Date string parser into int(date)
var dateToDay = function(date) {
	var d = Date.parse(date);
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;

	var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return day;
}








//if (myString.match(/regex/)) { /*Success!*/ }


/*Fightmetric JSON
Fightmetric JSON -- provides:
fighter name -- FMLiveFeed.Fights[i].Fighters[i].FullName
Fighter height --FMLiveFeed.Fights[i].Fighters[i].Height
Fighter Stance -- FMLiveFeed.Fights[i].Fighters[i].Stance
Fight Winner - FMLiveFeed.Fights[i].Fighters[i].Outcome
Fight win method -- FMLiveFeed.Fights[i].Fighters[i].Outcome
var url_fm = "http://liveapi.fightmetric.com/V1/802/Fnt.json"

http://ufc-data-api.ufc.com/api/v3/us/events
UFC events API -- provides:
event id
fightmetric json
var url_ufc = "http://ufc-data-api.ufc.com/api/v3/us/events"

Http://ufc-data-api.ufc.com/api/v3/us/events/602658/fights -- event id from ufc-data-api
UFC Individual fight stats -- provides:
fighter reach: fighter1reach
strike landed per min -- fighter1_slpm
var url_ufc_fightstats = "Http://ufc-data-api.ufc.com/api/v3/us/events/602658/fights"

// Fightmetric JSON request
/*request({
    url: url_fm,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        heightz = body.FMLiveFeed.Fights[0].Fighters[0].Height // Print the json response
    }
});*/