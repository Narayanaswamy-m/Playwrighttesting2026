// class:- category/Blueprint/template for the objects 
// variables + methods 
// object: a physical entity - Variables(properties) + methods(actions)

export class Employee {
    // 1. class Variables/global varibles:
    name;
    age;
    salary;
    isActive;

    //2. constructor:- it will help us to create object of the class
    // and help us to initialize the class varibles
    // it will be called when we cretae the objects of this class
    // only one constructor is allowed 
    // constructor overloading is not allowed
    // const has no name
    // const ... can not return anything ... can not have any buss logic 

    constructor(name, age, salary, isActive) {
        // this.global = local 
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.isActive=isActive;
    }
    // 3. actions: methods 
    // without function keyword : you have to create the normal methods 
    coding() {
        console.log(this.name ,  'is coding' );
        let x =10; // local 
    }

    reading() {
        console.log(this.name, 'is reading');
    }
     running = function () {
        console.log(this.name, 'is running');
     
     }
      printing = () => {
        console.log(this.name, 'is printing');
      } 
      async billing () {
         return Promise.resolve(100);
      }
    }

 // create the objects of the class by using new keyword 
 let e1 = new Employee('swamy', 30, 12.55, true);
 console.log(e1.age, e1.salary);
 e1.coding(); 
 e1.reading();
 e1.running();
 e1.printing();
 let t1=await e1.billing();
 console.log(t1);
// update values 
e1.salary = 20.55;
console.log(e1.salary);
// object with no reference value will eligible for Garbage collector 
new Employee('amit', 35, 12.86, 'true'); // undefined
// objects with undefined null reference will be eligible for gc 
let e5=new Employee('amit', 35, 12.86, 'true');
e5 = undefined/null;
console.log(e5.name); // undefined ReferenceError: Employee is not defined

      




