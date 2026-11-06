//inheritance: child class (sub class) is inheritng the properties (var/methods) from the parent class(super class)
//child extends parent
//child can inherit anything from the parent but parent cant take anything from the child
//multiple imnheritance is not allowed
// multilevel inheritance is allowed 

class car {
    start(): void {
        console.log('please start car------');
    }
    stop(): void {
        console.log('please stop car------');
    }
    refuel(): void {
        console.log('please refuel the enginee------');
    }
}

class BMW extends car{

    override  start() :void {
        console.log('please start BMW------');
    }
    enginee(): void {
        console.log('BMW enginee------');
    }
    autoparking(): void {
        console.log('BMW auto parking ------');
    }

}

// create the object of BMW class 
let b:BMW = new BMW();
b.autoparking(); // child individualmethod
b.enginee(); // child individual
b.start(); // override method inherited 
b.refuel();// parent inherited
b.stop(); // parent inherited
// create an object for car 
let c:car= new car();
c.refuel();
c.start();
c.stop(); 
 // topup casting:- 
 //Child class object can be referred by parent class ref variable.
//IS - A relationship
//only parent class (inherited/overridden methods) can be accessed
//individual methods can not be accessed
let c1:car= new BMW(); // all Bmws are cars 
c1.refuel();
c1.start(); // override method 
c1.stop(); 
// Down Casting:
// //Parent class object can be referred by child class ref variable???: 
// let bm : BMW = new car();
// //every car is not a BMW 
// bm.refuel();
// bm.start();
// bm.stop(); 

// multilevel inheritance 
class Vehicle {
  start(): void {
    console.log("Vehicle starts");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Car is driving");
  }
}

class BM extends Car {
  enableSportMode(): void {
    console.log("BMW sport mode enabled");
  }
}

const bmw = new BM();

bmw.start();           // Inherited from Vehicle
bmw.drive();           // Inherited from Car
bmw.enableSportMode(); // BMW's own method




// Topcasting 
let C2:Car= new BM();
C2.drive();
C2.start();

