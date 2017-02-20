const sherdog = require('sherdog');
const fs = require('fs')
var fighter_url = require('./helpers/sherdogurl2.js')
var fm_list = require('./helpers/fm_list.js')
var fights =require('./fights.js')
const request = require('request');
const async = require('async');

/*for (var i=0; i<fighter_url.length; i++) {
   sherdog.getFighter(fighter_url[i].fighter_url, writeData)
}

function writeData(data) {
   fs.appendFileSync("./sherdog.json", JSON.stringify(data, null, "\t"))
   fs.appendFileSync("./sherdog.json", ",")
   fs.appendFileSync("./sherdog.json", "\n")
}*/

// **********data for fights.js***************
/*for (i=0; i<fm_list.length; i++) {
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
         for (var i=0;i<data.length;i++) {
            var fighter = {
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

            fighter.fighter1_name = data[i].fighter1_first_name+" "+data[i].fighter1_last_name
            fighter.fighter1_reach = data[i].fighter1reach
            fighter.fighter1_weight = data[i].fighter1weight
            fighter.fighter1_height = data[i].fighter1height
            fighter.fighter1_slpm = data[i].fighter1_slpm
            fighter.fighter1_strikingaccuracy = data[i].fighter1_strikingaccuracy
            fighter.fighter1_sapm = data[i].fighter1_sapm
            fighter.fighter1_strikingdefense = data[i].fighter1_strikingdefense
            fighter.fighter1_takedownaverage = data[i].fighter1_takedownaverage
            fighter.fighter1_takedownaccuracy = data[i].fighter1_takedownaccuracy
            fighter.fighter1_takedowndefense = data[i].fighter1_takedowndefense
            fighter.fighter1_submissionsaverage = data[i].fighter1_submissionsaverage
            fighter.fighter1_averagefighttime_seconds = data[i].fighter1_averagefighttime_seconds
            fighter.fighter1_kdaverage = data[i].fighter1_kdaverage
            fighter.fighter1_is_winner = data[i].fighter1_is_winner

            fighter.fighter2_name = data[i].fighter2_first_name+" "+data[i].fighter2_last_name
            fighter.fighter2_reach = data[i].fighter2reach
            fighter.fighter2_weight = data[i].fighter2weight
            fighter.fighter2_height = data[i].fighter2height
            fighter.fighter2_slpm = data[i].fighter2_slpm
            fighter.fighter2_strikingaccuracy = data[i].fighter2_strikingaccuracy
            fighter.fighter2_sapm = data[i].fighter2_sapm
            fighter.fighter2_strikingdefense = data[i].fighter2_strikingdefense
            fighter.fighter2_takedownaverage = data[i].fighter2_takedownaverage
            fighter.fighter2_takedownaccuracy = data[i].fighter2_takedownaccuracy
            fighter.fighter2_takedowndefense = data[i].fighter2_takedowndefense
            fighter.fighter2_submissionsaverage = data[i].fighter2_submissionsaverage
            fighter.fighter2_averagefighttime_seconds = data[i].fighter2_averagefighttime_seconds
            fighter.fighter2_kdaverage = data[i].fighter2_kdaverage
            fighter.fighter2_is_winner = data[i].fighter2_is_winner
            fighter.fm_stats_feed_url = data[i].fm_stats_feed_url
            fights.push(fighter)

         }
         callback(null, fights)
      },
      function(data, callback) {
         fs.writeFileSync("./fights.js", JSON.stringify(data, null, "\t"))
      }

   ])
}*/


var indFights = []






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
               fighter1_name: "",/*
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
               fighter1_tip_back_control: "",*/

               fighter2_name: ""
               /*fighter2_tip_standing: "",
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
               fighter2_tip_back_control: ""*/
            }

            fighter.date = data.Timestamp
            fighter.referee = data.FMLiveFeed.Referee
            fighter.weightclass = data.FMLiveFeed.WeightClass
            fighter.fighter1_name = data.FMLiveFeed.Fighters.Red.Name
            fighter.fighter2_name = data.FMLiveFeed.Fighters.Blue.Name
            /*fighter.fighter1_tip_standing = data.FMLiveFeed.FightStats.Red
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
            fighter.fighter1_tip_back_control = data.FMLiveFeed.FightStats.Red.TIP['Back Control Time']*/

            indFights.push(fighter)
         
         callback(null, indFights)
      }
      catch(e) {
         console.log('error happened')
         }
      },
      function(data, callback) {
         fs.appendFileSync("./indivFightStat.js", JSON.stringify(data, null, "\t"))
      }
   ])
}
