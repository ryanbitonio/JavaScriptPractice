// Example 1
const details = {
  name: "Ryan",
  age: 24,
  address: "Bulacan",
};

const { age, name } = details;
console.log(age, name);

// Example 2
// This is useful when passing arrays to a function
const car = {
  color: "red",
  brand: "Toyota",
};

function carProperties({ color, brand }) {
  console.log(color, brand);
}

carProperties(car);

// Example 3
// ...rest destructuring

const ball = {
  color: "orange",
  shape: "circle",
  size: "small",
};

const { color, ...rest } = ball;
console.log(color, rest);
