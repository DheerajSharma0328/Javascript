/**
 * 1=> What is Async
 * Ans   => Async is a keyword. which we write before function keyword to make that function behave like Asynchronously
 *       => It is a cleaner way to write the Asynchronous code
 *       => All the async function by defalut return a promise
 *       => After that we use then() and catch() method to the promise which is return by the function 
 *       => If you notice the name of the folder is different from other i.e instead of 6. Async & Await it is 6-Async- Await
 *       => This is because when we use & or space with Async & Await then have a special meaning in url and url us unable to process it
 *       => Make sure when give file or folder name. the name should not conflict with url parameter
 * 
 *       =>   Promise {<fulfilled>: 'hello'} => This is the main state of pormise object
 * 
 *                [[Prototype]] : Promise => A prototype in JavaScript is like a blueprint or hidden object that every object uses to
 *                                inherit properties and methods from. 
 * 
 *                [[PromiseState]] : "fulfilled" => Status of promise
 * 
 *                [[PromiseResult]] : "hello" => It is the value which is write in return or The result value returned by your
 *                                    async function
 * 
 * 2=> Throw Keyword
 * Ans=> throw keyword is used to show error explicitly 
 */


async function greet() {
   // throw "error"
   return "hello"
}

greet()
.then(()=>{
   console.log("Successfull");
})
.catch((err)=>{
   console.log("Failed",err);
})

// Making Arrow function into async function

let demo = async ()=>{
   return 5;
}

demo()



