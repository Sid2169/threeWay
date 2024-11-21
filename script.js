// Generate computers  choice randomly.
function computerChoice() {
    let choice = Math.random() * 3;
    if (choice > 1) choice = 'rock';
    else if(choice >= 1 && choice > 2) choice = 'paper';
    else choice = 'scissor';
    return choice;
}

// Ask user for input, check if user input is either 'rock', 'paper' 'or' 'scissors'
function gethumanChoice() {
    let choice = prompt("What is your choice?").toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        console.log("Please provide a valid choice between 'rock' 'paper' and 'scissor'. Start the game again \n");
        return '';
    }
    return choice;
}
// Logic for one round of play and declare result
function playRound(computer, human) {
    
    computer.toLowerCase();
    human.toLowerCase();
    if (computer !== 'rock' && playe1 !== 'paper' && computer !== 'scissor'
    && human !== 'rock' && playe2 !== 'paper' && human !== 'scissor') {
        console.log('Invalid choice by player/players');
        return 'end'
    }

    if (computer === human) return 'draw';
    
    else if ((computer === 'rock' && human === 'scissor') ||
             (computer === 'paper' && human === 'rock') ||
             (computer === 'scissor' && human === 'paper')) {
        return 'computer';
    } 

    else return 'human';
}    
