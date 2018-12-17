/** 
 * Imperial mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.4
 */

/**
 * Class representing a mass unit.
 */
export default class MassUnit {
    /**
     * Class constructor.
     * @param {(Ounces|Pounds|number|string)} [weight = 0]
     */
    constructor(weight = 0) {
        this.value = this.getValue(weight);
    }

    /**
     * Return weight value.
     * @returns {number}
     */
    get value() {
        return this.weight;
    }

    /**
     * Set weight value.
     * @param {number} weight
     */
    set value(weight) {
        // Validate weight
        if (isNaN(weight)) {
            throw 'Weight must be a number.';
        }

        // Weight does not measure in negative
        if (weight < 0) {
            weight = 0;
        }

        this.weight = weight;
    }

    /**
     * Round weight down.
     * @returns {Object}
     */
    floor() {
        this.weight = Math.floor(this.weight);

        return this;
    }

    /**
     * Round weight up.
     * @returns {Object}
     */
    ceil() {
        this.weight = Math.ceil(this.weight);

        return this;
    }

    /**
     * Round weight.
     * @param {number} [digits = 0]
     * @returns {Object}
     */
    round(digits = 0) {
        this.weight = this.toFixed(digits);

        return this;
    }

    /**
     * The toFixed() method formats a number using fixed-point notation.
     * @param {number} [digits = 0] - Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
     * @returns {string} A string representing the given number using fixed-point notation.
     */
    toFixed(digits = 0) {
        return this.weight.toFixed(digits);
    }

    /**
     * Add weight to current object.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to add.
     * @returns {Object} Returns current object.
     */
    add(weight) {
        this.weight += this.getValue(weight);

        return this;
    }

    /**
     * Subtract weight to current object.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to subtract.
     * @returns {Object} Returns current object.
     */
    subtract(weight) {
        weight = this.getValue(weight);

        // Make sure we do not subtract more than the current weight
        if (weight > this.weight) {
            weight = this.weight;
        }

        this.weight -= weight;

        return this;
    }

    /**
     * Check if current object value is same as given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} True if same or false is not.
     */
    isSame(weight) {
        return this.weight === this.getValue(weight);
    }

    /**
     * Check if current object value is not same as given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} False if same or true if not.
     */
    isNotSame(weight) {
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

    /**
     * Check if current mass is lighter than a given weight.
     * @param {(Ounces|Pounds|number|string)} weight - Weight to compare.
     * @returns {boolean} True if current object is lighter or false if not.
     */
    isLighter(weight) {
        return this.weight < this.getValue(weight);
    }

    /**
     * Check if current object is empty.
     * @returns {boolean} True if current object is empty or false if not.
     */
    isEmpty() {
        return (this.weight === 0);
    }
}
