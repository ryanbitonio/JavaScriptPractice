const readlineSync = require("readline-sync");
const num1 = parseInt(readlineSync.question("Number 1: "));
const num2 = parseInt(readlineSync.question("Number 2: "));

getSum();
getDifference();
getProduct();
getQuotient();
getRemainder();
getExponentiation();

function getSum() {
  console.log(num1 + num2);
}

function getDifference() {
  console.log(num1 - num2);
}

function getProduct() {
  console.log(num1 * num2);
}

function getQuotient() {
  console.log(num1 / num2);
}

function getRemainder() {
  console.log(num1 % num2);
}

function getExponentiation() {
  console.log(num1 ** num2);
}
