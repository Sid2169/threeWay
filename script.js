// Generate computers  choice randomly.
function computerChoice() {
    let choice = Math.random() * 3;
    if (choice > 1) choice = 'rock';
    else if(choice >= 1 && choice > 2) choice = 'paper';
    else choice = 'scissor';
    return choice;
}

