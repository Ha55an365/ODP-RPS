console.log("Hello World!");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let scorePlayer = 0;
let scoreComputer = 0;

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${scorePlayer} - Computer: ${scoreComputer}`;
}

function announceWinner() {
    const resultDiv = document.getElementById('result');
    if (scorePlayer === 5) {
        resultDiv.textContent = "Player is the winner!";
    } else if (scoreComputer === 5) {
        resultDiv.textContent = "Computer is the winner!";
    }
}

document.getElementById('rock').addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    if (checkWinner(playerSelection, computerSelection) == "Player") {
        scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
        scoreComputer++;
    }
    updateScore();
    if (scorePlayer === 5 || scoreComputer === 5) {
        announceWinner();
    }
});

document.getElementById('paper').addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    if (checkWinner(playerSelection, computerSelection) == "Player") {
        scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
        scoreComputer++;
    }
    updateScore();
    if (scorePlayer === 5 || scoreComputer === 5) {
        announceWinner();
    }
});

document.getElementById('scissors').addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    if (checkWinner(playerSelection, computerSelection) == "Player") {
        scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
        scoreComputer++;
    }
    updateScore();
    if (scorePlayer === 5 || scoreComputer === 5) {
        announceWinner();
    }
});

updateScore();

