const myArray = [2, 7, 8, 5, 6];

// output: [2, 7, 8, 5 ,6]

const pushed = [...myArray, 4]; // TODO: Push 4

// output: [2, 7, 8, 5, 6, 4]

const popped = myArray.slice(0, myArray.length - 1); // TODO: Pop the last item
// output: [2, 7, 8, 5]

const unshifted = [1, ...myArray]; // TODO: Unshift 1
// [1, 2, 7, 8, 5]

const shifted = myArray.slice(1); // TODO: Remove the first item
// output: [7, 8, 5 ,6]

const removed3rdElement = myArray.filter((value) => {
  return value !== 8;
}); // TODO: Remove the third element

const replaced5 = myArray.map((value, i) => {
  return i === 3 ? 10 : value;
}); // TODO: Replace 5 with 10

const insertedAtIndex2 =
  // TODO: Insert 12 at index 2;
  [...myArray.slice(0, 2), 12, ...myArray.slice(2)];

const sorted = [...myArray].sort();

console.log(myArray); // TODO: Sort the array
console.log(pushed);
console.log(popped);
console.log(unshifted);
console.log(shifted);
console.log(removed3rdElement);
console.log(replaced5);
console.log(insertedAtIndex2);
console.log(sorted);
