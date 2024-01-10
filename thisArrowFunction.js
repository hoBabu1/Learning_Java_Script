/**
 * this keyword is used to refer to current context 
 * */
const user = {
    name:"hoBabu",
    age:98,
    welcomeMessage:function()
    {
        console.log(`${user.name} welcome bro`);
    }
}
user.welcomeMessage();
user.name = "Babu"
user.welcomeMessage();


// functions 
function nameOfFN()
{

}
// another way 
const add = function anotherFn()
{

}
// another way
const name = () => {
    return "Namaste"
}
console.log(name());
// another way 
() =>{
    return 1;
}
// implicit function 
const va=(num1 , num2 ) => (num1+num2) // it  will return num1 + num2 , no return keyword is required 
console.log(va(5,6));

// this keyword in  arrow function 
const thisop=() =>{
    console.log(this); // a empty obect is returned 
}
thisop();
// this keyword in normal function 
const nam = function ()
{
    console.log(this);  // a lot of value is returned 
}
nam();