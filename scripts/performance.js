/* eslint no-console: 0 */

var microtime = require('microtime');
var Mass = require('../dist/mass');

var time, i;

// Ounces
console.log('Performance');
console.log('================');

// parse
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Mass.parse('25 lb  16oz');
}

time = microtime.now() - time;

console.log('parse: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// parseSingleUnit
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Mass.parseSingleUnit('25 oz');
}

time = microtime.now() - time;

console.log('parseSingleUnit: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// parseDualUnit
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Mass.parseDualUnit('25 lb  16oz', 6);
}

time = microtime.now() - time;

console.log('parseDualUnit: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// format
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Mass.format(416);
}

time = microtime.now() - time;

console.log('toString: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

//
console.log();