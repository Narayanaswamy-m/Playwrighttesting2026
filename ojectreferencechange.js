
let u1 = {
name: "John",
age: 25
};

let u2 = {
name: "peter",
age: 28
};

let u3 = {
name: "paul",
age: 35
};
console.log("============================");
u1 = u2; // peter , 28
console.log(u1.name, u1.age); // peter, 28
console.log("-------------------------------");
u2=u3; // paul, 35
console.log(u2.name, u2.age);
console.log("==========================");
u3=u1; // peter, 28
console.log(u3.name, u3.age);




