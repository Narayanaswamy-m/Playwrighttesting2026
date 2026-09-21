// A nested object is an object inside another object
let employee = {
  id: 101,
  name: "Narayan",
  address: {
    city: "Hyderabad",
    state: "Telangana",
    pincode: 500001
  } ,
  product: {
    name: "Laptop",
    price: 50000
  }
};

console.log(employee.address.city);   // Hyderabad
console.log(employee.address.state);  // Telangana
console.log(employee.id);
console.log(employee['address']['city']); // Hyderabad
console.log(employee['address']['pincode']); // 500001
console.log(employee.product.name); // laptop
// iterate the nested objects 
for (let emp in employee) {
    if (emp === 'address') {
        for (let ele in employee[emp]) {
            console.log(employee[emp][ele]);
        }
    } else {
        console.log(employee[emp]);
    }
}
// In Playwright, nested objects are very common when organizing test data, configuration, API responses, and Page Object Models.

