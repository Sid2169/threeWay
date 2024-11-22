// Generate computers  choice randomly.
function computerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) choice = 'rock';
    else if (choice >= 1 && choice < 2) choice = 'paper';
    else choice = 'scissor';
    return choice;
}

// Ask user for input, check if user input is either 'rock', 'paper' 'or' 'scissors'
function gethumanChoice() {
    let choice = prompt("What is your choice?");
    if (choice === null) {return null};

    choice = choice.toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        choice = prompt("Please provide a valid choice between 'rock' 'paper' and 'scissor'.");
        if (choice === null) {return null};

        choice = choice.toLowerCase();
    }
    return choice;
}
// Logic for one round of play and declare result
function playRound(computer, human) {

    if (computer !== 'rock' && computer !== 'paper' && computer !== 'scissor'
        && human !== 'rock' && human !== 'paper' && human !== 'scissor') {
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
    if (isNaN(rounds) || !Number.isInteger(rounds)) {
        console.log('Please provide a valid number of rounds which is possitive integer.\n Start the game again')
    }

    let computerScore = 0;
    let humanScore = 0;
    let roundCounter = 1;
    while (roundCounter <= rounds) {
        let computer = computerChoice();
        let human = gethumanChoice();
        let result = playRound(computer, human)
        console.log(`Round ${roundCounter}: Computer: ${computer}   You: ${human}       `);

        if (result === 'end' || human == null) {
            break;
        }
        else if (result === 'computer') {
            computerScore++;
            console.log('You lost this round. Computer earns 1 point.');
        }
        else if (result === 'human') {
            humanScore++;
            console.log('You won this round! You earn 1 point.');
        }
        else {
            console.log('This round is a draw!');
        }
        roundCounter++;
    }
    console.log('Scoreboard:');
    console.log(`Computer: ${computerScore} | You: ${humanScore}`);

    if (computerScore === humanScore) console.log('The game was a draw');
    else if (computerScore > humanScore) console.log('You lost! Better luck next time');
    else console.log("You win! Congratulations");

}
playGame(); //Game starts.