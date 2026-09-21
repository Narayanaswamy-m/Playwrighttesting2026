
// modern version way of writing anonymous function by using arrow function => 
    // there is no function name , there is no function keyword for arrow anonymous function 
// this is also called by using function expression name 
// arrow function with no parameter 

  let greet = () => {
    console.log("hello world");
  } 
  greet();

  // function with single parameter this can be write without bracket or with bracket parameters.
  let getUserdetails = username => console.log('print username', username);
  // calling the arrow function 
  getUserdetails('swamy');
 // function with multiparameters { } is used here for multi staement lines 
 let add = (a,b) => {
    let final = a+b;
    console.log(final);

 } 
 add(30,50);
 // there is no need write return keyword if there is single statement of line in arrow function retrun is embedded in that 
 let mul = (num) => num * 2;
 let final = mul(100);
 console.log(final);

 // convert a string to lowercase 
 let upper = (name) =>  name.toLowerCase();
 let final1= upper('MY NAME IS SWAMY');
 console.log(final1);

 let browservalue = (browser) => {
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
  let flag=browservalue('Sa');
  console.log(flag);

// sum, add, div, multi

let sum = (a,b) => a+b;
let div = (a, b) => a/b;
let sub = (a, b) => a-b;
let multi = (a,b) => a*b;

let t1= sum(10,20);
console.log(t1);
t1= div(20,30);
console.log(t1);
t1= sub(20,15);
console.log(t1);
t1=multi(10,20)
console.log(t1);

let user = {
    Name:'Swamy',
    Age: 33,
    Salary:12.33,
    isActive:true,
    city:'Hyderabad',   
}
let getUserdetails = (details) => {
    console.log(details.Age, details.Salary);
    return 100+200;
}
let flag2=getUserdetails(user);
console.log(flag2);

// To return an object from an arrow function, you must wrap the object in parentheses ().
let getUser = () => ({
    name: "Deepan",
    age: 25
});
 getUser();
console.log(getUser());



