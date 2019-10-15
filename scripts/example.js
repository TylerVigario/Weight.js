/* eslint no-console: 0 */

var Mass = require('../dist/mass');

//
// Example
//

// Parse string for ounces
let ounces = Mass.parse('5lbs  4 oz');

console.log(ounces); // 84

// Add 6 ounces
ounces = ounces + 6;

console.log(ounces); // 90

// Verify total is 90 ounces
if (ounces === 90) {
    // Format total for human-readable string
    console.log(Mass.format(ounces)); // "5 lbs 10 oz"
}

//
console.log();
