
// typescript is a statically typed language 
// Type inference 
// Type annotations

// type annotations:- define datatype like number:number
let firstname:string;
firstname='swamy';
console.log(firstname);

let age:number;
age=30;
console.log(age);

let name:undefined;
name;
console.log(name);

let place:null;
place =null;
console.log(place);

let phone:bigint;
phone=98456444444n;
console.log(phone);

let isactive:boolean;
isactive=true;
console.log(isactive);

let firstname1:string='raju';
console.log(firstname1);
// type inference:- without write datatype   
let test = 'typescript';
console.log(test);

let billamount=6000;
let isactive1=true;

// any: accepts any type; avoid it when possible.
let pop:any=30;
pop=true;
pop='swamy';
console.log(pop);
// void:- retruns nothing in 

