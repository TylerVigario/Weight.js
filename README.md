Weight.js
=========

Utility class to convert imperial mass units as well as output and parse as text.

Install
-------
```javascript
npm install weight.js
```

Usage
-----
**ES6**
```javascript
import {Ounces, Pounds} from 'weight.js/src/weight';
```
```javascript
import Ounces from 'weight.js/src/ounces';
```
```javascript
import Pounds from 'weight.js/src/pounds';
```

**CommonJS**
```javascript
var Weight = require('../dist/weight.js');
var Ounces = Weight.Ounces;
var Pounds = Weight.Pounds;
```
```javascript
var Ounces = require('../dist/weight.js').Ounces;
```
```javascript
var Pounds = require('../dist/weight.js').Pounds;
```

Example
-------
```javascript
let ounces = Ounces.parse('   5lb ,  4oz');

console.log(ounces.value); // 84

let extraOunces = new Ounces(6);

ounces.add(extraOunces);

console.log(ounces.value); // 90

if (ounces.equals(Ounces.parse('90oz'))) {
  console.log(ounces.toString()); // "5lbs 10oz"
}
```
