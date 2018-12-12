var microtime = require('microtime')
var Ounces = require('../dist/weight').Ounces;

// Parse
let time = microtime.now();

for (var i = 0; i < 1000000; i++) {
    Ounces.parse('25 lb  16oz');
}

time = microtime.now() - time;

console.log('parse: ' + (i / (time / 1000)).toFixed(2) + ' op/s');

// toString
let weight = new Ounces(416);

time = microtime.now();

for (i = 0; i < 1000000; i++) {
    weight.toString();
}

time = microtime.now() - time;

console.log('toString: ' + (i / (time / 1000)).toFixed(2) + ' op/s');

console.log();
