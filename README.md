[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e1f9c8a954f4c21b850f7b1ab4f4575)](https://www.codacy.com/app/MeekLogic/Weight.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MeekLogic/Weight.js&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.com/MeekLogic/Weight.js.svg?branch=master)](https://travis-ci.com/MeekLogic/Weight.js) [![Coverage Status](https://coveralls.io/repos/github/MeekLogic/Weight.js/badge.svg?branch=master)](https://coveralls.io/github/MeekLogic/Weight.js?branch=master) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMeekLogic%2FWeight.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMeekLogic%2FWeight.js?ref=badge_shield)

mass.js
=========
JavaScript classes to convert imperial mass units as well as output and parse as text.

Install
-------
```javascript
npm install weight.js
```

Usage
-----
**ES6**
```javascript
import {Mass} from 'weight.js/src/mass';
```

**CommonJS**
```javascript
var Mass = require('mass');
```

Example
-------
```javascript
let ounces = Mass.parse('5lbs  4 oz');

console.log(ounces); // 84

ounces = ounces + 6; // 90

if (ounces === 90) {
    console.log(Mass.format(ounces)); // "5 lbs 10 oz"
}
```
