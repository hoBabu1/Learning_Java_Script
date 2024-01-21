/**
 *  function statement 
 *  function name()
 * {
 * 
 * }  
 * functionExpression 
 * var b = function()
 * {
 * }
 * difference between above two is hosting 
 * A function without a name is called anonymous function
 * anonymous function is used when we pass this as a value 
 * 
 * named function 
 * var b = function abc()
 * {
 * }
 * var b = funcion
 * 
 */
// b();  ---> it gives a error 
var b = function abc()
{
    console.log("Namaste");
    console.log(abc); // we can call  this here 
   // console.log(abc()); // infinite loop 
}
b();
 // abc(); --> reference error 
