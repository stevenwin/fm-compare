f_res = require('./f_results.js')
var b2b_score = {
   win: 0,
   lose: 0,
   total: 0
}

for (var i=0; i<f_res.length; i++) {
   if (f_res[i][0].b2b_loss === false && f_res[i][1].b2b_loss === true) {
      b2b_score.win += 1
      b2b_score.total += 1
   }
   else if (f_res[i][1].b2b_loss === false && f_res[i][0].b2b_loss === true) {
      b2b_score.win += 1
      b2b_score.total += 1
   }
   else {
      b2b_score.total += 1
   }
}

setTimeout(function() {
   console.log(b2b_score.win+"\n"+b2b_score.total)
}, 1000)