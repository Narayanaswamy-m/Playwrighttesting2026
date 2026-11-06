// 1. export function can be renamed by using as keyword 
//import{ billin, x,username, y as yam, k as ke } from "./exportutil.js"
// console.log(x); //10
// console.log(username); // narayanaswamy 
// billin(); 
// console.log(yam);
// 2. want to call all export function by using * keyword
import * as s from "./exportutil.js"
console.log(s);
console.log(s.username); // Narayanaswamy
// op {
//   billin: [Function: billin],
//   k: 'testing',
//   username: 'Narayanaswamy',
//   x: 10,
//   y: 'swamy'
// }

// import default parameter 

import PI, { x, username,  billin } from "./exportutil.js"
console.log(PI); // getting error requested module './exportutil.js' does not provide an export named 'PI' 

// import defualt function 
import codings, { x, username,  billin, } from "./exportutil.js"
codings();
console.log(test);
console.log(x);
// rules 
// export from one file and import in anther file 
// export { a,b,c} ----> import { a,b,c } from "./exportutil.js"
// export { a,b,c} ----> import { a,b} from "./exportutil.js"
// can have only one defult function or variable in a file 
// default will not participate in Object destructuring 
// ex:- export default function  coding () ----> import coding, { x, username,  billin } from "./exportutil.js"
// renaming :- using as keyword :-
// rename normal variable / function 
// export { a,b,c} ----> import { a as s,b as c,c as c } from "./exportutil.js"
// export default function or default variable there is no as keyword ex:-import codings, { x, username,  billin } from "./exportutil.js"
//codings();
// normal var/ defualt variables are fixed cannot modified
// any log --- will be auto imported --- will be print on the console --- top of the console 
 