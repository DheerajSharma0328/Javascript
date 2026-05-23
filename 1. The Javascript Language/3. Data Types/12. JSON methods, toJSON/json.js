let obj = {
    name : 'Dheeraj',
    surname : "Sharma",
    age : 26,
    address : "Gurugram",

}

// Converting Object into JSON

let jsonformat = JSON.stringify(obj);
console.log("Converting Object in JSON format: ", jsonformat);

// Converting JSON into Object

let backtoobj = JSON.parse(jsonformat);
console.log("Converting JSON into Object: ", backtoobj);

