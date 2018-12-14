var microtime = require('microtime')
var Weight = require('../dist/weight');
var Ounces = Weight.Ounces;
var Pounds = Weight.Pounds;

var time, i, weight;

//

// Ounces
console.log('Ounces');
console.log('================');

// parse
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Ounces.parse('25 lb  16oz');
}

time = microtime.now() - time;

console.log('parse: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// parseSingleUnit
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Ounces.parseSingleUnit('25 oz  ');
}

time = microtime.now() - time;

console.log('parseSingleUnit: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// parseDualUnit
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Ounces.parseDualUnit('25 lb  16oz', 6);
}

time = microtime.now() - time;

console.log('parseDualUnit: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// toString
weight = new Ounces(416);

time = microtime.now();

for (i = 0; i < 1000000; i++) {
    weight.toString();
}

time = microtime.now() - time;

console.log('toString: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// toPounds
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    weight.toPounds();
}

time = microtime.now() - time;

console.log('toPounds: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

//
console.log();

// Pounds
console.log('Pounds');
console.log('================');

// parse
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Pounds.parse('25 lb  16oz');
}

time = microtime.now() - time;

console.log('parse: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// parseSingleUnit
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Pounds.parseSingleUnit('25 lb  ');
}

time = microtime.now() - time;

console.log('parseSingleUnit: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// parseDualUnit
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    Pounds.parseDualUnit('25 lb  16oz', 6);
}

time = microtime.now() - time;

console.log('parseDualUnit: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// toString
weight = new Pounds(26);

time = microtime.now();

for (i = 0; i < 1000000; i++) {
    weight.toString();
}

time = microtime.now() - time;

console.log('toString: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

// toOunces
time = microtime.now();

for (i = 0; i < 1000000; i++) {
    weight.toOunces();
}

time = microtime.now() - time;

console.log('toOunces: ' + Math.round(i / (time / 1000)).toLocaleString() + ' op/s');

//
console.log();
