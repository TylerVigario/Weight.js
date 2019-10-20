  
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
    constructor(units = [
        {
            name: 'Grain',
            value: -7000,
            signifiers: [
                'gr',
                'grain',
                'grains'
            ]
        },
        {
            name: 'Drachm',
            value: -255.999,
            signifiers: [
                'dr',
                'drachm',
                'drachms'
            ]
        },
        {
            name: 'Ounce',
            value: -16,
            signifiers: [
                'oz',
                'ounce',
                'ounces'
            ]
        },
        {
            name: 'Pound',
            value: 1,
            signifiers: [
                'lb',
                'lbs',
                'pound',
                'pounds'
            ]
        },
        {
            name: 'Stone',
            value: 14,
            signifiers: [
                'st',
                'stone',
                'stones'
            ]
        },
        {
            name: 'Quarter',
            value: 28,
            signifiers: [
                'qr',
                'qtr',
                'quarter',
                'quarters'
            ]
        },
        {
            name: 'Hundredweight',
            value: 112,
            signifiers: [
                'cwt',
                'hundredweight'
            ]
        },
        {
            name: 'Ton',
            value: 2240,
            signifiers: [
                't',
                'ton',
                'tons'
            ]
        }
    ])
    {
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
                signifier += char;
            } else {
                // Check if this is next unit pair (i.e. value,signifier|value,signifier|...)
                if (signifier.length > 0) {
                    // Catch the case where they supply text prior to the value
                    if (value.length === 0) {
                        return false;
                    }

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
                    if (unit.value > 0) {
                        total += pair.value * unit.value;
                    } else {
                        total += pair.value / Math.abs(unit.value);
                    }

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
     * @param {object} [rounding = {tons: 2, ounces: 0}] - The rounding to perform.
     * @returns {string} Formatted mass string.
     */
    format(value, unitValue = 1, spaces = true, rounding = {tons: 2, ounces: 0})
    {
        let formattedWeight = '';
        
        // Did they supply custom unit value ratio?
        if (unitValue !== 1) {
            // Validate number
            if (typeof unitValue !== 'number') {
                return false;
            }

            // Convert value to base unit value
            if (unitValue > 0) {
                value = value * unitValue;
            } else {
                value = value / Math.abs(unitValue);
            }
        }

        let pounds = value;

        // Convert base value to ounces
        let ounces = pounds * 16;

        // Check if pounds is less than one
        if (ounces < 16) {
            // Return formatted ounces only
            return ounces.toFixed(rounding.ounces) + (spaces ? ' ' : '') + 'oz';
        }

        // Floor pounds to remove change
        pounds = Math.floor(pounds);

        // Subtract ounces equal to whole pounds (leaving remaining ounces)
        ounces -= (pounds * 16);

        // Check for excess pounds
        if (pounds >= 2240) {
            // Calculate tons from pounds
            let tons = pounds / 2240;

            // Format tons
            return tons.toFixed(rounding.tons) + (spaces ? ' ' : '') + (tons > 1 ? 'tons' : 'ton');
        }

        // Format pounds
        formattedWeight = pounds + (spaces ? ' ' : '') + (pounds > 1 ? 'lbs' : 'lb');

        // Verify remaining ounces
        if (ounces > 0) {
            // Format ounces
            formattedWeight += ' ' + ounces.toFixed(rounding.ounces) + (spaces ? ' ' : '') + 'oz';
        }

        return formattedWeight;
    }
}