/**
 * 1=> What is for Loop
 * Ans=> When we have to do same task multiple time then we use for loop
 *    => When we use for loop => we use for loop when we know the exact number of time we need to run the loop
 */

for(let i=1; i<=10; i++){
    console.log(`${i} = ${i*2}`);
}

// Nested for Loop => When we write one for loop inside an another for loop then it is called Nested for loop

for(let i=1; i<5; i++){
    for(let j=1; j<5; j++){
        console.log(i+j);
    }
    console.log("___________________");
}