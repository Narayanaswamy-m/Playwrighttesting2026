// calling the function without declaration is called function hositing 
// function hoisting is possible in normal functions
greet();

function greet() {
    console.log("Hello");
}

// it is not allowed  in fucntion named expressions 
click();  // Cannot access 'click' before initialization
let click = function click_on_theelement() {
    console.log("click on element");
}






