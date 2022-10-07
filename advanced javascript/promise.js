const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Wait for 2 seconds");
  }, 2000);
});

myPromise
  .then((value) => {
    console.log("Then: ", value);
  })
  .catch((value) => {
    console.log("Catch: ", value);
  });

console.log("Hello!");
