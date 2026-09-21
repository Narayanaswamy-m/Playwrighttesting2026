
// function chain :- a function is calling another function 
// circular chain function due to this stackoverflow occur so always can use "Linear chain function "

function login() {
    console.log("Login app.....");
    payment();
}
function addtocart() {
    console.log("addan item to cart");
} 
function payment() {
    console.log("payment page");
    login();
}

login();
// linear function chain 

function login() {
    console.log("Login app.....");
    payment();
}
function addtocart() {
    console.log("addan item to cart");
} 
function payment() {
    console.log("payment page");
    
}

login();