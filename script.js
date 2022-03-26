// Computer's randomized choice:

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

const playerScore = document.querySelector('.player-score'); // Big score on page
const computerScore = document.querySelector('.computer-score'); // Big score on page
const container = document.querySelector('.results-container');
const veredict = document.querySelector('.veredict-container');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let playerInput = ''; // To hold the choice of the player
let roundCount = 0; // To keep track how many rounds so far
let playerPoint = 0; // Player's score
let computerPoint = 0; // Computer's score

// Single Round Logic

function playRound(playerSelection, computerSelection) {
  playerSelection = playerInput;
  computerSelection = computerPlay();

  if (
    (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
  ) {
    const content = document.createElement('div');

    content.classList.add('content_win');
    content.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;

    container.appendChild(content);
    return 1;

  } else if (playerSelection === computerSelection) {
    const content = document.createElement('div');

    content.classList.add('content_draw');
    content.textContent = `Machines chose ${computerSelection}. It's a draw`;

    container.appendChild(content);

  } else {
    const content = document.createElement('div');

    content.classList.add('content_lose');
    content.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;

    container.appendChild(content);
    return 0;
  }
}

// Show end results on screen

function endResults() {
  if (roundCount == 5) {
    const content = document.createElement('div');
    const playAgain = document.createElement('button');

    content.classList.add('results');
    playAgain.classList.add('replay-btn');
    playAgain.textContent = 'Play Again';
    playAgain.addEventListener('click', window.location.reload.bind(window.location));

    if (playerPoint > computerPoint) {
      content.textContent = 'Humans prevail, for now...';
      veredict.appendChild(content);
      veredict.appendChild(playAgain);

    } else if (playerPoint === computerPoint) {
      content.textContent = 'Results were not satisfactory, play again';
      veredict.appendChild(content);
      veredict.appendChild(playAgain);

    } else {
      content.textContent = 'The world belongs to the machines!';
      veredict.appendChild(content);
      veredict.appendChild(playAgain);
    }
  }
}

// Five Rounds Logic

function game() { 
  if (roundCount <= 5) {
    let roundResult = playRound();
    if (roundResult === 1) {
      playerPoint += 1;
      playerScore.textContent = playerPoint;
      console.log(`Your Score: ${playerPoint}`, `Enemy Score: ${computerPoint}`);
    } else if (roundResult === 0) {
      computerPoint += 1;
      computerScore.textContent = computerPoint;
      console.log(`Your Score: ${playerPoint}`, `Enemy Score: ${computerPoint}`);
    } else {
      console.log(`Your Score: ${playerPoint}`, `Enemy Score: ${computerPoint}`);
    }
  }
  return endResults(); 
}

// Event Listeners

rockBtn.addEventListener('click', () => {
  playerInput = 'rock';
  roundCount += 1;
  game();
});
paperBtn.addEventListener('click', () => {
  playerInput = 'paper';
  roundCount += 1;
  game();
});
scissorsBtn.addEventListener('click', () => {
  playerInput = 'scissors';
  roundCount += 1;
  game();
});