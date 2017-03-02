const bfo = require('bfo');
const fs = require('fs')
const names = require('./names')

for (var i= 0; i<names.length;i++) {

      bfo.searchFighter(names[i], function(err, stats) {
       if (err) {
         console.log(err)
      }
      else {
         fs.appendFileSync('./bfo_output.js', JSON.stringify(stats, null, "\t")+",\n")
      }
   })
      
}

