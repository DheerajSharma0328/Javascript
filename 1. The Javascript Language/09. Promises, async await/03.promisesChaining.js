let test = new Promise(function(resolve , reject){
    setTimeout(()=>{
        resolve(1);
    }, 5000)
})

test.then((result)=>{
    console.log('First Then');
    console.log(result);
    return 2;
})
.then((result)=>{
    console.log('Second Then');
    console.log(result);
    return 3;
})
.then((result)=>{
    console.log('Third Then');
    return result
})
.then((result)=>{
    console.log('Fourth Then');
    return result
})
.then((result)=>{
    console.log('Fifth Then');
    return new Promise(function(resolve , reject){
        setTimeout(()=>{
            resolve('New Promise Return');
        },5000)
    })
})
.then((result)=>{
    console.log(result);
})



test.then((result)=>{
    console.log('One')
    console.log(result * 2)
})
test.then((result)=>{
    console.log('Two')
    console.log(result * 2)
})
test.then((result)=>{
    console.log('Three')
    console.log(result * 3)
})
test.then((result)=>{
    console.log('Four')
    console.log(result * 4)
})
test.then((result)=>{
    console.log('Five')
    console.log(result * 5)
})
test.then((result)=>{
    console.log('Six')
    console.log(result * 6)
})



