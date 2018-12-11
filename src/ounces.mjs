/** 
 * Ounce mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.0 
 */

import MassUnit from './mass_unit.mjs';
import Pounds from './pounds.mjs';

/**
 * Class representing ounce mass units.
 * @extends MassUnit
 */
export default class Ounces extends MassUnit {
    /**
     * Get value from variable.
     * @param {(Ounces|Pounds|number|string)} weight - Variable to extract weight from.
     * @returns {number}
     */
    getValue(weight) {
        if (weight instanceof Ounces) {
            return weight.value;
        } else if (weight instanceof Pounds) {
            return weight.toOunces().value;
        } else if (typeof weight === 'number') {
            return weight;
        } else {
            weight = parseFloat(weight);

            if (isNaN(weight)) {
                throw 'Invalid parameter passed to function.';
            }

            return weight;
        }
    }

    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @returns {Ounces} Ounces object.
     */
    static parse(text) {
        // No need
        if (isNaN(text) === false) {
            return new this(text);
        }

        // Support for objects that have "toString" method
        if (typeof text === 'object' && typeof text.toString === 'function') {
            text = text.toString();
        }

        // We expect to parse a string
        if (typeof text !== 'string') {
            return false;
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
                return (new Pounds(text)).toOunces();
            } else {
                // Ounces (default)
                return new Ounces(text);
            }
        }
    }

    /**
     * Convert ounces to pounds.
     * @returns {Pounds} Pounds object.
     */
    toPounds() {
        return new Pounds(this.weight / 16);
    }

    /**
     * Convert weight to text.
     * @returns {string} Formatted weight.
     */
    toString(roundTo = 0) {
        let formattedWeight = '';

        let ounces = this.weight;

        // Excess ounces = pounds
        if (ounces >= 16) {
            // Extract pounds from ounces
            let pounds = Math.floor(this.toPounds().value);

            ounces -= (new Pounds(pounds)).toOunces().value;

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
}
