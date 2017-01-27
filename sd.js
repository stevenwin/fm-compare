const sherdog = require("sherdog");
const request = require("request");
const fighter_url = require('./sherdogurl.js')
var urlA = "http://www.sherdog.com/fighter/Cody-Garbrandt-50381";
var urlB = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var todayDate = 'Jan/09/2013'


// Get FighterA Data from Sherdog
sherdog.getFighter(url, fighterFunction);


function fighterFunction(data) {
	
}