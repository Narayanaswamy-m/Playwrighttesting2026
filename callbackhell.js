// it is also called pyramid of doom 
// coeffee machine 
// 1. start the machine --- 2 secs
// 2. boil water --- 3 secs
// 3. add coeffee powder --- 4 secs
// 4. pour in the cup --- 2 secs 
// 5. coeffee is ready ---- 1 secs

function Startcoeffeemachine(Callback) {
    setTimeout(() => {
      console.log('1. start the coeffee machine');
      Callback();  
    }, 2000);
    
}

function BoilWater(Callback) {
    setTimeout(() => {
      console.log('2. boil the water');
      Callback();  
    }, 3000);
    
}
function addcoeffeepowder(Callback) {
    setTimeout(() => {
      console.log('3. add coeffee powder');
      Callback();  
    }, 4000);
    
}
function pourcoeffeeincup(Callback) {
    setTimeout(() => {
      console.log('4. pour the coeffee in cup');
      Callback();  
    }, 2000);
    
}
function coeffeeready(Callback) {
    setTimeout(() => {
      console.log('5. your coefee is ready');
      Callback();  
    }, 1000);
    
}

// calling 
Startcoeffeemachine(()=>{
    BoilWater(()=>{
        addcoeffeepowder(()=>{
            pourcoeffeeincup(()=>{
                coeffeeready(()=>{
                    
                })
            })
        })
    })
})


