// while loop 
// syntax:- while (condition) {
 // incremental/decremental}
 // print 1 to 10 numbers
 let i=1;
 while (i<=10) {
   console.log(i); 
   i++;
 }

 // print 1 to 10 numbers with if condition
let i =1;
while (i<=10) {
    console.log(i);
    if (i==7) {
        console.log("Hello world !");
        break;   
}      i++;
    } 

 // Write a program to print numbers from 10 to 1 in reverse order.
 let i = 10;
 while (i>=1) {
    console.log(i);
    i--;
    
 }  
 
 //Write a program to print all even numbers between 1 and 50 using a while loop

 let i =2;
 while (i<=50) {
    console.log(i);
    i=i+2;
    
 }

 for (let n = 2; n <= 100; n++) {
    let prime = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(n);
    }
}




// frequency of digit numbers 
let num = 1234445555;
let freq = {};
while (num > 0) {
    let digit = num % 10;

    if (freq[digit]) {
        freq[digit]++;
    } else {
        freq[digit] = 1;
    }

    num = Math.floor(num / 10);
}

console.log(freq);

// Sum of first N numbers

let N=5; let i=1; let sum = 0;
while (i<=N) {
    sum+=i;
    i++;
    console.log(sum);
}

// Reverse String
let str='swamy';
let i = str.length-1;
let rev = "";
while(i>=0) {
    rev=rev+str.charAt(i);
     i--;
     
}
console.log(rev);

// Palindrome String
let str='swamy';
let i = str.length-1;
let rev = "";
while(i>=0) {
    rev=rev+str.charAt(i);
     i--;
     
}
console.log(rev);
if (rev===str) {
    console.log("it is palondrom");
    
} else {
    console.log("it is not palindrome");
}

// factorial 

let num = 5;
let factorial = 1;
let i=1;
while(i<=num) {
  factorial = factorial* i;
  i++;
} console.log(factorial);

// for loop syntax 
// for (initialisation; condition; increment or decremetal )
// print 1 to 10 
let num = 10;
for (let i = 1; i <= num; i++) {
    console.log(i);
    
}

