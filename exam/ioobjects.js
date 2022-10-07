// Import readline-sync
const readlineSync = require("readline-sync");
const objects = [];

// ES5
// Do three times
for (let i = 0; i < 3; i++) {
  const object = {};
  object.fruit = readlineSync.question("Enter a fruit: ");
  object.color = readlineSync.question("Enter a color: ");
  objects.push(object);
}

let input = readlineSync.question("Select a fruit to display: ");
for (let i = 0; i < objects.length; i++) {
  // Checks if the input is the fruit in the object
  if (input === objects[i].fruit) {
    console.log(`The color of ${objects[i].fruit} is ${objects[i].color}.`);
  }
}
