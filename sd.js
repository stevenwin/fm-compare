const sherdog = require("sherdog");
var urlA = "http://www.sherdog.com/fighter/Cody-Garbrandt-50381";
var urlB = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var todayDate = 'Jan/09/2013'

var fighterA;
var fighterA_KO_wins = 0;
var fighterA_TKO_wins = 0;
var fighterA_sub_wins = 0;
var fighterA_dec_wins = 0;
var fighterA_TKO_losses = 0;
var fighterA_KO_losses = 0;
var fighterA_sub_losses = 0;
var fighterA_dec_losses = 0;
var fighterA_wins = 0;
var fighterA_losses = 0;

var fighterB;
var fighterB_KO_wins = 0;
var fighterB_TKO_wins = 0;
var fighterB_sub_wins = 0;
var fighterB_dec_wins = 0;
var fighterB_TKO_losses = 0;
var fighterB_KO_losses = 0;
var fighterB_sub_losses = 0;
var fighterB_dec_losses = 0;
var fighterB_wins = 0;
var fighterB_losses = 0;

var wait = "#";
var waitTime = 1;
var timeOut = 6;

// Get FighterA Data from Sherdog
sherdog.getFighter(urlA, function(data) {
	//console.log(data.name); // Cody
	function getName() {
		console.log(data.name);
	}
	getName();

	function getFights() {
		for(var i=0;i<data.fights.length;i++) {
			console.log(data.fights[i].opponent);
		}
	}
	getFights();
});