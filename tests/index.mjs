import test from 'tape';
import Ounces from '../src/ounces.mjs';
import Pounds from '../src/pounds.mjs';

var strings = [
    '8lb    36oz',
    '164.85oz',
    '2lbs,  17oz'
];

test('Ounces parse tests', function (t) {
    t.plan(strings.length);

    strings.forEach((string) => {
        let ounces = Ounces.parse(string);

        t.true(ounces instanceof Ounces, string);
    });
});

test('Pounds parse tests', function (t) {
    t.plan(strings.length);

    strings.forEach((string) => {
        let pounds = Pounds.parse(string);

        t.true(pounds instanceof Pounds, string);
    });
});

test('Additional tests', function (t) {
    t.plan(3);

    let ounces1 = new Ounces(24);
    let ounces2 = new Ounces(ounces1);

    t.true(ounces1 instanceof Ounces, 'Object handling #1');
    t.true(ounces2 instanceof Ounces, 'Object handling #2');

    t.equal(ounces2.value, ounces1.value, 'Object handling #3');
});
