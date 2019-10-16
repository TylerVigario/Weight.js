  
/** 
 * Parsing and formatting imperial mass units.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license GPL-3.0-only
 * @version 2.0.0
 */

import {MassUnits} from './massUnits';

/**
 * Class for working with string representations of mass.
 */
export default class Mass
{
    /**
     * Parse variable for Mass.
     * 
     * @param {(number|string)} text - Variable to parse for mass.
     * @returns {(number|false)} Returns mass represented in it's base imperial unit (pound) or false.
     * @see {@link Mass.parseUnit}
     */
    static parse(text)
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

        // Remove all spaces and commas
        text = text.replace(/[, ]+/g, '');

        // Is string empty?
        if (text.length === 0) {
            return 0;
        }

        // Remove possible case sensitivity
        text = text.toLowerCase();

        // Find all signifiers within string
        let signifiers = Mass.findSignifiers(text);

        // Did we not find any signifiers?
        if (signifiers.length === 0) {
            return false;
        }

        // Extract individual unit for parsing
        let total = 0;
        let i = 0;
        signifiers.forEach((signifier) => {
            // Copy single unit from string
            let singleUnit = text.substring(i, signifier.splitAt);

            // Parse individual unit and add result to total
            total += Mass.parseUnit(singleUnit, MassUnits[signifier.unit]);

            // Set starting point for next search
            i = signifier.splitAt;
        });

        // Return total mass (as pounds)
        return total;
    }

    /**
     * Find mass unit signifiers within string.
     *
     * @param {string} text
     * @returns {array}
     */
    static findSignifiers(text) {
        // Find first signifier
        let signifiers = [];

        // Loop through MassUnits
        for (let MassUnit in MassUnits) {
            let signifier = -1;

            // Loop through each MassUnit's signifiers
            MassUnits[MassUnit].signifiers.forEach((s) => {
                // Look for signifier
                let o = text.indexOf(s);

                // Did we find signifier?
                if (o !== -1) {
                    // Since we want the index to represent the split BETWEEN units
                    // we will add the length of the signifier to include it
                    o = o + s.length;

                    // We want to find the first signifier in the string
                    if (signifier === -1 || o > signifier.splitAt) {
                        signifier = {
                            unit: MassUnit,
                            signifier: s,
                            splitAt: o
                        };
                    }
                }
            });

            // We want to find the first signifier in the string
            if (signifier !== -1 ) {
                // Add only one (found) signifier per unit
                signifiers.push(signifier);
            }
        }

        // Sort ascending by splitAt index
        signifiers.sort((a, b) => {
            return a.splitAt - b.splitAt;
        });

        return signifiers;
    }

    /**
     * Parse string for single mass unit.
     * 
     * @param {string} text - String to parse for single mass unit.
     * @param {object} MassUnit
     * @returns {(number|false)} Returns mass represented in it's base imperial unit (pound) or false.
     */
    static parseUnit(text, MassUnit)
    {
        // Validate variable is of type string
        if (typeof text !== 'string') {
            return false;
        }

        // Pull number from string
        let mass = parseFloat(text);

        // Validate we were able to extract a number
        if (isNaN(mass)) {
            return false;
        }

        // Value cannot be lower than zero
        if (mass < 0) {
            // Return lowest possible value
            return 0;
        }

        // Convert to base unit
        return mass / MassUnit.value;
    }

    /**
     * Format mass as text.
     * 
     * @param {number} pounds - Mass (represented as base unit pound) to format.
     * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
     * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
     * @returns {string} Formatted mass string.
     */
    static format(pounds, spaces = true, roundTo = 0)
    {
        let formattedWeight = '';
        
        // Convert pounds to ounces
        let ounces = pounds * 16;

        // Check if pounds is less than one
        if (pounds < 1) {
            // Return formatted ounces only
            return ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
        }

        // Floor pounds to remove change
        pounds = Math.floor(pounds);

        // Subtract ounces equal to whole pounds (leaving remaining ounces)
        ounces -= (pounds * 16);

        // Format pounds
        formattedWeight = pounds + (spaces ? ' ' : '') + (pounds > 1 ? 'lbs' : 'lb');

        // Verify remaining ounces
        if (ounces > 0) {
            // Format ounces
            formattedWeight += ' ' + ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
        }

        return formattedWeight;
    }
}