//Usually, if the array is longer than the list at the left, the “extra” items are omitted.

// For example, here only two items are taken, and the rest is just ignored:

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar
// Further items aren't assigned anywhere

// The Rest ...rest

let arrv = [1,2,3,4,5,6,7,8,9];

let [a,b, ...rest] = arrv;

console.log('Value of A: ',a);
console.log('Value of b: ',b);
console.log('Value of Rest: ',rest);