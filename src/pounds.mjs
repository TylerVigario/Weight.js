import Ounces from './ounces.mjs';

export default class Pounds {
    constructor(pounds) {
        this.value = pounds;
    }

    static parse(text) {
        return Ounces.parse(text).toPounds();
    }

    toOunces() {
        return new Ounces(this.pounds * 16);
    }

    toString() {
        return this.toOunces().toString();
    }

    get value() {
        return this.pounds;
    }

    set value(value) {
        value = parseFloat(value);

        if (isNaN(value)) {
            throw 'Parameter passed to constructor must be a number.';
        }

        this.pounds = value;
    }

    add(weight) {
        if (weight instanceof Pounds) {
            this.pounds += weight.value;
        } else if (weight instanceof Ounces) {
            this.pounds += weight.toPounds().value;
        } else {
            weight = parseFloat(weight);

            if (isNaN(weight)) {
                throw 'Invalid paramater passed to function add.';
            }

            this.pounds = this.pounds + weight;
        }

        return this;
    }
}
