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

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
})

const resultsContainer = document.querySelector("#results");


function playRound(humanChoice, computerChoice) {
    let human = humanChoice;
    let computer = computerChoice;

    if (human == computer) {
        resultsContainer.textContent = `Draw! ${human} and ${computer}`;
    } else if (human == 'rock' && computer == 'paper') {
        resultsContainer.textContent = `You lose! ${computer} beats ${human}`;
        computerScore++;
    } else if (human == 'rock' && computer == 'scissors') {
        resultsContainer.textContent = `You win! ${human} beats ${computer}`;
        humanScore++
    } else if (human == 'paper' && computer == 'scissors') {
        resultsContainer.textContent = `You lose! ${computer} beats ${human}`;
        computerScore++;
    } else if (human == 'paper' && computer == 'rock') {
        resultsContainer.textContent = `You win! ${human} beats ${computer}`;
        humanScore++;
    } else if (human == 'scissors' && computer == 'rock') {
        resultsContainer.textContent = `You lose! ${computer} beats ${human}`;
        computerScore++;
    } else if (human == 'scissors' && computer == 'paper') {
        resultsContainer.textContent = `You win! ${human} beats ${computer}`;
        humanScore++;
    } else {
        resultsContainer.textContent = `Error resolving round. Human: ${human}  Computer: ${computer}`;
    }

}