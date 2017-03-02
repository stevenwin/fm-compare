var bfo = require('bfo');
var fs = require('fs')
var z = require('./names.js')

var names = [
   "Aaron Brink",
   "Aaron Phillips",
   "Aaron Riley",
   "Aaron Rosa",
   "Aaron Simpson",
   
]

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

