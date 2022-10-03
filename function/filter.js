// Without a Higher-Order Function
// const ages = [1, 5, 7, 12, 15, 21, 22, 28, 33, 34];
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// With a Higher-Order Function, Filter

const ages = [1, 5, 7, 12, 15, 21, 22, 28, 33, 34];
const employee = ages.filter((age) => age <= 18);
console.log(employee);
