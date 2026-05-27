// Code Block

/*
    If a variable is declared inside a code block {...}, it’s only visible inside that block.
*/

let cont = 25;
console.log("Cont outside Function: " , cont);

function print(){
    let cont = 25;
    console.log("Cont inside Function: " , cont);
}

print();

// Printing same varibale name output because both variable scope is different

//Please note, without separate blocks there would be an error, if we use let with the existing variable name:

/*
// show message
let message = "Hello";
alert(message);

// show another message
let message = "Goodbye"; // Error: variable already declared
alert(message);
*/
