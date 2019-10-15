var Mass = {};

/**
 * Parse variable for Mass.
 * @param {(number|object|string)} mass - Variable to parse for mass.
 * @returns {(number|false)} Returns mass represented in lowest imperial unit (ounces) or false.
 * @see {@link Mass.parseSingleUnit}
 * @see {@link Mass.parseDualUnit}
 */
Mass.parse = function (mass) {
    if (typeof mass === 'number') {
        // Value cannot be lower than zero
        if (mass < 0) {
            mass = 0;
        }
        
        return mass;
    } else if (typeof mass === 'object') {
        // Support for objects that have "toString" method
        if (typeof mass.toString !== 'function') {
            return false;
        }

        mass = mass.toString();
    }
    // We expect to parse a string
    else if (typeof mass !== 'string') {
        return false;
    }

    // Remove all spaces
    mass = mass.replace(/\s/g, '');

    // Is string empty?
    if (mass.length === 0) {
        return 0;
    }

    // Remove case sensitivity
    mass = mass.toLowerCase();

    // Look for signifiers
    let ozID = mass.indexOf('oz');
    let lbID = mass.indexOf('lb');

    // Does it include signifiers?
    if (ozID !== -1 && lbID !== -1) {
        // Pounds precedes ounces (normal)
        if (lbID < ozID) {
            lbID += 2;

            // Did they use "lbs"?
            if (mass.charAt(lbID) === 's') {
                lbID += 1;
            }

            return Mass.parseDualUnit(mass, lbID);
        } else {
            // Ounces precedes pounds (out-of-order)
            ozID += 2;

            return Mass.parseDualUnit(mass, ozID, true);
        }
    } else if (ozID !== -1) {
        // Let's keep "oz" for parseSingleUnit
        let separator = ozID + 2;

        // Is Single unit?
        if (separator === mass.length) {
            return Mass.parseSingleUnit(mass);
        }

        return Mass.parseDualUnit(mass, separator, true);
    } else if (lbID !== -1) {
        let separator = lbID + 2;

        // Did they use "lbs"?
        if (mass.charAt(separator) === 's') {
            separator++;
        }

        // Is Single unit?
        if (separator === mass.length) {
            return Mass.parseSingleUnit(mass);
        }

        return Mass.parseDualUnit(mass, separator);
    } else {
        let separator = mass.indexOf(',');

        if (separator !== -1) {
            // Dual units split by a comma (i.e. 3lb, 4oz)
            return Mass.parseDualUnit(mass, separator + 1);
        }

        // Single unit
        return Mass.parseSingleUnit(mass);
    }
};

/**
 * Parse variable for single unit mass.
 * @param {(string|number)} text - Variable to parse for single unit mass.
 * @returns {(number|false)} Returns mass represented in lowest imperial unit (ounces) or false.
 */
Mass.parseSingleUnit = function (text) {
    text = text.trim();

    // Last validation before initializing.
    let mass = parseFloat(text);

    if (isNaN(mass)) {
        return false;
    }

    // Value cannot be lower than zero
    if (mass < 0) {
        mass = 0;
    }

    // Single unit (3lb or 4oz)
    if (text.indexOf('lb') !== -1) {
        // Pounds (must include: lb or lbs)
        // Convert to ounces
        mass = mass * 16;

        return mass;
    } else if (text.indexOf('oz') !== -1) {
        // Ounces
        return mass;
    } else {
        // Undefined (assumed ounces)
        // ! May soon return false instead
        return mass;
    }
};

/**
 * Parse variable for weight.
 * @param {(string|number)} text - Variable to parse for weight.
 * @param {number} splitAt - Index to split string.
 * @param {boolean} [outOfOrder = false] - False (default) signifies pounds precedes ounces, true signifies ounces preceding pounds.
 * @returns {(number|false)} Returns mass represented in lowest imperial unit (ounces) or false.
 * @see {@link Mass.parseSingleUnit}
 */
Mass.parseDualUnit = function (text, splitAt, outOfOrder = false) {
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
    let ounces = Mass.parseSingleUnit(text[0]);
    let pounds = Mass.parseSingleUnit(text[1]);

    // Did we have any trouble parsing single units?
    if (ounces === false || pounds === false) {
        return false;
    }

    // Return adding pounds to ounces
    return ounces + pounds;
};

/**
 * Format mass as text.
 * @param {number} ounces - Mass (represented as ounces) to format.
 * @param {boolean} [spaces = true] - Whether to add spaces between weight and signifier.
 * @param {number} [roundTo = 0] - The rounding to perform on the ounces.
 * @returns {string} Formatted mass string.
 */
Mass.format = function (ounces, spaces = true, roundTo = 0) {
    let formattedWeight = '';

    // Excess ounces = pounds
    if (ounces > 15) {
        // Extract whole pounds from ounces
        let pounds = Math.floor((ounces / 16));

        // Reduce ounces by whole pounds
        ounces = ounces - (pounds * 16);

        // Format pounds for human consumption
        formattedWeight = pounds.toFixed(0) + (spaces ? ' ' : '') + (pounds > 1 ? 'lbs' : 'lb');

        // Any ounces remaining?
        if (ounces === 0) {
            // Return if no ounces are remaining
            return formattedWeight;
        }

        // Prep for ounces formatting
        formattedWeight = formattedWeight + ' ';
    }

    // Format ounces for human consumption
    return formattedWeight + ounces.toFixed(roundTo) + (spaces ? ' ' : '') + 'oz';
};

// Exports
export {
    Mass as default
};