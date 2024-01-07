/// declare 
let arr = new Array(1,2,3,4);
//console.log(arr);
// another way to declare 
const arr1 = [1,2,3,4];
console.log("original array " , arr1);

// major difference between slice and splice 
/**
 *  slice excludes last index , splice includes last index 
 *  slice --> there is no change in original array 
 *  splice there is change in original array  deletes the element which was spliced 
 */
// console.log(arr1.slice(1,2));
// console.log("After slice " , arr1);
// console.log(arr1.splice(1,2));
// console.log("After splice " , arr1);
const arr2 = [1,2,2,3,4,5,6];
const arr3 = [7,8,9,4,5,6];
// push array is pushed into exixting array
// console.log("PUSH ");
// arr2.push(arr3);
// console.log(arr2);
// concat --> a new array is formed 
// console.log("Concat");
// const concArr = arr2.concat(arr3);
// console.log(concArr);

// spread operator 
/**
 * industry friendly 
 * u can concat more than one array at single time
 */

const all_Number = [...arr2 , ...arr3];
console.log(all_Number);