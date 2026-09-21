
let employee = {
    id: 101,
    name: "John",
    address: {
        city: "Hyderabad",
        state: "TS"
    }
};
// The process of converting jsobject to json string is called serialisation  by using stringfy anothername marashelling 
// when avoid this  
/*your object contains:
Dates
Functions
Maps
Sets
RegExp
Class instances 
*/
// prettify output format
let emp = JSON.stringify(employee, null, 2);
console.log(emp);
// output :-
// {
// "id": 101,
// "name": "John",
// "address": {
//  "city": "Hyderabad",
// "state": "TS"
  // } 
//}
// without prettify outpu 
// let emp = JSON.stringify(employee);
// output:- {
  /*"id": 101,
  "name": "John",
  "address": {
    "city": "Hyderabad",
    "state": "TS"
  }
} */

  // the process of converting json string to js object is called deserialisation by using json.parse another name is unmarashelling
  console.log(typeof emp);
  let emp2= JSON.parse(emp);
  console.log(emp2);
  console.log(typeof emp2);
  console.log(emp===emp2); // false
  // output:- 
  // { id: 101, name: 'John', address: { city: 'Hyderabad', state: 'TS' } } 



  





