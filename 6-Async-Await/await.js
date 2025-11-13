/**
 * 1=> What is Await
 * Ans=>    Await is a keyword is used within async to pauses the execution of its surrounding asunc function until the promises is
 *          settled(resolved or rejected)   
 */

function getnumber() {
    return new Promise((resolve , reject, ) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1
            console.log(num);
            resolve()
        },1000)
    })
}

async function demo() {
    await getnumber()
    await getnumber()
    await getnumber()
    await getnumber()
    await getnumber()
}
