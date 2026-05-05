// One of the oldest ways to cycle array items is the for loop over indexes:

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}


// But for arrays there is another form of loop, for..of:

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log( fruit );
}

