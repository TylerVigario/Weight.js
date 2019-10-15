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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Mass = {};
/**
 * Parse variable for Mass.
 * @param {(number|object|string)} mass - Variable to parse for mass.
 * @returns {(number|false)} Returns mass represented in lowest imperial unit (ounces) or false.
 * @see {@link Mass.parseSingleUnit}
 * @see {@link Mass.parseDualUnit}
 */

Mass.parse = function (mass) {
  if (typeof mass === 'number') {
    // Value cannot be lower than zero
    if (mass < 0) {
      mass = 0;
    }

    return mass;
  } else if (_typeof(mass) === 'object') {
    // Support for objects that have "toString" method
    if (typeof mass.toString !== 'function') {
      return false;
    }

    mass = mass.toString();
  } // We expect to parse a string
  else if (typeof mass !== 'string') {
      return false;
    } // Remove all spaces


  mass = mass.replace(/\s/g, ''); // Is string empty?

  if (mass.length === 0) {
    return 0;
  } // Remove case sensitivity


  mass = mass.toLowerCase(); // Look for signifiers

  var ozID = mass.indexOf('oz');
  var lbID = mass.indexOf('lb'); // Does it include signifiers?

  if (ozID !== -1 && lbID !== -1) {
    // Pounds precedes ounces (normal)
    if (lbID < ozID) {
      lbID += 2; // Did they use "lbs"?

      if (mass.charAt(lbID) === 's') {
        lbID += 1;
      }

      return Mass.parseDualUnit(mass, lbID);
    } else {
      // Ounces precedes pounds (out-of-order)
      ozID += 2;
      return Mass.parseDualUnit(mass, ozID, true);
    }
  } else if (ozID !== -1) {
    // Let's keep "oz" for parseSingleUnit
    var separator = ozID + 2; // Is Single unit?

    if (separator === mass.length) {
      return Mass.parseSingleUnit(mass);
    }

    return Mass.parseDualUnit(mass, separator, true);
  } else if (lbID !== -1) {
    var _separator = lbID + 2; // Did they use "lbs"?


    if (mass.charAt(_separator) === 's') {
      _separator++;
    } // Is Single unit?


    if (_separator === mass.length) {
      return Mass.parseSingleUnit(mass);
    }

    return Mass.parseDualUnit(mass, _separator);
  } else {
    var _separator2 = mass.indexOf(',');

    if (_separator2 !== -1) {
      // Dual units split by a comma (i.e. 3lb, 4oz)
      return Mass.parseDualUnit(mass, _separator2 + 1);
    } // Single unit


    return Mass.parseSingleUnit(mass);
  }
};
/**
 * Parse variable for single unit mass.
 * @param {(string|number)} text - Variable to parse for single unit mass.
 * @returns {(number|false)} Returns mass represented in lowest imperial unit (ounces) or false.
 */


Mass.parseSingleUnit = function (text) {
  text = text.trim(); // Last validation before initializing.

  var mass = parseFloat(text);

  if (isNaN(mass)) {
    return false;
  } // Value cannot be lower than zero


  if (mass < 0) {
    mass = 0;
  } // Single unit (3lb or 4oz)


  if (text.indexOf('lb') !== -1) {
    // Pounds (must include: lb or lbs)
    // Convert to ounces
    mass = mass * 16;
    return mass;
  } else if (text.indexOf('oz') !== -1) {
    // Ounces
    return mass;
  } else {
    // Undefined (assumed ounces)
    // ! May soon return false instead
    return mass;
  }
};
/**
 * Parse variable for weight.
 * @param {(string|number)} text - Variable to parse for weight.
 * @param {number} splitAt - Index to split string.
 * @param {boolean} [outOfOrder = false] - False (default) signifies pounds precedes ounces, true signifies ounces preceding pounds.
 * @returns {(number|false)} Returns mass represented in lowest imperial unit (ounces) or false.
 * @see {@link Mass.parseSingleUnit}
 */


Mass.parseDualUnit = function (text, splitAt) {
  var outOfOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // "splitAt" must be defined and must be a number
  if (typeof splitAt !== 'number') {
    return false;
  } // Remove commas (shown to be problematic with our current flow)


  text = text.replace(',', ''); // Dual units split at index

  if (outOfOrder === true) {
    text = [text.substring(0, splitAt), text.substring(splitAt)];
  } else {
    text = [text.substring(splitAt), text.substring(0, splitAt)];
  } // Parse


  var ounces = Mass.parseSingleUnit(text[0]);
  var pounds = Mass.parseSingleUnit(text[1]); // Did we have any trouble parsing single units?

  if (ounces === false || pounds === false) {
    return false;
  } // Return adding pounds to ounces


  return ounces + pounds;
};
/**
 * Format mass as text.
 * @param {number} ounces - Mass (represented as ounces) to format.
 * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
 * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
 * @returns {string} Formatted mass string.
 */


Mass.format = function (ounces) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var roundTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var formattedWeight = ''; // Excess ounces = pounds

  if (ounces > 15) {
    // Extract whole pounds from ounces
    var pounds = Math.floor(ounces / 16); // Reduce ounces by whole pounds

    ounces = ounces - pounds * 16; // Format pounds for human consumption

    formattedWeight = pounds.toFixed(0) + (spaces ? ' ' : '') + (pounds > 1 ? 'lbs' : 'lb'); // Any ounces remaining?

    if (ounces === 0) {
      // Return if no ounces are remaining
      return formattedWeight;
    } // Prep for ounces formatting


    formattedWeight = formattedWeight + ' ';
  } // Format ounces for human consumption


  return formattedWeight + ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
}; // Exports




/***/ })
/******/ ])["default"];
});