var fighter_url = require('./sherdogurl.js')
var sherdog = require('sherdog');
var Table = require('cli-table');
var request = require('request')


/* XXXXXXXX   TABLE STUFF   XXXXXXXXXXXX
// instantiate
var table = new Table({
    head: ['Fighter Name', 'Age', 'Height', 'Win Streak']
  , colWidths: [20, 10, 15, 15]
});

// For the request body
         body.FMLiveFeed.Fights[0].Fighters[0].FullName,
         body.FMLiveFeed.Fights[0].Fighters[0].DOB,
         body.FMLiveFeed.Fights[0].Fighters[0].Height

table.push(
    ['First', 'Second', 'Third', 'Fourth']
  , ['First', 'Second', 'Third', 'Fourth']
);

setTimeout(function () {
   console.log(table.toString());
}, 4000);*/


// table is an Array, so you can `push`, `unshift`, `splice` and friends


var url_fm = 'http://liveapi.fightmetric.com/V1/802/Fnt.json';
var urlA = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var urlB;
var todayDate = 'Jan/09/2013'
var fightDate;
var fighterA = 'Marcus Davis';
var fighterB;
var fighters = [];
var fighter_a;
var fighterurl = [];



// Pull all fighter information from Fightmetric API
// and put them into 'fighters'

function fightmetricRequest() {
request({
  url: 'http://liveapi.fightmetric.com/V1/802/Fnt.json', //'http://liveapi.fightmetric.com/V1/'+i+'/Fnt.json',
  json: true
  }, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    // Print the json response
    // Grab Fighters
    for (var i=0;i<body.FMLiveFeed.Fights.length;i++) {
      for (var j=0;j<body.FMLiveFeed.Fights[0].Fighters.length;j++) {
        fighters.push({
        fightDate: body.FMLiveFeed.Date,
        name: body.FMLiveFeed.Fights[i].Fighters[j].FullName,
        height: body.FMLiveFeed.Fights[i].Fighters[j].Height,
        dob: body.FMLiveFeed.Fights[i].Fighters[j].DOB,
        outcome: body.FMLiveFeed.Fights[i].Fighters[j].Outcome,
        stance: body.FMLiveFeed.Fights[i].Fighters[j].Stance,
        // Grab URLs
        fighterURL: findSherdogURL(body.FMLiveFeed.Fights[i].Fighters[j].FullName)
        });
      }
    }
  }
})
}

var fighterCompare = [];
var fighterSherdog;
var fighterA_data;
var fighterA_KO = 0;
var fighterA_wins = 0;
var fighterA_losses = 0;
var wait = "#";
var waitTime = 1;
var timeOut = 6;

// Grab URL of fighter
/*for (i=0;i<fighter_url.length;i++) {
   for (var name in fighter_url[i]) {
      if (fighter_url[i][name] == fighterA) {
         table.push([fighter_url[i].name]);
         console.log("http://www.sherdog.com"+fighter_url[i].url);
         //console.log('fighter_url.'+name, '=', fighter_url[i][name]);
      }
   }
}*/

// Need to iterate over the request results and add more stats into fighter *********************************************************************************************************
setTimeout( function() {
   sherdog.getFighter(fighters[0].fighterURL, getData)
   function getData(data) {
      fighterSherdog = data;
   }

   setTimeout( function() {
   fighters[0].age = fighterSherdog.name;
   console.log(fighters);
   }, 12000);
}, 6000);

/*function gotData_b(data) {
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
}*/

/*setTimeout(function () {
   console.log(fighters[0].fighterURL);
}, 6000);*/

// Grab fighter data
sherdog.getFighter(urlA, getData);
function getData(data) {
   fighterA_data = data;
}



/***
      Main App
 ***/

/*setTimeout(function () {
   aKOwins();
   fighterA_stats();



},
   timeOut*1000);
*/

/***
      Helper Functions
***/
// Date string parser into int(date) in years
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

function aKOwins() {
   for (i=0;i<fighterA.fights.length;i++) {
      if (fighterA.fights[i].result === 'win' && fighterA.fights[i].method.match(/\bKO\b/)) {
         fighterA_KO += 1;
      }
   }
   console.log(fighterA.name+" has "+fighterA_KO+" KO wins");
}
function findSherdogURL (fighterName) {
   for (i=0;i<fighter_url.length;i++) {
      for (var name in fighter_url[i]) {
         if (fighter_url[i][name] == fighterName) {
            return "http://www.sherdog.com"+fighter_url[i].url;
            //console.log('fighter_url.'+name, '=', fighter_url[i][name]);
         }
      }
   }
}


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


/***
      Outro
***/

/*var waiting = setInterval(function() {
   console.log(wait)
   wait += "#";
}, waitTime*1000)

setTimeout(function() {
   clearInterval(waiting)
}, timeOut*1000);*/

