var sherdog = require('sherdog');
var urlA = "http://www.sherdog.com/fighter/Cody-Garbrandt-50381";
var urlB = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var todayDate = 'Jan/09/2013'

var fighterA;
var fighterA_KO_wins = 0;
var fighterA_TKO_wins = 0;
var fighterA_sub_wins = 0;
var fighterA_dec_wins = 0;
var fighterA_TKO_losses = 0;
var fighterA_KO_losses = 0;
var fighterA_sub_losses = 0;
var fighterA_dec_losses = 0;
var fighterA_wins = 0;
var fighterA_losses = 0;

var fighterB;
var fighterB_KO_wins = 0;
var fighterB_TKO_wins = 0;
var fighterB_sub_wins = 0;
var fighterB_dec_wins = 0;
var fighterB_TKO_losses = 0;
var fighterB_KO_losses = 0;
var fighterB_sub_losses = 0;
var fighterB_dec_losses = 0;
var fighterB_wins = 0;
var fighterB_losses = 0;

var wait = "#";
var waitTime = 1;
var timeOut = 6;

// Get FighterA Data from Sherdog
sherdog.getFighter(urlA, getData);
function getData(data) {
	fighterA = data;
}

// Get FighterB Data from Sherdog
/*sherdog.getFighter(urlB, getData);
function getData(data) {
	fighterB = data;
}*/

// Get FighterB Data from Sherdog

/***
		Main App
 ***/
setTimeout(function () {
	aKOwins();
	fighterA_stats(); //


	
},
	timeOut*1000);

/***
		Helper Functions
***/

function fighterA_stats() {
	for (i=0;i<fighterA.fights.length;i++) {
		if (dateToDay(fighterA.fights[i].date) > dateToDay(todayDate)) {
			console.log("Minus one win");
		}
		else if (fighterA.fights[i].result === 'win') {
			fighterA_wins++;
			if (fighterA.fights[i].method.match(/\bKO\b/)) {
				fighterA_KO_wins++;
			}
			else if (fighterA.fights[i].method.match(/\bDecision\b/)) {
				fighterA_dec_wins++;
			}
			else if (fighterA.fights[i].method.match(/\bTKO\b/)) {
				fighterA_TKO_wins++;
			}
			else if (fighterA.fights[i].method.match(/\bSubmission\b/)) {
				fighterA_sub_wins++;
			}
		}
		else if (fighterA.fights[i].result === 'loss') {
			fighterA_losses++;
		}
	}
	console.log(fighterA.name+" has \n"+fighterA_wins+" wins and\n"+fighterA_losses+" losses. KO:"+fighterA_KO_wins);
}

function aKOwins() {
	for (i=0;i<fighterA.fights.length;i++) {
		if (fighterA.fights[i].result === 'win' && fighterA.fights[i].method.match(/\bKO\b/)) {
			fighterA_KO_wins++;
		}
	}
	console.log(fighterA.name+" has "+fighterA_KO_wins+" KO wins");
}



/***
		Outro
***/

var waiting = setInterval(function() {
	console.log(wait)
	wait += "#";
}, waitTime*1000)

setTimeout(function() {
	clearInterval(waiting)
}, timeOut*1000);

// Date string parser into int(date) in years
var dateToDay = function(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return day;
}

// Date string parser into int(date) in days
var dateToYear = function(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return year;
}


var currentDate = 'Jan/30/2008'
var currentDate2 = 'Jan/27/2007'


//if diff between date of fight and date of record is negative, exclude.
//console.log(dateToDay(currentDate) - dateToDay(currentDate2));