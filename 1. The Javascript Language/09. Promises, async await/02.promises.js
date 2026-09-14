// console.log('hello');

// const promise = new Promise(function(resolve , reject){
//     resolve('promise');
// });

// promise.then(function(result){
//     console.log(result);
// });

// console.log('bye');

// const promises1 = new Promise(function(resolve , reject){
//     reject(new Error('Something Went Wrong'));
// })

// promises1.then(
//     (result) =>{
//         console.log(result);
//     },
//     (error) =>{
//         console.log(error.message);
//     }
// )

// function getuser(){
//     return new Promise(function(resolve , reject){
//         setTimeout(()=>{
//             reject('Server is Down');
//         },9000)
//     });
// }

// const users = getuser();
// console.log(users);

// getuser().then(
//     (users) =>{
//         console.log(users);
//     }
// )
// .catch(
//     (error) =>{
//         console.log(error);
//     }
// )
// .finally(()=>{
//     console.log('Loading Finished');
// })

// loadscript Example in promise form

// function loadscript(path){

//    return new Promise(function(resolve, reject) {

//         let scripttag = document.createElement('script');

//         scripttag.src = path;

//         scripttag.onload = () => {
//             resolve('File Loaded Successfully');
//         };

//         scripttag.onerror = () => {
//             reject(new Error('File Not Found'));
//         };

//         document.head.appendChild(scripttag);
//     });

// }


// loadscript('./hello.js')
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });


// let test = new Promise(function(resolve , reject){


//     setTimeout(()=>{

//         let name = 'Dheeraj Don';

//         if(name){
//         resolve('Dheeraj Don');
//     }
//     else{
//         reject(new Error('File Not Found'))
//     }
//     },5000)
// })

// console.log(test);

// test.then((result)=>{
//     console.log(result)
//     console.log('Fulfilled')
// })
// .catch((error)=>{
//     console.log(error.message)
// })
// .finally(()=>{
//     console.log('Code Over')
// })

// setTimeout(()=>{
//     console.log(test);
// },10000)