function a()
{
    let a = 7 ;
   const y =  function c()
    {
        console.log(a);
    }
    a = 50;
    return y;
}
// console.log(a()); // return a function
const p = a();
p();

