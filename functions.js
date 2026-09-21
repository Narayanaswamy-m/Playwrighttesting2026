
// A function in JavaScript is a reusable block of code that performs a specific task. You define it once and can call it multiple times.
// simple function
function greet() {
    console.log("Hello");
    
} 
greet();

// Function with Parameters here in JS we can pass any value to the parameter generally user is in string format here it is accepting any value this is allowed in JS to avoid this for temproary solution passing parameter in comments 
// username:- is parameter, swamy,true, 123- values or arguments
function user(username) {
    console.log("print the username" ,  username);
    
} // call the function
user("swamy"); // calling a function by passing a value/argument.
user(true);
user(123);
// return type : void


// IN JS if we pass other data types after declare string it is allowing to take to handle that write below condition to tackle 
// no return someinput
/**
 * 
 * @param {string} username 
 */

function user(username) {
    if (typeof username !== "string") {
3
throw new Error("Name must be a string");
    } else 
    console.log("print the username" ,  username);
       
} 
user("swamy");
user(true);
user(123);

// some input, some return
// add two numbers 

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add (a, b) {
    let sum = a+b;
    return sum;
} 
let result=add('sum',20);
console.log(result);
// functions: calling browser 

/**
 * 
 * @param {string} browsername 
 * @returns 
 */

function launchbrowser(browsername) {
    switch (browsername.trim().toLowerCase()) {
        case 'chrome':
            console.log("launch chrome browser");
            return true;
            
        case 'edge':
            console.log('launch edge browser');
            return true;
        case 'safari':
            console.log('launch safari browser');
            return true;        
        default:
            console.log("please pass correct browser", browsername )
            return false;
    }
}
     
      let isbrowserlaunched = launchbrowser('IE');
      console.log(isbrowserlaunched);


// function: calling trainer name 
/**
 * 
 * @returns 
 */
 function getTrainerName() {
    return 'Naveen';
    
 }  let Trainer=getTrainerName();
 if(Trainer==='Naveen') {
    console.log("join the session");
 } else {
    console.log("skip the session");
 } 

 // function:- array 
 function getUserInfo() {
    let UserInfo = ['vijay', 12.33, 'true', 'Bangalore']
     return UserInfo;
 }  let vijaydata = getUserInfo();
   console.log(vijaydata); 
 console.log(vijaydata.length);




    
