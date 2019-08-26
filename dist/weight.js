(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weight.js"] = factory();
	else
		root["weight.js"] = factory();
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

// CONCATENATED MODULE: ./src/mass_unit.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** 
 * Imperial mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.17
 */

/**
 * Class representing a mass unit.
 */
var MassUnit =
/*#__PURE__*/
function () {
  /**
   * Class constructor.
   * @param {(Ounces|Pounds|number|string)} [weight = 0]
   * @see {@link Ounces._getValue}
   * @see {@link Pounds._getValue}
   */
  function MassUnit() {
    var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, MassUnit);

    this.value = this._getValue(weight);
  }
  /**
   * Get value from variable.
   * @ignore
   * @protected
   * @param {(Ounces|Pounds|number|string)} weight - Variable to extract weight from.
   * @throws {TypeError} Throws an error if number cannot be parsed to a valid number.
   * @returns {number}
   */


  _createClass(MassUnit, [{
    key: "_getValue",
    value: function _getValue(weight) {
      // Not a number?
      if (typeof weight !== 'number') {
        throw new TypeError('Invalid parameter passed to function.');
      } // Weight cannot be negative


      if (weight < 0) {
        return 0;
      }

      return weight;
    }
    /**
     * Return weight value.
     * @type {number}
     */

  }, {
    key: "floor",

    /**
     * Round weight down.
     * @returns {Object}
     */
    value: function floor() {
      this._weight = Math.floor(this._weight);
      return this;
    }
    /**
     * Round weight up.
     * @returns {Object}
     */

  }, {
    key: "ceil",
    value: function ceil() {
      this._weight = Math.ceil(this._weight);
      return this;
    }
    /**
     * Round weight.
     * @param {number} [digits = 0]
     * @returns {Object}
     */

  }, {
    key: "round",
    value: function round() {
      var digits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this._weight = this._weight.toFixed(digits);
      return this;
    }
    /**
     * The toFixed() method formats a number using fixed-point notation.
     * @param {number} [digits = 0] - Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
     * @returns {string} A string representing the given number using fixed-point notation.
     */

  }, {
    key: "toFixed",
    value: function toFixed() {
      var digits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this._weight.toFixed(digits);
    }
    /**
     * Add weight to current object.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to add.
     * @returns {Object} Returns current object.
     */

  }, {
    key: "add",
    value: function add(weight) {
      this._weight += this._getValue(weight);
      return this;
    }
    /**
     * Subtract weight to current object.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to subtract.
     * @returns {Object} Returns current object.
     */

  }, {
    key: "subtract",
    value: function subtract(weight) {
      weight = this._getValue(weight); // Make sure we do not subtract more than the current weight

      if (weight > this._weight) {
        weight = this._weight;
      }

      this._weight -= weight;
      return this;
    }
    /**
     * Check if current object value is same as given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} True if same or false is not.
     */

  }, {
    key: "isSame",
    value: function isSame(weight) {
      return this._weight === this._getValue(weight);
    }
    /**
     * Check if current object value is not same as given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} False if same or true if not.
     */

  }, {
    key: "isNotSame",
    value: function isNotSame(weight) {
      return this._weight !== this._getValue(weight);
    }
    /**
     * Check if current mass is heavier than a given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} True if current object is heavier or false if not.
     */

  }, {
    key: "isHeavier",
    value: function isHeavier(weight) {
      return this._weight > this._getValue(weight);
    }
    /**
     * Check if current mass is lighter than a given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} True if current object is lighter or false if not.
     */

  }, {
    key: "isLighter",
    value: function isLighter(weight) {
      return this._weight < this._getValue(weight);
    }
    /**
     * Check if current object is empty.
     * @returns {boolean} True if current object is empty or false if not.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._weight === 0;
    }
  }, {
    key: "value",
    get: function get() {
      return this._weight;
    }
    /**
     * Set weight value.
     * @param {number} weight
     * @throws {TypeError} Throws an error if weight is not a valid number.
     */
    ,
    set: function set(weight) {
      // Validate weight
      if (typeof weight !== 'number') {
        throw new TypeError('Weight must be of type number.');
      } // Weight does not measure in negative


      if (weight < 0) {
        weight = 0;
      }
      /**
       * @protected
       * @member {number} _weight
       */


      this._weight = weight;
    }
  }]);

  return MassUnit;
}();


// CONCATENATED MODULE: ./src/pounds.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function pounds_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pounds_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pounds_createClass(Constructor, protoProps, staticProps) { if (protoProps) pounds_defineProperties(Constructor.prototype, protoProps); if (staticProps) pounds_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** 
 * Pound mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.17
 */


/**
 * Class representing pound mass units.
 * @extends {MassUnit}
 */

var pounds_Pounds =
/*#__PURE__*/
function (_MassUnit) {
  _inherits(Pounds, _MassUnit);

  function Pounds() {
    pounds_classCallCheck(this, Pounds);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pounds).apply(this, arguments));
  }

  pounds_createClass(Pounds, [{
    key: "_getValue",

    /**
     * Get value from variable.
     * @ignore
     * @protected
     * @param {(Ounces|Pounds|number|string)} weight - Variable to extract weight from.
     * @returns {number}
     * @see {@link MassUnit._getValue}
     */
    value: function _getValue(weight) {
      if (weight instanceof ounces_Ounces) {
        return weight.toPounds().value;
      } else if (weight instanceof Pounds) {
        return weight.value;
      } // String?


      if (typeof weight === 'string') {
        weight = Pounds.parse(weight);

        if (weight instanceof Pounds) {
          weight = weight.value;
        }
      }

      return _get(_getPrototypeOf(Pounds.prototype), "_getValue", this).call(this, weight);
    }
    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @returns {(Pounds|false)} Returns a Pounds object or false on error.
     * @see {@link Ounces.parse}
     */

  }, {
    key: "toOunces",

    /**
     * Convert pounds to ounces.
     * @returns {Ounces} Ounces object.
     */
    value: function toOunces() {
      return new ounces_Ounces(this._weight * 16);
    }
    /**
     * Convert weight to text.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
     * @returns {string} Formatted weight.
     * @see {@link Ounces.toString}
     */

  }, {
    key: "toString",
    value: function toString() {
      var spaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var roundTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.toOunces().toString(spaces, roundTo);
    }
  }], [{
    key: "parse",
    value: function parse(text) {
      var ounces = ounces_Ounces.parse(text);

      if (ounces === false) {
        return false;
      }

      return ounces.toPounds();
    }
    /**
     * Parse text for single unit weight.
     * @param {(string|number)} text - Text to parse for single unit weight.
     * @param {(Ounces|Pounds|string)} unitType - Default unit type if no signifier is found.
     * @protected
     * @throws {TypeError} Thrown if no signifier is found and the unitType is invalid.
     * @returns {(Pounds|false)} Returns a Pounds object or false on error.
     */

  }, {
    key: "_parseSingleUnit",
    value: function _parseSingleUnit(text) {
      var unitType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Pounds;
      text = text.trim(); // Last validation before initializing.

      var weight = parseFloat(text);

      if (isNaN(weight)) {
        return false;
      } // Single unit (3lb or 4oz)


      if (text.indexOf('oz') !== -1) {
        // Ounces (must include: oz)
        return new ounces_Ounces(weight).toPounds();
      } else if (text.indexOf('lb') !== -1) {
        // Pounds (default)
        return new Pounds(weight);
      } else {
        // Undefined (use default unitType)
        switch (unitType) {
          case 'Ounces':
          case 'ounces':
          case 'oz':
          case ounces_Ounces:
            return new ounces_Ounces(weight).toPounds();

          case 'Pound':
          case 'pound':
          case 'Pounds':
          case 'pounds':
          case 'lb':
          case 'lbs':
          case Pounds:
            return new Pounds(weight);

          default:
            throw new TypeError('Invalid unit type.');
        }
      }
    }
    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @param {number} splitAt - Index to split string.
     * @param {boolean} [outOfOrder = false] - False (default) signifies pounds precedes ounces, true signifies ounces preceding pounds.
     * @protected
     * @returns {(Pounds|false)} Returns a Pounds object or false on error.
     * @see {@link parseSingleUnit}
     */

  }, {
    key: "_parseDualUnit",
    value: function _parseDualUnit(text, splitAt) {
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


      var ounces = ounces_Ounces._parseSingleUnit(text[0]);

      var pounds = Pounds._parseSingleUnit(text[1]); // Did we have any trouble parsing single units?


      if (ounces === false || pounds === false) {
        return false;
      } // Return adding ounces to pounds


      return pounds.add(ounces);
    }
  }]);

  return Pounds;
}(MassUnit);


// CONCATENATED MODULE: ./src/ounces.js
function ounces_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ounces_typeof = function _typeof(obj) { return typeof obj; }; } else { ounces_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ounces_typeof(obj); }

function ounces_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ounces_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ounces_createClass(Constructor, protoProps, staticProps) { if (protoProps) ounces_defineProperties(Constructor.prototype, protoProps); if (staticProps) ounces_defineProperties(Constructor, staticProps); return Constructor; }

function ounces_possibleConstructorReturn(self, call) { if (call && (ounces_typeof(call) === "object" || typeof call === "function")) { return call; } return ounces_assertThisInitialized(self); }

function ounces_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ounces_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { ounces_get = Reflect.get; } else { ounces_get = function _get(target, property, receiver) { var base = ounces_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return ounces_get(target, property, receiver || target); }

function ounces_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = ounces_getPrototypeOf(object); if (object === null) break; } return object; }

function ounces_getPrototypeOf(o) { ounces_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ounces_getPrototypeOf(o); }

function ounces_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ounces_setPrototypeOf(subClass, superClass); }

function ounces_setPrototypeOf(o, p) { ounces_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ounces_setPrototypeOf(o, p); }

/** 
 * Ounce mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.17
 */


/**
 * Class representing ounce mass units.
 * @extends {MassUnit}
 */

var ounces_Ounces =
/*#__PURE__*/
function (_MassUnit) {
  ounces_inherits(Ounces, _MassUnit);

  function Ounces() {
    ounces_classCallCheck(this, Ounces);

    return ounces_possibleConstructorReturn(this, ounces_getPrototypeOf(Ounces).apply(this, arguments));
  }

  ounces_createClass(Ounces, [{
    key: "_getValue",

    /**
     * Get value from variable.
     * @ignore
     * @protected
     * @param {(Ounces|Pounds|number|string)} weight - Variable to extract weight from.
     * @returns {number}
     * @see {@link MassUnit._getValue}
     */
    value: function _getValue(weight) {
      // One of ours?
      if (weight instanceof Ounces) {
        return weight.value;
      } else if (weight instanceof pounds_Pounds) {
        return weight.toOunces().value;
      } // String?


      if (typeof weight === 'string') {
        weight = Ounces.parse(weight);

        if (weight instanceof Ounces) {
          weight = weight.value;
        }
      }

      return ounces_get(ounces_getPrototypeOf(Ounces.prototype), "_getValue", this).call(this, weight);
    }
    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @returns {(Ounces|false)} Returns an Ounces object or false on error.
     * @see {@link parseSingleUnit}
     * @see {@link parseDualUnit}
     */

  }, {
    key: "toPounds",

    /**
     * Convert ounces to pounds.
     * @returns {Pounds} Pounds object.
     */
    value: function toPounds() {
      return new pounds_Pounds(this._weight / 16);
    }
    /**
     * Convert weight to text.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
     * @returns {string} Formatted weight.
     */

  }, {
    key: "toString",
    value: function toString() {
      var spaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var roundTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var formattedWeight = '';
      var ounces = this; // Excess ounces = pounds

      if (ounces.isHeavier(15)) {
        // Extract whole pounds from ounces
        var pounds = ounces.toPounds().floor(); // Reduce ounces by whole pounds

        ounces.subtract(pounds); // Format pounds for human consumption

        formattedWeight = pounds.toFixed(0) + (spaces ? ' ' : '') + (pounds.isSame(1) ? 'lb' : 'lbs'); // Any ounces remaining?

        if (ounces.isEmpty()) {
          // Return if no ounces are remaining
          return formattedWeight;
        } // Prep for ounces formatting


        formattedWeight = formattedWeight + ' ';
      } // Format ounces for human consumption


      return formattedWeight + ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
    }
  }], [{
    key: "parse",
    value: function parse(text) {
      // Can't glean much info from a number
      if (typeof text === 'number') {
        return new Ounces(text);
      } // Support for objects that have "toString" method
      else if (ounces_typeof(text) === 'object') {
          if (typeof text.toString !== 'function') {
            return false;
          }

          text = text.toString();
        } // We expect to parse a string
        else if (typeof text !== 'string') {
            return false;
          } // Remove all spaces


      text = text.replace(/\s/g, ''); // Is string empty?

      if (text.length === 0) {
        return new Ounces(0);
      } // Remove case sensitivity


      text = text.toLowerCase(); // Look for signifiers

      var ozID = text.indexOf('oz');
      var lbID = text.indexOf('lb'); // Does it include signifiers?

      if (ozID !== -1 && lbID !== -1) {
        // Pounds precedes ounces (normal)
        if (lbID < ozID) {
          lbID += 2; // Did they use "lbs"?

          if (text.charAt(lbID) === 's') {
            lbID += 1;
          }

          return Ounces._parseDualUnit(text, lbID);
        } else {
          // Ounces precedes pounds (out-of-order)
          ozID += 2;
          return Ounces._parseDualUnit(text, ozID, true);
        }
      } else if (ozID !== -1) {
        // Let's keep "oz" for parseSingleUnit
        var separator = ozID + 2; // Is Single unit?

        if (separator === text.length) {
          return Ounces._parseSingleUnit(text);
        }

        return Ounces._parseDualUnit(text, separator, true);
      } else if (lbID !== -1) {
        var _separator = lbID + 2; // Did they use "lbs"?


        if (text.charAt(_separator) === 's') {
          _separator++;
        } // Is Single unit?


        if (_separator === text.length) {
          return Ounces._parseSingleUnit(text, pounds_Pounds);
        }

        return Ounces._parseDualUnit(text, _separator);
      } else {
        var _separator2 = text.indexOf(',');

        if (_separator2 !== -1) {
          // Dual units split by a comma (i.e. 3lb, 4oz)
          return Ounces._parseDualUnit(text, _separator2 + 1);
        } // Single unit


        return Ounces._parseSingleUnit(text);
      }
    }
    /**
     * Parse text for single unit weight.
     * @param {(string|number)} text - Text to parse for single unit weight.
     * @param {(Ounces|Pounds|string)} unitType - Default unit type if no signifier is found.
     * @protected
     * @throws {TypeError} Thrown if no signifier is found and the unitType is invalid.
     * @returns {(Ounces|false)} Returns an Ounces object or false on error.
     */

  }, {
    key: "_parseSingleUnit",
    value: function _parseSingleUnit(text) {
      var unitType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ounces;
      text = text.trim(); // Last validation before initializing.

      var weight = parseFloat(text);

      if (isNaN(weight)) {
        return false;
      } // Single unit (3lb or 4oz)


      if (text.indexOf('lb') !== -1) {
        // Pounds (must include: lb or lbs)
        return new pounds_Pounds(weight).toOunces();
      } else if (text.indexOf('oz') !== -1) {
        // Ounces
        return new Ounces(weight);
      } else {
        // Undefined (use default unitType)
        switch (unitType) {
          case 'Ounces':
          case 'ounces':
          case 'oz':
          case Ounces:
            return new Ounces(weight);

          case 'Pound':
          case 'pound':
          case 'Pounds':
          case 'pounds':
          case 'lb':
          case 'lbs':
          case pounds_Pounds:
            return new pounds_Pounds(weight).toOunces();

          default:
            throw new TypeError('Invalid unit type.');
        }
      }
    }
    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @param {number} splitAt - Index to split string.
     * @param {boolean} [outOfOrder = false] - False (default) signifies pounds precedes ounces, true signifies ounces preceding pounds.
     * @protected
     * @returns {(Ounces|false)} Returns an Ounces object or false on error.
     * @see {@link parseSingleUnit}
     */

  }, {
    key: "_parseDualUnit",
    value: function _parseDualUnit(text, splitAt) {
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


      var ounces = Ounces._parseSingleUnit(text[0]);

      var pounds = pounds_Pounds._parseSingleUnit(text[1]); // Did we have any trouble parsing single units?


      if (ounces === false || pounds === false) {
        return false;
      } // Return adding pounds to ounces (to maintain an Ounces object)


      return ounces.add(pounds);
    }
  }]);

  return Ounces;
}(MassUnit);


// CONCATENATED MODULE: ./src/weight.js
/* concated harmony reexport Ounces */__webpack_require__.d(__webpack_exports__, "Ounces", function() { return ounces_Ounces; });
/* concated harmony reexport Pounds */__webpack_require__.d(__webpack_exports__, "Pounds", function() { return pounds_Pounds; });
/** 
 * Weight.js
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.17
 */




/***/ })
/******/ ]);
});