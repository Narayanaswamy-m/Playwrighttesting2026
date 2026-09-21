// array is the collection of data it can be homogenous, heterogenus 
// homogenus 
let a  = [10, 20, 30, 40, 50]
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a.length);
console.log("HI = ",  (a.length-1));
console.log(typeof a);
// object are stored in heap memory it is a non-primitive data type
console.log(a[5]); // undef
console.log(a[-1]); // undef
// print reverse order of an arry index based loop
for(let i = a.length-1; i>=0; i--) {
    console.log(a[i]);
}
let num= [10,20,30,40,50]
num[10]=50;
console.log(num);
num[6]=25;
console.log(num);
console.log(num.length); // 11
console.log(Object.getOwnPropertyNames(num));
// heterogenous 
let i = [10, 'vaibhav', 12.33, true, 'bangalore']
console.log(i[0]);
console.log(i[1]);
console.log(i[2]);
console.log(i[3]);
console.log(i[4]);
console.log(i[5]);
i[-9]= 'swamy';
console.log(i[-9]);
i[6] = 'raju'
console.log(i.length);
console.log(Object.getOwnPropertyNames(i));
// property values 
let j = [10, 20, 30, 40, 50]
j[10] = 'swamy';
j[9] = 'raju';
j[-1] = 10;
console.log(j); 
console.log(j.length);
console.log('Hi = ', j.length-1);
console.log(Object.getOwnPropertyNames(j));

// advance for loop 
// for ..... of loop it is not index based this can be used to print values in Array  Use a for...of loop when you want to iterate through the values of an array in a simple and readable way.
for(let ele of j) {
    console.log(ele);
}
let products = ['apple', 'iphone', 'samsung', 'oneplus', 'google']
// if i find samsung break the loop 
for (prod of products) {
    if(prod === 'apple') {
        console.log(prod);
        break;
    } else {
        console.log("product is not listed");
    }
}

// for .... in loop it is index based not value based print the values based on index this is best method 
let products = ['apple', 'iphone', 'samsung', 'oneplus', 'google']
for (let prod in products){
        console.log(prod, '=', products[prod]);  
    
}

let empdata = [ 'vaibhav', 'true', 12.33]
for(let emp in empdata) {
    if (empdata[emp]=== 'true'){
        console.log("increse the salary");
        break;
    } 
}
// negative index 
let m = [200, 300, 400, 500]
console.log(m.length);
console.log('Hi', '=',  m.length-1 );
m[-0]= 10;
m[-10] = 'swamy';
console.log(m.length);
console.log(Object.getOwnPropertyNames(m));
// prop: 3
// key : value 
// prop: value 

