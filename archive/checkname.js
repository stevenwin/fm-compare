const request = require('request');
var fighter_url = require('./helpers/sherdogurl.js')
var fm_list = require('./helpers/fm_list.js')
var fm_api = require('./api/fm_api.js')
var sherdog_list = require('./helpers/sherdogdata.js')
var error_list = require('./error.js')
var fs = require('fs')

var fm_fighters = []
var sherdog_fighters = []
var fighterMissing = []

//collectNames();

/*setTimeout(function() {
   // filter only unique names from source data
   var fm_fighters_unique = fm_fighters.filter(function(elem, index, self) {
      return index == self.indexOf(elem)
   })

   var sd_fighters_unique = sherdog_fighters.filter(function(elem, index, self) {
      return index == self.indexOf(elem)
   })

   setTimeout(function() {
   // check source data against local repository
   nameCheck(fm_fighters_unique, sd_fighters_unique)
   }, 1000)

   setTimeout(function() {
   // show missing names between the two repositories
     for (var x=0;x<fighterMissing.length;x++) {
     console.log(fighterMissing[x]+" "+[x])
      fs.appendFileSync('./names.js', '"'+fighterMissing[x]+'"'+"\n")
      }
      for (var x=0;x<sd_fighters_unique.length;x++) {
        fs.appendFileSync('./names2.js', '"'+sd_fighters_unique[x]+'"'+"\n")
      }
      console.log(fm_fighters_unique.length)
      console.log(fm_fighters.length)
      console.log(sherdog_fighters.length)
   }, 2000)
}, 3000)*/


for (var i=0;i<fm_api.length;i++) {
  for (var x=0;x<fm_api[i].FMLiveFeed.Fights.length;x++) {
      fm_fighters.push(fm_api[i].FMLiveFeed.Fights[x].Fighters[0].FullName)
      fm_fighters.push(fm_api[i].FMLiveFeed.Fights[x].Fighters[1].FullName)
    }
}

for (var z=0;z<sherdog_list.length;z++) {
  sherdog_fighters.push(sherdog_list[z].name)
}


   var fm_fighters_unique = fm_fighters.filter(function(elem, index, self) {
      return index == self.indexOf(elem)
   })

   var sd_fighters_unique = sherdog_fighters.filter(function(elem, index, self) {
      return index == self.indexOf(elem)
   })


setTimeout(function() {
  for (var a=0;a<fm_fighters_unique.length;a++) {
        fs.appendFileSync('./names.js', '"'+fm_fighters_unique[a]+'"'+"\n")
        }

  for (var b=0;b<sd_fighters_unique.length;b++) {
        fs.appendFileSync('./names2.js', '"'+sd_fighters_unique[b]+'"'+"\n")
      }
}, 6000)

/*function collectNames() {
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

}*/

function nameCheck(arrCheck, arrSrc) {
  var checked = arrCheck.filter(function(val) {
  return arrSrc.indexOf(val) === -1;
  })

  for (var y=0;y<checked.length;y++) {
    fighterMissing.push(checked[y])
  }
  
}