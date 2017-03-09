var fm = require('./api/fm_api.js')
var bfo = require('./helpers/bfoFights.js')
var sd = require('./helpers/sherdogdata.js')
var fs = require('fs')



var bfoUnique = removeDuplicates(bfo, "fightId")

/*for (var i=0;i<bfo.length;i++) {
   if (bfoUnique.indexOf(bfo[i].fightId) === -1) {
      bfoUnique.push(bfo[i])
   }
}

*/
setTimeout(function() {
   fs.appendFileSync('./bfoUniqueFights.js', JSON.stringify(bfoUnique, null, "\t")+",\n")
},6000)

















/*for (var f=0;f<fm.length;f++) {
   for (var x=0;x<fm[f].FMLiveFeed.Fights.length;x++) {
         for (var z=0;z<bfo.length; z++) {
            for (var zz=0;zz<bfo[z].length;zz++) {
               if (fm[f].FMLiveFeed.Fights[x].Fighters[0].FullName === bfo[z][zz].fighterOne.fighterName) {
                  fight.fighterOne.id = bfo[z][zz].fighterOne.id
                  fight.fighterOne.fighterName = bfo[z][zz].fighterOne.fighterName
                  fight.fighterOne.fighterUrl = bfo[z][zz].fighterOne.fighterUrl
                  fight.fighterOne.openOdds = bfo[z][zz].fighterOne.openOdds
                  fight.fighterOne.closeOdds = bfo[z][zz].fighterOne.closeOdds
                  fight.fighterOne.bestWorseOdds = bfo[z][zz].fighterOne.bestWorseOdds
                  fight.fighterOne.outcome = fm[f].FMLiveFeed.Fights[x].Fighters[0].Outcome
                  fight.eventName = bfo[z][zz].eventName
                  fight.eventUrl = bfo[z][zz].eventUrl
                  
               }
               else if (fm[f].FMLiveFeed.Fights[x].Fighters[0].FullName === bfo[z][zz].fighterTwo.fighterName) {
                  fight.fighterTwo.id = bfo[z][zz].fighterOne.id
                  fight.fighterTwo.fighterName = bfo[z][zz].fighterOne.fighterName
                  fight.fighterTwo.fighterUrl = bfo[z][zz].fighterOne.fighterUrl
                  fight.fighterTwo.openOdds = bfo[z][zz].fighterOne.openOdds
                  fight.fighterTwo.closeOdds = bfo[z][zz].fighterOne.closeOdds
                  fight.fighterTwo.bestWorseOdds = bfo[z][zz].fighterOne.bestWorseOdds
                  fight.fighterTwo.outcome = fm[f].FMLiveFeed.Fights[x].Fighters[0].Outcome
                  fight.eventName = bfo[z][zz].eventName
                  fight.eventUrl = bfo[z][zz].eventUrl
               }
               if (fm[f].FMLiveFeed.Fights[x].Fighters[1].FullName === bfo[z][zz].fighterOne.fighterName) {
                  fight.fighterTwo.id = bfo[z][zz].fighterOne.id
                  fight.fighterTwo.fighterName = bfo[z][zz].fighterOne.fighterName
                  fight.fighterTwo.fighterUrl = bfo[z][zz].fighterOne.fighterUrl
                  fight.fighterTwo.openOdds = bfo[z][zz].fighterOne.openOdds
                  fight.fighterTwo.closeOdds = bfo[z][zz].fighterOne.closeOdds
                  fight.fighterTwo.bestWorseOdds = bfo[z][zz].fighterOne.bestWorseOdds
                  fight.fighterTwo.outcome = fm[f].FMLiveFeed.Fights[x].Fighters[1].Outcome
               }
               else if (fm[f].FMLiveFeed.Fights[x].Fighters[1].FullName === bfo[z][zz].fighterTwo.fighterName) {
                  fight.fighterTwo.id = bfo[z][zz].fighterTwo.id
                  fight.fighterTwo.fighterName = bfo[z][zz].fighterTwo.fighterName
                  fight.fighterTwo.fighterUrl = bfo[z][zz].fighterTwo.fighterUrl
                  fight.fighterTwo.openOdds = bfo[z][zz].fighterTwo.openOdds
                  fight.fighterTwo.closeOdds = bfo[z][zz].fighterTwo.closeOdds
                  fight.fighterTwo.bestWorseOdds = bfo[z][zz].fighterTwo.bestWorseOdds
                  fight.fighterTwo.outcome = fm[f].FMLiveFeed.Fights[x].Fighters[1].Outcome
               }

               fights.push(fight)
            }
         }
   }
}

setTimeout(function() {
   fs.appendFileSync('./fights_output.js', JSON.stringify(fights, null, "\t")+",\n")
},10000)*/