// Converting String data into JSON data

let jsonData = '{"fact": "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.","length": 100}';

let pData = JSON.parse(jsonData);
console.log(pData.fact);
console.log(pData.length);


// Converting String Object into String data

let student  = {
    name : "Dheeraj",
    age : 25
}

let pStudent = JSON.stringify(student)
console.log(pStudent)

