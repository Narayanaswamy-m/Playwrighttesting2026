// object is a non-primitive data here values are stored in key - value pair key is always string and value could be anything 
// syntax:- key : value 

let user = {
    Name:'Swamy',
    Age: 33,
    Salary:12.33,
    isActive:true,
    city:'Hyderabad',   
}
// accessing objects with . notation and []
console.log(user.Name);
console.log(user.Age);
console.log(user.Salary);
console.log(user.isActive);
console.log(user.city);
console.log(user);
console.log(user['Name']);
console.log(typeof user);

// adding any key value pair to the object 
user.email = "john@example.com";
// updating , deleting objects CRUD 
// Ex:- Delete person.age = 26;
user.Age = 30;
console.log(user);
// for of loop this is not recommended for objects if we use getting below error message TypeError: user is not iterable
/*for(let user1 of user) {
    console.log(user[user1]);
} */
// for in loop is recommended for objects becuase it is index based
for(let user2 in user) {
    console.log(user2, '=', user[user2]);
}

 user= null;
console.log(user);


let user1 = {
    Name:'Swamy',
    Age: 33,
    Salary:12.33,
    isActive:true,
    city:'Hyderabad',   
}

let user2 = {
    Name:'Swamy',
    Age: 33,
    Salary:12.33,
    isActive:true,
    city:'Hyderabad',   
}

console.log(user1===user2); // false becuase memory reference is not same it is differnt so 
console.log(JSON.stringify(user1)===JSON.stringify(user2)); // convert that into string by using stringfy this is called serialisation now it is true 
// accessing object with null value 
// null obj reference and optional chaining 
let u = {
    Name:'raghav',
    Age: 33,
}
 u = null;

//console.log(u.name); // TypeError: Cannot read properties of null (reading 'name')
// optional chaining to access null ?.
console.log(u ?.Name); // undefined 
console.log("hello world "); // code is executed continuosly 

// Optional chaining (?.) is used to safely access properties, array elements, or methods on objects that may be null or undefined. Instead of throwing a TypeError, it returns undefined. It is very useful in API response validation and Playwright/Selenium automation where some object properties may not always exist.
// to call all the values in object 
const person = {
  name: "John",
  age: 25,
  city: "New York"
};

const values = Object.values(person);

console.log(values);
// Output: ["John", 25, "New York"]
// keys 
const ke = Object.keys(person);
