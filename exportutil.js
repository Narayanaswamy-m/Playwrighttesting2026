// export something from one file and import in another file 
//export function, variable from file1
// import functions, variable in file2

let x=10;
let username='Narayanaswamy';

let y = 'swamy';
let k = 'testing';


function billin () {
    console.log('billing');
}

 export default function  coding () {
    console.log('Happy coding');
}

// export default value, object it is not participated in the object destructuring 
// A module cannot have multiple default exports.
// either defult function or defualt parameter it does not contain both
//exportutil.js(22, 16): Another export default is here.
// const PI = 3.14;
// export default PI;


export{ x, username, billin, y,k};

