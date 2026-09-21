// function duplicate is not possible in JS whatever the latest it will take that one 
// If you declare the same function name twice, the latest function overrides the previous one.
function login() {
    console.log("please login");
}
function login(username) {
    console.log("Please enter", username);
}
function login(username, password) {
    console.log("please enter username and password", );
}

// call the function 
login();

function add() {
    return 10;
}

function add() {
    return 20;
}
 add();
console.log(add());
