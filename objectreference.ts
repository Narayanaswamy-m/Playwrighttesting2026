// type is the keyword keyword creates a type alias—a reusable name for a type.
//used to define he schema of the objects
type userschema = {
    username: string,
    age:number,
    city: string,
    address?:string | number

}

let userobj : userschema = {
    username:'swamy',
    age:30,
    city:'Hyderabad'
    
}
console.log(userobj);
console.log(userobj.age);
// Use type when you need unions, intersections, primitives, tuples, or mapped types. Use interface mainly for object/class contracts and when you want declaration merging.
// type union 
type Status = "pending" | "approved" | "rejected";
let status: Status = "approved";
console.log(status);
// status = "unknown"; // Error
// function type 
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
let t1=add(10,20)
console.log(t1);
//type: doesnt support extends:
//use & operator:
type person = {
    name: string
}

type company = person & {
    compName: string,
    count: number | string
}

let p1: company = {
    name: 'Tome',
    compName: 'IBM',
    count: '1000hyder'
}


// interface 
//interface for creating the objects:
//used to create/define the schema for the objects:

interface myCustomerSchema {
    customername: string,
    city: string
    tele: string
    age: number
    email?: string
}

let cust1: myCustomerSchema = {
    customername: 'Udita',
    city: 'Pune',
    tele: '99898989',
    age: 30,
    email: 'udita@gmail.com'
}

console.log(cust1);

interface Comp {
    compName: string
}

interface Emloyee {
    name: string,
    age: number,
    salary: number
}

interface HQ {
    hq: string
}

interface dept  extends Comp, Emloyee, HQ {
    deptname:string,
    head?:string
}

let p2:dept = {
    name:'swamy',
    age:30,
    salary:14.55,
    hq:'Hyderabad',
    deptname:'QA',
    compName:'NCR voyix',
    head:'smitha'
}

console.log(p2);
console.log(p2.deptname); // QA 

interface car {
    brand:String,
    model: string
}

interface mod extends car{
    carname:string
}
let bmw:mod={
    brand:'bmw5',
    model:'2026',
    carname:'bmwbenz'
}
console.log(bmw);
console.log(bmw.brand);
