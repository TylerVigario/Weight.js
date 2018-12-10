var Pounds = require('../src/pounds');

module.exports = class Ounces {
    constructor(ounces) {
        this.value = ounces;
    }

    static parse(text) {
        // No need
        if (typeof text === 'number') {
            return new this(text);
        }

        // We expect to parse a string
        if (typeof text !== 'string') {
            throw 'Invalid parameter type.'
        }

        // Trim whitespace from beginning & end
        text = text.trim();

        // No need
        if (text.length === 0) {
            return new this(0);
        }

        // Convert to lowercase to avoid case sensitivity
        text = text.toLowerCase();

        // Remove double spaces
        text = text.replace(/ +/g, " ");

        if (text.indexOf(',') !== -1) {
            // Dual units split by a comma (3lb, 4oz)
            text = text.split(',');

            // Invalid?
            if (text.length !== 2) {
                return false;
            }

            return (new Pounds(text[0])).toOunces().add(text[1]);
        } else if (text.indexOf(' ') !== -1) {
            // Dual units split by a single space (3lb 4oz)
            text = text.split(' ');

            // Invalid?
            if (text.length !== 2) {
                return false;
            }

            return (new Pounds(text[0])).toOunces().add(text[1]);
        } else {
            // Single unit (3lb or 4oz)
            if (text.indexOf('lb') !== -1) {
                // Pounds (must include: lb or lbs)
                return new Pounds(text).toOunces();
            } else {
                // Ounces (default)
                return new Ounces(text);
            }
        }
    }

    toPounds() {
        // Prevent unnecessary calculations
        if (this.ounces <= 0) {
            return 0;
        }

        let ounces = this.ounces;
        let pounds = 0;

        // Excess ounces?
        if (ounces >= 16) {
            pounds = Math.floor(ounces / 16);

            ounces -= pounds * 16;

            // If there are no leftover ounces
            // We no longer need to continue calculations
            if (ounces === 0) {
                return pounds;
            }
        }

        // Ounces to pounds
        return pounds + (ounces / 16);
    }

    toString() {
        let formattedWeight = '';

        let ounces = this.ounces;

        // Excess ounces = pounds
        if (ounces >= 16) {
            // Extract pounds from ounces
            let pounds = Math.floor(this.toPounds().value);

            ounces -= new Pounds(pounds).toOunces().value;

            // Format pounds for human consumption
            formattedWeight = pounds.toString() + (pounds === 1 ? 'lb' : 'lbs');

            // Any ounces remaining?
            if (ounces === 0) {
                // Return if no ounces are remaining
                return formattedWeight;
            }

            // Prep for ounces formatting
            formattedWeight = formattedWeight + ' ';
        }

        // Format ounces for human consumption
        return formattedWeight + ounces.toFixed(roundTo) + 'oz';
    }

    get value() {
        return this.ounces;
    }

    set value(value) {
        value = parseFloat(value);

        if (isNaN(value)) {
            throw 'Parameter passed to constructor must be a number.';
        }

        this.ounces = value;
    }

    add(weight) {
        if (weight instanceof Ounces || isNaN(weight) === false) {
            this.ounces += weight.value;
        } else if (weight instanceof Pounds) {
            this.ounces += weight.toOunces().value;
        } else {
            weight = parseFloat(weight);

            if (isNaN(weight)) {
                throw 'Invalid paramater passed to function add.';
            }

            this.ounces += weight;
        }
    }
}