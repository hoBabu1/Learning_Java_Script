function x()
{

}

x(function y()
{

});      // here y is known as call back function 

// exapmle of call back function is set time out function  --> it takes a call back function 
// and that function is called later when timer ends 

// it make js from su=ynchronous to async 
setTimeout(function ()
{
    console.log("HELLO");

} , 1000);
console.log("HEy");

// at here HEY is printed first then later it prints hello  
