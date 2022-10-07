// npm install axios
// import const axios = require('axios');
// reqres.in/api/users

// GET request to https://reqres.in/api/users
const axios = require("axios");

axios
  .get("https://reqres.in/api/users")
  .then((response) => {
    const document = response.data;
    const emailFirstUser = document.data[0]["email"];
    console.log(emailFirstUser);
  })
  .catch((err) => {
    console.log(err);
  });

// Expected Output: george.bluth@reqres.in

// POST request to https://reqres.in/api/users

axios
  .post("https://reqres.in/api/users", {
    name: "Ryan",
    address: "Philippines",
  })
  .then((response) => {
    const document = response.data;
    console.log(document.data);
  })
  .catch((err) => {
    console.log(err);
  });

// Sample output:

// PATCH request to https://reqres.in/api/users

axios
  .patch("https://reqres.in/api/users/396", {
    name: "Ayang",
    address: "Philippines",
  })
  .then((response) => {
    const document = response.data;
    console.log(document.data);
  })
  .catch((err) => {
    console.log(err);
  });

// Sample output:

// DEL request to https:/ / reqres.in / api / users;

axios
  .delete("https://reqres.in/api/users", {
    name: "Ryan",
    address: "Philippines",
  })
  .then((response) => {
    console.log(response.status);
  })
  .catch((err) => {
    console.log(err);
  });

// Sample output: 204
