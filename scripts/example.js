/* eslint no-console: 0 */

var Mass = require('../dist/mass');

//
// Example
//

// Parse string for ounces
let pounds = Mass.parse('5lbs  4 oz');

console.log(pounds); // 5.25

// Add 12 ounces
pounds += (12 / 16);

console.log(pounds); // 6

// Verify total is 90 ounces
if (pounds === 6) {
    // Format total for human-readable string
    console.log(Mass.format(pounds)); // "6 lbs"
} else {
    console.error('Did we forget to run our tests?');
}

//
console.log();
