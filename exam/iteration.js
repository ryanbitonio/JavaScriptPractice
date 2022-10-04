const persons = [
  { firstName: "Naruto", lastName: "Uzumaki", age: 10 },
  { firstName: "Sasuke", lastName: "Uchiha", age: 15 },
  { firstName: "Shikamaru", lastName: "Nara", age: 17 },
  { firstName: "Sakura", lastName: "Haruno", age: 55 },
];

persons.forEach((value) => {
  let first = value.firstName;
  let last = value.lastName;
  let ages = value.age;
  console.log(`${first} ${last}, age ${ages}`);
});
