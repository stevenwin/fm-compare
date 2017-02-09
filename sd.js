const sherdog = require('sherdog');
const request = require('request');
const async = require('async');
var fighter_url = require('./sherdogurl.js')
var fm_list = require('./fm_list.js')
var fighterMissing = []
var eventURL = [
{name1: "Holly Holm",name2: "Germaine de Randamie"},
{name1: "Anderson Silva",name2: "Derek Brunson"},
{name1: "Ronaldo Souza",name2: "Tim Boetsch"},
{name1: "Glover Teixeira",name2: "Jared Cannonier"},
{name1: "Dustin Poirier",name2: "Jim Miller"},
{name1: "Marcin Tybura",name2: "Justin Willis"},
{name1: "Ryan LaFlare",name2: "Roan Carneiro"},
{name1: "Phillipe Nover",name2: "Rick Glenn"},
]

/*for (var j=80;j<99;j++) {
  request({
      url: 'http://liveapi.fightmetric.com/V1/7'+j+'/Fnt.json',
      json: true
    }, function(err, response, data) {
      checkName(data)
    });
}*/

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

/*function checkName(data) {
  var namesToCheck = []
  var names = []
  var fmdata = data

  for (var x=0; x<fmdata.FMLiveFeed.Fights.length;x++) {
    namesToCheck.push(fmdata.FMLiveFeed.Fights[x].Fighters[0].FullName)
  }
  
  for (var i=0; i<fighter_url.length; i++) {
      names.push(fighter_url[i].name)
  }

  finalCheck(namesToCheck, names)
}*/

checkName(eventURL)

function checkName(data) {
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

  finalCheck(namesToCheck, names)
}

function finalCheck(arrCheck, arrSrc) {
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
}, 4000)