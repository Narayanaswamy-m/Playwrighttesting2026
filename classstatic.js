// static in class
export class student {
    name;
    age;
    static trainername="swamy";
    // 2. constructor 
    constructor(name,age) {
        this.name=name;
        this.age=age;

    }

    //3. actions
    coding() {
        console.log(this.name, 'coding');
        // student.trainername='swathi' // local variable
        // return student.trainername;
        
    }
   reading() {
    console.log(this.name, 'is reading');
    
   }
   // static method
   static learningplaywright() {
    console.log("learning playwright");
   }
}

// create objects 

let s1=new student('ravi', 30);
console.log(s1.name, s1.age)
student.trainername; // undefined 
student.learningplaywright();
s1.coding();
s1.reading();

//A static property or static method belongs to the class itself, not to the objects created from that class.

//Use static when a value or function should be shared by every object.