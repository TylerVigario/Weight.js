/** 
 * Weight.js
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 1.4.2
 */

import Ounces from './ounces';
import Pounds from './pounds';

class Weight {
    /**
     * Parse text for weight.
     * @param {(string|number)} text - Text to parse for weight.
     * @returns {Ounces} Ounces object.
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

        // Remove spaces
        text = text.replace(/\s/g, '');

        // Is string empty?
        if (text.length === 0) {
            return new Ounces(0);
        }

        // Remove case sensitivity
        text = text.toLowerCase();

        let separator = -1;
        let ozID = text.indexOf('oz');
        let lbID = text.indexOf('lb');

        // Does it include signifiers?
        if (ozID !== -1 && lbID !== -1) {
            // Pounds precedes ounces (normal)
            if (lbID < ozID) {
                lbID += 2;

                // Did they use "lbs"?
                if (text.indexOf('lbs') !== -1) {
                    lbID += 1;
                }

                return Ounces.parseDualUnit(text, lbID);
            } else {
                // Ounces precedes pounds (out-of-order)
                ozID += 2;

                return Ounces.parseDualUnit(text, ozID, true);
            }
        } else if (ozID !== -1) {
            // Let's keep "oz" for parseSingleUnit
            separator = ozID + 2;

            // Is Single unit?
            if (separator === text.length) {
                return Ounces.parseSingleUnit(text);
            }

            return Ounces.parseDualUnit(text, separator, true);
        } else if (lbID !== -1) {
            separator = lbID + 2;

            // Did they use "lbs"?
            if (text.indexOf('lbs') !== -1) {
                separator++;
            }

            // Is Single unit?
            if (separator === text.length) {
                return Ounces.parseSingleUnit(text, Pounds);
            }

            return Ounces.parseDualUnit(text, separator);
        } else if ((separator = text.indexOf(',')) !== -1) {
            // Dual units split by a comma (i.e. 3lb, 4oz)
            return Ounces.parseDualUnit(text, separator + 1);
        } else {
            // Single unit
            return Ounces.parseSingleUnit(text);
        }
    }
}

export {
    Weight,
    Ounces,
    Pounds
};
