var test = require('tape');
var Weight = require('../dist/weight.js');

// Strings for parse tests
var strings = [
    '8lb    36oz',
    '164.85oz',
    '2lbs,  17oz'
];

test('Ounces parse tests', function (t) {
    t.plan(strings.length);

    // Validate Ounces.parse()
    strings.forEach((string) => {
        let ounces = Weight.Ounces.parse(string);

        t.true(ounces instanceof Weight.Ounces, string);
    });
});

test('Pounds parse tests', function (t) {
    t.plan(strings.length);

    // Validate Pounds.parse()
    strings.forEach((string) => {
        let pounds = Weight.Pounds.parse(string);

        t.true(pounds instanceof Weight.Pounds, string);
    });
});

test('Additional tests', function (t) {
    t.plan(3);

    // Create Ounces object from number
    let ounces1 = new Weight.Ounces(24);

    t.true(ounces1 instanceof Weight.Ounces, 'Object handling #1');

    // Create Ounces object from Ounces object
    let ounces2 = new Weight.Ounces(ounces1);

    t.true(ounces2 instanceof Weight.Ounces, 'Object handling #2');

    // Validate both objects are equal
    t.equal(ounces2.value, ounces1.value, 'Object handling #3');
});
