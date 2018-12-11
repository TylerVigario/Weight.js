var test = require('tape');
var Weight = require('../dist/weight.js');
var Pounds = Weight.Pounds;
var Ounces = Weight.Ounces;

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
        let ounces = Ounces.parse(string);

        t.true(ounces instanceof Ounces, string);
    });
});

test('Pounds parse tests', function (t) {
    t.plan(strings.length);

    // Validate Pounds.parse()
    strings.forEach((string) => {
        let pounds = Pounds.parse(string);

        t.true(pounds instanceof Pounds, string);
    });
});

test('Additional tests', function (t) {
    t.plan(3);

    // Create Ounces object from number
    let ounces1 = new Ounces(24);

    t.true(ounces1 instanceof Ounces, 'Object handling #1');

    // Create Ounces object from Ounces object
    let ounces2 = new Ounces(ounces1);

    t.true(ounces2 instanceof Ounces, 'Object handling #2');

    // Validate both objects are equal
    t.equal(ounces2.value, ounces1.value, 'Object handling #3');
});
