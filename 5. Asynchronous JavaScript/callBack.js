/**
 * 1=> What is call back
 * Ans=> When we pass a function to another function as arguments then it is called callback
 *    => In javascript fuction are treated as First-Class_object meaning they can be treated like any other data type
 *       (assigned to variables, passed as arguments, returned from functions).
 * 
 * 2=> What is call back hell
 * Ans=> When we do nesting of the call back then this is called call back hell (like below)
 */

const h1 = document.querySelector('h1')

function setColor(shades, delay, newColor){
    setTimeout(()=>{
        h1.style.color = shades;
        if(newColor){
            newColor()
        } 
    },delay)

}


// call back hell
setColor("blue",3000, ()=>{
    setColor("pink",3000, ()=>{
        setColor("orange",3000)
    })
})
