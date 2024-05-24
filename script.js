function getComputerChoice() {
    let randVal = Math.random();

    let choice = "";

    if (randVal >= 0.66) {
        choice = "paper";
    } else if (randVal >= 0.33) {
        choice = "rock";
    } else {
        choice = "scissors";
    }

    return choice;
}

function playRound(humanChoice) {
    // Reset our game if somebody has won already
    if (hasSomebodyWon) {
        reset();
    }

    // Setup our variables
    let winner = "";
    let computerChoice = getComputerChoice();

    // Get the result
    if (humanChoice === computerChoice) {
        winner = "Round winner: Tie!";
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")) {
        winner = "Round winner: Player!";
        humanScore++;
    } else if ((humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock")) {
        winner = "Round winner: Computer!";
        computerScore++;
    }

    // Check if the game has been won by somebody
    if (humanScore >= roundWinsToWinGame) {
        winner = playerWinText;
        hasSomebodyWon = true;
    } else if (computerScore >= roundWinsToWinGame) {
        winner = computerWinText;
        hasSomebodyWon = true;
    }

    // Display our new info
    roundWinnerText.textContent = winner;

    humanScoreText.textContent = "Player: " + humanScore;
    computerScoreText.textContent = "Computer: " + computerScore;
}

function reset() {
    roundWinnerText.textContent = "Round winner: none";

    humanScoreText.textContent = "Player: 0";
    computerScoreText.textContent = "Computer: 0";

    humanScore = 0;
    computerScore = 0;

    hasSomebodyWon = false;
}

// JS Variables
let humanScore = 0;
let computerScore = 0;

let hasSomebodyWon = false;

const playerWinText = "Game winner! You won! Well done!";
const computerWinText = "Game winner! You lost! Good try!";

const roundWinsToWinGame = 5;

// DOM elements
const rockButton = document.querySelector("#btnRock");
const paperButton = document.querySelector("#btnPaper");
const scissorsButton = document.querySelector("#btnScissors");

const roundWinnerText = document.querySelector("#roundWinner");

const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");

// DOM element manipulation
rockButton.addEventListener("click", function (e) {
    playRound("rock");
});

paperButton.addEventListener("click", function (e) {
    playRound("paper");
});

scissorsButton.addEventListener("click", function (e) {
    playRound("scissors");
});