// Array

const animals1 = ["dog", "cat", "giraffe", "lion", "eel"];

function zoo1(array) {
  array[0] = "eagle";
  console.log(array);
}

zoo1(animals1);
console.log(animals1);

// Object

let animals2 = {
  name: "crocodile",
  age: 18,
  size: "small",
};

function zoo2(object2) {
  object2.name = "monkey";
  object2.color = "brown";
  console.log(object2);
}

zoo2(animals2);
console.log(animals2);

// It affects the value of the reference variable
// Non-primitive parameters are passed to function by value

const myFunction = (value, array, callback) => ({
  value: value,
  array: array,
  callback: callback,
});
