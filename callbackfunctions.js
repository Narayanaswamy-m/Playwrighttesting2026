// callback-call the function later
// passing a function as parameter to another function
// name:- testing 
// param:- 1 Param function
function testing(callback) {
    
    console.log("hello iam doing something");
    callback();
}

function print() {
    console.log("hello world ");
    
}
// calling the function by callback call the testing function by passing the function/functionname
testing(print);

// 2.  calling testing function by passing anonymous function / function name 
testing(function () {
    console.log('hey swamy how are you ');
    
});

// 3. calling testing function by passing arrow function 
testing(() => {
    console.log("hello today session is js");
});

// 4. calling testing function by passing anonymous function/function expression name 
let add = function () {
    console.log('Hello ts');
} 
testing(add);
// 5. calling testing function by passing arrow function by passing expression name 
let click = () => console.log("hello java people");
// calling testing 
testing(click);

// internal future of calculator
let sum = (a,b) => a+b;
let mul = (a,b) => a*b;
let sub = (a,b) => a-b;
let div = (a,b) => a/b;

function calculator(callback, a,b) { 
 console.log('calculate some thing');
 return a+b; 

} 
 
let t1=calculator(sum, 10,20);
console.log(t1);

function print(callback, x,y) {
    console.log('hello printing1....');
    callback(x,y)
   
}; 

print((a,b)=>{
    console.log("hello swany how are you doing ");
    console.log(a+b);
}, 10, 20);

function finding (callback1, callback2, num) {
    callback1(num);
    console.log('doing something.....');
    callback2(num);
}

function coding (num1) {
    console.log('coding with num', num1);
    
}

function writing (num2) {
    console.log('writing with num', num2);
    
}

// calling finding 
finding(coding, writing, 10);

// Write a function that accepts a callback and prints "Callback executed".
function greet1( callback) {
    console.log('callback is executed');
    callback();

}  

function print() {
    console.log("printing the message call is executed");
}

greet1(print); // call back is executed , print the message call 

// 2. Create a function greetUser(name, callback) that prints a greeting and then calls the callback.
function greetUser(callback, name) {
    console.log("hello", name);
    callback();
    
} 

function test() {
    console.log('Hello this is for testing ');
    
} 
// call the function 
greetUser(test, 'swamy'); // output hello swamy, hello this is for testing 

// Write a function that checks whether a number is even and calls a callback with the result.
function checkEven(callback, num) {
    const isEven = num % 2 === 0;

    console.log("Checking whether the number is even or odd");

    callback(isEven, num);
}

function test2(isEven, num) {
    if (isEven) {
        console.log(num + " is an even number");
    } else {
        console.log(num + " is an odd number");
    }
}

checkEven(test2, 7);

// Create a function that accepts an array and a callback, then prints each array element.
 // Create a function that accepts an array and a callback,
// then prints each array element.
function printarray(callback) {
    let element = [10,20,30,40,50];
    console.log("the value of arrays are defined");
    callback(element);
}

function test3(element) {
    for(let ele of element) {
        console.log(ele);
    }
    };

   printarray(test3);
 

   // Write a function that calculates the sum of array elements using a callback.

   function sumArray(callback) {
    const numbers = [10, 20, 30, 40, 50];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    callback(sum);
}

function displaySum(total) {
    console.log("The sum of the array elements is: " + total);
}

sumArray(displaySum);

function getuserdetails(callback, userobj) {
    console.log('Fetching userdetails from DB..........');
    callback(userobj);
}
// calling it 
getuserdetails((user) => {
    console.log('hello user ...', user);
}, {name: 'mahesh', age:30, city:'Hyd'} ) ;

// ApI - get , post, put, delete api 

function post() {
    console.log("post API");
    
}
function put() {
    console.log("put API");
    
}
function patch() {
    console.log("patch API");
    
}
function deleteapi() {
    console.log("delete API");
    
}
function performcallingapi(callback) {
       callback();
}
 
performcallingapi(post);
performcallingapi(patch);
performcallingapi(put);
performcallingapi(deleteapi);

// forgot to call callback function 
function doTask(callback) {
  console.log("Working...");
  callback(); // forgot to call Done wont print if we call then pnly print 
}

doTask(() => {
  console.log("Done");
});

//Simple rule
//callback = function reference
//callback() = function execution













