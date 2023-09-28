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

const invisibleCard = getRandomCard();
const userCard = getRandomCard();

const getMatchResult = () => {
  const cardComparation = [invisibleCard, userCard];

  if (invisibleCard.cardValues < userCard.cardValues) {
    cardComparation.push("Your card is greater");
  } else if (invisibleCard.cardValues > userCard.cardValues) {
    cardComparation.push("Your card is smaller");
  } else if (invisibleCard.cardValues === userCard.cardValues) {
    cardComparation.push("Equal");
  }

  return cardComparation;
};

const invisibleCardSuit = document.querySelectorAll(".invisible-card-suit");
const userCardSuit = document.querySelectorAll(".user-card-suit");
const userCardNumber = document.querySelector(".user-character");
const invisibleCardNumber = document.querySelector(".invisible-character");
const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");
const correctGuessText = document.querySelector(".correct-feedback-text");
const wrongGuessText = document.querySelector(".wrong-feedback-text");

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
    if (getMatchResult()[2] === "Your card is greater") {
      correctGuessText.classList.remove("hidden");
    } else if (
      getMatchResult()[2] === "Equal" ||
      getMatchResult()[2] != "Your card is greater"
    ) {
      wrongGuessText.classList.remove("hidden");
    }
  });

  smallerButton.addEventListener("click", () => {
    generateInvisibleCard();
    if (getMatchResult()[2] === "Your card is smaller") {
      correctGuessText.classList.remove("hidden");
    } else if (
      getMatchResult()[2] === "Equal" ||
      getMatchResult()[2] != "Your card is smaller"
    ) {
      wrongGuessText.classList.remove("hidden");
    }
  });
};

detectClickOfComparativeButtons();
