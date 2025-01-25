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

for (let i = 0; i < 25; i++) {
    console.log(getComputerChoice());
}