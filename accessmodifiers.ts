
//public(default), protected, private

// Modifier	Accessible from
// public	Anywhere
// private	Only inside the same class
// protected	Inside the class and its child classes


class Car {
    public name: string = 'Honda';
    protected model: string = 'Honda Civic';
     private license: number = 9090;
    //final: readonly -- fixed value/const...
    public readonly logo: string = 'car logo';

    // constructor(name:string,model:string, license:number, logo:string) {
    //     this.name=name;
    //     this.model=model;
    //     this.license=license;
    //     this.logo=logo;

    // }


    getCarData(): void {
        console.log(this.name, this.model, this.logo, this.license);
    }
}


class Audi extends Car {
    getData(): void {
        console.log(this.name, this.model, this.logo);
    }
}

class Cycle {
    getSomeData() {
        let c: Car = new Car();
        console.log(c.name);
        console.log(c.logo);
        
        
    }
}

let a1 : Audi = new Audi();
a1.getData();
a1.getCarData();




