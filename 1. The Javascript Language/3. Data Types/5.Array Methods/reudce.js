let arr = [1,2,3,4,5,6,7,8,9,10]

let result = arr.reduce(function(accu , element){
    return (acc = accu + element)
},0)

console.log(result);

console.log(typeof(arr));
console.log(Array.isArray(arr));
