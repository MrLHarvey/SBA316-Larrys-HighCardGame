document.addEventListener("DOMContentLoaded", function () {
  // Cache elements using getElementById and querySelector
  const dealBtn = document.getElementById("deal-btn");
  const playerCardElement = document.getElementById("player-card");
  const computerCardElement = document.getElementById("computer-card");
  const resultTextElement = document.getElementById("result-text");
  const gameForm = document.getElementById("game-form");

  // Card suits and values
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
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
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  // Function to get a random card
  function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    return { suit, value };
  }

  // Function to display a card
  function displayCard(card, element) {
    element.textContent = `${card.value} of ${card.suit}`;
  }

  // Function to determine the winner
  function determineWinner(playerCard, computerCard) {
    const playerValue = values.indexOf(playerCard.value);
    const computerValue = values.indexOf(computerCard.value);

    if (playerValue > computerValue) {
      return "You win!";
    } else if (computerValue > playerValue) {
      return "Larry wins!";
    } else {
      return "It's a tie!";
    }
  }

  // Event listener for the Deal Card button
  dealBtn.addEventListener("click", function () {
    const playerCard = getRandomCard();
    const computerCard = getRandomCard();

    displayCard(playerCard, playerCardElement);
    displayCard(computerCard, computerCardElement);

    const result = determineWinner(playerCard, computerCard);
    resultTextElement.textContent = result;
  });

  // DOM event-based validation
  gameForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    if (!playerCardElement.textContent || !computerCardElement.textContent) {
      console.error("Cards not dealt properly!");
      return;
    }

    // Proceed with game logic (if needed)
  });

  // Additional functionality to meet other requirements
  // Modify style and classList
  dealBtn.addEventListener("mouseover", function () {
    dealBtn.style.backgroundColor = "#f77153";
    dealBtn.classList.add("hovered");
  });

  dealBtn.addEventListener("mouseout", function () {
    dealBtn.style.backgroundColor = "#a81904";
    dealBtn.classList.remove("hovered");
  });

  // BOM properties/methods
  window.addEventListener("resize", function () {
    console.log("Window resized!");
  });

  // Modify attribute in response to user interaction
  resultTextElement.addEventListener("click", function () {
    resultTextElement.setAttribute("title", "Game result");
  });
});
