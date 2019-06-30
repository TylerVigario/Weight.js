/** 
 * Ounce mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.15
 */

import MassUnit from './mass_unit';
import Pounds from './pounds';

/**
 * Class representing ounce mass units.
 * @extends {MassUnit}
 */
export default class Ounces extends MassUnit {
    /**
     * Get value from variable.
     * @ignore
     * @protected
     * @param {(Ounces|Pounds|number|string)} weight - Variable to extract weight from.
     * @returns {number}
     * @see {@link MassUnit._getValue}
     */
    _getValue(weight) {
        // One of ours?
        if (weight instanceof Ounces) {
            return weight.value;
        } else if (weight instanceof Pounds) {
            return weight.toOunces().value;
        }

        // String?
        if (typeof weight === 'string') {
            weight = Ounces.parse(weight);

            if (weight instanceof Ounces) {
                weight = weight.value;
            }
        }

        return super._getValue(weight);
    }

    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @returns {(Ounces|false)} Returns an Ounces object or false on error.
     * @see {@link parseSingleUnit}
     * @see {@link parseDualUnit}
     */
    static parse(text) {
        // Can't glean much info from a number
        if (typeof text === 'number') {
            return new Ounces(text);
        }
        // Support for objects that have "toString" method
        else if (typeof text === 'object') {
            if (typeof text.toString !== 'function') {
                return false;
            }

            text = text.toString();
        }
        // We expect to parse a string
        else if (typeof text !== 'string') {
            return false;
        }

        // Remove all spaces
        text = text.replace(/\s/g, '');

        // Is string empty?
        if (text.length === 0) {
            return new Ounces(0);
        }

        // Remove case sensitivity
        text = text.toLowerCase();

        // Look for signifiers
        let ozID = text.indexOf('oz');
        let lbID = text.indexOf('lb');

        // Does it include signifiers?
        if (ozID !== -1 && lbID !== -1) {
            // Pounds precedes ounces (normal)
            if (lbID < ozID) {
                lbID += 2;

                // Did they use "lbs"?
                if (text.charAt(lbID) === 's') {
                    lbID += 1;
                }

                return Ounces._parseDualUnit(text, lbID);
            } else {
                // Ounces precedes pounds (out-of-order)
                ozID += 2;

                return Ounces._parseDualUnit(text, ozID, true);
            }
        } else if (ozID !== -1) {
            // Let's keep "oz" for parseSingleUnit
            let separator = ozID + 2;

            // Is Single unit?
            if (separator === text.length) {
                return Ounces._parseSingleUnit(text);
            }

            return Ounces._parseDualUnit(text, separator, true);
        } else if (lbID !== -1) {
            let separator = lbID + 2;

            // Did they use "lbs"?
            if (text.charAt(separator) === 's') {
                separator++;
            }

            // Is Single unit?
            if (separator === text.length) {
                return Ounces._parseSingleUnit(text, Pounds);
            }

            return Ounces._parseDualUnit(text, separator);
        } else {
            let separator = text.indexOf(',');

            if (separator !== -1) {
                // Dual units split by a comma (i.e. 3lb, 4oz)
                return Ounces._parseDualUnit(text, separator + 1);
            }

            // Single unit
            return Ounces._parseSingleUnit(text);
        }
    }

    /**
     * Parse text for single unit weight.
     * @param {(string|number)} text - Text to parse for single unit weight.
     * @param {(Ounces|Pounds|string)} unitType - Default unit type if no signifier is found.
     * @protected
     * @throws {TypeError} Thrown if no signifier is found and the unitType is invalid.
     * @returns {(Ounces|false)} Returns an Ounces object or false on error.
     */
    static _parseSingleUnit(text, unitType = Ounces) {
        text = text.trim();

        // Last validation before initializing.
        let weight = parseFloat(text);

        if (isNaN(weight)) {
            return false;
        }

        // Single unit (3lb or 4oz)
        if (text.indexOf('lb') !== -1) {
            // Pounds (must include: lb or lbs)
            return (new Pounds(weight)).toOunces();
        } else if (text.indexOf('oz') !== -1) {
            // Ounces
            return new Ounces(weight);
        } else {
            // Undefined (use default unitType)
            switch (unitType) {
                case 'Ounces':
                case 'ounces':
                case 'oz':
                case Ounces:
                    return new Ounces(weight);
                case 'Pound':
                case 'pound':
                case 'Pounds':
                case 'pounds':
                case 'lb':
                case 'lbs':
                case Pounds:
                    return (new Pounds(weight)).toOunces();
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
     * @returns {(Ounces|false)} Returns an Ounces object or false on error.
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

        // Return adding pounds to ounces (to maintain an Ounces object)
        return ounces.add(pounds);
    }

    /**
     * Convert ounces to pounds.
     * @returns {Pounds} Pounds object.
     */
    toPounds() {
        return new Pounds(this._weight / 16);
    }

    /**
     * Convert weight to text.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
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
            formattedWeight = pounds.toFixed(0) + (spaces ? ' ' : '') + (pounds.isSame(1) ? 'lb' : 'lbs');

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
