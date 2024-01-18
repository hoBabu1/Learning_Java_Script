function a()
{
    for(var i = 0 ; i<5 ; i++)
    {
        myname(i);
    function myname(i){
        setTimeout(function () {
            console.log(i);
    } , i*1000);
    }
}
}
a();