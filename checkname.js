const sherdog = require('sherdog');
const request = require('request');
const async = require('async');
const colors = require('colors');
var fighter_url = require('./sherdogurl.js')
var fm_list = require('./fm_list.js')

var fm_fighters = []
var sherdog_fighters = []
var fighterMissing = []

collectNames();

setTimeout(function() {
   // filter only unique names from source data
   var fm_fighters_unique = fm_fighters.filter(function(elem, index, self) {
      return index == self.indexOf(elem)
   })

   setTimeout(function() {
   // check source data against local repository
   nameCheck(fm_fighters_unique, sherdog_fighters)
   }, 5000)

   setTimeout(function() {
   // show missing names between the two repositories
     for (var x=0;x<fighterMissing.length;x++) {
     console.log(fighterMissing[x]+" "+[x])
      }
      console.log(fm_fighters_unique.length)
      console.log(fm_fighters.length)
      console.log(sherdog_fighters.length)
   }, 15000)
}, 30000)

function collectNames() {
   for (var i=0;i<fm_list.length;i++) {
      request({
             url: fm_list[i].fm_url,
             json: true
             }, function (err, response, data) {
              if (!err && response.statusCode == 200) {
                 for (var x=0;x<data.FMLiveFeed.Fights.length;x++) {
                  fm_fighters.push(data.FMLiveFeed.Fights[x].Fighters[0].FullName)
                  fm_fighters.push(data.FMLiveFeed.Fights[x].Fighters[1].FullName)
               }
              }
           })
   }

   for (var z=0;z<fighter_url.length;z++) {
      sherdog_fighters.push(fighter_url[z].name)
   }

}

function nameCheck(arrCheck, arrSrc) {
  var checked = arrCheck.filter(function(val) {
  return arrSrc.indexOf(val) === -1;
  })

  for (var y=0;y<checked.length;y++) {
    fighterMissing.push(checked[y])
  }
  
}