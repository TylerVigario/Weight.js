/** 
 * Ounce mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.5
 */

import MassUnit from './mass_unit';
import Pounds from './pounds';

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
            return new Ounces(text);
        }

        // Support for objects that have "toString" method
        if (typeof text === 'object') {
            if (typeof text.toString !== 'function') {
                return false;
            }

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
            return new Ounces(0);
        }

        // Remove case sensitivity
        text = text.toLowerCase();

        // Remove double spaces
        text = text.replace("  ", " ");

        // Remove possible space before "lb" & "oz"
        text = text.replace(' oz', 'oz').replace(' lb', 'lb');

        let separator = -1;

        // Dual unit or single unit?
        if ((separator = text.indexOf(',')) !== -1 || // Dual units split by a comma (i.e. 3lb, 4oz)
            (separator = text.indexOf(' ')) !== -1) { // Dual units split by a space (i.e. 3lb 4oz)) {
            return Ounces.parseDualUnit(text, separator + 1);
        } else if ((separator = text.indexOf('lb')) !== -1 && text.indexOf('oz') !== -1) {
            // Dual units smashed together
            separator += 2;

            // Did they use "lbs"?
            if (text.indexOf('lbs') !== -1) {
                separator += 1;
            }

            return Ounces.parseDualUnit(text, separator);
        } else {
            // Unfortunately since Pounds uses this parse function
            // The below means this function is weighted towards ounces
            return Ounces.parseSingleUnit(text);
        }
    }

    /**
     * Parse text for single unit weight.
     * @param {(string|number)} text - Text to parse for single unit weight.
     * @returns {Ounces} Ounces object.
     */
    static parseSingleUnit(text) {
        text = text.trim();

        // Single unit (3lb or 4oz)
        if (text.indexOf('lb') !== -1) {
            // Pounds (must include: lb or lbs)
            return (new Pounds(text)).toOunces();
        } else {
            // Ounces (default)
            return new Ounces(text);
        }
    }

    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @param {number} splitAt Index to split string.
     * @returns {Ounces} Ounces object.
     */
    static parseDualUnit(text, splitAt) {
        // "splitAt" must be defined and must be a number
        if (typeof splitAt !== 'number') {
            return false;
        }

        // Dual units split at index
        text = [
            text.substring(0, splitAt),
            text.substring(splitAt)
        ];

        // Pounds should precede ounces (unless signifier is preset: "lb" or "oz")
        return Pounds.parseSingleUnit(text[0]).toOunces().add(Ounces.parseSingleUnit(text[1]));
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
    toString(spaces = true, roundTo = 0) {
        let formattedWeight = '';

        let ounces = this;

        // Excess ounces = pounds
        if (ounces.isHeavier(15)) {
            // Extract whole pounds from ounces
            let pounds = ounces.toPounds().floor();

            // Reduce ounces by whole pounds
            ounces.subtract(pounds);

            // Format pounds for human consumption
            formattedWeight = pounds.toFixed() + (spaces ? ' ' : '') + (pounds.isSame(1) ? 'lb' : 'lbs');

            // Any ounces remaining?
            if (ounces.isEmpty()) {
                // Return if no ounces are remaining
                return formattedWeight;
            }

            // Prep for ounces formatting
            formattedWeight = formattedWeight + ' ';
        }

        // Format ounces for human consumption
        return formattedWeight + ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
    }
}
