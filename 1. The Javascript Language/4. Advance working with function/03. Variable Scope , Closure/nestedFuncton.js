function outer(firstName){

    inner("Sharma");
    console.log(lastname1);

    function inner(lastname){
        // let lastname1 = lastname;
        console.log("Full Name: " , firstName , lastname);
    }

}


outer("Dheeraj");

// We can also return the function

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1