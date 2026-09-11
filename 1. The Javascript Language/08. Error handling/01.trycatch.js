// try {
//     console.log("try start");
//     console.log("try end")
// } catch (err) {
//     console.log('catch ignored')
// }


// try {
//     console.log("try start");
//     lalalala;  // error variable is not defined
//     console.log("try end")
// } catch (err) {
//     console.log('error has occured')
// }


// try {
//     setTimeout(() => {
//         nochuchvaicalke;
//     }, 5000);
// } catch (err) {
//     console.log("Not working")

// }



// setTimeout(() => {
//     try {
//     console.log("try start");
//     lalalala;  // error variable is not defined
//     console.log("try end")
// } catch (err) {
//     console.log('error has occured')
// }

// },5000)

// try{
//     lalala;
// }catch(err){
//     console.log("Name");
//     console.log(err.name);
//     console.log("Message");
//     console.log(err.message);
//     console.log("stack");
//     console.log(err.stack);
//     console.log("Error");
//     console.log(err);
// }

// Real Life Example of try...catch

// let json = '{"name" : "Jhon" , "age" : 30}';

// let user = JSON.parse(json);
// console.log(user.name);
// console.log(user.age);


// let badjson = '{bad json}';

// try {
//     let json = JSON.parse(badjson);

//     console.log(json.name);
//     console.log(json.age);
// } catch (err) {
//     console.log("Our apologies, the data has errors, we'll try to request it one more time.");
//     console.log(err.name);
//     console.log(err.message);
// }

// let json = '{ "age": 30 }'; // incomplete data

// try {

//   let user = JSON.parse(json); // <-- no errors
//   console.log( user.name ); // no name!

// } catch (err) {
//   console.log( "doesn't execute" );
// }

// let json = '{ "age": 30 }'; // incomplete data

// try {

//   let user = JSON.parse(json); // <-- no errors

//   if (!user.name) { //this mean it will true only if user.name contain falsy/missing/empty
//     // user.name output is undefined when something is not present it is undefined
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }

//   console.log( user.name );

// } catch (err) {
//   console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
// }


// let json = '{ "age": 30 , "name" : "balu" }'; // incomplete data
// try {

//   let user = JSON.parse(json);
  

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }

//   blabla(); // unexpected error

//   console.log( user.name );

// } catch (err) {

//   if (err instanceof SyntaxError) {
//     console.log( "JSON Error: " + err.message );
//   } else {
//     throw err; // rethrow (*)
//   }

// }


// try {
//   console.log( 'try' );
//   if (confirm('Make an error?')) BAD_CODE();
// } catch (err) {
//   console.log( 'catch' );
// } finally {
//   console.log( 'finally' );
// }

// let num = +prompt("Enter a positive integer number?", 35)

// let diff, result;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Must not be negative, and also an integer.");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (err) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// alert(result || "error occurred");

// alert( `execution took ${diff}ms` );

// function func() {

//   try {
//     return 1;

//   } catch (err) {
//     /* ... */
//   } finally {
//     alert( 'finally' );
//   }
// }

// alert( func() ); // first works alert from finally, and then this one