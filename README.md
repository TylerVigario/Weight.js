[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e1f9c8a954f4c21b850f7b1ab4f4575)](https://www.codacy.com/app/MeekLogic/Weight.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MeekLogic/Weight.js&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.com/MeekLogic/Weight.js.svg?branch=master)](https://travis-ci.com/MeekLogic/Weight.js) [![Coverage Status](https://coveralls.io/repos/github/MeekLogic/Weight.js/badge.svg?branch=develop)](https://coveralls.io/github/MeekLogic/Weight.js?branch=develop) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMeekLogic%2FWeight.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMeekLogic%2FWeight.js?ref=badge_shield)

Weight.js
=========
JavaScript classes to convert imperial mass units as well as output and parse as text.

**[Documentation](https://meeklogic.github.io/Weight.js/)**

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
//or
import Ounces from 'weight.js/src/ounces';
//or
import Pounds from 'weight.js/src/pounds';
```

**CommonJS**
```javascript
var Weight = require('../dist/weight.js');
var Ounces = Weight.Ounces;
var Pounds = Weight.Pounds;
//or
var Ounces = require('../dist/weight.js').Ounces;
//or
var Pounds = require('../dist/weight.js').Pounds;
```

Example
-------
```javascript
let ounces = Ounces.parse('5lbs  4 oz');

console.log(ounces.value); // 84

ounces.add(new Ounces(6));

console.log(ounces.value); // 90

if (ounces.isSame(new Ounces(90))) {
    console.log(ounces.toString()); // "5 lbs 10 oz"
}
```
