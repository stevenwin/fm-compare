const sherdog = require('sherdog');
const request = require('request');
const async = require('async');
const colors = require('colors');
var fighter_url = require('./helpers/sherdogurl.js')
var fm_list = require('./helpers/fm_list.js')

var today = new Date()
var fmURL = 'http://liveapi.fightmetric.com/V1/807/Fnt.json'
var fighters = []

startProgram()

function startProgram() {
  async.waterfall([
     // Grab event data from fm json
     function (callback) {
        request({
          url: fmURL,
          json: true
          }, function (err, response, data) {
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
                          fighter1_lastfight: "",
                          fighter1_fights: {},

                          fighter2_name: "",
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
                          fighter2_lose_ko_total: 0,
                          fighter2_lastfight: "",
                          fighter2_fights: {}
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
                       fighter.fighter1_lastfight_date = dateToDay(fighter1_data.fights[0].date);
                       fighter.fighter1_lastfight = fighter1_data.fights[0].result
                       fighter.fighter1_fights = fighter1_data.fights

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
                       fighter.fighter2_lastfight_date = dateToDay(fighter2_data.fights[0].date);
                       fighter.fighter2_lastfight = fighter2_data.fights[0].result
                       fighter.fighter2_fights = fighter2_data.fights

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

        compareFighters(fighters)
        
     })
}

function compareFighters(fighters) {
   for (var c=0;c<fighters.length;c++) {
      var fighter1_points = 0
      var fighter2_points = 0
      // subLossCompare 57% -- 1.75
      if (fighters[c].fighter1_lose_sub - fighters[c].fighter2_lose_sub < 0) {
         fighter1_points += 1
         console.log('1.75 Sub loss add 1 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter1_lose_sub - fighters[c].fighter2_lose_sub > 0) {
         fighter2_points += 1
         console.log('1.75 Sub loss add 1 to '+fighters[c].fighter2_name)
      }

      // youngerThanThree 58% -- 1.72
      if (fighters[c].fighter1_age - fighters[c].fighter2_age > 3) {
         fighter2_points += 1
         console.log('1.72 youngerThanThree add 1 to '+fighters[c].fighter2_name)
      }
      else if (fighters[c].fighter2_age - fighters[c].fighter1_age > 3) {
         fighter1_points+= 1
         console.log('1.72 youngerThanThree 1 to '+fighters[c].fighter1_name)
      }

      // older than 32 62% -- 1.61
      if (fighters[c].fighter1_age >= 32 && fighters[c].fighter2_age < 32) {
        //fighter2_points += 1
        console.log('FYI 1.61 older than 32')
      }
      else if (fighters[c].fighter2_age >= 32 && fighters[c].fighter1_age <32) {
        //fighter1_points += 1
        console.log('FYI 1.61 older than 32')
      }

      // 15 more wins and half as many losses 78% -- 1.28
      if (fighters[c].fighter1_win_total > 14 && fighters[c].fighter2_lose_total/fighters[c].fighter1_lose_total >= 2) {
         fighter1_points += 2
         console.log('1.28 15 Wins 50% Losses add 2 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter2_win_total > 14 && fighters[c].fighter1_lose_total/fighters[c].fighter2_lose_total >= 2) {
         fighter2_points += 2
         console.log('1.28 15 Wins 50% Losses add 2 to '+fighters[c].fighter2_name)
      }

      // Twice as many wins and opponents lost last fight 68% -- 1.47
      if (fighters[c].fighter1_win_total/fighters[c].fighter2_win_total >= 2 && fighters[c].fighter2_lastfight == "loss") {
         fighter1_points += 1
         console.log('1.47 2x Wins OpponentLoseLast add 1 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter2_win_total/fighters[c].fighter1_win_total >= 2 && fighters[c].fighter1_lastfight == "loss") {
         fighter2_points += 1
         console.log('1.47 2x Wins OpponentLoseLast add 1 to '+fighters[c].fighter2_name)
      }

      // 3x Decision wins 60% 
      if (fighters[c].fighter1_win_dec/fighters[c].fighter2_win_dec >=3) {
         fighter1_points += 1
         console.log('1.66 3x Dec wins add 1 to '+fighters[c].fighter1_name)
      }
      else if (fighters[c].fighter2_win_dec/fighters[c].fighter1_win_dec >=3) {
         fighter2_points += 1
         console.log('1.66 3x Dec wins add 1 to '+fighters[c].fighter2_name)
      }
      
      console.log(fighters[c].fighter1_name.green+": ".green+fighter1_points+"  ".green+fighters[c].fighter2_name.green+": ".green+fighter2_points)
   }
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

function dateToDay(date) {
  var d = today.getTime() - Date.parse(date);
  var minutes = 1000 * 60;
  var minute = d / minutes
  var hour = minute / 60
  var day = hour / 24
  var year = day / 365
  return day;
}