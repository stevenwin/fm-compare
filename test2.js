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
var fighterMissing = []
var eventURL = [
{"name1": "Chan Sung Jung","name2": "Dennis Bermudez"},
{"name1": "Felice Herrig","name2": "Alexa Grasso"},
{"name1": "James Vick","name2": "Abel Trujillo"},
{"name1": "Volkan Oezdemir","name2": "Ovince Saint Preux"},
{"name1": "Marcel Fortuna","name2": "Anthony Hamilton"},
{"name1": "Jessica Andrade","name2": "Angela Hill"},
{"name1": "Curtis Blaydes","name2": "Adam Milstead"},
{"name1": "Chas Skelly","name2": "Chris Gruetzemacher"},
{"name1": "Ricardo Ramos","name2": "Michinori Tanaka"},
{"name1": "Tecia Torres","name2": "Bec Rawlings"},
{"name1": "Niko Price","name2": "Alex Morono"},
{"name1": "Khalil Rountree Jr.","name2": "Daniel Jolly"}
]

checkName(eventURL)
console.log(fighterMissing)


function checkName(eventURL) {
  var namesToCheck = []
  var names = []

  for (var x=0; x<eventURL.length;x++) {
    namesToCheck.push(eventURL[x].name1)
    namesToCheck.push(eventURL[x].name2)
  }
  
  for (var i=0; i<fighter_url.length; i++) {
      names.push(fighter_url[i].name)
  }
  
    var xx = names.filter(function(val) {
        return namesToCheck.indexOf(val) != -1;
      })
    
    console.log(xx)
    
    for (var g=0;g<fighter_url.length;g++) {
      for (var b=0;b<namesToCheck.length;b++) {
        if (fighter_url[g].name === namesToCheck[b]) {
          console.log(fighter_url[g].url)
        }
      }
    }
}

function finalCheck(arrCheck, arrSrc) {
  var checked = arrCheck.filter(function(val) {
    return arrSrc.indexOf(val) === -1;
  })

  for (var y=0;y<checked.length;y++) {
    fighterMissing.push(checked[y])
  }
  
}