// Reference of object in map after assign object variable to null


let map = new Map();
let obj = {name : 'Jhon'};

map.set(obj , 'Object Data');
// console.log(map);
obj = null;
// console.log('Map Ater obj = null:  ' , map);
console.log('object key data' , map.get(null));



// let weakMap = new WeakMap();
// let obj1 = {name : 'Jhon'};

// weakMap.set(obj1 , 'ok'); // work fine because object is the key

// //can't use string as the key
// // weakMap.set('Alpaha' , 'A'); 
// // Error, because "test" is not an object

// obj1 = null;

// console.log(weakMap.get(obj1));
// console.log(weakMap);

console.log("Working");
