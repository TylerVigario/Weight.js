"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pounds = _interopRequireDefault(require("./pounds.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ounces =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {(Ounces|Pounds|number|string)} ounces
   * @returns {Ounces}
   */
  function Ounces() {
    var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, Ounces);

    weight = Ounces.getValue(weight);

    if (isNaN(weight)) {
      throw 'Invalid parameter passed to object constructor.';
    }

    this.ounces = weight;
  }
  /**
   * Parse text for weight.
   * 
   * @param {(string|number)} text Text to parse for weight.
   * @returns {Ounces} Ounces object.
   */


  _createClass(Ounces, [{
    key: "toPounds",

    /**
     * Convert ounces to pounds.
     * 
     * @returns {Pounds} Pounds object.
     */
    value: function toPounds() {
      return new _pounds.default(this.ounces / 16);
    }
    /**
     * Convert weight to text.
     * 
     * @returns {string} Formatted weight.
     */

  }, {
    key: "toString",
    value: function toString() {
      var roundTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var formattedWeight = '';
      var ounces = this.ounces; // Excess ounces = pounds

      if (ounces >= 16) {
        // Extract pounds from ounces
        var pounds = Math.floor(this.toPounds().value);
        ounces -= new _pounds.default(pounds).toOunces().value; // Format pounds for human consumption

        formattedWeight = pounds.toString() + (pounds === 1 ? 'lb' : 'lbs'); // Any ounces remaining?

        if (ounces === 0) {
          // Return if no ounces are remaining
          return formattedWeight;
        } // Prep for ounces formatting


        formattedWeight = formattedWeight + ' ';
      } // Format ounces for human consumption


      return formattedWeight + ounces.toFixed(roundTo) + 'oz';
    }
  }, {
    key: "add",

    /**
     * Add weight to current object.
     * 
     * @param {(Ounces|Pounds|number|string)} weight Weight to add.
     * @returns {Ounces} Returns current ounces object.
     */
    value: function add(weight) {
      weight = Ounces.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "add".';
      }

      this.ounces += weight;
      return this;
    }
    /**
     * Subtract weight to current object.
     * 
     * @param {(Ounces|Pounds|number|string)} weight Weight to subtract.
     * @returns {Ounces} Returns current ounces object.
     */

  }, {
    key: "subtract",
    value: function subtract(weight) {
      weight = Ounces.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "subtract".';
      }

      this.ounces -= weight;
      return this;
    }
    /**
     * Check if current object value is equal to weight.
     * 
     * @param {(Ounces|Pounds|number|string)} weight Weight to compare.
     * @returns {boolean} True if same or false is not.
     */

  }, {
    key: "equals",
    value: function equals(weight) {
      weight = Ounces.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "equals".';
      }

      return this.ounces === weight;
    }
    /**
     * Check if current object value is not equal to weight.
     * 
     * @param {(Ounces|Pounds|number|string)} weight Weight to compare.
     * @returns {boolean} False if same or true if not.
     */

  }, {
    key: "notEqual",
    value: function notEqual(weight) {
      weight = Ounces.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "notEqual".';
      }

      return this.ounces !== weight;
    }
  }, {
    key: "value",
    get: function get() {
      return this.ounces;
    },
    set: function set(ounces) {
      ounces = Ounces.getValue(ounces);

      if (ounces === false) {
        throw 'Parameter passed to constructor is not a valid weight.';
      }

      this.ounces = ounces;
    }
  }], [{
    key: "parse",
    value: function parse(text) {
      // No need
      if (isNaN(text) === false) {
        return new this(text);
      } // Support for objects that have "toString" method


      if (_typeof(text) === 'object' && typeof text.toString === 'function') {
        text = text.toString();
      } // We expect to parse a string


      if (typeof text !== 'string') {
        return false;
      } // Trim whitespace from beginning & end


      text = text.trim(); // No need

      if (text.length === 0) {
        return new this(0);
      } // Convert to lowercase to avoid case sensitivity


      text = text.toLowerCase(); // Remove double spaces

      text = text.replace(/ +/g, " ");

      if (text.indexOf(',') !== -1) {
        // Dual units split by a comma (3lb, 4oz)
        text = text.split(','); // Invalid?

        if (text.length !== 2) {
          return false;
        }

        return new _pounds.default(text[0]).toOunces().add(text[1]);
      } else if (text.indexOf(' ') !== -1) {
        // Dual units split by a single space (3lb 4oz)
        text = text.split(' '); // Invalid?

        if (text.length !== 2) {
          return false;
        }

        return new _pounds.default(text[0]).toOunces().add(text[1]);
      } else {
        // Single unit (3lb or 4oz)
        if (text.indexOf('lb') !== -1) {
          // Pounds (must include: lb or lbs)
          return new _pounds.default(text).toOunces();
        } else {
          // Ounces (default)
          return new Ounces(text);
        }
      }
    }
  }, {
    key: "getValue",
    value: function getValue(weight) {
      if (weight instanceof Ounces) {
        return weight.value;
      } else if (weight instanceof _pounds.default) {
        return weight.toOunces().value;
      } else {
        return parseFloat(weight);
      }
    }
  }]);

  return Ounces;
}();

exports.default = Ounces;