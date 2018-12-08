var test = require('tape');
var Weight = require('../src/weight');

test('Parse tests', function (t) {
    let strings = [
        '10lbs 4oz',
        '8lb    36oz',
        '164oz',
        '48.85oz',
        '3lbs, 1oz',
        '2lbs,  17oz'
    ];

    t.plan(strings.length);

    strings.forEach((string) => {
        let ounces = Weight.textToOunces(string);

        t.equal(typeof ounces, 'number', `${string} = ${Weight.ouncesToText(ounces)}`);
    });
});
