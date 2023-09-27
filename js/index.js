const getDeckOfCards = () => {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const cardSuits = ["♥️", "♣️", "♦️", "♠️"];

  const deckOfCards = [];

  let value = 0;

  values.forEach((character) => {
    value++;
    cardSuits.forEach((suits) => {
      deckOfCards.push({ value: value, character: character, suit: suits });
    });
  });

  return deckOfCards;
};
