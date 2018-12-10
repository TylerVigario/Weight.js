"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ounces = _interopRequireDefault(require("./ounces.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pounds =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {(Pounds|Ounces|number|string)} weight
   * @returns {Pounds}
   */
  function Pounds() {
    var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, Pounds);

    weight = Pounds.getValue(weight);

    if (isNaN(weight)) {
      throw 'Invalid parameter passed to object constructor.';
    }

    this.pounds = weight;
  }
  /**
   * Parse text for weight.
   * 
   * @param {(string|number)} text Text to parse for weight.
   * @returns {Pounds} Pounds object.
   */


  _createClass(Pounds, [{
    key: "toOunces",

    /**
     * Convert pounds to ounces.
     * 
     * @returns {Ounces} Ounces object.
     */
    value: function toOunces() {
      return new _ounces.default(this.pounds * 16);
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
      return this.toOunces().toString(roundTo);
    }
  }, {
    key: "add",

    /**
     * Add weight to current object.
     * 
     * @param {(Pounds|Ounces|number|string)} weight Weight to add.
     * @returns {Pounds} Returns current pounds object.
     */
    value: function add(weight) {
      weight = Pounds.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "add".';
      }

      this.pounds += weight;
      return this;
    }
    /**
     * Subtract weight to current object.
     * 
     * @param {(Pounds|Ounces|number|string)} weight Weight to subtract.
     * @returns {Pounds} Returns current pounds object.
     */

  }, {
    key: "subtract",
    value: function subtract(weight) {
      weight = Pounds.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "subtract".';
      }

      this.pounds -= weight;
      return this;
    }
    /**
     * Check if current object value is equal to weight.
     * 
     * @param {(Pounds|Ounces|number|string)} weight Weight to compare.
     * @returns {boolean} True if same or false is not.
     */

  }, {
    key: "equals",
    value: function equals(weight) {
      weight = Pounds.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "equals".';
      }

      return this.pounds === weight;
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
      weight = Pounds.getValue(weight);

      if (isNaN(weight)) {
        throw 'Invalid parameter passed to function "notEqual".';
      }

      return this.pounds !== weight;
    }
  }, {
    key: "value",
    get: function get() {
      return this.pounds;
    },
    set: function set(pounds) {
      pounds = Pounds.getValue(pounds);

      if (pounds === false) {
        throw 'Parameter passed to constructor is not a valid weight.';
      }

      this.pounds = pounds;
    }
  }], [{
    key: "parse",
    value: function parse(text) {
      var ounces = _ounces.default.parse(text);

      if (ounces === false) {
        return false;
      }

      return ounces.toPounds();
    }
  }, {
    key: "getValue",
    value: function getValue(weight) {
      if (weight instanceof Pounds) {
        return weight.value;
      } else if (weight instanceof _ounces.default) {
        return weight.toPounds().value;
      } else {
        return parseFloat(weight);
      }
    }
  }]);

  return Pounds;
}();

exports.default = Pounds;