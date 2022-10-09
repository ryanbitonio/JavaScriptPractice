const axios = require("axios");

axios.get("https://deckofcardsapi.com/api/deck/new/").then((response) => {
  const { deck_id } = response.data;
  console.log("Getting a new deck...");
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
    .then((response) => {
      console.log("Shuffling the deck...");
      axios
        .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=3`)
        .then((response) => {
          console.log(`CARDS: \n`);
          const { cards } = response.data;
          cards.forEach((key) => {
            console.log(`${key["value"]} of ${key["suit"]}`);
          });
        });
    });
});
