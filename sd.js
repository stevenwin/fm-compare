const sherdog = require('sherdog');
const request = require('request');
var fighter_url = require('./sherdogurl.js')
var fighters = []
var url_fm = 'http://liveapi.fightmetric.com/V1/802/Fnt.json';
var urlA = "http://www.sherdog.com/fighter/Conor-McGregor-29688";

function getEvent(urlfm, callback) {
  request({
   url: urlfm,
   json: true
 }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var events = []
      events.push(body.FMLiveFeed.City);
      callback(events)
   }
})
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

getEvent(url_fm, gotData);
function gotData(data) {
   console.log(data);
}