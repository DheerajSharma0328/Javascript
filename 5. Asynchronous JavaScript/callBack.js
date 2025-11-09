/**
 * 1=> What is call back
 * Ans=> When we pass a function to another function as arguments
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

setColor("blue",3000, ()=>{
    setColor("pink",3000, ()=>{
        setColor("orange",3000)
    })
})
