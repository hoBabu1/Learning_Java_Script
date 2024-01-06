// declare 
let myDate = new Date();
console.log(myDate)
console.log(myDate.toISOString);
console.log(myDate.toString());
// type of date 
console.log(typeof(myDate));
// other syntax of date 
let myCreatedDate = new Date(2024 , 0 , 7);
console.log(myCreatedDate.toString());
let myCreatedDateanother = new Date("2024-01-07");
console.log(myCreatedDateanother.toLocaleString());
// time stamp  is used while quizes , decici=ding winner , polls etc
let timeStamp = Date.now(); 
console.log(timeStamp);
console.log(myCreatedDate.getTime());
// conversion in seconds 
console.log(Math.floor(Date.now()/1000));
console.log(myDate.getMonth()+1);
// for modification ,, customize 
myDate.toLocaleString('default',{

})