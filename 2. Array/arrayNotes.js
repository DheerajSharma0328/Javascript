/**
 * 1=> What is an Array
 * Ans => An Array is a linear collection of things
 *     => Array are index based it mean if we want to access first index then it is of place 0 not 1 
 *     => Length of an array is equal to the number of element in an array. It start from 1
 *     => In javascript array are typeof object
 *     => If we try to access an index which is not present in the array it will give us undefined
 *     => In javascript we can store both number and string in the same array or we can create a individual array of each 
 *     => Using [][] we can access the specific letter of an element
 *      => first [] element of that array second[] mean letter of that element
 *     => Array are Mutable. it mean when we do change in the array no new will be created change are made in the original array 
 */



// Empty Array Syntax
let arr2 = [];


// Array Syntax

let arr = ["Dheeraj","Ishaan","Ankit"]
let arr1 = ["Dheeraj",25]

console.log(arr[0]);
arr[0] = "Dheeraj Kaushik"
console.log(arr[0]);


console.log(arr[0][0]);
console.log("Array Length: ",arr.length);
console.log(typeof(arr1));

