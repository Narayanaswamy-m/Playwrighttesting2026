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
// void:- retruns nothing 
function getusername() :void {
console.log('hello swamy');
    
}

// calling 
getusername();

// function returns 
function addition (a:number, b:number) :number{
   return a+b;
}
 let t1= addition(200,300);
 console.log(t1);
 // function with returns string 
 function getuserdetails(firstname:string, lastname:string) :string {
    return firstname+lastname;
 }

 let t2=getuserdetails("venkat","swamy");
 console.log(t2);
 // unknown:- unknown → “I have a value, but I do not know what type it is.”
//never   → “There will never be a value.” 
 let type : unknown = 10;
 type='swamy';
 type=true;
 console.log(type);

 // never -> there will never be a value
 // function never returns (throws error, or infinite loop):
//throw: generate the error

function throwSomeElementError(): never {
     throw new Error('some element error');
 }

throwSomeElementError();
// after this you write any line of code that is unreachabale code 

function pageLoading(): never {
    while (true) {
        console.log('page keeps loading....');
    }
}

 pageLoading();
console.log('hello world');

// array ; dynamic
let score:number[] = [10,20,30,40];
// string array 
let names : string[] = ['swamy', 'ravi', 'ragahav'];
// mix of all 
let data:any =[10, 'swamy', true, 12.33, 10n];
console.log(data);
console.log(typeof data); // object
let empdata: Array<string | number> =[10, 10,55,'swamy@12'];
console.log(empdata);
// tuple ;- static array: fixed length, fixed type per position:
let user : [string, number, boolean, bigint] = ['sea', 12, true, 12n];
// objects 
let userobj:{username:string, age:number, salary:number, isactive:boolean, city:string, userid:string|number} = {
    username:'swamy',
    age:30,
    salary:12.55,
    isactive:true,
    city: 'Hyderabad',
    userid:'swamy@123'
}
console.log(userobj['username']); // swamy

// enums:- collection of constant/fixed values:
enum status {
    open,
    notstarted,
    readyfordev,
    inanalysis,
    readyforqa,
    inqa,
    done,


}
console.log(status); // {
  //,
  //done: 6
// }'0': 'open',
//   '1': 'notstarted',
//   '2': 'readyfordev',
//   '3': 'inanalysis',
//   '4': 'readyforqa',
//   '5': 'inqa',
//   '6': 'done',
//   open: 0,
//   notstarted: 1,
//   readyfordev: 2,
//   inanalysis: 3,
//   readyforqa: 4,
//   inqa: 5
console.log(status.open); //0
console.log(status[2]); // ready for dev

enum browsers {
    ch='chrome',
    ff='Firefox',
    op='opera',
    mz='mozzila',
    ie = 'interenetexplorer'
}
 console.log(browsers);
// op 
// // {
//   ch: 'chrome',
//   ff: 'Firefox',
//   op: 'opera',
//   mz: 'mozzila',
//   ie: 'interenetexplorer'
// }

console.log(browsers.ch); // chrome

console.log(typeof browsers); // object
let browserValue = 'chrome';

switch (browserValue) {
    case browsers.ch:
        console.log('open chrome');
        break;
    case browsers.ff:
        console.log('open chrome');
        break;
    default:
        console.log('wrong browser ', browserValue);
        break;
}

enum roles {
    admin="Admin",
    seller="Seller",
    Buyer='buyer',

} 
console.log(roles.admin); // Admin 
// union type : | it is symbol any one of the thing is ok
let namess: string | number | boolean = true;
console.log(namess); // true 
let myNumber: number | bigint;
myNumber = 10;
myNumber = 10000n;
// Literal (value) Types: exact value only:
let httpStatusCode = 200 | 300 | 400 | 500 ;
httpStatusCode = 503;
console.log(httpStatusCode); // 503
console.log(typeof httpStatusCode); // number

//arrow function:
 let add = ((x:number, y:number):number=> {
  return x+y;
 })


 let t5=add(10,30);
 console.log(t5);
 // promises 
 async function getuserdata(data:string):Promise<String> {
    return new Promise((resolve, reject)=> {
        let flag = true;
        if(flag) {
            resolve('user is found ')
        } 
        else {
            reject('204 user is not found')
        }
    }) 
 }
  let dataof=await getuserdata('swamy');
  console.log(dataof);
  