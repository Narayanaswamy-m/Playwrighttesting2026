let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024
};

// object destructuring :- Object destructuring lets you extract properties from an object and store them in variables in a concise way.
// with symbol { };
//let {brand, model} = car;
//console.log(brand, model);

// Easy rule to remember
//Destructuring renames variables ✅
//Destructuring does not rename object properties (keys) ❌
// Renaming the key value objects or renaming the variable using  
let { brand: bra, model: mod} = car;
//console.log(brand, model); // ReferenceError: brand is not defined
console.log(bra, mod);
console.log(car);

// object destructuring with functions 
let user = {
    name: 'swamy',
    age: 30,
    isactive: true,
    city: 'Hyderabad'
}
function getuserdetails({ name, age, city}) {
    console.log(name, age, city);
    
}  getuserdetails(user);

// nested objects 
  let person = {
    name: 'swamynar',
    age: 35,
    isactive: true,
    city: 'Bangalore',
    address: {
        DoorNo: 1,
        street: 'vidyanagar',
    location: {
        lat: 101.11,
        lon: 23.44,
    }
    }
}  
let { name, address:{DoorNo, location: {lat, lon}}} = person; // if we are not destructed and try to print in console getting below messages lon is not defined
console.log(name,DoorNo, lat, lon);

// destructuring array in object
let student = {
    name: 'Raju',
    age: 30,
    skills: ['playwright', 'selenium', 'postman', 'restassure'],
}

// Destructuring 
let { skills:[primaryskill, secondaryskills, thirdskills]} = student;
console.log(primaryskill, thirdskills);