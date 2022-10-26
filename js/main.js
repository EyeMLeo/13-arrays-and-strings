'use strict';
console.log('main.js');

let someNumber = 50.45;

console.log('Number.isInteger(someNumber) ===', Number.isInteger(someNumber));

console.log("someNumber.toString().includes('.') ===", !someNumber.toString().includes('.'));
