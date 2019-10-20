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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mass; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** 
 * Parsing and formatting mass units.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 2.0.0
 */

/**
 * Class for working with string representations of mass.
 */
var Mass =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Mass.
   */
  function Mass() {
    var units = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
      name: 'Grain',
      value: -7000,
      signifiers: ['gr', 'grain', 'grains']
    }, {
      name: 'Drachm',
      value: -255.999,
      signifiers: ['dr', 'drachm', 'drachms']
    }, {
      name: 'Ounce',
      value: -16,
      signifiers: ['oz', 'ounce', 'ounces']
    }, {
      name: 'Pound',
      value: 1,
      signifiers: ['lb', 'lbs', 'pound', 'pounds']
    }, {
      name: 'Stone',
      value: 14,
      signifiers: ['st', 'stone', 'stones']
    }, {
      name: 'Quarter',
      value: 28,
      signifiers: ['qr', 'qtr', 'quarter', 'quarters']
    }, {
      name: 'Hundredweight',
      value: 112,
      signifiers: ['cwt', 'hundredweight']
    }, {
      name: 'Ton',
      value: 2240,
      signifiers: ['t', 'ton', 'tons']
    }];

    _classCallCheck(this, Mass);

    this.Units = units;
  }
  /**
   * Parse variable for Mass.
   * 
   * @param {(number|string)} text - Variable to parse for mass.
   * @returns {(number|false)} Returns mass represented in it's base mass unit or false.
   */


  _createClass(Mass, [{
    key: "parse",
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
        } // Remove possible case sensitivity


      text = text.toLowerCase(); // Remove non alphanumeric characters

      text = text.replace(/[^0-9a-z.]/gi, ''); // Is string empty?

      if (text.length === 0) {
        return 0;
      } // Character trailing parser


      var i = 0;
      var value = '';
      var signifier = '';
      var pairs = []; // Loop through each character of string

      for (; i < text.length; i++) {
        // Get current char
        var _char = text.charAt(i); // Check for alphabet letter (a-z,0-9|a-z,0-9|...) [comma = separator between value and signifier, | = separator between pairs]


        if (_char.match(/[a-z]/i)) {
          signifier += _char;
        } else {
          // Check if this is next unit pair (i.e. value,signifier|value,signifier|...)
          if (signifier.length > 0) {
            // Add pair to list of found pairs
            pairs.push({
              value: value,
              signifier: signifier
            }); // Reset storage variables

            value = '';
            signifier = '';
          }

          value += _char;
        }
      } // Make sure we found both a value and a unit signifier


      if (value.length === 0 || signifier.length === 0) {
        return false;
      } // Add final pair


      pairs.push({
        value: value,
        signifier: signifier
      }); // Calculate total

      var total = 0; // Loop through each pair

      for (var _i = 0, _pairs = pairs; _i < _pairs.length; _i++) {
        var pair = _pairs[_i];
        var found = false; // Loop through each Unit

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.Units[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var unit = _step.value;

            // Check if signifier matches Unit
            if (unit.signifiers.includes(pair.signifier)) {
              found = true; // Convert to base unit value and add to total

              if (unit.value > 0) {
                total += pair.value * unit.value;
              } else {
                total += pair.value / Math.abs(unit.value);
              } // No need to keep searching


              break;
            }
          } // Did we find a matching unit signifier

        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (!found) {
          // Output error to console
          console.error('Unable to find a matching unit signifier.');
        }
      } // Return total mass (as base unit)


      return total;
    }
    /**
     * Format mass as text.
     * 
     * @param {number} value - Value to format.
     * @param {number} [unitValue = 1] - Value of unit.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @param {object} [rounding = {tons: 2, ounces: 0}] - The rounding to perform.
     * @returns {string} Formatted mass string.
     */

  }, {
    key: "format",
    value: function format(value) {
      var unitValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var spaces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var rounding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        tons: 2,
        ounces: 0
      };
      var formattedWeight = ''; // Did they supply custom unit value ratio?

      if (unitValue !== 1) {
        // Validate number
        if (typeof unitValue !== 'number') {
          return false;
        } // Convert value to base unit value


        if (unitValue > 0) {
          value = value * unitValue;
        } else {
          value = value / Math.abs(unitValue);
        }
      }

      var pounds = value; // Convert base value to ounces

      var ounces = pounds * 16; // Check if pounds is less than one

      if (ounces < 16) {
        // Return formatted ounces only
        return ounces.toFixed(rounding.ounces) + (spaces ? ' ' : '') + 'oz';
      } // Floor pounds to remove change


      pounds = Math.floor(pounds); // Subtract ounces equal to whole pounds (leaving remaining ounces)

      ounces -= pounds * 16; // Check for excess pounds

      if (pounds >= 2240) {
        // Calculate tons from pounds
        var tons = pounds / 2240; // Format tons

        return tons.toFixed(rounding.tons) + (spaces ? ' ' : '') + (tons > 1 ? 'tons' : 'ton');
      } // Format pounds


      formattedWeight = pounds + (spaces ? ' ' : '') + (pounds > 1 ? 'lbs' : 'lb'); // Verify remaining ounces

      if (ounces > 0) {
        // Format ounces
        formattedWeight += ' ' + ounces.toFixed(rounding.ounces) + (spaces ? ' ' : '') + 'oz';
      }

      return formattedWeight;
    }
  }]);

  return Mass;
}();



/***/ })
/******/ ])["default"];
});