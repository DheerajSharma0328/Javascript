// Object reference concept 

let obj = {name : "Dheeraj"};
let arr = [obj];
console.log("One" , arr[0]);
obj = null;
console.log("Two" , arr[0]);
console.log(obj);

//------------------------------------------------------------------------------------------

//if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference
console.log("Map Key => ",map.keys());

// john is stored inside the map,
// we can get it by using map.keys()


//------------------------------------------------------------------------------------------

// The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let weakMap = new WeakMap();

let obj1 = {};

weakMap.set(obj1, "ok"); // works fine (object key)

// can't use a string as the key
// weakMap.set("test", "Whoops"); 
// Error, because "test" is not an object

//------------------------------------------------------------------------------------------

//Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

let john1 = { name: "John" };

let weakRef = new WeakMap();
weakRef.set(john1, "...");

console.log("Before null weak map test: " , weakRef.has(john1));

john1 = null; // overwrite the reference

console.log("Before null weak map test: " , weakRef.has(john1));
// john is removed from memory!

//------------------------------------------------------------------------------------------