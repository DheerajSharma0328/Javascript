if (true) {
  var test = true; // use "var" instead of "let"
}

console.log(test);

var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

console.log(user); // John