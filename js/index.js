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

startButton.addEventListener("click", () => {
  startButton.classList.toggle("hidden");
  mainElement.classList.toggle("hidden");
});

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

const detectClickOfComparativeButtons = () => {
  greaterButton.addEventListener("click", () => {
    generateInvisibleCard();
    invisibleCardElement.classList.remove("invisible-card");

    if (getMatchResult()[2] === "Your card is greater") {
      correctGuessText.textContent = "You guessed it!";
    } else if (
      getMatchResult()[2] === "Equal" ||
      getMatchResult()[2] != "Your card is greater"
    ) {
      wrongGuessText.textContent = "You got it wrong!😔 Maybe next time!😊";
    }
    greaterButton.disabled = true;
    smallerButton.disabled = true;
  });

  smallerButton.addEventListener("click", () => {
    generateInvisibleCard();
    invisibleCardElement.classList.remove("invisible-card");

    if (getMatchResult()[2] === "Your card is smaller") {
      correctGuessText.textContent = "You guessed it!";
    } else if (
      getMatchResult()[2] === "Equal" ||
      getMatchResult()[2] != "Your card is smaller"
    ) {
      wrongGuessText.textContent = "You got it wrong!😔 Maybe next time!😊";
    }
    greaterButton.disabled = true;
    smallerButton.disabled = true;
  });
};

detectClickOfComparativeButtons();
//  const positiveFeedbackMessage = document.createElement("h2");
//  positiveFeedbackMessage.textContent = "You guessed it";
//  feedbackContainer.appendChild(positiveFeedbackMessage);
