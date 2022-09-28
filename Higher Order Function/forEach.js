// Without a Higher-Order Function

// const digits = [10,20,30,40,50];
// function Increase1(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// Increase1(digits);

// With a Higher-Order Function

const digits = [10, 20, 30, 40, 50];
digits.forEach(() => console.log(digits));
