// map declaaration 
const map = new Map();
// how to set value 
map.set("IN" , "India ");
map.set("USA", "United State of America ");
// for  of loop on map 
for(const key of map)
{
    console.log(key);
}
// mentos way to print it 
for(const [key , value ] of map)
{
    console.log(key , ":-" , value);
}
// oject is not iteratable by this way --> for of 
const obj = {
    "game" : "NFS",
    "game2" : "COC"
}
// for(const o of obj)
// {
//     console.log(o);
// }
// for in 
for(const key in obj)
{
    console.log(`${key} value is ${obj[key]}`);
}
// can we apply for in loop on array 
const arr = [1,2,3,4,15];
for(const  index in arr)
{
    console.log(index); // it will give only key
    console.log(arr[index]); // access it like this 
}
// answer is yesh 

// on map ???
for(const key in map)
{
    console.log(key);
}
// answer is no  map is not iteratable by this way 

// FOR EACH loop 
const language = ["Java" , "CPP" , "C++","RUBY"]
// for each needs --> call back function  --> no function name 
// by uisng normal function
language.forEach(function (items)  {console.log(items)})
// by arrow function 
console.log("Arrow function");
language.forEach((item) => {console.log(item)})
// in functio parameter we can pass three things 
// items , index  , arr
language.forEach((items , index , arr) => {console.log(items , index , arr);})

// objects inside array 
const arrobj = [
    {
        name:"Shivani",
        branch:"Civil",
        state:"UP"
    },
    {
        name:"hoBabu",
        branch:"cse",
        state:"Bihar"
    },
    {
        name:"Aman",
        branch:"cse",
        state:"Bihar"
    }
]
// one of the most common operation while getting data from data base 
arrobj.forEach((items)=>{console.log(items.branch);})
// for each cant return any value 
/**
 * so incase if u want to return value u cant do it by using for each 
 * so use filter() --> takes call back function and a condtion
 * filter is more liked based on true and false 
 */
const nums = [1,2,3,4,5,6,7,8,9,10]
const vall=nums.filter((nums=>{
    return nums>1
    // if u are opening {} make sure to use return keyword else anwer will be empty []
}))
console.log(vall)

// now how to do this thing using for each loop 
const numsarr = [];
nums.forEach( (items) =>{
    if(items>4)
    {
        numsarr.push(items)  
    }
}  )
console.log(numsarr);
// maps and chaining 
/**
 * maps it automatically returns a value 
 * it will return all value but filter returns only those whosatisfy the condition 
 * chaining --> .map().map(). filter
 */
console.log("Namaste");
const numArray = [1,2,3,4,5,6,7,8,9,10];
const value = numArray.map((nums)=>(nums+10));
console.log(value);
// chaining 
const valueChaining = numArray.map((items)=>{return items+10}).map((items)=>(items+10)).filter((nums)=>nums>24)
console.log(valueChaining);