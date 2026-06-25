// How to destructure the array

let arr = [1,2,3,4,5,6,7,8,9,10];

let [a,b,c,d,e,f,g,h,i] = arr;

console.log('a' , a);
console.log('b' , b);
console.log('c' , c);
console.log('d' , d);
console.log('e' , e);
console.log('f' , f);
console.log('g' , g);
console.log('h' , h);
console.log('i' , i);

let name = ['Dheeraj' ,'Kaushik'];
let [firstName , lastName] = name;
console.log('First Name: ' , firstName);
console.log('Last Name: ' , lastName);  


// How to destructure the array in between or the shortcut method
let between = arr[5];
console.log("In Between Destructuring: " , between);

// How to ignore the array element
let name1 = ['Dheeraj' , 'Sharma' ,'Kaushik'];
let [firstName1 , , lastName1] = name1;

console.log("Skiped First Name: " , firstName1);
console.log("Skiped Last Name: " , lastName1);

// Swap variable trick

let name2 = "Hello";
let name3 = "Bye";

[name2 , name3] = [name3 , name2];
console.log("Name 2: " , name2);
console.log("Name 3: " , name3);

