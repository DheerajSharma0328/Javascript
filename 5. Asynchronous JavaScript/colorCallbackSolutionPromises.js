/**
 * 
 */

const h1 = document.querySelector("h1")

function setColor(color , delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color Set")
        },delay)

    })

}

setColor("red",2000)
.then((result)=>{
    console.log("Result: ", result);
    return setColor("blue", 2000)
})
.then((result)=>{
    console.log("Result: ", result);
    return setColor("yellow", 2000)
})
.then((result)=>{
    console.log("Result: ", result);
    return setColor("green", 2000)
})
.then((result)=>{
    console.log("Result: ", result);
    return setColor("magenta", 2000)
})
