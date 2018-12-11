var test = require('tape');
var Weight = require('../dist/weight.js');
var Pounds = Weight.Pounds;
var Ounces = Weight.Ounces;

var problems = [{
        question: '8lb 36oz',
        ounces: 164,
        pounds: 10.25
    },
    {
        question: '164.85oz',
        ounces: 164.85,
        pounds: 10.303125
    },
    {
        question: '10lbs',
        ounces: 160,
        pounds: 10
    },
    {
        question: '2lbs ,  17oz',
        ounces: 49,
        pounds: 3.0625
    },
    {
        question: 48,
        ounces: 48,
        pounds: 3
    },
    {
        question: '17 lb 14 oz',
        ounces: 286,
        pounds: 17.875
    },
    {
        question: '3lbs4oz',
        ounces: 52,
        pounds: 3.25
    },
    {
        question: '3lbs 4',
        ounces: 52,
        pounds: 3.25
    },
    {
        question: '4 oz',
        ounces: 4,
        pounds: 0.25
    }
];

test('Ounces parse tests', function (t) {
    t.plan(problems.length);

    // Validate Ounces.parse()
    problems.forEach((problem) => {
        let ounces = Ounces.parse(problem.question);

        t.equal(ounces.value, problem.ounces, problem.question);
    });
});

test('Pounds parse tests', function (t) {
    t.plan(problems.length);

    // Validate Pounds.parse()
    problems.forEach((problem) => {
        let pounds = Pounds.parse(problem.question);

        t.equal(pounds.value, problem.pounds, problem.question);
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
