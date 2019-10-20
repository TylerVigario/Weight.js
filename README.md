[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e1f9c8a954f4c21b850f7b1ab4f4575)](https://www.codacy.com/app/MeekLogic/Mass.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MeekLogic/Mass.js&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.com/MeekLogic/Mass.js.svg?branch=develop)](https://travis-ci.com/MeekLogic/Mass.js) [![Coverage Status](https://coveralls.io/repos/github/MeekLogic/mass.js/badge.svg?branch=develop)](https://coveralls.io/github/MeekLogic/mass.js?branch=develop) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMeekLogic%2FMass.js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FMeekLogic%2FMass.js?ref=badge_shield)

Mass.js
=========
JavaScript classes to convert imperial mass units as well as output and parse as text.

**[Documentation](https://meeklogic.github.io/Mass.js/)**

Install
-------
```javascript
npm install Mass.js
```

Usage
-----
**ES6**
```javascript
import {Mass as mass} from 'Mass.js/src/mass';
var Mass = new mass();
```

**CommonJS**
```javascript
var mass = require('Mass.js');
var Mass = new mass();
```

Example
-------
```javascript
// Parse string for ounces
let pounds = Mass.parse('5lbs  4 oz');

console.log(pounds); // 5.25

// Add 12 ounces
pounds += (12 / 16);

console.log(pounds); // 6

// Verify total is 90 ounces
if (pounds === 6) {
    // Format total for human-readable string
    console.log(Mass.format(pounds)); // "6 lbs"
} else {
    console.error('Did we forget to run our tests?');
}
```
