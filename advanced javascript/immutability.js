// Example 1
// Array

const color = ["red", "blue", "green"];
const colorCopy = [...color];

color.push("yellow");
console.log(color);
console.log(colorCopy);
console.log(color === colorCopy);

// color[] != colorCopy

// Immutable Array Updates
// Example 1 - push
// Push a new array element and storing it to pushedArray
const colorPush = ["red", "blue"];
const pushedArray = [...colorPush, "yellow"];
console.log(pushedArray);

// Example 2 - pop
// Remove the last element of the array
const colorPop = ["yellow", "green", "pink", "grey"];
const popArray = colorPop.slice(0, colorPop.length - 1);
console.log(popArray);

// Example 3 - unshift
// Push an element at the beginning of the array
const colorUnshift = ["brown", "violet"];
const unshiftArray = ["blue", ...colorUnshift];
console.log(unshiftArray);

// Example 4 - shift
// Remove the first element of the array
const colorShift = ["red", "pink", "blue violet"];
const ShiftArray = colorShift.slice(1);
console.log(ShiftArray);

// Example 5 - filter
// Removing an item
// filter returns array always
const numberFilter = ["One", "Two", "Three"];
const FilterArray = numberFilter.filter((value, index) => index === 1);

console.log(FilterArray);
// Output: ['Two']

// Example 6 - map
// Replacing an array element
// map returns array always
const numberMap = [1, 2, 3, 4, 5];
const doubled = numberMap.map((value) => value * 2);
console.log(doubled);
// Output: [ 2, 4, 6, 8, 10 ]

// Example 7 - inserting an array
const numberInsert = [5, 10, 15];
const insertArray = [
  ...numberInsert.slice(0, 1),
  100,
  ...numberInsert.slice(1),
];
console.log(insertArray);

// Example 8 - sort
const numberSort = [1, 6, 3, 4, 5];
console.log(numberSort);
const SortArray = [...numberSort.sort()];
console.log(SortArray);

// Example 9 - Changing Property Value
const person = {
  firstName: "Ryan",
  lastName: "Bitonio",
};

const newPerson = { ...person, lastName: "Update" };
console.log(newPerson);

// Example 10 - Adding Property Value
const anotherPerson = {
  anotherFirstName: "Nicole",
  anotherLastName: "Bitonio",
};

const newAnotherPerson = { ...anotherPerson, anotherMiddleName: "Gonzaga" };
console.log(newAnotherPerson);

// Example 11 - Removing a Property Value
const removePerson = {
  name: "Matthew",
  age: 25,
  address: "Cavite",
};

const { name, age, ...rest } = removePerson;
console.log(rest);
