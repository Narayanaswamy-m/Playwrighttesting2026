// Both use the same syntax: ..., but they have different purposes.

// Operator	Purpose	Location
// Rest	Collects multiple values into one array or object	Function parameters, destructuring
// Spread	Expands an array or object into individual values	Function calls, arrays, and objects

// rest operator 
// The rest operator collects remaining values.
// it is always gives at the end of functions
function addNumbers(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(addNumbers(10, 20, 30)); // 60

// Rest with destructuring

const numbers = [10, 20, 30, 40];

const [first, second, ...remaining] = numbers;

console.log(first); // 10
console.log(second);//20
console.log(remaining); // [30,40]

// Rest with objects 
const user = {
  name: "John",
  age: 30,
  city: "London"
};

const { name, ...otherDetails } = user;

console.log(name); // john
console.log(otherDetails); // { age: 30, city: 'London' }

// spread operator 
// The spread operator expands values.
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

console.log(combined); // 1,2,3,4,5,6

// spread with function arguments 
const numbers = [10, 20, 30];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...numbers)); // 60

//The rest operator collects multiple values into a single array or object. The spread operator expands an array or object into individual values. Both use ..., but rest is used for collecting values, while spread is used for expanding values.
// Use spread when a function expects separate arguments but you have an array.
const user = {
  name: "John",
  age: 30
};

const updatedUser = {
  ...user,
  age: 31
};

console.log(updatedUser); // john, 31


