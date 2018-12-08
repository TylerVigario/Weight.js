var test = require('tape');
var Weight = require('../src/weight');

test('Weight.js Tests', function (t) {
    t.plan(4);

    let text = '10lbs 4oz';
    let ounces = Weight.textToOunces(text); // 164oz

    t.equal(ounces, 164, 'Parse ounces from text.');

    let pounds = Weight.ouncesToPounds(ounces); // 10.25lbs

    t.equal(pounds, 10.25, 'Convert ounces to pounds.');

    t.equal(Weight.poundsToOunces(pounds), ounces, 'Convert pounds to ounces.');

    t.equal(Weight.poundsToText(pounds), text, 'Format weight to text.');
});
