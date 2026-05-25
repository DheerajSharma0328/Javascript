// Normal way of doing 
function power(base , power)
{

    let result = 1;
    for(let i=1; i<=power; i++)
    {

        result *= base;

    }

    return result;

}
console.log("Normal Calculation");
console.log(power(2,10));
console.log(power(3,10));
console.log(power(4,10));
console.log(power(5,10));

// Recursive way of doing

function powerRecursion(base , power)
{
    if(power == 1)
    {
        return base;
    }

    return base * powerRecursion(base , power-1)

}

console.log("Recursive Calculation");
console.log(powerRecursion(2,10));
console.log(powerRecursion(3,10));
console.log(powerRecursion(4,10));
console.log(powerRecursion(5,10));

function numberRecursion(number)
{
    if(number == 10353)
    {
        return number;
    }

    console.log(number);
    return numberRecursion(number+1)

}

// Maximal recursive call by js engine is 10353 
console.log("Printing Number: " , numberRecursion(1));

// Recursion using conditional operator

function powerRecCond(base , power)
{
    return (power==1)? base : (base * powerRecCond(base , power-1));
}

console.log("Conditional Operator Recursion: ");
console.log(powerRecCond(2,10));
console.log(powerRecCond(3,10));
console.log(powerRecCond(4,10));
console.log(powerRecCond(5,10));