// async-await - just a syntax top of promises to improve the callback hell and promises chain to avoid pyramid of doom
// to avoid pyramid of doom
// async with functions always return a promise
// awiat with the steps in async function
// await waits for a Promise to settle and returns its resolved value.

async function  print() {
    console.log("print the hello world");
}

// calling async function
  await print(); 

  async function getnumber() {
     return 100;
  }

   let t1 =   await getnumber(100); // Promise { 100 } without await 

   console.log(t1);

   function getuser() {
    return new Promise((resolve)=> {
    setTimeout(() => {
        resolve({name:'swamy', age:30})
    }, 3000);
    }) 
    
   }

   // calling the user
   let t2= await getuser(); // without await this is the op Promise { <pending> }
//undefined undefined
   console.log(t2);
   console.log(t2.name, t2.age);
   // async await rules
   // 1. if a function is written with async -- it always return a promise calling it by using await 
   // if a function is normal there is no need calling it by using await 
   // if a function is a return promise like return promise ((resolve, reject)) always calling it by using await 
   //async functions---> it is not mandatory always have a wait steps --> may have await+ non await steps
   // calling await always return a promise 
   // if in a function have await steps then that function should be async 


   async function getuser1() {
    setTimeout(() => {
       return user = {id:1, name:'john'};
    }, 1000);
    
   }
      let t3= await getuser1(); // Promise { undefined } op without await
      console.log(t3);
      //console.log(t3);
      

