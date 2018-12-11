/** 
 * Imperial mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.0 
 */

/** Class representing a mass unit. */
export default class MassUnit {
    /**
     * Create a mass unit object.
     * @param {(Ounces|Pounds|number|string)} [weight = 0]
     */
    constructor(weight = 0) {
        this.weight = this.getValue(weight);
    }

    /**
     * @type {number}
     */
    get value() {
        return this.weight;
    }

    set value(weight) {
        weight = this.getValue(weight);

        if (pounds === false) {
            throw 'Parameter passed to constructor is not a valid weight.';
        }

        this.weight = weight;
    }

    /**
     * The toFixed() method formats a number using fixed-point notation.
     * @param {digits} [digits = 0] - Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
     * @returns {string} A string representing the given number using fixed-point notation.
     */
    toFixed(digits) {
        return this.weight.toFixed(digits);
    }

    /**
     * Add weight to current object.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to add.
     * @returns {object} Returns current object.
     */
    add(weight) {
        this.weight += this.getValue(weight);

        return this;
    }

    /**
     * Subtract weight to current object.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to subtract.
     * @returns {object} Returns current object.
     */
    subtract(weight) {
        this.weight -= this.getValue(weight);

        return this;
    }

    /**
     * Check if current object value is equal to weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} True if same or false is not.
     */
    equal(weight) {
        return this.weight === this.getValue(weight);
    }

    /**
     * Check if current object value is not equal to weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} False if same or true if not.
     */
    notEqual(weight) {
        return this.weight !== this.getValue(weight);
    }

    /**
     * Check if current mass is heavier than a given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} True if current object is heavier or false if not.
     */
    isHeavier(weight) {
        return this.weight > this.getValue(weight);
    }
}
