//No error because of extra argument
//3,4,5 are lost 
function sum(a , b){
    return a+b;
}

console.log(sum(1,2,3,4,5));

//to store excessive argument so that they can't lost
//we store them in an array using rest parameter

function sub(a , b , ...args){
    
    console.log(args);
    return a-b;
}

console.log(sub(2,1,3,4,5))

//Using Argument Keyword

function argumentTest(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}

console.log(argumentTest(1,2,3,4));