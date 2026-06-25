function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

// getFunc()(); // error: value is not defined

output = getFunc();

console.log(output);