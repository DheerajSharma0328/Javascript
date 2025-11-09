/**
 * 1=> What is Call Stack
 * Ans=> Call => when we call something like calling a function
 *    => Stack => Stack is a data structure. where one thing is on the top of another and so on 
 *             => Its nautre is LIFO => (Last In First Out) 
 * 
 *    => Call Stack => Call stack is a stack who store the calls of the function and tell which function call 
 * 
 *    => Now what happen => In the starting stack is empty
 *                       => Now first callHello() is store in the stack is begin executed 
 *                       => When it executed it call hello now hello is also in the stack above callHello()
 *                       => Now hello() is executed
 *                       => When it is executed it print message and function is over 
 *                       => Now because dtack use the apporch LIFO and hello() came in the last now it goes out first
 *                       => Now only callHello() left in the stack
 *                       => And because its work is also done which is call hello()
 *                       => Now it also goes out and again stack is empty now
 * 
 */

function hello(){
    console.log("Hello");
}

function callHello(){
    hello()
}

callHello()


function one(){
    return 1;
}


function two(){
    return one() + one();
}


function three(){
    return two() + one()
}

function four(){
    let four =  three() + one()
    console.log(four);
}

four()