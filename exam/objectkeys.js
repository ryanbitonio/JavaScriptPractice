const person = {
  firstName: "Juan",
  lastName: "dela Cruz",
  age: 42,
  address: "Las Vegas",
};

let persons = Object.keys(person);
console.log(persons);

persons.forEach((value) => console.log(value + ": " + person[value]));
