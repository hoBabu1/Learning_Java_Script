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
    email:"obabu2.0@gmail.com",
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
// objects in object 
const user = {
    email:"hobabu2.0@gmail.com",
    fullname:{
        firstname:"Aman",
        lastname:"kumar"
    }
}
//console.log(user.fullname); 
// combine two objects 
// method 1 
//const obj3 = Object.assign({} , user , myInfo) // here {} is given to act as a target object
 // mentos method 
 const obj4 = {...user , ...myInfo};
 console.log(obj4);
 console.log(Object.keys(user)) // return an array of keys of given object 
 console.log(user.hasOwnProperty("email")); // return true or false

 //object destructor
 // fo accessing eement of object we use . operator 
 // but if u want to use it again and again it will be lenghty

 // mentos way 
 const {email:mail} = user;
 const {email:mail2} = myInfo;
 console.log(mail);
 // it is mainly used in react js 