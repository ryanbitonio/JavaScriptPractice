const persons = [
  { firstName: "Naruto", lastName: "Uzumaki", age: 10 },
  { firstName: "sasuke", lastName: "Uchiha", age: 15 },
  { firstName: "Shikamaru", lastName: "Nara", age: 17 },
  { firstName: "Sakura", lastName: "Haruno", age: 55 },
];

persons.forEach((value) => {
  let first = value.firstName;
  let last = value.lastName;
  let ages = value.age;
  console.log(`${first} ${last}, age ${ages}`);
});

let mapResult = persons.map((persons) => persons.lastName);
console.log(mapResult);

let findResult = persons.find(
  // (persons) => persons.firstName.slice(0, 1) === "S"
  (persons) =>
    persons.firstName.charAt(0) === "S" || persons.firstName.charAt(0) === "s"
);
console.log(findResult);

let filterResult = persons.filter(
  (persons) =>
    persons.firstName.charAt(0) === "S" || persons.firstName.charAt(0) === "s"
);
console.log(filterResult);

let findFilterMap = persons.filter((value) => value.age < 55);
let filterMapResult = findFilterMap.map((value) => value.age);
console.log(filterMapResult);

let minor = persons.filter((value) => value.age < 17);
console.log(minor);
let minorNames = minor.map((value) => `${value.firstName} ${value.lastName}`);
console.log(minorNames);
