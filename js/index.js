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

  values.forEach((character, position) => {
    cardSuits.forEach((suits) => {
      deckOfCards.push({
        cardValues: position,
        character: character,
        suit: suits,
      });
    });
  });

  return deckOfCards;
};

const getRandomCard = () => {
  const randomNumber = Math.floor(Math.random() * getDeckOfCards().length);
  return getDeckOfCards()[randomNumber];
};