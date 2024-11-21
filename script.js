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
// Logic for multiple rounds of play, number of rounds provided by the user
function playGame() {
    let rounds = Number(prompt("How many rounds you want to play?"));
    if (isNaN(rounds) || !isInteger(rounds)) {
        console.log('Please provide a valid number of rounds which is possitive integer.\n Start the game again')
    }

    let computerScore = 0;
    let humanScore = 0;
    let roundCounter = 0;
    while (roundCounter > rounds)
    {
        let computer = computerChoice();
        let human = gethumanChoice();
        result = playRound(computer, human)
        if (result === 'end') {
            break;
        }
        if(result === 'computer') {
            computerScore++;
            console.log('You lose this round! Compuer gains 1 point\n')
        }
        if (result === 'human') {
            humanScore++;
            console.log('You Win this round! You gain 1 point\n')
        }
    }
    console.log('Score Board :-\n Computer: ' + computerScore + ' ' + 'You: ' + humanScore + '\n');
    if (computerScore === humanScore) console.log('The game was a draw');
    if (computerScore > humanScore) console.log('You lost! Better luck next time');
    else console.log("You win! Congratulations");

}