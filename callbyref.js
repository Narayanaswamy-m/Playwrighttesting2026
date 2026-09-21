// call by value: In Call by Value, a copy of the value is passed to the function. Changes inside the function do not affect the original variable.
function test(number) {
    console.log("passing the value", number);
    
} 
test(100);

// call by ref:- calling the obj by reference 
let user = {
    Name:'Swamy',
    Age: 33,
    Salary:12.33,
    isActive:true,
    city:'Hyderabad',   
}

function getUserdetails(details) {
    console.log(details.Age, details.Name, details.Salary);
    
} 
getUserdetails(user);

// calling the function by passing obj body 
getUserdetails({
  title = 'swamy',
  URL = 'http.//google.com'
});

