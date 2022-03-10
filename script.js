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
    (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return `It's a draw, try again!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

// Five rounds

function game() {

  let playerPoint = 0;
  let computerPoint = 0;
  
  for (let i = 0; i < 5; i++) {
    let roundResult = playRound();
    if (roundResult.includes('You win')) {
      playerPoint += 1;
      console.log(roundResult);
      console.log(`Your Score: ${playerPoint}`, `Enemy Score: ${computerPoint}`);
    } else if (roundResult.includes('You lose')) {
      computerPoint += 1;
      console.log(roundResult);
      console.log(`Your Score: ${playerPoint}`, `Enemy Score: ${computerPoint}`);
    } else {
      console.log(roundResult);
      console.log(`Your Score: ${playerPoint}`, `Enemy Score: ${computerPoint}`);
    }
  }
  if (playerPoint > computerPoint) {
    return 'Winner!!!'
  } else if (playerPoint === computerPoint) {
    return 'Draw >:('
  } else {
    return 'You lose!!'
  }
}

console.log(game());