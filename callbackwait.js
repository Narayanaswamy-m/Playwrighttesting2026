// calling a function by passing a function (callback) but with a wait 
function print() {
    console.log('printing.....');
    
}

setTimeout(() => {
    print();
}, 4000);


setTimeout(() => {
    console.log("hello world");
}, 4000);
console.log("hey swamy");
console.log('bye swamy.......');

function getdata(callback,a) {
    console.log('get data from the DB');
    setTimeout(() => {
      console.log('logic part......'); 
      callback();
    }, a);
    
}
// calling 
getdata(()=> {
    console.log('get userdata');
}, 5000);


// give me the user info after 5 secs 

function getuserdetails(Callback) {
    console.log('fetching userdata server from DB');
    
    setTimeout(() => {
        let user = {
            name:'swamy',
            age:30,
            salary:12.55,
            city: 'Bangalore',
        }
       Callback(user);
    }, 5000);

    setTimeout(() => {
        console.log('prod data');
    }, 5000);
}

// calling part
 let mydata=(user)=>{
    console.log('user data is received');
    console.log(user);
    console.log(user.age, user.name);
 };
getuserdetails(mydata);

//The timer callback waits to execute.
//The entire JavaScript program does not halt.
//Other code can continue running during those five seconds.
