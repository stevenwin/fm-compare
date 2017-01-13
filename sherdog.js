var sherdog = require('sherdog');
var url = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var todayDate = 'Jan/09/2013'

var fighterA;
var fighterA_KO = 0;
var fighterA_wins = 0;
var fighterA_losses = 0;
var wait = "#";
var waitTime = 1;
var timeOut = 6;

sherdog.getFighter(url, getData);
function getData(data) {
	fighterA = data;
}

/***
		Main App
 ***/
setTimeout(function () {
	aKOwins();
	fighterA_stats();


	
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
		}
		else {
			fighterA_losses++;
		}
	}
	console.log(fighterA.name+" has \n"+fighterA_wins+" wins and\n"+fighterA_losses+" losses.");
}

function aKOwins() {
	for (i=0;i<fighterA.fights.length;i++) {
		if (fighterA.fights[i].result === 'win' && fighterA.fights[i].method.match(/\bKO\b/)) {
			fighterA_KO += 1;
		}
	}
	console.log(fighterA.name+" has "+fighterA_KO+" KO wins");
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