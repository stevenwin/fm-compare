const sherdog = require('sherdog');
const fs = require('fs')
const bfo = require('bfo');
const fs = require('fs')
const names = require('./helpers/fighterNames.js')
const fighter_url = require('./helpers/sherdogurl2.js')
const fm_list = require('./helpers/fm_list.js')
const fights =require('./fights.js')
const request = require('request');
const async = require('async');
const events = require('./api/events_api.js')
var indFights = []


// **********data for fights.js***************
function getFights(fm_list, filename) {
  fights = []

  for (var i=0; i<fm_list.length; i++) {
     async.waterfall([
     // Grab event data from fm json
        function (callback) {
           request({
            url: "http://ufc-data-api.ufc.com/api/v3/us/events/"+fm_list[i].id+"/fights",
            json: true
            }, function (err, response, data) {
             if (!err && response.statusCode == 200) {
                callback(null, data, fm_list[i].event_date);
             }
           })
           },
        function (data, i, callback) {
           for (var x=0;x<data.length;x++) {
              var fighter = {
                 time_stamp: "",
                 fighter1_name: "",
                 fighter1_reach: "",
                 fighter1_weight: "",
                 fighter1_height: "",
                 fighter1_slpm: "",
                 fighter1_strikingaccuracy: "",
                 fighter1_sapm: "",
                 fighter1_strikingdefense: "",
                 fighter1_takedownaverage: "",
                 fighter1_takedownaccuracy: "",
                 fighter1_submissionsaverage: "",
                 fighter1_averagefighttime_seconds: "",
                 fighter1_kdaverage: "",
                 fighter1_is_winner: "",

                 fighter2_name: "",
                 fighter2_reach: "",
                 fighter2_weight: "",
                 fighter2_height: "",
                 fighter2_slpm: "",
                 fighter2_strikingaccuracy: "",
                 fighter2_sapm: "",
                 fighter2_strikingdefense: "",
                 fighter2_takedownaverage: "",
                 fighter2_takedownaccuracy: "",
                 fighter2_submissionsaverage: "",
                 fighter2_averagefighttime_seconds: "",
                 fighter2_kdaverage: "",
                 fighter2_is_winner: "",
                 fm_stats_feed_url: ""
              }

              fighter.fighter1_name = data[x].fighter1_first_name+" "+data[x].fighter1_last_name
              fighter.fighter1_reach = data[x].fighter1reach
              fighter.fighter1_weight = data[x].fighter1weight
              fighter.fighter1_height = data[x].fighter1height
              fighter.fighter1_slpm = data[x].fighter1_slpm
              fighter.fighter1_strikingaccuracy = data[x].fighter1_strikingaccuracy
              fighter.fighter1_sapm = data[x].fighter1_sapm
              fighter.fighter1_strikingdefense = data[x].fighter1_strikingdefense
              fighter.fighter1_takedownaverage = data[x].fighter1_takedownaverage
              fighter.fighter1_takedownaccuracy = data[x].fighter1_takedownaccuracy
              fighter.fighter1_takedowndefense = data[x].fighter1_takedowndefense
              fighter.fighter1_submissionsaverage = data[x].fighter1_submissionsaverage
              fighter.fighter1_averagefighttime_seconds = data[x].fighter1_averagefighttime_seconds
              fighter.fighter1_kdaverage = data[x].fighter1_kdaverage
              fighter.fighter1_is_winner = data[x].fighter1_is_winner

              fighter.fighter2_name = data[x].fighter2_first_name+" "+data[x].fighter2_last_name
              fighter.fighter2_reach = data[x].fighter2reach
              fighter.fighter2_weight = data[x].fighter2weight
              fighter.fighter2_height = data[x].fighter2height
              fighter.fighter2_slpm = data[x].fighter2_slpm
              fighter.fighter2_strikingaccuracy = data[x].fighter2_strikingaccuracy
              fighter.fighter2_sapm = data[x].fighter2_sapm
              fighter.fighter2_strikingdefense = data[x].fighter2_strikingdefense
              fighter.fighter2_takedownaverage = data[x].fighter2_takedownaverage
              fighter.fighter2_takedownaccuracy = data[x].fighter2_takedownaccuracy
              fighter.fighter2_takedowndefense = data[x].fighter2_takedowndefense
              fighter.fighter2_submissionsaverage = data[x].fighter2_submissionsaverage
              fighter.fighter2_averagefighttime_seconds = data[x].fighter2_averagefighttime_seconds
              fighter.fighter2_kdaverage = data[x].fighter2_kdaverage
              fighter.fighter2_is_winner = data[x].fighter2_is_winner
              fighter.fm_stats_feed_url = data[x].fm_stats_feed_url
              fights.push(fighter)

           }
           callback(null, fights)
        },
        function(data, callback) {
           fs.writeFileSync("./"+filename+".js", JSON.stringify(data, null, "\t"))
        }
     ])
  }
}



// request for indivFightStats -- use fights.js
function getDetailedFightStats (fights, filename) {
  for (i=0; i<fights.length; i++) {
     async.waterfall([
     // Grab event data from fm json
        function (callback) {
           request({
            url: fights[i].fm_stats_feed_url,
            json: true
            }, function (err, response, data) {
             if (!err && response.statusCode == 200) {
                 //console.log(data.FMLiveFeed.Fighters.Red.Name)
                callback(null, data);
             }
           })
           },
        function (data, callback) {
           try {
              var fighter = {
                 date: "",
                 referee: "",
                 weightclass: "",
                 fighter1_name: "",
                 fighter1_tip_standing: "",
                 fighter1_tip_ground: "",
                 fighter1_tip_control: "",
                 fighter1_tip_neutral: "",
                 fighter1_tip_ground_control: "",
                 fighter1_tip_distance: "",
                 fighter1_tip_clinch: "",
                 fighter1_tip_guard_control: "",
                 fighter1_tip_halfguard_control: "",
                 fighter1_tip_side_control: "",
                 fighter1_tip_mount_control: "",
                 fighter1_tip_back_control: "",

                 fighter2_name: "",
                 fighter2_tip_standing: "",
                 fighter2_tip_ground: "",
                 fighter2_tip_control: "",
                 fighter2_tip_neutral: "",
                 fighter2_tip_ground_control: "",
                 fighter2_tip_distance: "",
                 fighter2_tip_clinch: "",
                 fighter2_tip_guard_control: "",
                 fighter2_tip_halfguard_control: "",
                 fighter2_tip_side_control: "",
                 fighter2_tip_mount_control: "",
                 fighter2_tip_back_control: ""
              }

              fighter.date = data.Timestamp
              fighter.referee = data.FMLiveFeed.Referee
              fighter.weightclass = data.FMLiveFeed.WeightClass
              fighter.fighter1_name = data.FMLiveFeed.Fighters.Red.Name
              fighter.fighter2_name = data.FMLiveFeed.Fighters.Blue.Name
              fighter.fighter1_tip_standing = data.FMLiveFeed.FightStats.Red.TIP['Standing Time']
              fighter.fighter1_tip_ground = data.FMLiveFeed.FightStats.Red.TIP['Ground Time']
              fighter.fighter1_tip_control = data.FMLiveFeed.FightStats.Red.TIP['Control Time']
              fighter.fighter1_tip_neutral = data.FMLiveFeed.FightStats.Red.TIP['Neutral Time']
              fighter.fighter1_tip_ground_control = data.FMLiveFeed.FightStats.Red.TIP['Ground Control Time']
              fighter.fighter1_tip_distance = data.FMLiveFeed.FightStats.Red.TIP['Distance Time']
              fighter.fighter1_tip_clinch = data.FMLiveFeed.FightStats.Red.TIP['Clinch Time']
              fighter.fighter1_tip_guard_control = data.FMLiveFeed.FightStats.Red.TIP['Guard Control Time']
              fighter.fighter1_tip_halfguard_control = data.FMLiveFeed.FightStats.Red.TIP['Half Guard Control Time']
              fighter.fighter1_tip_side_control = data.FMLiveFeed.FightStats.Red.TIP['Side Control Time']
              fighter.fighter1_tip_mount_control = data.FMLiveFeed.FightStats.Red.TIP['Mount Control Time']
              fighter.fighter1_tip_back_control = data.FMLiveFeed.FightStats.Red.TIP['Back Control Time']

              fighter.fighter2_tip_standing = data.FMLiveFeed.FightStats.Blue.TIP['Standing Time']
              fighter.fighter2_tip_ground = data.FMLiveFeed.FightStats.Blue.TIP['Ground Time']
              fighter.fighter2_tip_control = data.FMLiveFeed.FightStats.Blue.TIP['Control Time']
              fighter.fighter2_tip_neutral = data.FMLiveFeed.FightStats.Blue.TIP['Neutral Time']
              fighter.fighter2_tip_ground_control = data.FMLiveFeed.FightStats.Blue.TIP['Ground Control Time']
              fighter.fighter2_tip_distance = data.FMLiveFeed.FightStats.Blue.TIP['Distance Time']
              fighter.fighter2_tip_clinch = data.FMLiveFeed.FightStats.Blue.TIP['Clinch Time']
              fighter.fighter2_tip_guard_control = data.FMLiveFeed.FightStats.Blue.TIP['Guard Control Time']
              fighter.fighter2_tip_halfguard_control = data.FMLiveFeed.FightStats.Blue.TIP['Half Guard Control Time']
              fighter.fighter2_tip_side_control = data.FMLiveFeed.FightStats.Blue.TIP['Side Control Time']
              fighter.fighter2_tip_mount_control = data.FMLiveFeed.FightStats.Blue.TIP['Mount Control Time']
              fighter.fighter2_tip_back_control = data.FMLiveFeed.FightStats.Blue.TIP['Back Control Time']

              indFights.push(fighter)
           
           callback(null, 'done')
           }
        catch(e) {
           console.log('error happened')
           fs.appendFileSync("./"+filename+".js", "error happened"+"\n"+JSON.stringify(data, null, "\t"))+"\n"
           }
        }],
        function(err, result) {
           if (err) {console.log("error waterfall")}
           fs.writeFileSync("./"+filename, JSON.stringify(data, null, "\t"))
        })
  }

// Individualstats
function get indivStats(fights, filename) {
  for (i=0; i<fights.length; i++) {
     async.waterfall([
     // Grab event data from fm json
        function (callback) {
           request({
            url: fights[i].fm_stats_feed_url,
            json: true
            }, function (err, response, data) {
             if (!err && response.statusCode == 200) {
                 //console.log(data.FMLiveFeed.Fighters.Red.Name)
                callback(null, data);
             }
           })
           },
        function (data, callback) {
           try {
              fs.appendFileSync("./"+filename+".js", JSON.stringify(data, null, "\t"))
              fs.appendFileSync("./"+filename+".js", ",")
              fs.appendFileSync("./"+filename+".js", "\n")
           }
           catch(e) {
              console.log('error happened')
              }
           }
     ])
  }
}

// *************f_results.js
function f_results(fm_list, filename) {
  for (var i=0; i<fm_list.length; i++) {
     async.waterfall([
     // Grab event data from fm json
        function (callback) {
           request({
            url: "http://ufc-data-api.ufc.com/api/v3/us/events/"+fm_list[i].id+"/fights",
            json: true
            }, function (err, response, data) {
             if (!err && response.statusCode == 200) {
                callback(null, data);
             }
           })
           },
        function (data, callback) {
           for (var x=0;x<data.length;x++) {
              var fighter = {
                 time_stamp: "",
                 fighter1_name: "",
                 fighter1_reach: "",
                 fighter1_weight: "",
                 fighter1_height: "",
                 fighter1_slpm: "",
                 fighter1_strikingaccuracy: "",
                 fighter1_sapm: "",
                 fighter1_strikingdefense: "",
                 fighter1_takedownaverage: "",
                 fighter1_takedownaccuracy: "",
                 fighter1_submissionsaverage: "",
                 fighter1_averagefighttime_seconds: "",
                 fighter1_kdaverage: "",
                 fighter1_is_winner: "",

                 fighter2_name: "",
                 fighter2_reach: "",
                 fighter2_weight: "",
                 fighter2_height: "",
                 fighter2_slpm: "",
                 fighter2_strikingaccuracy: "",
                 fighter2_sapm: "",
                 fighter2_strikingdefense: "",
                 fighter2_takedownaverage: "",
                 fighter2_takedownaccuracy: "",
                 fighter2_submissionsaverage: "",
                 fighter2_averagefighttime_seconds: "",
                 fighter2_kdaverage: "",
                 fighter2_is_winner: "",
                 fm_stats_feed_url: ""
              }

              fighter.fighter1_name = data[x].fighter1_first_name+" "+data[x].fighter1_last_name
              fighter.fighter1_reach = data[x].fighter1reach
              fighter.fighter1_weight = data[x].fighter1weight
              fighter.fighter1_height = data[x].fighter1height
              fighter.fighter1_slpm = data[x].fighter1_slpm
              fighter.fighter1_strikingaccuracy = data[x].fighter1_strikingaccuracy
              fighter.fighter1_sapm = data[x].fighter1_sapm
              fighter.fighter1_strikingdefense = data[x].fighter1_strikingdefense
              fighter.fighter1_takedownaverage = data[x].fighter1_takedownaverage
              fighter.fighter1_takedownaccuracy = data[x].fighter1_takedownaccuracy
              fighter.fighter1_takedowndefense = data[x].fighter1_takedowndefense
              fighter.fighter1_submissionsaverage = data[x].fighter1_submissionsaverage
              fighter.fighter1_averagefighttime_seconds = data[x].fighter1_averagefighttime_seconds
              fighter.fighter1_kdaverage = data[x].fighter1_kdaverage
              fighter.fighter1_is_winner = data[x].fighter1_is_winner

              fighter.fighter2_name = data[x].fighter2_first_name+" "+data[x].fighter2_last_name
              fighter.fighter2_reach = data[x].fighter2reach
              fighter.fighter2_weight = data[x].fighter2weight
              fighter.fighter2_height = data[x].fighter2height
              fighter.fighter2_slpm = data[x].fighter2_slpm
              fighter.fighter2_strikingaccuracy = data[x].fighter2_strikingaccuracy
              fighter.fighter2_sapm = data[x].fighter2_sapm
              fighter.fighter2_strikingdefense = data[x].fighter2_strikingdefense
              fighter.fighter2_takedownaverage = data[x].fighter2_takedownaverage
              fighter.fighter2_takedownaccuracy = data[x].fighter2_takedownaccuracy
              fighter.fighter2_takedowndefense = data[x].fighter2_takedowndefense
              fighter.fighter2_submissionsaverage = data[x].fighter2_submissionsaverage
              fighter.fighter2_averagefighttime_seconds = data[x].fighter2_averagefighttime_seconds
              fighter.fighter2_kdaverage = data[x].fighter2_kdaverage
              fighter.fighter2_is_winner = data[x].fighter2_is_winner
              fighter.fm_stats_feed_url = data[x].fm_stats_feed_url
              indFights.push(fighter)

           }
           callback(null, indFights)
        },
        function(data_c, callback) {
          var data_cb = data_c
          for (var q=0; q<data_cb.length; q++) {
           request({
            url: data_cb[q].fm_stats_feed_url,
            json: true
            }, function (err, response, data) {
             if (!err && response.statusCode == 200) {
                data_cb[q].time_stamp = data.Timestamp
             }
           })
          }
          callback(null, data_cb)
        }

     ], function(err, data_cb) {
      if (err) {console.log('error happened')}
      fs.writeFileSync("./"+filename+".js", JSON.stringify(data_cb, null, "\t"))
     }) 
  }
}

function getBfo(filename) {
   for (var i= 0; i<names.length;i++) {
         bfo.searchFighter(names[i], function(err, stats) {
          if (err) {
            console.log(err)
         }
         else {
            fs.appendFileSync("./"+filename+".js", JSON.stringify(stats, null, "\t")+",\n")
         }
         })
   }
}

function removeDuplicates(originalArray, objKey) {
  var trimmedArray = [];
  var values = [];
  var value;

  for(var i = 0; i < originalArray.length; i++) {
    value = originalArray[i][objKey];

    if(values.indexOf(value) === -1) {
      trimmedArray.push(originalArray[i]);
      values.push(value);
    }
  }

  return trimmedArray;
}