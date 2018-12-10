import test from 'tape';
import Ounces from '../src/ounces.mjs';
import Pounds from '../src/pounds.mjs';

var strings = [
    '10lbs 4oz',
    '8lb    36oz',
    '164oz',
    '48.85oz',
    '3lbs, 1oz',
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
