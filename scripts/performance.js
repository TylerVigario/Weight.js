/* eslint no-console: 0 */

var microtime = require('microtime');
var Mass = require('../dist/mass');

//
// Performance
//

// parse
test('parse', () => {
    Mass.parse('25 lb  16oz');
});

// findSignifiers
test('findSignifiers', () => {
    Mass.findSignifiers('25lb16oz');
});

// parseUnit
test('parseUnit', () => {
    Mass.parseUnit('25 oz', {
        value: 16
    });
});

// format
test('format', () => {
    Mass.format(26);
});

//
console.log();

/**
 * Function to run test
 *
 * @param {function} test
 * @param {string} [name="Unknown method"]
 */
function test(name, test, rounds = 1000000) {
    let time = microtime.now();

    for (let i = rounds; i > 0; i = i - 1) {
        test();
    }

    time = microtime.now() - time;

    time = time / 1000;

    console.log(`${name}: ${Math.round(rounds / time).toLocaleString()}  op/s`);
}