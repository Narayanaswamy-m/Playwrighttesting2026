
// it is also called pyramid of doom 
// coeffee machine 
// 1. start the machine --- 2 secs
// 2. boil water --- 3 secs
// 3. add coeffee powder --- 4 secs
// 4. pour in the cup --- 2 secs 
// 5. coeffee is ready ---- 1 secs

function startCoffeeMachine() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Start the coffee machine");
      resolve();
    }, 2000);
  });
}

function boilwater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. water is boiled");
      resolve();
    }, 3000);
  });
}

function addcoeffeepowder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3.coeffeepowderisadded");
      resolve();
    }, 4000);
  });
}

function pourcoeffeeincup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4. coeffeeispouredintocup");
      resolve();
    }, 2000);
  });
}

function coeffeeready() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("5. coeffee is served");
      resolve();
    }, 1000);
  });
}

function poweroffcoeffeemachine() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("7. coeffee machine is stopped ");
      resolve();
    }, 2000);
  });
}

// promises hell
startCoffeeMachine().then(() => {
  boilwater().then(() => {
    addcoeffeepowder().then(() => {
      pourcoeffeeincup().then(() => {
        coeffeeready().then(()=>{
          console.log("Coffee is ready!");
        });
        
      });
    });
  });
});

// calling the above functions by using promises this is better version compared to callbackhell
// promises chaining 
startCoffeeMachine()
.then(()=> boilwater())
.then(()=> addcoeffeepowder())
.then(()=> pourcoeffeeincup())
.then(()=> coeffeeready())
.then(()=> poweroffcoeffeemachine())
.catch((error)=> console.log(error));
// always catch is write at the end there is no need to write multiple catches here 
//Callback hell       = nested callbacks
//Promise hell        = nested Promises
//Promise chaining    = flat .then() sequence
//async/await         = clean, synchronous-looking Promise code






