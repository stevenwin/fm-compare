/*// Date string parser into int(date) in years
function dateToDay(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return day;
}

// Date string parser into int(date) in days
function dateToYear(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return year;
}

date1 = '2016-12-30';
date2 = 'Jan/09/2013';

console.log(dateToYear(date1)-dateToYear(date2));*/




/*fm_stats = [{
  "FMLiveFeed": {
    "EventID": "802",
    "Timestamp": "2016/12/30 22:09:44",
    "Date": "2016-12-30",
    "Time": "19:30:00",
    "GMT": "2016-12-31T00:30Z",
    "Venue": "T-Mobile Arena",
    "Country": "USA",
    "City": "Las Vegas",
    "CurFight": "6370",
    "EventStart": "16:30:07",
    "EventEnd": "21:56:08",
    }
}]
    
function addOne(data) {
	data+" One";
}    


testis = map(fm_stats, function() {
	addOne
});

*/
<<<<<<< HEAD
var fighter_url = require('./sherdogurl.js')

console.log(fighter_url.length)
=======


var b = function() {
    console.log("Hi from var b")
}

function c() {
    return 5
}

function d(b) {
    console.log("Hi from function d and " +b())
}

b();
d(b);
>>>>>>> 816d5c9597027844459f7331d83b1df16da676f4
