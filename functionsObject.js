//1. Pass an Object to a Function
let  employee = {
    name: "Narayan",
    role: "Quality Engineer"
};

function display(emp) {
    console.log(emp.name);
    console.log(emp.role);
}

display(employee);

//Return an Object from a Function
function createEmployee() {
    return {
        name: "Narayan",
        role: "Quality Engineer"
    };
}

const emp = createEmployee();

console.log(emp.name);
console.log(emp.role);

function getCustomerInformation(username) {
    console.log('collecting data for: ', username);
    let UserInfo= {}; // pritam
    // logic 
    if (username === "pritam") {
        UserInfo = {
            name: 'Pritam automation',
            age: 30,
            city : 'Hyderabad'
            }
    } else if (username === "Raghav") {
        UserInfo = {
            name: 'Raghav automation',
            age: 33,
            city : 'Bangalore'
            }

    }  else if (username === "Ramu") {
        UserInfo = {
            name: 'Ramu automation',
            age: 36,
            city : 'LA'
            }

    }  else {
        console.log("User details are not found:", username);
    } 
    return UserInfo;
} 
// call the function 
let userdetails = getCustomerInformation("Raghav");
console.log(userdetails);
console.log(userdetails.age);

