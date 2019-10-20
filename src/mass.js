  
/** 
 * Parsing and formatting mass units.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 2.0.0
 */

/**
 * Class for working with string representations of mass.
 */
export default class Mass
{
    /**
     * Creates an instance of Mass.
     */
    constructor(units = null)
    {
        if (units === null) {
            units = [{
                name: 'Ton',
                value: 2240,
                display: {
                    singular: 'ton',
                    plural: 'tons',
                    rounding: 2,
                    exclusive: true
                },
                signifiers: [
                    't',
                    'ton',
                    'tons'
                ]
            },{
                name: 'Hundredweight',
                value: 112,
                signifiers: [
                    'cwt',
                    'hundredweight'
                ]
            },{
                name: 'Quarter',
                value: 28,
                signifiers: [
                    'qr',
                    'qtr',
                    'quarter',
                    'quarters'
                ]
            },{
                name: 'Stone',
                value: 14,
                signifiers: [
                    'st',
                    'stone',
                    'stones'
                ]
            },{
                name: 'Pound',
                value: 1,
                display: {
                    singular: 'lb',
                    plural: 'lbs'
                },
                signifiers: [
                    'lb',
                    'lbs',
                    'pound',
                    'pounds'
                ]
            },{
                name: 'Ounce',
                value: 0.0625,
                display: 'oz',
                signifiers: [
                    'oz',
                    'ounce',
                    'ounces'
                ]
            },{
                name: 'Drachm',
                value: 0.00390625,
                signifiers: [
                    'dr',
                    'dram',
                    'drams',
                    'drachm',
                    'drachms'
                ]
            },{
                name: 'Grain',
                value: 1.4285714285714285714285714285714e-4,
                signifiers: [
                    'gr',
                    'grain',
                    'grains'
                ]
            }];
        }

        this.Units = units;
    }

    /**
     * Parse variable for Mass.
     * 
     * @param {(number|string)} text - Variable to parse for mass.
     * @returns {(number|false)} Returns mass represented in it's base mass unit or false.
     */
    parse(text)
    {
        if (typeof text === 'number') {
            // Value cannot be lower than zero
            if (text < 0) {
                text = 0;
            }
            
            return text;
        }
        // We expect to parse a string
        else if (typeof text !== 'string') {
            return false;
        }

        // Remove possible case sensitivity
        text = text.toLowerCase();

        // Remove non alphanumeric characters except periods
        text = text.replace(/[^0-9a-z.]/gi, '');

        // Is string empty?
        if (text.length === 0) {
            return 0;
        }

        // Character trailing parser
        let value = '';
        let signifier = '';
        let pairs = [];

        // Loop through each character of string
        for (let i = 0; i < text.length; i++) {
            // Get current char
            const char = text.charAt(i);

            // Check for alphabet letter (a-z,0-9|a-z,0-9|...) [comma = separator between value and signifier, | = separator between pairs]
            if (char.match(/[a-z]/i)) {
                // Catch the case where they supply text prior to the value
                if (value.length === 0) {
                    return false;
                }

                signifier += char;
            } else {
                // Check if this is next unit pair (i.e. value,signifier|value,signifier|...)
                if (signifier.length > 0) {
                    // Add pair to list of found pairs
                    pairs.push({
                        value: value,
                        signifier: signifier
                    });

                    // Reset storage variables
                    value = '';
                    signifier = '';
                }

                value += char;
            }
        }

        // Make sure we found both a value and a unit signifier
        if (value.length === 0 || signifier.length === 0) {
            return false;
        }

        // Add final pair
        pairs.push({
            value: value,
            signifier: signifier
        });

        // Calculate total
        let total = 0;

        // Loop through each pair
        for (let pair of pairs) {
            let found = false;

            // Loop through each Unit
            for (let unit of this.Units) {
                // Check if signifier matches Unit
                if (unit.signifiers.includes(pair.signifier)) {
                    found = true;

                    // Convert to base unit value and add to total
                    total += pair.value * unit.value;

                    // No need to keep searching
                    break;
                }
            }

            // Did we find a matching unit signifier
            if (!found) {
                // Return false
                return false;
            }
        }

        // Return total mass (as base unit)
        return total;
    }

    /**
     * Format mass as text.
     * 
     * @param {number} value - Value to format.
     * @param {number} [unitValue = 1] - Value of unit.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @returns {string} Formatted mass string.
     */
    format(value, unitValue = 1, spaces = true)
    {
        let formatted = '';

        if (value <= 0) {
            return '0';
        }
        
        // Did they supply custom unit value ratio?
        if (unitValue !== 1) {
            // Validate number
            if (typeof unitValue !== 'number') {
                return false;
            }

            // Convert value to base unit value
            value = value * unitValue;
        }

        // Loop through Units
        for (let unit of this.Units) {
            let v = unit.value;

            // Check if Unit is displaying and value is greater than unit value
            if (unit.display && value >= v) {
                // Calculate quantity of unit
                let q = value / v;

                if (!unit.display.exclusive) {
                    //
                    q = Math.floor(q);

                    // Subtract quantity from total
                    value -= q * v;
                }

                // Add space if text has content already
                if (formatted.length > 0) {
                    formatted += ' ';
                }

                // Add formatted value
                formatted += q.toFixed(unit.display.rounding ? unit.display.rounding : 0);

                // Add spaces (if applicable)
                if (spaces) {
                    formatted += ' ';
                }

                // Add unit signifier
                if (typeof unit.display === 'object') {
                    formatted += (q === 1 ? unit.display.singular : unit.display.plural);
                } else {
                    formatted += unit.display;
                }

                if (unit.display.exclusive || value === 0) {
                    break;
                }
            }
        }

        return formatted;
    }
}