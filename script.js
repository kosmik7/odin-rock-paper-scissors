let computerScore = 0
let humanChoice = 0

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function getHumanChoice() {
    let userInput = prompt('rock, paper or scissors?');
    userInput = userInput.toLowerCase().replace(/[^a-z]/g, "");

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        alert('Input invalid: You must type one of "rock", "paper" or "scissors"');
        return getHumanChoice();
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return `It's a tie! You both threw ${humanChoice}`;
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) { 
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
        return `You won! ${humanChoice} beats ${computerChoice}.`;
    }
}

console.log(playRound(getComputerChoice(), getHumanChoice()))