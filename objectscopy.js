
// copy  objects When you assign one object to another variable, JavaScript does not create a new object. It copies only the reference
// 1. Shallow Copy using Spread Operator ... 
// We do use shallow copy, but it's not suitable when objects contain nested objects, because nested objects are still shared by reference.
let employee = {
    id: 101,
    name: "John",
    address: {
        city: "Hyderabad",
        state: "TS"
    }
};

let newemp = { ...employee };
console.log(newemp);
// update value in newemp 
newemp.name ="patrick";
console.log(newemp.name);
newemp.address.city = "Bangalore";
// ===============
console.log(employee);
console.log(newemp);
console.log(employee);
console.log(employee);



console.log("==============================");
// deep copy :- Structured 

let newemp2 = structuredClone(newemp);
console.log(newemp2);
console.log(newemp);
newemp2.address.city = "Hyderabad";
console.log(newemp2);
console.log(newemp);

