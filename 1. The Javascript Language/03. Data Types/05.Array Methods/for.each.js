let arr = ['Dheeraj' , 'Dheeraj Sharma' , 'Dheeraj Kaushik'];

arr.forEach(function(item , index, array){
    console.log('One' ,item ,index , array);
    array.pop();
    console.log('Two' , item , index , array);
})

let arr1 = [1,2,3,4,5,6,7,8,9,10];

let a = arr1.forEach((element , index , arr1)=>{
    
    arr1[index] = arr1[index] + 10;
    
    
})

console.log(arr1);


console.log('Value of arr1 in the form of a: ', a);

let arr2 = [1,2,3,4,5,6,7,8,9,10];

function testReturn(arr2){
    
    console.log('Nested Loop Array: ');
    return(inside(arr2));
    
    function inside(arr2){
        
        for(let i=0; i<10; i++){

            return(arr2[i]);

        }

    }
}

let testReturnResult = testReturn(arr2);
console.log('Test Return Result: ' , testReturnResult);