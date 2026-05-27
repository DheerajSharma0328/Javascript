function outer(firstName){

    inner("Sharma");
    // console.log(lastname);

    function inner(lastname){
        console.log("Full Name: " , firstName , lastname);
    }

}


outer("Dheeraj");