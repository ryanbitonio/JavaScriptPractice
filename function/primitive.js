let num1 = 5;

function primitiveFunction(value) {
  value += 5;
  console.log(value);
}
primitiveFunction(num1);

console.log(num1);

// It does not affect the value of the reference variable
// Primitive parameters are passed to function by value
