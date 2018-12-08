/**
 * Weight.js
 *
 * @author  Tyler Vigario
 * @description Utility class to convert imperial mass units as well as output and parse as text.
 * @license http://opensource.org/licenses/MIT  MIT License
 * @version 1.0.2
 */

module.exports = class Weight {
    /**
     * Convert pounds to human relatable text.
     *
     * @param {number} weight
     * @param {number} [roundTo = 0]
     * @returns {string} Human relatable format of pounds (i.e. 2.2 = 2lbs 4oz)
     */
    static poundsToText(pounds, roundTo = 0) {
        return this.ouncesToText(this.poundsToOunces(pounds), roundTo);
    }

    /**
     * Convert ounces to human relatable text.
     *
     * @param {number} ounces
     * @param {number} [roundTo = 0]
     * @returns {string} Human relatable format of ounces (i.e. 102.2 = 6lbs 7oz)
     */
    static ouncesToText(ounces, roundTo = 0) {
        if (isNaN(ounces)) {
            return NaN;
        }

        let formattedWeight = '';

        // Excess ounces = pounds
        if (ounces >= 16) {
            // Extract pounds from ounces
            let pounds = Math.floor(this.ouncesToPounds(ounces));

            ounces -= this.poundsToOunces(pounds);

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

    /**
     * Convert human text to pounds.
     *
     * @param {string} text
     * @returns {number} Pounds.
     */
    static textToPounds(text) {
        return this.ouncesToPounds(this.textToOunces(text));
    }

    /**
     * Convert human text to ounces.
     * @param {string} text
     * @returns {number} Ounces.
     */
    static textToOunces(text) {
        // No need
        if (typeof text === 'number') {
            return text;
        }

        // We expect a string
        if (typeof text !== 'string') {
            throw 'Invalid parameter type.'
        }

        // No need
        if (text.length === 0) {
            return 0;
        }

        // Convert to lowercase to avoid case sensitivity
        text = text.trim().toLowerCase();

        if (text.indexOf(',') !== -1) {
            // Dual units split by a comma (3lb, 4oz)
            text = text.split(',');

            // Invalid?
            if (text.length !== 2) {
                return false;
            }

            text = this.poundsToOunces(parseInt(text[0])) + parseFloat(text[1]);
        } else if (text.indexOf(' ') !== -1) {
            // Dual units split by a single space (3lb 4oz)
            text = text.split(' ');

            // Invalid?
            if (text.length !== 2) {
                return false;
            }

            text = this.poundsToOunces(parseInt(text[0])) + parseFloat(text[1]);
        } else {
            // Single unit (3lb or 4oz)
            if (text.indexOf('lb') !== -1) {
                // Pounds (must include: lb or lbs)
                text = this.poundsToOunces(parseFloat(text));
            } else {
                // Ounces (default)
                text = parseFloat(text);
            }
        }

        return text;
    }

    /**
     * Convert ounces to pounds.
     *
     * @param {number} ounces
     * @returns {number} Ounces represented as pounds (i.e. 4 = 0.25).
     */
    static ouncesToPounds(ounces) {
        if (isNaN(ounces)) {
            return NaN;
        }

        // Prevent unnecessary calculations
        if (ounces <= 0) {
            return 0;
        }

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

    /**
     * Convert pounds to ounces.
     *
     * @param {number} pounds
     * @returns {number} Pounds represented as ounces (i.e. 4 = 64)
     */
    static poundsToOunces(pounds) {
        if (isNaN(pounds)) {
            return NaN;
        }

        // Prevent unnecessary calculations
        if (pounds <= 0) {
            return 0;
        }

        // Pounds to ounces
        return pounds * 16;
    }
}
