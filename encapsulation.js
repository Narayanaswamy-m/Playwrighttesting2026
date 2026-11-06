
// encapsulation:- hiding the class propertites / methods using private(#) and giving the access via public methods 
class Employee {
    name;
    age;
    #salary; 

    constructor(name, age, salary) {
        this.name=name;
        this.age=age;
        this.#salary=salary;
    }

    //methods
    //public setter
    setSalary(salary) {
        this.#salary=salary;
    }
    // public getter 
    getSalary() {
        return this.#salary;
    }
}

// create the object 
let e2= new Employee('tom', 30, 12.55);
console.log(e2.name, e2.age, e2.getSalary());

e2.setSalary((20.8));
console.log(e2.getSalary());

class student {
    name;
    age;
}

let st = new student();
st.student='naveen';
st.age=30; console.log(st.student);

// Benefits of encapsulation
// Protects sensitive data
// Prevents accidental modification
// Controls how data is changed
// Makes code easier to maintain
// Hides internal implementation details
// In modern JavaScript, use #privateField when you need truly private class data.
