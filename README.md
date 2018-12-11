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
**[ES6] Importing (one of the below)**
```javascript
import {Ounces, Pounds} from 'weight.js/src/weight.mjs';
```
```javascript
import Ounces from 'weight.js/src/ounces.mjs';
```
```javascript
import Pounds from 'weight.js/src/pounds.mjs';
```

**CommonJS**
```javascript
var Weight = require('Weight.js');
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
