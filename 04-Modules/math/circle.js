"use strict";
exports.__esModule = true;
// I can add the export keyword to make a function / constant available outside of this file.
// These values will have to be imported to be used elsewhere!
exports.PI = 3.14;
function calculateCircumference(diameter) {
    return diameter * exports.PI;
}
exports.calculateCircumference = calculateCircumference;
