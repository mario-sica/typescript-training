"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Currency {
    constructor(name, code, symbol) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }
    describe() {
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;
        console.log(description);
    }
}
// Alter this class to extend the `Currency` class.
class DetailedCurrency extends Currency {
    // Add a `banknotes` parameter with the same type as the `banknotes` field.
    constructor(name, code, symbol, banknotes) {
        // Fix this call to the parent constructor.
        super(name, code, symbol);
        // Store the value of the `banknotes` parameter in the corresponding field.
        this.banknotes = banknotes;
    }
    // Change the visibility modifier on this method so it can be called
    // by code outside of this class.
    describeBankNotes() {
        // Change the visibility of the parent class `name` field so
        // that its value can be read here in this child class method.
        let description = `The ${this.name} currency uses the banknotes `;
        // Replace `null` with the value of the `banknotes` field.
        description += this.banknotes;
        console.log(description);
    }
}
const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);
euroCurrency.describe();
euroCurrency.describeBankNotes();
