// Array functions
// mutator functions
// [] - Dnamic arrays 
// push- Appends new elements to the end of an array, and returns the new length of the array.

let arr = [10,20,30,40];
arr.push(50);
console.log(arr); // 10,20,30,40,50
// pop:- Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let prod = ['apple', 'iphone', 'mac', 'samsung'];
prod.pop();
console.log(prod); //[ 'apple', 'iphone', 'mac' ]
// unshif:- Inserts new elements at the start of an array, and returns the new length of the array. 
let p = ['app', 'pop', 'tat'];
let t1=p.unshift('cat');
console.log(t1);
console.log(p);
// shift:- (method) Array<string>.shift(): string | undefined
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let p = ['app', 'pop', 'tat'];
let t1=p.shift();
console.log(t1); // app
console.log(p);
// splice :- add, remove, replace splice(start: number, deleteCount?: number): string[]
//The zero-based location in the array from which to start removing elements.
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount
// The number of elements to remove. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

// @param items — Elements to insert into the array in place of the deleted elements.

// @returns — An array containing the elements that were deleted.
// splice [startindex, deletecount, replace]
let prods = ['apple', 'iphone', 'mac', 'samsung'];
let p1=prods.splice(1,3, 'itab');
console.log(p1);
console.log(prods);
// splice with negative index:- 
let p2 = ['swamy', 'ravi', 'rakesh', 'siva']
 let p3= p2.splice(-4, 2, 'venkat');
 console.log(p3); // swamy, ravi
 console.log(p2);
// slice
//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// @param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
let p2 = ['swamy', 'ravi', 'rakesh', 'siva']
let p=p2.slice(-4,-2);
console.log(p);
console.log(p2);
// negative index look like this an array Value:   swamy    ravi    rakesh    siva
//Index:     -4      -3       -2       -1
// reverse:- Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array
let p2 = ['swamy', 'ravi', 'rakesh', 'siva']
p2.reverse();
console.log(p2);
// index of Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// @param searchElement — The value to locate in the array.
// @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
let p2 = ['swamy', 'ravi', 'rakesh', 'siva']
let i=p2.indexOf('swamy') //0
console.log(i);
// at :- Returns the item located at the specified index
let p2 = ['swamy', 'ravi', 'rakesh', 'siva']
console.log(p2.at(1)); //ravi
console.log(p2.at(-4)); // swamy

//join 
let name = ['java', 'javascript', 'python', 10]
let k=name.join('*');
console.log(k);
// to string 
let p=name.toString();
console.log(p);
// count of occurence of product imac
let products= ['imac', 'apple', 'samsung', 'imac', 'iphone', 'imac']
let t = products.indexOf('imac');
console.log(t); // first occurence
let k = products.indexOf('imac', t+1);
console.log(k); // 2nd occurence
let h=products.indexOf('imac', k+1);
console.log(h); // 3rd occurence


// for loop for above programm logic
let products = ['imac', 'apple', 'samsung', 'imac', 'iphone', 'imac'];

let count = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i] === 'imac') {
    count++;

    console.log(count + " occurrence of imac is at index: " + i);
  }
}

console.log("Total imac occurrences: " + count);


// occurence of products programm

let products = ["Laptop", "Mobile", "Laptop", "Tablet", "Mobile", "Laptop"];

let countMap = {};

for (let i = 0; i < products.length; i++) {
  let product = products[i];

  if (countMap[product]) {
    countMap[product]++;
  } else {
    countMap[product] = 1;
  }
}

console.log(countMap);

// includes boolean Determines whether an array includes a certain element, returning true or false as appropriate
let products = ["Laptop", "Mobile", "Laptop", "Tablet", "Mobile", "Laptop"];
  let p= products.includes('Laptop');
  console.log(p);
  // foreach():- (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// Performs the specified action for each element in an array.
// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  let products = ["Laptop", "Mobile", "Laptop", "Tablet", "Mobile", "Laptop"];
  products.forEach((ele)=> console.log(ele));
  // upper case 
  products.forEach((ele)=> console.log(ele.toUpperCase(), ele.length));

  // add grapes to the end and orange to the begining 
  let fruits = ['apple', 'banana', 'mango']
  fruits.push('grapes')
  console.log(fruits);
  fruits.unshift('orange')
  console.log(fruits);
  
  // each num is square 
  let num = [1,2,3,4,5,6]
  num.forEach((ele)=> console.log(ele * ele));
  // largest number
  let nu = [5, 10,15,20,25,35,150]
  let m=Math.max( ... nu);
  console.log(m);




 