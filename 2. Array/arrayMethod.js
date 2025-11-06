/**
 * 1=> Array Method
 * Ans=> 1=> push => Add element at the end
 * 
 *       2=> pop  => Delete from the end and return it
 *       Above two are the operation of end
 * 
 *       3=> unShift => Add element at the start of an arrray
 * 
 *       4=> shift => Delete element at the start and return it
 *       Above two are the operation of the start       
 * 
 *       5=> indexOf => It is used to find the index of an element in an array
 *                   => It is case sensititve
 *                   => If element found it return the index of elememt if element not found it return -1
 * 
 *       6=> includes => It is also used to find element in the array
 *                    => Instead of element index it return true if element found and false if element not found
 * 
 *       7=> concat => It is used to merge two array into a new single array but original array remain same
 *                  => The element of first array come first and then the element of second array in the new array
 * 
 *       8=> reverse => It is used to reverse the order of an array.
 *                   => It mean element last come to first and first to the last
 *                   => It reverse the element of the Original array doesnot create a new array
 * 
 *       9=> slice => Copy a part of an array and return a new array
 *                 => It takes two argument array_name.slice(start,end)
 *                 => If we donot pass anything it just return the whole same array => array_name.slice()
 *                 => If we just pass only one argument it mean it is the starting index and from that till end
 *                 => Here starting_index is including but ending_index is excluding
 *                 => If we pass negative number it mean we want that much of element fromt the end
 *                 => If we write the index that is exceed the range of the array length then we get the empty array
 * 
 *      10=> splice => It is the combination of multple method.using this method we can remove/replace/add in place
 *                  => It takes 3 arguments 
 *                  => 1=> starting_index (No ending index pass here)
 *                  => 2=> How many element we want to delete from the starting index (it is an optional argument) if we donot want to
 *                         delete any element we just write 0 in place of this
 *                  => 3=> Here we wite all the element we want to add which are seprated my commas if we donot want to add any element
 *                         just leave it
 *                  
 *                  => It return the new array donot change the original array
 *  
 */

// Push , Pop , Shift , Unshift Demo

let arr = ["Apple","Mango","Banana"]
let arr1 = ["Grapes","Orange","Pineapple"]
let num = [1,2,3,4,5,6,7,8,9,10]

console.log("Array Without any Method: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-----------------------------------------------------");

arr.push("Grapes");
console.log("Array With Push Method: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-----------------------------------------------------");

arr.pop();
console.log("Array With Pop Method: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-----------------------------------------------------");


console.log("Array Without any Method: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-----------------------------------------------------");

arr.unshift("Grapes");
console.log("Array With Unshift Method: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-----------------------------------------------------");

arr.shift();
console.log("Array With Shift Method: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// Indexof Demo

console.log(arr.indexOf("Apple"));
console.log(arr.indexOf("PineApple"));

// Includes Demo

console.log(arr.includes("Apple"));
console.log(arr.includes("PineApple"));

// Concat Demo

let fruits = arr.concat(arr1)

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Reverse Demo

console.log("-----------------------------------------------------");

console.log("Num(Original Array) without any Method");
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

console.log("-----------------------------------------------------");

console.log("Num(Reversed Array) after reverse Method");
let rev = num.reverse()
for(let i=0; i<rev.length; i++){
    console.log(rev[i]);
}

console.log("-----------------------------------------------------");

console.log("Num(Original Array) without any Method");
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

// Slice Demo

console.log(num.slice());
console.log(num.slice(2));
console.log(num.slice(2,6));
console.log(num.slice(-2));
console.log(num.slice(15));


// Slice Demo

console.log(num.splice(2));







