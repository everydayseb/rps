let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let rpsString = "";

    switch (choice) {
        case 0:
            rpsString = "rock";
            break;
        case 1:
            rpsString = "paper";
            break;
        case 2:
            rpsString = "scissors";
            break;
        default:
            console.log("Computer error choosing RPS.");
    }

    return rpsString;
}

const buttons = document.querySelectorAll("button");
const resultsContainer = document.querySelector("#results");
const scoreContainer = document.querySelector("#score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        if (humanScore == 5) {
            resultsContainer.textContent = "Human player wins!";
            humanScore = 0;
            computerScore = 0;
        }
        if (computerScore == 5) {
            resultsContainer.textContent = "Computer player wins!";
            humanScore = 0;
            computerScore = 0;
        }
    });
});


function playRound(humanChoice, computerChoice) {
    let human = humanChoice;
    let computer = computerChoice;

    if (human == computer) {
        resultsContainer.textContent = `Draw! ${human} and ${computer}`;
    } else if (human == 'rock' && computer == 'paper') {
        resultsContainer.textContent = `You lose! ${computer} beats ${human}`;
        computerScore++;
        updateScore();
    } else if (human == 'rock' && computer == 'scissors') {
        resultsContainer.textContent = `You win! ${human} beats ${computer}`;
        humanScore++;
        updateScore();
    } else if (human == 'paper' && computer == 'scissors') {
        resultsContainer.textContent = `You lose! ${computer} beats ${human}`;
        computerScore++;
        updateScore();
    } else if (human == 'paper' && computer == 'rock') {
        resultsContainer.textContent = `You win! ${human} beats ${computer}`;
        humanScore++;
        updateScore();
    } else if (human == 'scissors' && computer == 'rock') {
        resultsContainer.textContent = `You lose! ${computer} beats ${human}`;
        computerScore++;
        updateScore();
    } else if (human == 'scissors' && computer == 'paper') {
        resultsContainer.textContent = `You win! ${human} beats ${computer}`;
        humanScore++;
        updateScore();
    } else {
        resultsContainer.textContent = `Error resolving round. Human: ${human}  Computer: ${computer}`;
    }

}

function updateScore() {
    scoreContainer.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
}
