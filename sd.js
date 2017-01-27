const sherdog = require("sherdog");
var urlA = "http://www.sherdog.com/fighter/Cody-Garbrandt-50381";
var urlB = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var todayDate = 'Jan/09/2013'


function testies(url) {
	var a = "winner"

	function appendTo() {
		sherdog.getFighter(url, getData);
		function getData(data) {
		return data
		}
	}
	appendTo();
}

testies(urlA);
console.log(testies(urlA));