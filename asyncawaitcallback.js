function startCoffeeMachine() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Start the coffee machine");
      resolve(true);
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
      console.log("6. coeffee machine is stopped ");
      resolve();
    }, 2000);
  });
}

// calling the functions
// user facing function
async function makecoeffee() {
  // coeffee making steps 
  try{
    let flag = await startCoffeeMachine();
    if (flag) {
      await boilwater();
      await addcoeffeepowder();
      await pourcoeffeeincup();
      await coeffeeready();
      await poweroffcoeffeemachine();
      console.log("enjoy the coeffee");
      
    } else {
      console.log('some error is coming .........');  
    }

  } 
  catch(error) {
    console.log('close the machine........', error);
  }
  
  finally {
    console.log('power off coeffee machine');
  }
}

// user is trying to get the coeffee
await makecoeffee();


