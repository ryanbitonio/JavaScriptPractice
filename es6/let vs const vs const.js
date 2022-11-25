// Using var declaration
// A variable declared inside a function can be be access as long as it is inside the function's scope.
// This may confuse the developer because it has no restriction

function greetings() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

greetings(); // 1 2 3 4 5

// Using ES6, let declaration
// let and const is block scoped, meaning they are only accessible inside a curly brackets{}

function greetingsNew() {
  for (let x = 0; x < 5; x++) {
    console.log(x);
  }

  console.log(x);
}

greetingsNew(); // ReferenceError: i is not defined

// Conclusion:
// var -> function
// let -> block
// const -> block
