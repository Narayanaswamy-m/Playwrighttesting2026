let getData = function getinguserdetailsfromdashbaord(username) {
    console.log('user details', username);
}
// calling the function 
getData('swamy');


// calling function withoriginal name 

let click = function click_on_theelement_Css() {
    console.log("click on the element");
}
click();
// always use function expression name to call the function
click_on_theelement_Css(); //ReferenceError: click_on_theelement_Css is not defined

let greet = function sayHello() {
    console.log("Hello!");
};

greet();
/**
 * 
 * @param {number} num 
 * @returns 
 */
// print even or odd 
let even = (num) => { 
    if(num%2 === 0) {
        console.log("Even number");
        return true;
    } else {
        console.log("odd number");
        return false;
    }

};
 let flag3 = even(7);
 console.log(flag3);
 