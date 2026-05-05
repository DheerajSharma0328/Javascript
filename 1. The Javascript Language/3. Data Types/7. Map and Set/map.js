let map = new Map();

map.set('1' , 'Dheeraj');
map.set(1 , 'One');
map.set(true , 'Boolean');

console.log(map);
console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(true));


// setting object as key in map

let jhon = {name : 'Jhon'};
let mapObj = new Map();

mapObj.set(jhon , 'Key');

console.log(mapObj.get(jhon));

mapObj.set(1 , 'One').set(2 , 'Two').set(3 , 'Three');

console.log(mapObj);

// Looping over Map using for...of loop
console.log('Looping over Map using for...of loop: ');

for(key of mapObj.keys()){

    console.log(key);

}

console.log('Values: ');

for(value of mapObj.values()){
    console.log(value);
}

console.log('Entries: ')

for(enteries of mapObj){
    console.log(enteries);
}

// Entries in the Map at the time of creation

console.log('Entries in the Map at the time of creation');

let mapp = new Map([

    [1 , 'One'],
    [2 , 'Two'],
    [3 , 'Three'],
    [4 , 'Four'],
    [5 , 'Five'],
    [6 , 'Six'],
    [7 , 'Seven'],
    [8 , 'Eight'],
    [9 , 'Nine'],
    [10 , 'Ten'],

]);

mapp.forEach(function(value , key){
    console.log(key  , value);
})

// Creating a map from an object
// Note => This is a Plain Object
console.log('Creating a map from an object');

let obj = {
    name : 'Dheeraj',
    age : 26,
    city : 'Gururgam',
}

let mapFromObj = new Map(Object.entries(obj));

mapFromObj.forEach(function(value , key){
    console.log(key , value);
})

console.log(typeof(mapFromObj));


//Creating object from map
console.log('Creating object from map');

let objFromMap = Object.fromEntries(mapp);

console.log(objFromMap , typeof(objFromMap));