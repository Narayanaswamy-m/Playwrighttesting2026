// data types 
// number
//size:8 bytes
let x=10;
console.log(x);
console.log(typeof x);
//string 
// size: no.of chars*2+2 bytes
let First_name='medikonda'
let Last_name='Narayanaswamy'
console.log(First_name + Last_name );
console.log(typeof First_name );
console.log(typeof Last_name );
//undefined
// size : 0 bytes
let x;
console.log(x);
console.log(typeof x);
//boolean
// size: 4 bytes
let isEmp_Exist= true;
console.log(isEmp_Exist);
console.log(typeof isEmp_Exist);
// null 
// size : 0 bytes
let user= null;
console.log(user);
console.log(typeof user);
// var vs let vs char 
// let-redeclaration is not allowed 
let x=10;
let x=20;
console.log(x);
// var- redeclaration is allowed
var i=10;
var i=20;
console.log(i);
// const- redeclaration is not allowed 
const z=30;
const z=35;
console.log(z);
// let - reassignment is allowed 
let a=30;
a=45;
a=55;
console.log(a);
// const- reassignment is not allowed 
const b=55;
b=60;
console.log(b);
// hoisting - accessing variable without declaration of variables 
// var- allowed without declaration 
console.log(m);
var m =1000;
console.log(m);
// let - hoisitng not allowed without declaration of var
console.log(f);
let f=100;

// const - hoisting is not allowed without declaration of var 
console.log(k);
const k = -10000;
const days = 7;
days =10;
console.log(days * 1000);
// let, var, const - this 3 are identifiers in java script



