// Example 1
const msjResound = ["Resound2021", "Resound2022", "Resound2023"];
const [first, second, third] = msjResound;

console.log(first);
console.log(second);
console.log(third);

// Example 2
// This is useful when passing arrays to a function
const color = ["blue", "red", "yellow"];
function paint([first, second]) {
  console.log(first);
  console.log(second);
}

paint(color);

// Example 3
// Using ...rest

const animals = ["horse", "cow", "butterfly", "dog", "cat"];

const [a, b, ...rest] = animals;
console.log(a, b, rest);
