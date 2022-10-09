const myArray = [1, 2, 3, 4, 5];
// TODO: Create constants one, two, and others using array destructuring;

const [one, two, ...others] = myArray;

console.log(one);
console.log(two);
console.log(others);

const fruit = {
  name: "banana",
  color: "yellow",
  price: 20.0,
  weight: 0.1,
};

const { color: c, weight, ...otherProps } = fruit;

console.log(c);
console.log(weight);
console.log(otherProps);
