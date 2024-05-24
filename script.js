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

function getHumanChoice() {
    let playerChoice = prompt("Please select rock, paper, or scissors");

    playerChoice = playerChoice.toLowerCase();

    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log("You have entered an invalid choice. Please try again.");
        return getHumanChoice();
    }

    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    let winner = "";

    if (humanChoice === computerChoice) {
        winner = "tie";
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")) {
        winner = "human";
    } else if ((humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock")) {
        winner = "computer";
    }

    return winner;
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log("Player selected: " + humanSelection);
    console.log("Computer selected: " + computerSelection);

    return playRound(humanSelection, computerSelection);
}

function getWinner(humanScore, computerScore) {
    let winnerText = "";

    if (humanScore > computerScore) {
        winnerText = "You won! Well done!";
    } else {
        winnerText = "You lost! Good try!";
    }

    console.log("Player got: " + humanScore);
    console.log("Computer got: " + computerScore);

    return winnerText;
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    let result = playGame();

    if (result === "human") {
        humanScore++;
        console.log("Player won the round!");
    } else if (result === "computer") {
        computerScore++;
        console.log("Computer won the round!");
    } else if (result === "tie") {
        console.log("It was a tie!");
    } else {
        console.log("Unknown winner");
    }
}

console.log(getWinner(humanScore, computerScore));