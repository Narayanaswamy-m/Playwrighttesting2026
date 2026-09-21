let x=5;
let y =x++;

// what is the value of x and y 
console.log(y); //5
console.log(x); //6

// pre increment 
let x=10;
let y = 20;
console.log(++x); //11
console.log(++y);//21

// post increment 
let x=25;
let y =30;
console.log(x++); //25
console.log(y++); //30
console.log(x); //26
console.log(y); //31

let a = 5;
let b = a++;
console.log(a, b); // 6, 5

let a = 5;
let b = ++a;
console.log(a, b);// 6,6

let x = 10;
console.log(x++ + ++x);//22

let x = 5;
console.log(++x + x++); // 12
let x = 7;
console.log(x-- - --x); // 2
let a = 3;
let b = 4;

let c = a++ + ++b + --a;
console.log(a, b, c); // 3,5,11

let x = 1;

x = x++ + x++ + ++x; // x= 1+2+4

console.log(x); // 7

let a = 10; 

let b = a++ + a++ + ++a + a; // 10 + 11+13+13 =47

console.log(a, b); // 13, 47

let x = 5;

console.log(
    x++ +
    ++x +
    x--
);    // 5 + 7 + 7=19

let a = 1;

let b =
    a++
    + ++a
    + a++
    + --a; // 1+3+3+3=10

console.log(a, b);   //3, 10 

let x = 5;

let y =
    x++
    + x++
    + ++x
    + x
    + --x;  // 5+6+8+8+7=34

console.log(x, y); // 7,34

let x = 1;

x = x++ + ++x + x++ + x; // 1+3+3+4=11

console.log(x); 

let a = 10;

let b =
    a++
    + ++a
    + a--
    + --a
    + a;  // 10+12+12+10+10=54

console.log(a, b); // 10, 54

let x = 2;

let y =
    ++x * x++
    + --x * x--
    + x;  // 3*3*+3*3+2 =

console.log(x, y); // 2, 20

let a = 1;

let b = a++ + a++ + a++ + ++a + a++ + --a;  // 1+2+3+5+5+5=21

console.log(a, b); // 5,21

