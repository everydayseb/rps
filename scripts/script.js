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