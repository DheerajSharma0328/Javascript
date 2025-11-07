/**
 * 1=> What is while Loop
 * Ans => A while loop is also like for loop but the only difference is that we use for loop when we know exactly how many time loop
 *     => run but we use while loop when we don't know exactly how many time loop we run
 */

let a = prompt("Guess the number: ")

while(true){
    if(a == 15){
        alert("You Win!!!");
        break;
    }
    else{
        
        a = prompt("You Loose Try Again!!!")
    }
}