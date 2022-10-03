// Traditional function expression
const old = function () {
  console.log("This is the old way of writing function expressions.");
};

old();
// Output: This is the old way of writing function expressions.

const current = () => {
  console.log("New way of writing function expressions.");
};

current();
// Output: New way of writing function expressions.

const myTradeGreeter = function (name1) {
  console.log(`Hello ${name1}`);
};
myTradeGreeter("Ryan");
// Output: Hello Ryan

const myArrowGreeter = (name2) => console.log(`Hi ${name2}`);
myArrowGreeter("Nicole");
// Output: Hi Nicole
