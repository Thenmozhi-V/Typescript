"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = toUpperCase;
exports.reverseString = reverseString;
function toUpperCase(str) {
    return str.toUpperCase();
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
