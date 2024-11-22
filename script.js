// Generate computers  choice randomly.
function computerChoice() {
    let choice = Math.random() * 3;
    if (choice > 1) choice = 'rock';
    else if (choice >= 1 && choice > 2) choice = 'paper';
    else choice = 'scissor';
    return choice;
}

// Ask user for input, check if user input is either 'rock', 'paper' 'or' 'scissors'
function gethumanChoice() {
    let choice = prompt("What is your choice?").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        prompt("Please provide a valid choice between 'rock' 'paper' and 'scissor'.").toLowerCase();
    }
    return choice;
}
// Logic for one round of play and declare result
function playRound(computer, human) {

    computer = computer.toLowerCase();
    human = human.toLowerCase();
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
    let roundCounter = 0;
    while (roundCounter < rounds) {
        let computer = computerChoice();
        let human = gethumanChoice();
        let result = playRound(computer, human)
        console.log(`Round ${roundCounter}: Computer: ${computer}   You: ${human}       `);

        if (result === 'end') {
            break;
        }
        else if (result === 'computer') {
            computerScore++;
            console.log('You lose this round! Compuer gains 1 point\n')
        }
        else if (result === 'human') {
            humanScore++;
            console.log('You Win this round! You gain 1 point\n')
        }
        else {
            console.log('This round is draw\n')
        }
        roundCounter++;
    }
    console.log('Score Board :-\n Computer: ' + computerScore + ' ' + 'You: ' + humanScore + '\n');
    if (computerScore === humanScore) console.log('The game was a draw');
    else if (computerScore > humanScore) console.log('You lost! Better luck next time');
    else console.log("You win! Congratulations");

}
playGame(); //Game starts.