(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Mass"] = factory();
	else
		root["Mass"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/massUnits.js
var MassUnits = {
  Ounce: {
    value: 16,
    signifiers: ['oz', 'ounce', 'ounces']
  },
  Pound: {
    value: 1,
    signifiers: ['lb', 'lbs', 'pound', 'pounds']
  }
};

// CONCATENATED MODULE: ./src/mass.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mass_Mass; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** 
 * Parsing and formatting imperial mass units.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 2.0.0
 */

/**
 * Class for working with string representations of mass.
 */

var mass_Mass =
/*#__PURE__*/
function () {
  function Mass() {
    _classCallCheck(this, Mass);
  }

  _createClass(Mass, null, [{
    key: "parse",

    /**
     * Parse variable for Mass.
     * 
     * @param {(number|string)} text - Variable to parse for mass.
     * @returns {(number|false)} Returns mass represented in it's base imperial unit (pound) or false.
     * @see {@link Mass.parseUnit}
     */
    value: function parse(text) {
      if (typeof text === 'number') {
        // Value cannot be lower than zero
        if (text < 0) {
          text = 0;
        }

        return text;
      } // We expect to parse a string
      else if (typeof text !== 'string') {
          return false;
        } // Remove all spaces and commas


      text = text.replace(/[, ]+/g, ''); // Is string empty?

      if (text.length === 0) {
        return 0;
      } // Remove possible case sensitivity


      text = text.toLowerCase(); // Find all signifiers within string

      var signifiers = Mass.findSignifiers(text); // Did we not find any signifiers?

      if (signifiers.length === 0) {
        return false;
      } // Extract individual unit for parsing


      var total = 0;
      var i = 0;
      signifiers.forEach(function (signifier) {
        // Copy single unit from string
        var singleUnit = text.substring(i, signifier.splitAt); // Parse individual unit and add result to total

        total += Mass.parseUnit(singleUnit, MassUnits[signifier.unit]); // Set starting point for next search

        i = signifier.splitAt;
      }); // Return total mass (as pounds)

      return total;
    }
    /**
     * Find mass unit signifiers within string.
     *
     * @param {string} text
     * @returns {array}
     */

  }, {
    key: "findSignifiers",
    value: function findSignifiers(text) {
      // Find first signifier
      var signifiers = []; // Loop through MassUnits

      var _loop = function _loop(MassUnit) {
        var signifier = -1; // Loop through each MassUnit's signifiers

        MassUnits[MassUnit].signifiers.forEach(function (s) {
          // Look for signifier
          var o = text.indexOf(s); // Did we find signifier?

          if (o !== -1) {
            // Since we want the index to represent the split BETWEEN units
            // we will add the length of the signifier to include it
            o = o + s.length; // We want to find the first signifier in the string

            if (signifier === -1 || o > signifier.splitAt) {
              signifier = {
                unit: MassUnit,
                signifier: s,
                splitAt: o
              };
            }
          }
        }); // We want to find the first signifier in the string

        if (signifier !== -1) {
          // Add only one (found) signifier per unit
          signifiers.push(signifier);
        }
      };

      for (var MassUnit in MassUnits) {
        _loop(MassUnit);
      } // Sort ascending by splitAt index


      signifiers.sort(function (a, b) {
        return a.splitAt - b.splitAt;
      });
      return signifiers;
    }
    /**
     * Parse string for single mass unit.
     * 
     * @param {string} text - String to parse for single mass unit.
     * @param {object} MassUnit
     * @returns {(number|false)} Returns mass represented in it's base imperial unit (pound) or false.
     */

  }, {
    key: "parseUnit",
    value: function parseUnit(text, MassUnit) {
      // Validate variable is of type string
      if (typeof text !== 'string') {
        return false;
      } // Pull number from string


      var mass = parseFloat(text); // Validate we were able to extract a number

      if (isNaN(mass)) {
        return false;
      } // Value cannot be lower than zero


      if (mass < 0) {
        // Return lowest possible value
        return 0;
      } // Convert to base unit


      return mass / MassUnit.value;
    }
    /**
     * Format mass as text.
     * 
     * @param {number} pounds - Mass (represented as base unit pound) to format.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
     * @returns {string} Formatted mass string.
     */

  }, {
    key: "format",
    value: function format(pounds) {
      var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var roundTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var formattedWeight = ''; // Convert pounds to ounces

      var ounces = pounds * 16; // Check if pounds is less than one

      if (pounds < 1) {
        // Return formatted ounces only
        return ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
      } // Floor pounds to remove change


      pounds = Math.floor(pounds); // Subtract ounces equal to whole pounds (leaving remaining ounces)

      ounces -= pounds * 16; // Format pounds

      formattedWeight = pounds + (spaces ? ' ' : '') + (pounds > 1 ? 'lbs' : 'lb'); // Verify remaining ounces

      if (ounces > 0) {
        // Format ounces
        formattedWeight += ' ' + ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
      }

      return formattedWeight;
    }
  }]);

  return Mass;
}();



/***/ })
/******/ ])["default"];
});