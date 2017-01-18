const sherdog = require("sherdog");
const request = require("request");
//const sherdog_links = require('./sherdog.json');

// Fightmetric JSON request
/*request({
    url: url_fm,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        heightz = body.FMLiveFeed.Fights[0].Fighters[0].Height // Print the json response
    }
});*/

// Declare Variables
var todayDate = 'Jan/09/2017'
var fighter_a;
var a_points = 0;
var a_age;
var a_nationality;
var a_win_ko;
var a_win_dec;
var a_win_sub;
var a_win_total;
var a_win_dec_total = 0;
var a_lose_ko;
var a_lose_sub;
var a_lose_dec;
var a_lose_total;
var a_lastfight_date;
var a_lose_ko_total = 0;

var fighterObject = {
  fight: [{
    fighter_name: "",
    fighter_points: "",
    fighter_predict: "",
    winner: "",
    pred_perc: ""
  }]
}

var fighter_b;
var b_points = 0;
var b_age;
var b_nationality;
var b_win_ko;
var b_win_dec;
var b_win_sub;
var b_win_total;
var b_win_dec_total = 0;
var b_lose_ko;
var b_lose_sub;
var b_lose_dec;
var b_lose_total;
var b_lastfight_date;
var b_lose_ko_total = 0;

var fight_predict;
var fight_winner;

var stat1= 'FIGHTERS OLDER THAN 32 YEARS OF AGE WILL MORE LIKELY LOSE  62%'  //yes
var stat2= 'FIGHTERS WITH MORE THAN 6 TKO VICTORIES FIGHTING OPPONENTS OLDER THAN 32 YEARS OF AGE WILL MORE LIKELY WIN  78%' //yes
var stat3= 'FIGHTERS FROM JAPAN WILL MORE LIKELY LOSE  71%' //yes
var stat4= 'FIGHTERS WHO HAVE LOST 2 OR MORE KOS WILL MORE LIKELY LOSE  64%' //yes
var stat5= 'FIGHTERS WITH 3X OR MORE DECISION WINS AND ARE GREATER THAN 3% TALLER THAN THEIR OPPONENTS WILL MORE LIKELY WIN  84%' //no
var stat6= 'FIGHTERS WHO HAVE WON 3X OR MORE DECISIONS THAN THEIR OPPONENT WILL MORE LIKELY WIN  60%' //yes
var stat7= 'FIGHTERS WITH NO WRESTLING BACKGROUND VS FIGHTERS WHO DO HAVE ONE MORE LIKELY LOSE  64%' //no
var stat8= 'FIGHTERS FIGHTING OPPONENTS WITH 3X OR LESS DECISION WINS AND ARE ON A 6 FIGHT (OR BETTER) WINNING STREAK MORE LIKELY WIN  77%' //no
var stat9= 'FIGHTERS YOUNGER THAN THEIR OPPONENTS BY 3 OR MORE YEARS IN AGE WILL MORE LIKELY WIN  58%' //yes
var stat10= 'FIGHTERS WHO HAVEN’T FOUGHT IN MORE THAN 210 DAYS WILL MORE LIKELY LOSE  59%' //yes
var stat11= 'FIGHTERS TALLER THAN THEIR OPPONENTS BY 3% WILL MORE LIKELY WIN  58%' //no
var stat12= 'FIGHTERS WHO HAVE LOST LESS BY SUBMISSION THAN THEIR OPPONENTS WILL MORE LIKELY WIN  57%'
var stat13= 'FIGHTERS WHO HAVE LOST 6 OR MORE FIGHTS WILL MORE LIKELY LOSE  60%'
var stat14= 'FIGHTERS WHO HAVE 18 OR MORE WINS AND NEVER HAD A 2 FIGHT LOSING STREAK MORE LIKELY WIN  63%'
var stat17= 'FIGHTERS FIGHTING OPPONENTS OUT OF GREG JACKSON’S CAMP WILL MORE LIKELY LOSE  60%'
var stat18= 'FIGHTERS WITH 15 OR MORE WINS THAT HAVE 50% LESS LOSSES THAN THEIR OPPONENTS WILL MORE LIKELY WIN  78%'
var stat19= 'FIGHTERS FIGHTING AMERICAN OPPONENTS WILL MORE LIKELY WIN  62%'
var stat20= 'FIGHTERS WITH 2X MORE (OR BETTER) WINS THAN THEIR OPPONENTS AND THOSE OPPONENTS LOST THEIR LAST FIGHTS WILL MORE LIKELY WIN  68%'
var stat21= 'FIGHTERS WHO’VE LOST THEIR LAST 4 FIGHTS IN A ROW WILL MORE LIKELY LOSE  68%'
var stat22= 'FIGHTERS CURRENTLY ON A 5 FIGHT (OR BETTER) WINNING STREAK WILL MORE LIKELY WIN  61%'
var stat23= 'FIGHTERS WITH 3X OR MORE WINS THAN THEIR OPPONENTS WILL MORE LIKELY WIN  59%'
var stat24= 'FIGHTERS WHO HAVE LOST 7 OR MORE TIMES WILL MORE LIKELY LOSE  56%'
var stat25= 'FIGHTERS WITH NO JIU JITSU IN THEIR BACKGROUND VERSUS FIGHTERS WHO DO HAVE IT MORE LIKELY LOSE  59%'
var stat26= 'FIGHTERS WHO HAVE LOST BY SUBMISSION 5 OR MORE TIMES WILL MORE LIKELY LOSE  59%'
var stat27= 'FIGHTERS IN THE MIDDLEWEIGHT DIVISION WHO FOUGHT THEIR LAST FIGHT MORE RECENTLY WILL MORE LIKELY WIN  61%'
var stat28= 'FIGHTERS IN THE LIGHTWEIGHT DIVISION FIGHTING 6 FOOT TALL FIGHTERS (OR HIGHER) WILL MORE LIKELY WIN  60%'

function fight_predict(a_points, b_points) {
  if (a_points > b_points && a_points !== b_points) {
    fight_predict = fighter_a.name;
  }
  else if (a_points < b_points && a_points !== b_points){
    fight_predict = fighter_b.name;
  }
  else {
    fight_predict = "No Prediction"
  }
}

//var url = "http://www.sherdog.com/fighter/Matt-Riddle-34072";
var fighter_a = "http://www.sherdog.com/fighter/Khabib-Nurmagomedov-56035";
var fighter_b = "http://www.sherdog.com/fighter/Tony-Ferguson-31239";

// Grab Sherdog stats for two fighters based on their URLs
sherdog.getFighter(fighter_a, gotData_a);
sherdog.getFighter(fighter_b, gotData_b);

function gotData_a(data) {
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

function gotData_b(data) {
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
  compare_age(a_age, b_age, 2); // 62%, 277tf
  nationality(a_nationality, b_nationality, 1); // 71%, 51tf
  TKO_age(a_win_ko, a_age, b_win_ko, b_age, 1); // 78%, 60tf
  six_losses(a_lose_total, b_lose_total, 2);// 60%, 291tf
  ko_loss(fighter_a, fighter_b, 1); // 64%, 84tf
  dec_win(fighter_a, fighter_b, 2); // 60%, 235tf
  b2b_loss(fighter_a, fighter_b, 1); // 57%, 906tf
  zero_tko_win(fighter_a, fighter_b, 1); // 55%, 164tf
  win_loss_compare(fighter_a, fighter_b, 3); // 78%, 307tf
  win_loss_compare2(fighter_a, fighter_b, 3); // 68%, 1049tf
  sub_loss(fighter_a, fighter_b, 1); // 59%, 1982tf
  ringrust(fighter_a, fighter_b, 1); // 59%, 276tf
  youngerThanThree(fighter_a, fighter_b, 1); // 58%, 274tf
  lessSubLoss(fighter_a, fighter_b, 1); // 57%, 522tf
  console.log(fighter_a.name+":"+a_points+"  "+fighter_b.name+":"+b_points);
  
  fight_predict(a_points, b_points);
  console.log("Fight Prediction: "+fight_predict);

  //console.log(b_lose_ko_total);
  //console.log(heightz);
}, 12000);




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




