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
var events = []

for (var j=0;j<fm_list.length;j++) {
async.waterfall([
   function getEvent(callback) {
      request({
      url: fm_list[j].fm_url,
      json: true
      }, function getFights(error, response, data) {
      if (!error && response.statusCode == 200) {
        callback(null, data);
      }
      })
   },
   function getFights(data, callback) {
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
      callback(null, fights);
   },
   function getSherdog(fights) {
		 for (var k=0;k<fights.length;k++) {
      console.log(fights[k].fighter1_name+""+k)
   	}
	 }
])
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