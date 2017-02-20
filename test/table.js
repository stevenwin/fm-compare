var Table = require('cli-table');

// instantiate 
var table = new Table({
    head: ['Fighter Name', 'Age', 'Nationality', 'Win Streak']
  , colWidths: [20, 10, 10, 10]
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends 
table.push(
    ['First', 'Second', 'Third', 'Fourth']
  , ['First', 'Second', 'Third', 'Fourth']
);
 
console.log(table.toString());