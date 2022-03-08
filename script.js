// Computer choice:
function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

// Player choice:

function playerChoice() {
  let playerInput = prompt("Type your selection: Rock, paper or scissors");

  if (
    playerInput.toLowerCase() !== "rock" &&
    playerInput.toLowerCase() !== "paper" &&
    playerInput.toLowerCase() !== "scissors"
  ) {
    alert("Please, select Rock, Paper or Scissors");
    return playerChoice();
  }

  return playerInput;
}

// Round

function playRound(playerSelection, computerSelection) {
  playerSelection = playerChoice();
  computerSelection = computerPlay();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return `It's a draw, try again!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

console.log(playRound());
