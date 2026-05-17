// Object Destructuring

let data = {
    name : 'Dheeeraj',
    surname: 'Kaushik',
    age : 26,
    address : "Gurugram",
}

let {name , surname , age , address} = data;

console.log('Name: ' , name);
console.log('Surname: ' , surname);
console.log('Age: ', age);
console.log('Address: ', address);

// Order Does not matter in object destructuring it will remain same as the order in the object

let number = {
    first : 1,
    second : 2,
    third : 3,
    fourth : 4,
    fifth : 5,
}

let {first , third , fifth , second, fourth} = number;

console.log('first: ', first);
console.log('second: ', second);
console.log('third: ', third);
console.log('fourth: ', fourth);
console.log('fifth: ', fifth);

// Giving Obejct Key Different Name

let rect = {
    title : 'Rectangle',
    length: 20,
    width : 30,
}

let {title : t , length : l , width : w} = rect;

console.log('Title: ' , t);
console.log('Length: ' , l);
console.log('Width: ' , w);

// Using ...rest with object

let {title : ti , ...rest} = rect;

console.log("Rest With Object");
console.log('Title: ', ti);
console.log("Rest Length:", rest.length);
console.log("Rest Width: ", rest.width);


// Nested Destructuring

let nes = {
    size : {
        width : 200,
        length : 300,
    },
    sweets : ['Cake' , 'Donut'],
    extra : true
};

//destructuring object 
let {
    size : {
        width,
        length,
    },
    sweets : [sweet1 , sweet2],
    defaultValue = 'Menu',
} = nes;

console.log('Nested Width : ' , width);
console.log('Nested Length : ' , length);
console.log('Nested Sweet1 : ' , sweet1);
console.log('Nested Sweet2 : ' , sweet2);
console.log('Nested Defalut Value : ' , defaultValue)