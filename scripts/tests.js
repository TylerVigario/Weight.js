/* eslint no-console: 0 */

var test = require('tape');
var Mass = require('../dist/mass');

var problems = [{
    question: '8lb 36oz',
    answer: '10 lbs 4 oz',
    ounces: 164,
    pounds: 10.25
},
{
    question: '164.85oz',
    answer: '10 lbs 5 oz',
    ounces: 164.85,
    pounds: 10.303125
},
{
    question: '10lbs',
    answer: '10 lbs',
    ounces: 160,
    pounds: 10
},
{
    question: '2lbs ,  17oz',
    answer: '3 lbs 1 oz',
    ounces: 49,
    pounds: 3.0625
},
{
    question: 48,
    answer: '3 lbs',
    ounces: 48,
    pounds: 3
},
{
    question: '17 lb 14 oz',
    answer: '17 lbs 14 oz',
    ounces: 286,
    pounds: 17.875
},
{
    question: '3lbs4oz',
    answer: '3 lbs 4 oz',
    ounces: 52,
    pounds: 3.25
},
{
    question: '3lbs 4',
    answer: '3 lbs 4 oz',
    ounces: 52,
    pounds: 3.25
},
{
    question: '4 oz',
    answer: '4 oz',
    ounces: 4,
    pounds: 0.25
},
{
    question: '16oz4lb',
    answer: '5 lbs',
    ounces: 80,
    pounds: 5
},
{
    question: -45,
    answer: '0 oz',
    ounces: 0,
    pounds: 0
},
{
    question: '  ',
    answer: '0 oz',
    ounces: 0,
    pounds: 0
},
{
    question: '20  lb, 20 o z ',
    answer: '21 lbs 4 oz',
    ounces: 340,
    pounds: 21.25
}
];

var invalidWeights = [
    'weight.js',
    'not,a,weight'
];

test('Parse tests', function (t) {
    t.plan(problems.length);

    // Validate Mass.parse()
    problems.forEach((problem) => {
        let ounces = Mass.parse(problem.question);

        if (typeof ounces !== 'number') {
            t.error(ounces, 'Error during parse.');
        }

        t.equal(ounces, problem.ounces, problem.question);
    });
});

test('Invalid parse tests', function (t) {
    t.plan(invalidWeights.length);

    // Mass.parse() invalid weight handling
    invalidWeights.forEach((weight) => {
        let ounces = Mass.parse(weight);

        t.equal(ounces, false, weight);
    });
});

test('Format tests', function (t) {
    t.plan(problems.length);

    // Validate Mass.format()
    problems.forEach((problem) => {
        let ounces = Mass.parse(problem.question);
        let massString = Mass.format(ounces);

        t.equal(massString, problem.answer, massString);
    });
});
