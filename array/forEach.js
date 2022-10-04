// Without a Higher-Order Function

// const digits = [10,20,30,40,50];
// function Increase1(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// Increase1(digits);

// With a Higher-Order Function
// Example 1

// const digits = [10, 20, 30, 40, 50];
// digits.forEach(() => console.log(digits));

// With a Higher-Order Function
// Example 1
// const person = {
//   name: "Donnie",
//   age: "75",
//   address: "Tondo, Manila",
// };
//
// let details = Object.keys(person);
// console.log(details);
//
// details.forEach((key) => {
//   console.log(person[key]);
// });

// Example 2

const customer = {
  name: "Sir Jo",
  age: "35",
  item: "shirt",
  paymentMethod: "cash",
};

let details = Object.keys(customer);
console.log(details);

details.forEach((value) => {
  console.log(customer[value]);
});
