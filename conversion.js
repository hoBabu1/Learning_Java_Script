let num = "33";
let stringToNumber = Number(num);
console.log(stringToNumber)
console.log(typeof(stringToNumber))

let num1 = "332abc";
 stringToNumber = Number(num1);
 console.log(stringToNumber) // NaN not a number 
console.log(typeof(stringToNumber))  // type is object 


num1 = 1 ;
let numberToBoolean = Boolean(num1);
console.log(numberToBoolean);
console.log(typeof(numberToBoolean))

num  = "abc";
let stringToBoolean = Boolean(num);
console.log(stringToBoolean); // true 

num  = "";
 stringToBoolean = Boolean(num);
console.log(stringToBoolean); // false  

