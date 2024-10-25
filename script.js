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
    
    const computerChoice = getComputerChoice()
    const resultRound = playRound(computerChoice, humanChoice)

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

    humanElement.src = `./images/ico-${humanChoice}.svg`
    computerElement.src = `./images/ico-${computerChoice}.svg`
    roundElement.textContent = `Round ${round}`
    resultElement.textContent = resultRound.message
    scoreElement.textContent = `${humanScore} - ${computerScore}`

    if (humanScore >= 5 || computerScore >= 5) {
        displayResult(computerScore, humanScore, resultElement)
        return
    }
}

function displayResult(computerScore, humanScore, displayElement) {
    if (humanScore > computerScore) {
        displayElement.textContent = `Game Over!\nYou won!`
    } else if (humanScore === computerScore) {
        displayElement.textContent = `Game Over!\nIt's a tie!`
    } else {
        displayElement.textContent = `Game Over!\nYou lost!`
    }
    stopGame()
}

function stopGame() {
    button.removeEventListener('click', playGame)
}

function resetGame() {
    computerScore = 0
    humanScore = 0
    round = 0

    humanElement.src = `./images/ico-pending.svg`
    computerElement.src = `./images/ico-pending.svg`
    roundElement.textContent = `Round 0`
    resultElement.textContent = `Choose`
    scoreElement.textContent = `0 - 0`

    button.addEventListener('click', playGame)
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

resetButton.addEventListener('click', resetGame)
resetGame()