
//promises:- 3 states
// pending, resolve, reject
// resolved-fullfillment- may or may not fullfill the data/value
// create a promise with using promise 

 let pizzapromise=new Promise((resolve, reject) => {
  // do something...
  let success = true;
  if (success) {
    resolve('pizza');
    
  } else {
    reject('delivery boy is not available')
    
  }
 });

 // calling promse
 pizzapromise.then((result)=> console.log(result));
 pizzapromise.catch((error) => console.log(error));
 pizzapromise.finally(()=> console.log('ok bye !!!! finally close the app'));

 // biryani order

  let biryani=new Promise((resolve, reject)=> {
    let flag = true;
    if (flag) {
        resolve('Biryani');
        
    } else {
        reject('biryani is not delivered')
        
    }
  })

  // calling part
  biryani.catch((res)=> console.log(res));
  biryani.then((err)=> console.log(err));
  biryani.finally(()=> console.log('close the app'));

  // promises with wait settletimeout
  function getUserInfo(userid) {
    return new Promise((resolve, reject)=> {
     console.log('fetching data for userid', userid);

     setTimeout(() => {
        if (userid<=0) {
            reject('invalid userid ----- 204 no content');
            
        } else {
            let user = {
                name: 'swamy',
                age:30,
                city:'LA',
            }

            resolve(user);
            
        }
        
     }, 4000);
         
  });
  }    

    getUserInfo(1).then((userobj)=> {
        console.log(userobj)
    }).catch((error)=> {
        console.log(error)
    }).finally(()=> {
        console.log('close the db')
    });

    
    
    function getNumber() {
        return Promise.resolve(100);
        
    }
    // calling 
    getNumber().then((result1)=> {
        console.log(result1);
    })
    
    function getname() {
        return Promise.reject('204 content notfound..........');
        
    }

    getname().catch((res)=> {
        console.log(res);
    })
  
    

    
 

