// Instead of writing a code like this
// Split each class in a new file
// person.js, teacher.js

// By default a class module is private, to set this to public,
// you need to add "export" e.g export class Teacher extends Person{}

// To import class, import { Person } from './directory'
// Instance and logic should be inside the index.js

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("Walk");
  }
}

class Teacher extends Person {
  // What if we want to initialize props or custom constructor again

  constructor(name, age) {
    // This will result to ReferenceError: Must call super constructor..
    // When declaring a custom constructor in a child class,
    // We need to call the constuctor of its parent class
    // this.name = name;

    // Call the super keyword to initialize the constructor from its parent class
    super(name);
    this.age = age;
  }
  teach() {
    console.log("Teach");
  }
}

// Creating a teacher object/instance
// To access the properties and methods of a class
const teacher = new Teacher("Ryan");
console.log(teacher.name); // Result: Ryan
