function waitForSeconds(seconds) {
  // TODO: Implement this
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seconds < 0) {
        reject(`Invalid Parameter ${seconds} seconds`);
      } else if (seconds <= 3) {
        resolve(`Resolved after ${seconds} seconds`);
      } else {
        reject(`Rejected after ${seconds} seconds`);
      }
    }, seconds);
  });
}
// Do not change this code
const seconds = [-1, 3, 4, 2];
seconds.forEach((s) => {
  waitForSeconds(s)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
