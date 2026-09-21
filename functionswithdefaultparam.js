// functions with default param
function  Calculate(bill, discount=50) {
    console.log(bill-discount);
    
}
// call the function 
Calculate(1000);
Calculate(40);
Calculate(100);

// mandatory functions
function CalculatePrize( total, tax=0.05, discount=0) {
 return total+(total*tax)-discount;
}
  let finalamount=CalculatePrize(100,10,10);
  console.log(finalamount);

  // mandatory functions
  
  function getFinalSalary(ctc, shareprice, foodcoupon) {
    let finalsalary= ctc+shareprice+foodcoupon;
    console.log(finalsalary);
 
  } 
 let finalsalary = getFinalSalary(1000,250,10);
 // function expressions

 let smallname = function thisismybigname(params) {
    console.log('Named expression Function', params);
    
 } 
    smallname('Swamy');
// this is undefined because of this is not defined function there is no calling happend so 
    let getData_1 = getData('deepan');
    console.log(getData_1);
    
       
    

