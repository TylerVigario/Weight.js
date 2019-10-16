/* eslint no-console: 0 */

var microtime = require('microtime');
var Mass = require('../dist/mass');

var rounds = 1000000;
var time, i;

// parse
test(() => {
    Mass.parse('25 lb  16oz');
}, 'parse');

// findSignifiers
test(() => {
    Mass.findSignifiers('25lb16oz');
}, 'findSignifiers');

// parseUnit
test(() => {
    Mass.parseUnit('25 oz', {
        value: 16
    });
}, 'parseUnit');

// format
test(() => {
    Mass.format(26);
}, 'format');

//
console.log();

/**
 * Function to run test
 *
 * @param {function} test
 * @param {string} [name="Unknown method"]
 */
function test(test, name = 'Unknown method') {
    time = microtime.now();

    for (i = rounds; i > 0; i = i - 1) {
        test();
    }

    time = microtime.now() - time;

    time = time / 1000;

    console.log(`${name}: ${Math.round(rounds / time).toLocaleString()}  op/s`);
}