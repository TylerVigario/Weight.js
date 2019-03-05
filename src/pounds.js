/** 
 * Pound mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.13
 */

import MassUnit from './mass_unit';
import Ounces from './ounces';

/**
 * Class representing pound mass units.
 * @extends {MassUnit}
 */
export default class Pounds extends MassUnit {
    /**
     * Get value from variable.
     * @ignore
     * @protected
     * @param {(Ounces|Pounds|number|string)} weight - Variable to extract weight from.
     * @returns {number}
     * @see {@link MassUnit._getValue}
     */
    _getValue(weight) {
        if (weight instanceof Ounces) {
            return weight.toPounds().value;
        } else if (weight instanceof Pounds) {
            return weight.value;
        }

        // String?
        if (typeof weight === 'string') {
            weight = Pounds.parse(weight);

            if (weight instanceof Pounds) {
                weight = weight.value;
            }
        }

        return super._getValue(weight);
    }

    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @returns {(Pounds|false)} Returns a Pounds object or false on error.
     * @see {@link Ounces.parse}
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
     * @protected
     * @throws {TypeError} Thrown if no signifier is found and the unitType is invalid.
     * @returns {(Pounds|false)} Returns a Pounds object or false on error.
     */
    static _parseSingleUnit(text, unitType = Pounds) {
        text = text.trim();

        // Last validation before initializing.
        let weight = parseFloat(text);

        if (isNaN(weight)) {
            return false;
        }

        // Single unit (3lb or 4oz)
        if (text.indexOf('oz') !== -1) {
            // Ounces (must include: oz)
            return (new Ounces(weight)).toPounds();
        } else if (text.indexOf('lb') !== -1) {
            // Pounds (default)
            return new Pounds(weight);
        } else {
            // Undefined (use default unitType)
            switch (unitType) {
                case 'Ounces':
                case 'ounces':
                case 'oz':
                case Ounces:
                    return new Ounces(weight).toPounds();
                case 'Pound':
                case 'pound':
                case 'Pounds':
                case 'pounds':
                case 'lb':
                case 'lbs':
                case Pounds:
                    return (new Pounds(weight));
                default:
                    throw new TypeError('Invalid unit type.');
            }
        }
    }

    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @param {number} splitAt - Index to split string.
     * @param {boolean} [outOfOrder = false] - False (default) signifies pounds precedes ounces, true signifies ounces preceding pounds.
     * @protected
     * @returns {(Pounds|false)} Returns a Pounds object or false on error.
     * @see {@link parseSingleUnit}
     */
    static _parseDualUnit(text, splitAt, outOfOrder = false) {
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
        let ounces = Ounces._parseSingleUnit(text[0]);
        let pounds = Pounds._parseSingleUnit(text[1]);

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
        return new Ounces(this._weight * 16);
    }

    /**
     * Convert weight to text.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
     * @returns {string} Formatted weight.
     * @see {@link Ounces.toString}
     */
    toString(spaces = true, roundTo = 0) {
        return this.toOunces().toString(spaces, roundTo);
    }
}
