const animal = {
  type: "Dog",
  color: "brown",
};
const changedType = { ...animal, type: "Cat" }; // TODO: Change type to 'Cat'
const addedLegCount = { ...animal, legCount: 4 }; // TODO: Add property legCount: 4
const { type, ...removedColor } = animal; // TODO: remove color, create removedColor object containing other properties
console.log(animal);
console.log(changedType);
console.log(addedLegCount);
console.log(removedColor);
