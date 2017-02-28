stat1 = require("./stat1.js")
stat2 = require("./stat2.js")
/*stat3 = require("./stat3.js")
stat4 = require("./stat4.js")
stat5 = require("./stat5.js")
stat6 = require("./stat6.js")
stat7 = require("./stat7.js")
stat8 = require("./stat8.js")
stat9 = require("./stat9.js")
stat10 = require("./stat10.js")
stat11 = require("./stat11.js")*/





function compareStat(sFile, stat) {
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

