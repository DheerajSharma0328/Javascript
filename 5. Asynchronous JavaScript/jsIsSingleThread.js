/**
 * 1=> Js is Single Thread 
 * Ans=> Js it Thread mean only one single thing can be executed at a time
 *    => 
 * 
 *  
 */


for(let i=0; i<5; i++){
    setTimeout(function (){
            console.log("Hello",i);
    },5000)
    console.log("test",i);
    setTimeout(function (){
            console.log("Bye",i);
    },2000)
}