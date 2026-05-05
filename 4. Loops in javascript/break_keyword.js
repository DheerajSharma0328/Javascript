/**
 * 1=> What is a break keyword
 * Ans=> A break keyword is used when we want to stop a loop when a specific condition meet
 *    => It is specially made for loops not for function. For fucntion we have return keyword
 */


let sum = 0;

for(let i=0; i<10; i++){
    sum = sum + i

    if(sum == 15){
        break;
    }
    else{
        console.log(`Number is ${i} and Sum is: ${sum}`);
    }
}
