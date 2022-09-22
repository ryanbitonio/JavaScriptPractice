const readlineSync = require("readline-sync");

const ioArray = [];

for (let x = 1; x <= 4; x++) {
  ioArray.push(readlineSync.question(`Enter a shape ${x}: `));
}

console.log(ioArray[3]);
