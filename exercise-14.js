"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const populations = [
    1412600000,
    60317116,
    69950850,
    10678632,
];
// The Array reduce method allows us to generate a single value from
// an array of values. Below we're using it to sum the values of the
// `populations` array.
//
// The `population` parameter in the callback has an inferred type of `number`.
// Change the initial value (`false`) to a value with the same type as `population`.
// This should fix the type error on Line 23.
//
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const sumOfPopulations = populations.reduce((total, population) => {
    return total + population;
}, 0);
console.log(sumOfPopulations);
