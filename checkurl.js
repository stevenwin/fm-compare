//const sherdog = require('sherdog');
const request = require('request');
const async = require('async');
var fighter_url = require('./helpers/sherdogurl.js')
var fm_list = require('./helpers/fm_list.js')
var fighterMissing = []
var eventURL = [
{"name1":"Tyron Woodley","name2":"Stephen Thompson"},
{"name1":"Khabib Nurmagomedov","name2":"Tony Ferguson"},
{"name1":"Rashad Evans","name2":"Dan Kelly"},
{"name1":"Lando Vannata","name2":"David Teymur"},
{"name1":"Alistair Overeem","name2":"Mark Hunt"},
{"name1":"Mark Godbeer","name2":"Daniel Spitz"},
{"name1":"Marcin Tybura","name2":"Luis Henrique"},
{"name1":"Darren Elkins","name2":"Mirsad Bektic"},
{"name1":"Luke Sanders","name2":"Iuri Alcantara"},
{"name1":"Tyson Pedro","name2":"Paul Craig"},

]

//for (var s=90; s<100;s++) {}

manualCheck()

function autoCheck() {
  request({
      url: 'http://liveapi.fightmetric.com/V1/789/Fnt.json',
      json: true
    }, function(err, response, data) {
      if (!err && response.statusCode == 200) {
        parseFM(data)
      }
    });
}


function manualCheck() {
  var namesToCheck = []
  var names =[]

  for (var i=0;i<eventURL.length;i++) {
    namesToCheck.push(eventURL[i].name1)
    namesToCheck.push(eventURL[i].name2)
  }

  for (var i=0; i<fighter_url.length; i++) {
      names.push(fighter_url[i].name)
  }

  nameCheck(namesToCheck, names)
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

function parseFM(data) {
  var namesToCheck = []
  var names = []
  var fmdata = data

  for (var x=0; x<fmdata.FMLiveFeed.Fights.length;x++) {
    namesToCheck.push(fmdata.FMLiveFeed.Fights[x].Fighters[0].FullName)
    namesToCheck.push(fmdata.FMLiveFeed.Fights[x].Fighters[1].FullName)
  }
  
  for (var i=0; i<fighter_url.length; i++) {
      names.push(fighter_url[i].name)
  }

  nameCheck(namesToCheck, names)
}

/*function checkName(data) {
  var namesToCheck = []
  var names = []
  var fmdata = data

  for (var x=0; x<eventURL.length;x++) {
    namesToCheck.push(eventURL[x].name1)
    namesToCheck.push(eventURL[x].name2)
  }
  
  for (var i=0; i<fighter_url.length; i++) {
      names.push(fighter_url[i].name)
  }

  nameCheck(namesToCheck, names)
}*/

function nameCheck(arrCheck, arrSrc) {
  var checked = arrCheck.filter(function(val) {
  return arrSrc.indexOf(val) === -1;
  })

  for (var y=0;y<checked.length;y++) {
    fighterMissing.push(checked[y])
  }
  
}


setTimeout(function() {
  for (var x=0;x<fighterMissing.length;x++) {
  console.log(fighterMissing[x]+" "+[x])
}
}, 10000)