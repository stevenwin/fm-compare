const sherdog = require('sherdog');
const request = require('request');
const async = require('async');
var fighter_url = require('./sherdogurl.js')
var fm_list = require('./fm_list.js')


var url_fm = 'http://liveapi.fightmetric.com/V1/802/Fnt.json';
var url_fmLinkSource 
var url_fighterA = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var url_fighterB = "";
var events = []

var fighters = []
tests = []


async.waterfall([
   // Grab event data from fm json
   function (callback) {
      request({
      url: 'http://liveapi.fightmetric.com/V1/802/Fnt.json',
      json: true
      }, 
      function (err, response, data) {
         if (!err && response.statusCode == 200) {
            callback(null, data);
         }
      })
   },
   // Find and pass sherdog URL
   function (data, callback) {
      var f_urls = []
      for (var i=0;i<data.FMLiveFeed.Fights.length;i++) {
         f_url = {
            url1 : findSherdogURL(data.FMLiveFeed.Fights[i].Fighters[0].FullName),
            url2 : findSherdogURL(data.FMLiveFeed.Fights[i].Fighters[1].FullName)
         }
         f_urls.push(f_url)
      }
      callback(null, f_urls);
   },
   function(f_urls, callback) {
      async.eachLimit(f_urls, 1, function(url, eachCallback) {
         async.waterfall([
            function(wfCallback) {
               sherdog.getFighter(url.url1, function(fighter1_data) {
                     wfCallback(null, fighter1_data)
                  })
            },
            function(fighter1_data, wfCallback) {
               sherdog.getFighter(url.url2, function(fighter2_data) {
                     var fighter = {
                        fighter1_name: "",
                        fighter1_points: 0,
                        fighter1_age: "",
                        fighter1_nationality: "",
                        fighter1_win_ko: "",
                        fighter1_win_dec: "",
                        fighter1_win_sub: "",
                        fighter1_win_total: "",
                        fighter1_win_dec_total: 0,
                        fighter1_lose_ko: "",
                        fighter1_lose_sub: "",
                        fighter1_lose_dec: "",
                        fighter1_lose_total: "",
                        fighter1_lastfight_date: "",
                        fighter1_lose_ko_total: 0,

                        fighter2_name: "",
                        fighter2_points: 0,
                        fighter2_age: "",
                        fighter2_nationality: "",
                        fighter2_win_ko: "",
                        fighter2_win_dec: "",
                        fighter2_win_sub: "",
                        fighter2_win_total: "",
                        fighter2_win_dec_total: 0,
                        fighter2_lose_ko: "",
                        fighter2_lose_sub: "",
                        fighter2_lose_dec: "",
                        fighter2_lose_total: "",
                        fighter2_lastfight_date: "",
                        fighter2_lose_ko_total: 0
                     }
                     fighter.fighter1_name = fighter1_data.name
                     fighter.fighter1_name = fighter1_data.name
                     fighter.fighter1_age = Number(fighter1_data.age);
                     fighter.fighter1_nationality = fighter1_data.nationality;
                     fighter.fighter1_win_ko = fighter1_data.wins.knockouts;
                     fighter.fighter1_win_dec = fighter1_data.wins.decisions;
                     fighter.fighter1_win_sub = fighter1_data.wins.submissions;
                     fighter.fighter1_win_total = fighter1_data.wins.total;
                     fighter.fighter1_lose_ko = fighter1_data.losses.knockouts;
                     fighter.fighter1_lose_sub = fighter1_data.losses.submissions;
                     fighter.fighter1_lose_dec = fighter1_data.losses.decisions;
                     fighter.fighter1_lose_total = fighter1_data.losses.total;
                     fighter.fighter1_lastfight_date = dateToDay(fighter1_data.fights.date);

                     fighter.fighter2_name = fighter2_data.name
                     fighter.fighter2_age = Number(fighter2_data.age);
                     fighter.fighter2_nationality = fighter2_data.nationality;
                     fighter.fighter2_win_ko = fighter2_data.wins.knockouts;
                     fighter.fighter2_win_dec = fighter2_data.wins.decisions;
                     fighter.fighter2_win_sub = fighter2_data.wins.submissions;
                     fighter.fighter2_win_total = fighter2_data.wins.total;
                     fighter.fighter2_lose_ko = fighter2_data.losses.knockouts;
                     fighter.fighter2_lose_sub = fighter2_data.losses.submissions;
                     fighter.fighter2_lose_dec = fighter2_data.losses.decisions;
                     fighter.fighter2_lose_total = fighter2_data.losses.total;
                     fighter.fighter2_lastfight_date = dateToDay(fighter2_data.fights.date);

                     fighters.push(fighter)
                     wfCallback()
               })
            }], function(err, success) {
               eachCallback()
         })
      }, function(error) {
         callback(null, "finished")
         }
      )
   }], function (error, result) {
      if (error) {console.log(error)}
      else {console.log(result)}

      console.log(fighters)
      
   })


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

function dateToDay(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return day;
}
