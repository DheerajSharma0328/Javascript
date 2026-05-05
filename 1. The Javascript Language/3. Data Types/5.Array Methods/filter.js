let user = [
    {id:1, namee : "Dheeraj"},
    {id:2, namee : "Dheeraj Sharma"},
    {id:3, namee : "Dheeraj Kuahsik"}
]

let result = user.filter(item => item.id < 3);

// console.log(result.length);


let arr = [1,2,3,4,5,6,7,8,9,10];

let a = arr.filter((element , index , array )=>{

    if(element % 2 == 0){
        return('Even' , 'Element: ' , element , 'Index: ' , index);
        
    }

})

console.log('Value of arr1 in the form of a: ', a);



