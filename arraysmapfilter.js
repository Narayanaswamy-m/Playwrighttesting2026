//map:-Calls a defined callback function on each element of an array, and returns an array that contains the results.
//@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
//@param thisArg — An object to which the this keyword can refer in the callbackfn function.
//  If thisArg is omitted, undefined is used as the this value. 
// map: transform every element of the given array 
// returns: new array with same length
let num = [1,2,3,4,5]
let test= num.map((e)=> e*e );
console.log(test);
let emplist = ['tom', 'robinson', 'peter', 'paul']
  let newemp=emplist.map((m) => m.toUpperCase());
  console.log(newemp);

  // filter:- remove from the existing array basis of the given condition 
  // return new array with same length or may be decrease or increase []

  let number = [10,20,25,35,45,55,65,75]
  // give the array elements with greater than 35 
 let grt30= number.filter((e)=> e>30);
 console.log(grt30);
 // even numbers 
 let even= number.filter((eve)=> eve %2===0);
 console.log(even);
 // odd numbers 
 let odd= number.filter((od)=> od %2===1);
 console.log(odd);

let emplist1 = ['tom', 'robinson', 'peter', 'paul', 'pae', 'pa']
// greater than 3 lenght 
let newemp1=emplist1.filter((e)=> e.length>3);
console.log(newemp1);

let products = ['apple macbook', 'apple iph', 'samsung', 'canon', 'appleair']
// filter 1 starting with apple
// filter 2 where iph is present
// op-> apple iphone 

let finalproduct= products.filter((e)=> e.startsWith('apple')) // apple mac book, apple iph, apple air
.filter((e) => e.includes('iph')) // apple iph 
.map((e)=> e.replace('iph', 'iphone')); 
console.log(finalproduct); // apple iphone

// reduce:- combine everything into one value 
let mynum = [10,20,30,40,50,60,80]
let total = mynum.reduce((sum,n)=> sum+n, 10)
console.log(total);

let proddata=['apple macbook', 'apple iph', 'samsung galaxy']
let fianl=proddata.reduce((result,e)=> 
    result+ e +  ' ' , 'Robin: '
)
console.log(fianl); //Robin: apple macbook apple iph samsung galaxy
