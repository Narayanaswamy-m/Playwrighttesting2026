let age =10;
console.log(age >=18 ? "Eligible" : "not eligible");

// ternaory operator syntax 
// condition ? if true : if false 
// generally this can be used for simple if else condition replacement not used for complex 
// In short, the ternary operator (? :) is a one-line replacement for a simple if...else statement.
let x = 10;

let result =
    x > 5
        ? x > 8
            ? x > 9
                ? "A"
                : "B"
            : "C"
        : "D";

console.log(result); // a, b,c reslutwikl be a 

let value = null;

let result1 = value ? "Truthy" : "Falsy";

console.log(result1);  // falsy

