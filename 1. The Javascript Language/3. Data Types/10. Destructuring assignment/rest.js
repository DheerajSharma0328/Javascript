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

// Default values

/*If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:*/

let [firstName, surname] = [];

console.log(firstName); // undefined
console.log(surname); // undefined

// If we want a “default” value to replace the missing one, we can provide it using =:

// default values
let [name3 = "Guest", surname1 = "Anonymous"] = ["Julius"];

console.log(name3);    // Julius (from array)
console.log(surname1); // Anonymous (default used)

/*Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.*/

// For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
// let [name4 = prompt('name?'), surname2 = prompt('surname?')] = ["Julius"]; 
// Above line is used with browser as prompt is part of browser

//console.log(name4);    // Julius (from array)
//console.log(surname2); // whatever prompt gets

// Please note: the prompt will run only for the missing value (surname).

