"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Add types to this function declaration.
function doubleThePopulation(value) {
    return value * 2;
}
// Correct or remove the function calls which cause type errors.
doubleThePopulation(5);
doubleThePopulation(6.12);
doubleThePopulation(8526);
// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.
function languagesSpoken(country, language1, language2) {
    if (typeof language2 === "string") {
        console.log(`The languages spoken in ${country} are:`);
        console.log(language1);
        console.log(language2);
    }
    else {
        console.log(`The languages spoken in ${country} is:`);
        console.log(language1);
    }
}
languagesSpoken("Colombia", "Spanish", "English");
languagesSpoken("Greece", "Greek");
languagesSpoken("New Zealand", "English", "Māori");
