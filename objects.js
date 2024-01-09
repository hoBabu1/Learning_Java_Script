/**
 * Two ways to declare a object in js --> literls and other is via constructor 
 * there is only one  difference  
 * singelton in constructor
 * non singelton in literals
 */

// declare 
// how to declare a symbol and use it in object 
const mySym= Symbol("Key");
const myInfo  = {
    greeting: "Namaste",
    name: "hoBabu",
    [mySym]:"Key",
    "fullName" : "hoBabu ji",
    age:99,
    location:"In your HEART",
    isAlive:true
}
// two ways to access it 
// console.log(myInfo.name);
// console.log(myInfo["name"]);
/**
 * u cannot access ful name by using . operator
 * console.log(myInfo.fullName); --> shows error 
 */
// console.log(myInfo["fullName"]);
// console.log(typeof myInfo[mySym]); // its printing typeof of mySym as a string but i want a symbol
// use mySym in [mySym]--> now u can use it as a symboll
// console.log(typeof(myInfo));
myInfo.greetings = function()
{
    console.log("Namaste");
}
myInfo.greetings2 = function()
{
    console.log(`Namaste ${this.name}`);
}
console.log(myInfo.greetings());
console.log(myInfo.greetings2());
// thiss keyword is use  to refer to current object 