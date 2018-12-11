/** 
 * Pound mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.0 
 */

import MassUnit from './mass_unit.mjs';
import Ounces from './ounces.mjs';

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
    toString(roundTo = 0) {
        return this.toOunces().toString(roundTo);
    }
}
