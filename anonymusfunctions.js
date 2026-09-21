// a function has no name those we call it has anonymous functions 
// to call this type of function we use expression names
// anonymus functions with no params
// An anonymous function is a function without a name.
// basic example Function statements require a function name
// to call anonymous function used fuction expression name 
let greet = function () {
    console.log("Hello greetings from swamy ");
}
// calling the function by using function expression name 
greet();

// anonymus functions with single params
let test = function(username) {
    console.log("print the username", username);
} 
 test('swamy');

 // anonymous function with multi paramet
 let add = function(a,b) {
    return a+b;
 }
 let final = add(10,20);
 console.log(final);

 let browservalue = function(browser) {
    switch (browser.trim().toLowerCase()) {
        case 'chrome':
         console.log("Launch chrome browser");
         return true;
        case 'firefox':
         console.log("Launch ff browser");
         return true;
        case 'ie':
         console.log("Launch IE browser");
         return true;
        case 'safari':
         console.log("Launch Safari browser");
         return true;
        
    
        default:
            console.log("passing invalid browser", browser);
            return false;
    }
 } 
  let isbrowserlaunched=browservalue('safari');
  console.log(isbrowserlaunched);
// modern version anonymous functions are arrow functions => 
    


