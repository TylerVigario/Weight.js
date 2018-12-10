var test = require('tape');
var Ounces = require('../src/ounces');

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
        let ounces = Ounces.parse(string);

        t.equal(typeof ounces, 'object', `${string} = ${ounces.toString()}`);
    });
});
