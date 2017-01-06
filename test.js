const mma = require("mma");
const request = require("request");

// Declare Variables
var fighter_a;
var a_points;



var fighter_b;
var b_points;



//var url = "http://www.sherdog.com/fighter/Matt-Riddle-34072";
var fighter_a = "Alistair Overeem";
var fighter_b = "Chuck Liddell";

// Grab Sherdog stats for two fighters based on their URLs
mma.fighter(fighter_a, data_a);
mma.fighter(fighter_b, data_b);

function data_a(data) {
	fighter_a = data;
}
function data_b(data) {
	fighter_b = data;
}