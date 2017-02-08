/*let async = require('async');

function test(callback) {
  async.parallel({
    func1: function(cb) {
      cb(null, { foo: 'bar' });
    },
    func2: function(cb) {
      async.waterfall([
        function(cb2) {
          cb2(null, 'a');
        },
        function(prev, cb2) {
          cb2(null, 'b');
        }
      ], function(err, result) {
        cb(err, result);
      });
    }
  }, function(err, results) {
    callback(err, results);
  });
}

test(function(err, result) {
  console.log('callback:', err, result);
});*/
const sherdog = require('sherdog')
const request = require('request')
var fighter_url = require('./sherdogurl.js')
/*var url1 = "http://www.sherdog.com/fighter/JC-Cottrell-43874";
var url2 = "http://www.sherdog.com/fighter/Jason-Gonzalez-66736";

sherdog.getFighter(url2, function(data) {
    console.log(data)
})*/

request({
  url: "http://liveapi.fightmetric.com/V1/804/Fnt.json",
  json: true
}, 
      function (err, response, data) {
         if (!err && response.statusCode == 200) {
            checkURL(data)
         }
      })

function checkURL(data) {
  for (var i=0; i<data.FMLiveFeed.Fights.length; i++) {
    for (var x=0;x<fighter_url.length;x++) {
      for (var name in fighter_url[x]) {
         if (data.FMLiveFeed.Fights[i].Fighters[0].FullName == fighter_url[x][name]) {
          console.log(data.FMLiveFeed.Fights[i].Fighters[0].FullName + " OK")
         }
         else if (data.FMLiveFeed.Fights[i].Fighters[0].FullName != fighter_url[x][name]) {
          console.log(data.FMLiveFeed.Fights[i].Fighters[0].FullName + " Not OK")
         }

         if (data.FMLiveFeed.Fights[i].Fighters[1].FullName == fighter_url[x][name]) {
          console.log(data.FMLiveFeed.Fights[i].Fighters[1].FullName + " OK")
         }
         else if (data.FMLiveFeed.Fights[i].Fighters[1].FullName != fighter_url[x][name]) {
          console.log(data.FMLiveFeed.Fights[i].Fighters[1].FullName + " Not OK")
         }
      }
   }
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