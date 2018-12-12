/** 
 * Pound mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.6
 */

import MassUnit from './mass_unit';
import Ounces from './ounces';

/**
 * Class representing pound mass units.
 * @extends MassUnit
 */
export default class Pounds extends MassUnit {
    /**
     * Get value from variable.
     * @param {(Ounces|Pounds|number|string)} weight - Variable to extract weight from.
     * @returns {number}
     */
    getValue(weight) {
        if (weight instanceof Ounces) {
            return weight.toPounds().value;
        } else if (weight instanceof Pounds) {
            return weight.value;
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
     * Parse text for single unit weight.
     * @param {(string|number)} text - Text to parse for single unit weight.
     * @returns {Ounces} Ounces object.
     */
    static parseSingleUnit(text) {
        text = text.trim();

        // Single unit (3lb or 4oz)
        if (text.indexOf('oz') !== -1) {
            // Ounces (must include: oz)
            return (new Ounces(text)).toPounds();
        } else {
            // Pounds (default)
            return new Pounds(text);
        }
    }

    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @param {string} splitAt
     * @returns {Pounds} Pounds object.
     */
    static parseDualUnit(text, splitAt) {
        // "splitAt" must be defined and must be a number
        if (typeof splitAt !== 'number') {
            return false;
        }

        // Dual units split at index
        return Pounds.parseSingleUnit(text.substring(0, splitAt)).add(Ounces.parseSingleUnit(text.substring(splitAt)));
    }

    /**
     * Convert pounds to ounces.
     * @returns {Ounces} Ounces object.
     */
    toOunces() {
        return new Ounces(this.weight * 16);
    }

    /**
     * Convert weight to text.
     * @returns {string} Formatted weight.
     */
    toString(spaces = true, roundTo = 0) {
        return this.toOunces().toString(spaces, roundTo);
    }
}
