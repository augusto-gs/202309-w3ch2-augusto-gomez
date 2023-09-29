const invisibleCardSuit = document.querySelectorAll(".invisible-card-suit");
const userCardSuit = document.querySelectorAll(".user-card-suit");
const userCardNumber = document.querySelector(".user-character");
const invisibleCardNumber = document.querySelector(".invisible-character");
const invisibleCardElement = document.querySelector(".invisible-card");
const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");
const correctGuessText = document.querySelector(".correct-feedback-text");
const wrongGuessText = document.querySelector(".wrong-feedback-text");
const startButton = document.querySelector(".start-button");
const mainElement = document.querySelector(".main-element");
const buttonContainer = document.querySelector(".button-container");
const feedbackContainer = document.querySelector(".feedback-container");
const equalButton = document.querySelector(".equal-button");
const equalFeedbackText = document.querySelector(".equal-feedback-text");

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
  const cardComparation = [getRandomCard(), getRandomCard()];

  if (getRandomCard().cardValues < getRandomCard().cardValues) {
    cardComparation.push("User card is smaller");
  } else if (getRandomCard().cardValues > getRandomCard().cardValues) {
    cardComparation.push("User card is bigger");
  } else if (getRandomCard().cardValues === getRandomCard().cardValues) {
    cardComparation.push("Equal");
  }

  return cardComparation;
};

const generateInvisibleCard = () => {
  invisibleCardSuit.forEach((htmlElement) => {
    htmlElement.textContent = getRandomCard().suit;
  });

  invisibleCardNumber.textContent = getRandomCard().character;
};

const generateUserCard = () => {
  userCardSuit.forEach((htmlElement) => {
    htmlElement.textContent = getRandomCard().suit;
  });

  userCardNumber.textContent = getRandomCard().character;
};

const detectClickOfComparativeButtons = () => {
  greaterButton.addEventListener("click", () => {
    generateInvisibleCard();
    invisibleCardElement.classList.remove("invisible-card");

    if (getMatchResult()[2] === "Equal") {
      wrongGuessText.textContent = "You got it wrong!😔 Maybe next time!😊";
    } else if (getMatchResult()[2] === "User card is bigger") {
      wrongGuessText.textContent = "You got it wrong!😔 Maybe next time!😊";
    } else if (getMatchResult()[2] === "User card is smaller") {
      correctGuessText.textContent = "You guessed it!";
    }

    greaterButton.disabled = true;
    smallerButton.disabled = true;
    equalButton.disabled = true;
  });

  equalButton.addEventListener("click", () => {
    generateInvisibleCard();
    invisibleCardElement.classList.remove("invisible-card");

    if (getMatchResult()[2] === "Equal") {
      equalFeedbackText.textContent = "Wow. You were right on the money!😮";
    } else if (getMatchResult()[2] != "Equal") {
      wrongGuessText.textContent = "You got it wrong!😔 Maybe next time!😊";
    }
    greaterButton.disabled = true;
    smallerButton.disabled = true;
    equalButton.disabled = true;
  });

  smallerButton.addEventListener("click", () => {
    generateInvisibleCard();
    invisibleCardElement.classList.remove("invisible-card");

    if (getMatchResult()[2] === "User card is bigger") {
      correctGuessText.textContent = "You guessed it!";
    } else if (getMatchResult()[2] === "User card is smaller") {
      wrongGuessText.textContent = "You got it wrong!😔 Maybe next time!😊";
    } else if (getMatchResult()[2] === "Equal") {
      equalFeedbackText.textContent = "Wow. You were right on the money!😮";
    }

    greaterButton.disabled = true;
    smallerButton.disabled = true;
    equalButton.disabled = true;
  });
};

startButton.addEventListener("click", () => {
  startButton.classList.toggle("hidden");
  mainElement.classList.toggle("hidden");
  generateUserCard();
  detectClickOfComparativeButtons();
});
