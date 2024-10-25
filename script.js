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

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return {
            result: 'tie',
            message: `It's a tie! You both threw ${humanChoice}.`,
        }
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        return {
            result: 'lost',
            message: `You lose! ${computerChoice} beats ${humanChoice}.`,
        }
    } else {
        return {
            result: 'won',
            message: `You won! ${humanChoice} beats ${computerChoice}.`,
        }
    }
}

function playGame(e) {
    const humanChoice = e.target.closest('div').ariaLabel
    if (!humanChoice) return
    

    while (round < 5) {
        const resultRound = playRound(getComputerChoice(), getHumanChoice())
        switch (resultRound.result) {
            case 'won':
                humanScore++;
                round++;
                break;
            case 'lost':
                computerScore++;
                round++;
                break;
            default:
                round++
        }

        let roundMessage = `Round ${round}:\n${resultRound.message} ${humanScore} - ${computerScore}`
        console.log(roundMessage)
        alert(roundMessage)
    }

    displayResult(computerScore, humanScore)
}

function displayResult(computerScore, humanScore) {
    let gameMessage
    if (humanScore > computerScore) {
        gameMessage = `Game Over!\nYou won! ${humanScore} - ${computerScore}`
    } else if (humanScore === computerScore) {
        gameMessage = `Game Over!\nIt's a tie! ${humanScore} - ${computerScore}`
    } else {
        gameMessage = `Game Over!\nYou lost! ${humanScore} - ${computerScore}`
    }

    console.log(gameMessage)
    alert(gameMessage)
}

const humanElement = document.getElementById('human-ico')
const computerElement = document.getElementById('computer-ico')
const roundElement = document.getElementById('result-round')
const resultElement = document.getElementById('result-game')
const scoreElement = document.getElementById('result-score')
const button = document.getElementById('choices')
const resetButton = document.getElementById('reset-button')

let computerScore = 0
let humanScore = 0
let round = 0
