/**
 * 1=> Error handling in asunc and await using try and catch
 * Ans  => There we are using try and catch for error handling 
 *      => In try block we write those code who has high chance to throw error 
 *      => In catch block we catch the error and write the code to handle it
 *      => When ever we use promise and await then we have to use the try and catch method and write the code in try block which may 
 *         throw error
 * 
 */

const h1 = document.querySelector('h1')

function change(color, delay) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;

            if (num < 3) {
                reject()
            }

            h1.style.color = color
            console.log(`Color Change to ${color}`);
            resolve("Color Changed!")

        }, delay)

    })
}

async function set() {

    try {
        await change("red", 1000)
        await change("blue", 1000)
        await change("yellow", 1000)
        await change("green", 1000)
        await change("magenta", 1000)
    }
    catch {
        console.log("Something Went Wrong");
    }

    let a = 5;
    console.log("Number is: ", a);
    console.log("New Number is: ", a + 3);

}