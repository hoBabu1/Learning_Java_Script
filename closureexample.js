function b()
{
    let a = 90 ;
    return function c()
    {
        console.log((a));
    }
}
const z = b();
console.log(z);
z();