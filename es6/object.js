// When adding a function inside an object

const person = {
  name: "Mosh",
  age: "14",

  // Traditional way
  address: function () {},

  // ES6 - removing the colon and 'function'
  nationality() {},
};

// Two ways of accessing an object properties
// 1. - It is use whenever you already know the input value
person.address();

// 2. - It is use whenever you're not yet sure for the input value
person["name"] = "Ryan";
