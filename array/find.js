const ages = [1, 5, 7, 12, 15, 21, 22, 28, 33, 34];
const employee = ages.find((age) => age <= 18);
console.log(employee);

// Expected output: 1
// Returns the first element that satisfies the condition
// If no element matches the specified condition, find returns undefined
