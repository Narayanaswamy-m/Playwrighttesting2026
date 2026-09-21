// && and ||  are shortcircuits 
// &&- And - if first is false don't check any condition it is need to be true for all values in condition
// || - or - if first value is true dont h=check other conditions it is need to be true any one value is true in condition


// && 
let a = 10;
let b = 15;
let c= 20;
if (a<b && a>c && b<c) {
    console.log("conditon is true ");
}  else {
    console.log("conditon is false");

}

// || 

let a = 10;
let b = 15;
let c= 20;
if (a<b || a>c || b<c) {
    console.log("conditon is true ");
}  else {
    console.log("conditon is false");

}

console.log(10 && 20); // true 
console.log("JS" && "React"); // true

let x = 4;

x > 3 && console.log("Greater");

let age =9;
age = 'nine';
console.log(age);

let m=10;
if(m>5 & m<4 && m<1 & m<0) {
    console.log("Hello"); 
} 
else {
    console.log("bye");
}


const user = {
    name: "Narayan"
};

console.log(user && user.name); // Narayan
console.log(user?.name);        // Narayan
