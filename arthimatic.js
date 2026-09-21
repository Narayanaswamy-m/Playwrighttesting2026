// == Soft Equalityis ignore datatypes == compares values after type conversion (coercion).
// === Hard  Equality is considered data types compares both value and data type.
console.log('20'== 20); // true
console.log(20==20); // true
console.log(+'20'==20); // true
console.log(-'35'==35); // false

console.log('20'=== 20); // false
console.log(20 === 20); // true 
console.log(+'20'=== 20); // true
console.log(-'345'===345); //false

// Coercion in JavaScript is the automatic conversion of one data type into another by the JavaScript engine.

// JavaScript often tries to make operations work even when the operands have different types.


