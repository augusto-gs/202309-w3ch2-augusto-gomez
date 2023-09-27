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

const getMatchResult = () => {
  const invisibleCard = getRandomCard();
  const userCard = getRandomCard();
  const cardComparation = [invisibleCard, userCard];

  if (invisibleCard.cardValues < userCard.cardValues) {
    cardComparation.push("Greater");
  } else if (invisibleCard.cardValues > userCard.cardValues) {
    cardComparation.push("Smaller");
  }

  return cardComparation;
};

const invisibleCard = getRandomCard();
const userCard = getRandomCard();

const invisibleCardSuit = document.querySelectorAll(".invisible-card-suit");
const userCardSuit = document.querySelectorAll(".user-card-suit");
const userCardNumber = document.querySelector(".user-character");
const invisibleCardNumber = document.querySelector(".invisible-character");
const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");

const generateInvisibleCard = () => {
  invisibleCardSuit.forEach((htmlElement) => {
    htmlElement.textContent = invisibleCard.suit;
  });

  invisibleCardNumber.textContent = invisibleCard.character;
};

const generateUserCard = () => {
  userCardSuit.forEach((htmlElement) => {
    htmlElement.textContent = userCard.suit;
  });

  userCardNumber.textContent = userCard.character;
};
generateUserCard();
invisibleCardNumber.textContent = "?";

const detectClickOfComparativeButtons = () => {
  greaterButton.addEventListener("click", () => {
    generateInvisibleCard();
  });

  smallerButton.addEventListener("click", () => {
    generateInvisibleCard();
  });
};

detectClickOfComparativeButtons();
