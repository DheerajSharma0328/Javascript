let num = [12,123,43,54,567,7568,67,687567,354];

num.splice(4,3); // from index 4(including) remove three element (567,7568,67)

console.log("Array After splice remove operaiton: ",num);

let nnum = [12,13,14,15,16,17,18,19,20];
nnum.splice(3,4,5,6,7,8,9); // from index 3 including it remove 4 element and add 5,6,7,8,9 in their place 
console.log("nnum arr after remove and replace: ",nnum);

let removed = nnum.splice(0,2);
console.log("nnum Removed element: ", removed, typeof(nnum));

let arr1 = [1,2,5];
arr1.splice(-1,0,3,4);

console.log("Add element using negavtive index: ", arr1);

