import Ounces from './ounces.mjs';

export default class Pounds {
    /**
     * @constructor
     * @param {(Pounds|Ounces|number|string)} weight
     * @returns {Pounds}
     */
    constructor(weight = 0) {
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
    static parse(text) {
        let ounces = Ounces.parse(text);

        if (ounces === false) {
            return false;
        }

        return ounces.toPounds();
    }

    /**
     * Convert pounds to ounces.
     * 
     * @returns {Ounces} Ounces object.
     */
    toOunces() {
        return new Ounces(this.pounds * 16);
    }

    /**
     * Convert weight to text.
     * 
     * @returns {string} Formatted weight.
     */
    toString(roundTo = 0) {
        return this.toOunces().toString(roundTo);
    }

    get value() {
        return this.pounds;
    }

    set value(pounds) {
        pounds = Pounds.getValue(pounds);

        if (pounds === false) {
            throw 'Parameter passed to constructor is not a valid weight.';
        }

        this.pounds = pounds;
    }

    /**
     * Add weight to current object.
     * 
     * @param {(Pounds|Ounces|number|string)} weight Weight to add.
     * @returns {Pounds} Returns current pounds object.
     */
    add(weight) {
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
    subtract(weight) {
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
    equals(weight) {
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
    notEqual(weight) {
        weight = Pounds.getValue(weight);

        if (isNaN(weight)) {
            throw 'Invalid parameter passed to function "notEqual".';
        }

        return this.pounds !== weight;
    }

    static getValue(weight) {
        if (weight instanceof Pounds) {
            return weight.value;
        } else if (weight instanceof Ounces) {
            return weight.toPounds().value;
        } else {
            return parseFloat(weight);
        }
    }
}
