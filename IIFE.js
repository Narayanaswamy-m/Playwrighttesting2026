
// IIFE:- Immediately invoked function expression 
// anonymous function:- no name, no expresion name
// arrow or anonymous function 

(function () {
    console.log("Hello world");
    
})
// calling iife function by caller ();
();

((name) => {
    console.log('hello user', name);
})

('swamy');

// adding 2 numbers 
((a,b)=> {
  let sum = a+b;
  console.log(sum);
})
(10,50);

let result= (function (x,y) {
    return x*y;

    
}) (10,20);
console.log(result);

// IIFE with callback 
(function () {
    function greet(callback) {
        console.log("Hello");
        callback();
    }

    greet(function () {
        console.log("Callback executed");
    });
})();

(function() {
    function testing(callback) {
    
    console.log("hello iam doing something");
    callback();
}

function print() {
    console.log("hello world ");
    
}
testing(print);
}) 
// calling 
();

// launching browser 
let isBrowserLaunched = (function (browsername) {
        switch (browsername.trim().toLowerCase()) {
            case "chrome":
                console.log("Launch Chrome browser");
                return true;

            case "edge":
                console.log("Launch Edge browser");
                return true;

            case "safari":
                console.log("Launch Safari browser");
                return true;

            default:
                console.log("Please pass a correct browser:", name);
                return false;
        
    }

    
})("chrome");

if (isBrowserLaunched === true) {
    console.log("Please enter URL");
} else {
    console.log("Browser is not launched");
}


