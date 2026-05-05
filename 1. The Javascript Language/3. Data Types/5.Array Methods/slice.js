let arr = [21,22,23,24,25,26,27,28,29];

console.log("Slice: ",arr.slice(1,4)); // index 1 is included but index 4 is not included
console.log("Slice with negative index: ", arr.slice(-2));// from index -2 till end of the array
console.log("Slice without any argument: ", arr.slice());// it create a copy of the array origonal array remain same
console.log("Original array after operation: ",arr); // original array