// below commands are used to print the text in same line 
process.stdout.write("Hello ");
process.stdout.write("World");

// print 1 to 10 numbers
let i = 1;
while (i<=10) {
    process.stdout.write(i + ' ');
    i++;
    
}

// print 00 01 02 
for (let i =0; i<=5; i++) {
    for (let j =0; j<=5; j++) {
        process.stdout.write( i + " " + j + " ")
    }
    console.log();
}

for (let i =0; i<=5; i++) {
    for (let j =0; j<=5; j++) {
        for(let k =0; k<=5; k++) {
       process.stdout.write( i + " " + j + " " + k + " ")
        }
       
    }
    console.log();
}

// star pattern top to bottom
for(let i =1; i<=5; i++) {
    let row = "";
    for(let j=1; j<=i; j++) {
        row+= "*";
    } console.log(row);
}

// bottom to top 
for(let i =5; i>=1; i--) {
    let row = "";
    for(let j=1; j<=i; j++) {
        row+= "*";
    } console.log(row);
}

// square
for(let i =5; i>=1; i--) {
    let row = "";
    for(let j=1; j<=5; j++) {
        row+= "*";
    } console.log(row);
}

// do while 

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


// Palindrome check
let name='madam';
let rev = "";
for(let i=name.length-1; i>=0; i--) {
    rev+=name.charAt(i);
    
}  if(rev===name) {
        console.log("palandrome number");
    } else {
        console.log("not a palandrome number");
    }

 // Fibonacci series   
 let num=100; 
 let sum = 0;
 for(let i=0; i<=num; i++) {
    sum+=i;
 } console.log("sum: " + sum);

 