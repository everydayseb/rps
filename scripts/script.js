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

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock/paper/scissors)");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice;
    let computer = computerChoice;

    if (human == computer) {
        console.log(`Draw! ${human} and ${computer}`);
    } else if (human == 'rock' && computer == 'paper') {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScore++;
    } else if (human == 'rock' && computer == 'scissors') {
        console.log(`You win! ${human} beats ${computer}`);
        humanScore++
    } else if (human == 'paper' && computer == 'scissors') {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScore++;
    } else if (human == 'paper' && computer == 'rock') {
        console.log(`You win! ${human} beats ${computer}`);
        humanScore++;
    } else if (human == 'scissors' && computer == 'rock') {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScore++;
    } else if (human == 'scissors' && computer == 'paper') {
        console.log(`You win! ${human} beats ${computer}`);
        humanScore++;
    } else {
        console.log(`Error resolving round. Human: ${human}  Computer: ${computer}`);
    }

}

function playGame(numberOfRounds = 5) {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    
        playRound(humanChoice, computerChoice);
    }
}

playGame();