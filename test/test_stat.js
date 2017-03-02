stat1 = require("./stat1.js")
stat2 = require("./stat2.js")
stat3 = require("./stat3.js")
stat4 = require("./stat4.js")
stat5 = require("./stat5.js")
stat6 = require("./stat6.js")
stat7 = require("./stat7.js")
stat8 = require("./stat8.js")
stat9 = require("./stat9.js")
stat10 = require("./stat10.js")
stat11 = require("./stat11.js")
stat12 = require("./stat12.js")
fs = require('fs')

var yes = 0
var no = 0

var statArray = [null, 2, null, null, null, null, null, null, null, null, null, null]
testStat(statArray)

function testStat(statArray) {
	if (statArray[0] === 1) {
		for (var i=0;i<stat1.length;i++) {
			if ((stat1[i][0].age >32 && stat1[i][0].older_32 === true) || (stat1[i][1].age >32 && stat1[i][1].older_32 === true))  {
				yes += 1
			}
			else 
				no += 1
		}
	}

	if (statArray[1] === 2) {
		for (var i=0;i<stat2.length;i++) {
			if ((stat2[i][0].age >32 && stat2[i][1].wins.knockouts >= 6) || (stat2[i][1].age >32 && stat2[i][0].wins.knockouts >= 6)) {
				yes += 1
			}
			else {
				no += 1
			}
		}
	}

	if (statArray[2] === 3) {
		for (var i=0;i<stat3.length;i++) {
			if (stat3[i][0].losses.knockouts >= 2 || stat3[i][1].losses.knockouts >= 2) {
				yes += 1
			}
			else {
				fs.appendFileSync('./test_log.js', "stat3    "+stat3[i][0].name+" AND "+stat3[i][1].name+'\n')
				no += 1
			}
		}
	}

	if (statArray[3] === 4) {
		for (var i=0;i<stat4.length;i++) {
			if ((stat4[i][0].losses.submissions < stat4[i][1].losses.submissions) || (stat4[i][1].losses.submissions < stat4[i][0].losses.submissions)) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat4    "+stat4[i][0].name+" AND "+stat4[i][1].name+'\n')
			}
		}
	}

	if (statArray[4] === 5) {
		for (var i=0;i<stat5.length;i++) { 
			if (stat5[i][0].losses.total >= 6 || stat5[i][1].losses.total >= 6) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat5    "+stat5[i][0].name+" AND "+stat5[i][1].name+'\n')
			}
		}
	}

	if (statArray[5] === 6) {
		for (var i=0;i<stat6.length;i++) {
			if ((stat6[i][0].wins.total >= 18 && stat6[i][0].b2b_loss === false) || (stat6[i][1].wins.total >= 18 && stat6[i][1].b2b_loss === false)) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat6    "+stat6[i][0].name+" AND "+stat6[i][1].name+'\n')
			}
		}
	}

	if (statArray[6] === 7) {
		for (var i=0;i<stat7.length;i++) {
			if (stat7[i][0].b2b_loss === true || stat7[i][1].b2b_loss === true) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat7    "+stat7[i][0].name+" AND "+stat7[i][1].name+'\n')
			}
		}
	}

	if (statArray[7] === 8) {
		for (var i=0;i<stat8.length;i++) {
			if (stat8[i][0].wins.knockouts === 0 || stat8[i][1].wins.knockouts === 0) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat8    "+stat8[i][0].name+" AND "+stat8[i][1].name+'\n')
			}
		}
	}

	if (statArray[8] === 9) {
		for (var i=0;i<stat9.length;i++) {
			if (stat9[i][0].wins.total > 14 && stat9[i][0].losses.total/stat9[i][1].losses.total >= 2) {
				yes += 1
			}
			else if (stat9[i][1].wins.total > 14 && stat9[i][1].losses.total/stat9[i][0].losses.total >= 2) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat9    "+stat9[i][0].name+" AND "+stat9[i][1].name+'\n'+
					"wintotalA "+stat9[i][0].wins.total+" wintotalB "+stat9[i][1].wins.total+'\n'+
					"lossestotalA "+stat9[i][0].losses.total+" lossestotalB "+stat9[i][1].losses.total+"\n"+"\n")
			}
		}
	}

	if (statArray[9] === 10) {
		for (var i=0;i<stat10.length;i++) {
			if ((stat10[i][0].wins.total/stat10[i][1].wins.total >= 2 && stat10[i][1].last_fight_win === false) || (stat10[i][1].wins.total/stat10[i][0].wins.total >= 2 && stat10[i][0].last_fight_win === false)) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat10    "+stat10[i][0].name+" AND "+stat10[i][1].name+'\n')
			}
		}
	}

	if (statArray[10] === 11) {
		for (var i=0;i<stat11.length;i++) {
			if ((stat11[i][0].wins.decisions/stat11[i][1].wins.decisions >= 3) || (stat11[i][1].wins.decisions/stat11[i][0].wins.decisions >= 3)) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat11    "+stat11[i][0].name+" AND "+stat11[i][1].name+'\n')
			}
		}
	}

	if (statArray[11] === 12) {
		for (var i=0;i<stat12.length;i++) {
			if (stat12[i][0].ring_rust === true || stat12[i][1].ring_rust === true) {
				yes += 1
			}
			else {
				no += 1
				fs.appendFileSync('./test_log.js', "stat12    "+stat12[i][0].name+" AND "+stat12[i][1].name+'\n')
			}
		}
	}
}








/*for (var i=0;i<stat12.length;i++) {
	if (stat12[i][0].ring_rust === true && stat12[i][1].ring_rust === false) {
		yes += 1
	}
	else if(stat12[i][0].ring_rust === false && stat12[i][1].ring_rust === true) {
		yes += 1
	}
	else {
		no += 1
	}
}*/

/*for (var i=0;i<stat10.length;i++) {
	if (stat10[i][0].wins.total/stat10[i][1].wins.total >= 2 && stat10[i][1].last_fight_win === false) {
		yes += 1
	}
	else if(stat10[i][1].wins.total/stat10[i][0].wins.total >= 2 && stat10[i][0].last_fight_win === false) {
		yes += 1
	}
	else {
		no += 1
	}
}*/

console.log(yes)
console.log(no)


/*function compareStat(sFile, stat) {
	var res = {
	   total: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat1: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat2: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat3: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat4: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat5: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat6: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat7: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat8: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat9: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat10: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat11: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   },
	   stat12: {
	      right: 0,
	      wrong: 0,
	      equal: 0,
	      total: 0
	   }
	}

	for (var i=0; i<sFile.Length; i++) {
		if (stat === 'yes') {
			if (sFile[i][0].age > 32 || sFile[i][1].age > 32) {
				res.stat1.right += 1
			}
			else {
				res.stat1.wrong += 1
			}
		}

		else if (stat === 2) {
			if ((sFile[i][0].age > 32 && sFile[i][1].wins.knockouts > 6) || (sFile[i][0].knockouts > 6 && sFile[i][1].wins.age > 32)) {
				res.stat2.right += 1
			}
			else {
				res.stat2.wrong += 1
			}
		}
	}

	return res
}

var doot = compareStat(stat1, 'yes')

setTimeout(function() {
	console.log(doot)
},4000)
*/
