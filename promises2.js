
// grretpromise( ) resolves with the string "Hello JavaScript! "

function greetpromise() {

    return new Promise ((resolve) => {
        setTimeout(() => {
          resolve('Hello Javascript!')  
        }, 2000);
    })
    
}

greetpromise().then((result) => console.log(result)); 

// 2. errorpromise
function errorpromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('something went wrong!')
        }, 1000);
    })
    
}
errorpromise().catch((error)=> console.log(error));

// promise.race 
// Returns the result of the promise that settles first. “Settles” means either resolves or rejects.
// Resolves if the first completed promise resolves
// Rejects if the first completed promise rejects
// Useful for timeouts or choosing the fastest response
// Other promises continue running; they are not automatically cancelled

const p1 = new Promise(resolve =>
  setTimeout(() => resolve('First'), 2000)
);

const p2 = new Promise(resolve =>
  setTimeout(() => resolve('Second'), 1000)
);

Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log(error));
 // output will be first finished one second 
const p9 = Promise.resolve('Success');
const p10 = Promise.reject('Something failed');

Promise.race([p9, p10])
  .then(result => console.log(result))
  .catch(error => console.log(error)); // output success
  

//   Promise.all()
// Runs multiple promises concurrently and waits for all of them to complete.
// it is comonly used when you want ti perform multiple async operations in paralllel and wait for all of them to complete before moving on
// Resolves when every promise succeeds
// Rejects immediately if any promise fails
// Results remain in the original order
// Useful when all results are required

const p3 = new Promise(resolve =>
  setTimeout(() => resolve('First'), 2000)
);

const p4 = new Promise(resolve =>
  setTimeout(() => resolve('Second'), 1000)
);

Promise.all([p3, p4])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.log(error);
  }); // output will be both [ 'First', 'Second' ]

  // with resolve, reject 
  const p5 = Promise.resolve('Success');
const p6 = Promise.reject('Something failed');

Promise.all([p5, p6])
  .then(result => console.log(result))
  .catch(error => console.log(error)); // output Something failed
  
  // promise.allsettled();
  // Promise.allSettled() runs multiple promises in parallel and waits until every promise finishes—whether it succeeds (fulfilled) or fails (rejected).
//Unlike Promise.all(), it does not stop early when one promise fails.
// combine for all results 
const fetchUser = Promise.resolve("Ravi");

const fetchOrders = Promise.resolve(["Order 1", "Order 2"]);

const fetchPayments = Promise.reject(new Error("Payment service unavailable"));

Promise.allSettled([fetchUser, fetchOrders, fetchPayments])
  .then((results) => {
    console.log(results);
  }); // output { status: 'fulfilled', value: 'Ravi' },
  //{ status: 'fulfilled', value: [ 'Order 1', 'Order 2' ] },
  //{
    //status: 'rejected',
    //reason: Error: Payment service unavailable

    const tasks = [
  Promise.resolve("User loaded"),
  Promise.reject("Orders failed"),
  Promise.resolve("Products loaded"),
];

async function loadDashboard() {
  const results = await Promise.allSettled(tasks);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`tasks:`, result.value);
    } else {
      console.error(`tasks failed:`, result.reason);
    }
  });
}

loadDashboard();
// promise.any();
// it is used for handling multiple promises  and resolving with the value of the first fullfilled/resoleved promise
// However , unlike promise.race(), promise.any() does not reject immediately when the first promise is rejected.
// instead it waits until atleast one promise fullfill or resolve
const slowSuccess = new Promise((resolve) => {
  setTimeout(() => resolve("Slow server response"), 2000);
});

const fastFailure = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Server failed")), 500);
});

const fastSuccess = new Promise((resolve) => {
  setTimeout(() => resolve("Fast server response"), 1000);
});

Promise.any([slowSuccess, fastFailure, fastSuccess])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  }); // output Fast server response
  // all the promises are rejected 
  const p18 = Promise.reject("API 1 failed");
const p19 = Promise.reject("API 2 failed");

Promise.any([p18, p19])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.name);   // AggregateError
    console.log(error.errors); // ["API 1 failed", "API 2 failed"]
  }); // AggregateError
// [ 'API 1 failed', 'API 2 failed' ]
