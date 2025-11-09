/**
 *  => 
 * 
 * 1=> What is a Promises
 * Ans  => The promises object represent the eventual completion (or failure) of an asynchronous operation and resulting its value
 *      => Promises is an object
 *      => Promises object has two thing 
 *          1=> resolve => Which mean success
 *          2=> reject => Which mean failure
 * 
 *      => Promises object has three states
 *          1=> pending
 *          2=> rejected
 *          3=> fulfilled
 * 
 *      => Because promises is an object it also has some method
 *          =>Method 1 => then => It is used after the promises status is fulfilled/resolve
 *          =>Method 2 => catch => It is used after the promises status is reject
 * 
 *      => When promises fulfilled or rejected they return a data
 *          =>1 => If fulfilled => result
 *          =>2 => If rejected => error
 */

// One More Example of call back hell

// function savetoDb(data, sucess, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     // console.log(internetSpeed);
//     if (internetSpeed > 4) {
//         sucess()
//     }
//     else {
//         failure()
//     }
// }

// savetoDb(
//     "one",

//     () => {
//         console.log("one save in db");
//         savetoDb(
//             "two",
//             () => {
//                 console.log("two save in db");
//                 savetoDb(
//                     "three",
//                     () => {
//                         console.log("three save in db");
//                     },
//                     () => {
//                         console.log("three could not save in db");
//                     }
//                 )
//             },
//             () => {
//                 console.log("two Could not save in db");
//             }
//         )
//     },

//     () => {
//         console.log("one could not save in db");
//     })


// To overcome from call back we have promises

function savetoDb(data) {
    return new Promise((reslove, reject) => {
    
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        // console.log(internetSpeed);
        if(internetSpeed > 4){
            reslove("Success: Data saved");
        }
        else{
            reject("Failure: Data could not save")
        }
    })
}


// General Way to write promises

// let request = savetoDb("Secret Data");

// request.then(()=>{
//     console.log("Data is saved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Data is not saved");
//     console.log(request);
// })

// Compact Way to write promises

// savetoDb("Secret Data").then(()=>{
//     console.log("Data is saved");

// })
// .catch(()=>{
//     console.log("Data is not saved");

// })


// Pormises Chaning

savetoDb("Secret Data")
.then((result)=>{
    console.log("Data1 is saved");
    console.log("Result" , result);
    return savetoDb("Secret Data")
})
.then((result)=>{
    console.log("Data2 is saved");
    console.log("Result" , result);
    return savetoDb("Secret Data")
})
.then((result)=>{
    console.log("Data3 is saved");
    console.log("Result" , result);
})
.catch((error)=>{
    console.log("Data is not saved");
    console.log("Error" , error);

})