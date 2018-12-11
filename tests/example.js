var Ounces = require('../dist/weight').Ounces;

// Example

let ounces = Ounces.parse('5lbs  4 oz');

console.log(ounces.value); // 84

ounces.add(new Ounces(6));

console.log(ounces.value); // 90

if (ounces.isSame(new Ounces(90))) {
    console.log(ounces.toString()); // "5 lbs 10 oz"
}

//
console.log();
