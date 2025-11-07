/**
 * 1=> What is References
 * Ans=> In programming when we hear term references it mean we are talking about the address in the memory
 * 
 * => Case: 1
 * 
 * => What does that mean
 * => Suppose we have two different array named as arr , arr1 both have the same element which is 1
 * => Now if we comapre them like arr == arr1 or arr === arr1 we get false. but why
 * => The answer is because array are reference.
 * => It mean here we are not comparing 1 == 1 or 1 === 1 it seems like but it is not like that. Then how it is
 * => The answer is => In the memory there are two reference variable are created one is arr and another is arr1
 * => Now 1 of arr is also stored in the memoery whose address is let 123 now that 123 is stored in the arr not 1 same with the 1 of arr1
 * => let 1 of arr is also stored in the memoery whose address is let 456 now that 456 is stored in the arr1 not 1
 * => Internally it look like arr[123] and arr[456]
 * => So when we compare arr[1] == arr1[1] we see this but in the memoery it is like arr[123] === arr1[456]
 * => That mean we are not comparing the array value we are comparing array address and because address are not same that is why 
 *    => we see false
 * 
 * => Case: 2
 * 
 * => In this case we have a newArr = ['a','b','c'] and second array is sepArr
 * => So now when we assign newArr to sepArr and then do operation to any array then same change are visibale to same array. but why
 * => The answer is Because we are assign the address of newArr 
 * 
 * 2=> What are Constant Array  
 * Ans=> Constant Array are those whose address cannot be change once declared but element can change
 * => And this is Because when we add element in the array there is no error 
 * => But we try to assign a test2 array in test then we get the error because we are trying to change the addess is test
 * 
 */


// Case: 1

let arr = [1]
let arr1 = [1]

let result = arr == arr1;
console.log(result);

result = arr === arr1;
console.log(result);


// Case: 2

let newArr = ["a", "b" , "b"]
console.log("newArr: " , newArr);
let sepArr = newArr;
console.log("sepArr: " , newArr);

sepArr.push("d");
console.log("newArr After Push in sepArr: " , newArr);

newArr.pop();
console.log("sepArr After Pop in newArr: " , sepArr);

// Constant Array

const a = 5;
// a = 6;
// Error => Uncaught TypeError: Assignment to constant variable.

const test = [1,2,3];
console.log(test);
test.push(5,6,7,8)
console.log(test);

const test2 = [1,2,3];

// test = test2;
// Error => arrayRefrences.js:68 Uncaught TypeError: Assignment to constant variable.



