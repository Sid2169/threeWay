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
