/** 
 * Pound mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.2
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
            if (weight < 0) {
                return 0;
            }

            return weight;
        } else {
            weight = parseFloat(weight);

            if (isNaN(weight)) {
                throw 'Invalid parameter passed to function.';
            }

            if (weight < 0) {
                return 0;
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
     * @param {(Ounces|Pounds|string)} unitType - Default unit type if no signifier is found.
     * @returns {Ounces} Ounces object.
     */
    static parseSingleUnit(text, unitType = Pounds) {
        text = text.trim();

        // Last validation before initializing.
        if (isNaN(parseFloat(text))) {
            return false;
        }

        // Single unit (3lb or 4oz)
        if (text.indexOf('oz') !== -1) {
            // Ounces (must include: oz)
            return (new Ounces(text)).toPounds();
        } else if (text.indexOf('lb') !== -1) {
            // Pounds (default)
            return new Pounds(text);
        } else {
            // Undefined (use default unitType)
            switch (unitType) {
                case 'Ounces':
                case 'ounces':
                case 'oz':
                case Ounces:
                    return new Ounces(text).toPounds();
                case 'Pound':
                case 'pound':
                case 'Pounds':
                case 'pounds':
                case 'lb':
                case 'lbs':
                case Pounds:
                    return (new Pounds(text));
                default:
                    throw 'Invalid unit type.';
            }
        }
    }

    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @param {string} splitAt
     * @param {boolean} outOfOrder - Ounces before pounds.
     * @returns {Pounds} Pounds object.
     */
    static parseDualUnit(text, splitAt, outOfOrder = false) {
        // "splitAt" must be defined and must be a number
        if (typeof splitAt !== 'number') {
            return false;
        }

        // Remove commas (shown to be problematic with our current flow)
        text = text.replace(',', '');

        // Dual units split at index
        if (outOfOrder === true) {
            text = [
                text.substring(0, splitAt),
                text.substring(splitAt)
            ];
        } else {
            text = [
                text.substring(splitAt),
                text.substring(0, splitAt)
            ];
        }

        // Parse
        let ounces = Ounces.parseSingleUnit(text[0]);
        let pounds = Pounds.parseSingleUnit(text[1]);

        // Did we have any trouble parsing single units?
        if (ounces === false || pounds === false) {
            return false;
        }

        // Return adding ounces to pounds
        return pounds.add(ounces);
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
