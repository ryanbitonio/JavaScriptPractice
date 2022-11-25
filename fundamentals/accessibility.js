// Example 1: Array
// To access an array element,
// Use the bracket notation array[x]
const person = ["Ryan", "Kevin", "Nicole"];

//
console.log(person[0]);

// Example 2:
// To access an array element in nested arrays
// Use the double bracket notation
// array[indexArray][key]

const age = [
  {
    kids: 12,
    youth: 18,
    adult: 25,
    senior: 60,
  },
];

console.log(age[0]["youth"]);

// Example 3: Object
// To access a property in object
// You can use the object.key or the bracket notation object["key"]
const color = { primary: "White", secondary: "Blue" };

// using dot notation
console.log(color.primary);

// using bracket notation
console.log(color["primary"]);
