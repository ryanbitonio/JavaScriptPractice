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
