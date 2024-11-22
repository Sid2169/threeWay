// Generate computer's choice randomly.
function computerChoice() {
    let choice = Math.random() * 3; // Generate a random number between 0 and 3.
    if (choice < 1) choice = 'rock'; // Assign 'rock' if the number is less than 1.
    else if (choice >= 1 && choice < 2) choice = 'paper'; // Assign 'paper' if the number is between 1 (inclusive) and 2 (exclusive).
    else choice = 'scissor'; // Assign 'scissor' if the number is 2 or greater.
    return choice; // Return the computer's choice.
}

// Ask user for input, check if user input is either 'rock', 'paper', or 'scissors'.
function gethumanChoice() {
    let choice = prompt("What is your choice?"); // Prompt the user for their choice.
    if (choice === null) {return null}; // If the user cancels the prompt, return null.

    choice = choice.toLowerCase(); // Convert the choice to lowercase for case-insensitive comparison.
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        choice = prompt("Please provide a valid choice between 'rock', 'paper', and 'scissor'."); // Ask for valid input if the choice is invalid.
        if (choice === null) {return null}; // Handle cancellation gracefully.
        choice = choice.toLowerCase(); // Convert the new choice to lowercase.
    }
    return choice; // Return the user's valid choice.
}

// Logic for one round of play and declare result.
function playRound(computer, human) {

    // Validate input to ensure both computer and human choices are valid.
    if (computer !== 'rock' && computer !== 'paper' && computer !== 'scissor'
        && human !== 'rock' && human !== 'paper' && human !== 'scissor') {
        console.log('Invalid choice by player/players'); // Log an error message if inputs are invalid.
        return 'end'; // Return 'end' to terminate the round.
    }

    // Check for a draw.
    if (computer === human) return 'draw';

    // Check for scenarios where the computer wins.
    else if ((computer === 'rock' && human === 'scissor') ||
        (computer === 'paper' && human === 'rock') ||
        (computer === 'scissor' && human === 'paper')) {
        return 'computer';
    }

    // If none of the above conditions are true, the human wins.
    else return 'human';
}

// Logic for multiple rounds of play, with the number of rounds provided by the user.
function playGame() {
    let rounds = Number(prompt("How many rounds you want to play?")); // Prompt the user for the number of rounds.
    if (isNaN(rounds) || !Number.isInteger(rounds)) {
        // Validate if the input is a positive integer.
        console.log('Please provide a valid number of rounds which is a positive integer.\n Start the game again');
        return; // Exit if the input is invalid.
    }

    let computerScore = 0; // Initialize the computer's score.
    let humanScore = 0; // Initialize the human's score.
    let roundCounter = 1; // Initialize the round counter.
    while (roundCounter <= rounds) {
        let computer = computerChoice(); // Generate the computer's choice.
        let human = gethumanChoice(); // Get the human's choice.
        let result = playRound(computer, human); // Play a round and get the result.

        console.log(`Round ${roundCounter}: Computer: ${computer}   You: ${human}`); // Log the round details.

        if (result === 'end' || human == null) {
            // End the game if the round result is 'end' or the human cancels.
            break;
        }
        else if (result === 'computer') {
            computerScore++; // Increment the computer's score.
            console.log('You lost this round. Computer earns 1 point.');
        }
        else if (result === 'human') {
            humanScore++; // Increment the human's score.
            console.log('You won this round! You earn 1 point.');
        }
        else {
            console.log('This round is a draw!');
        }
        roundCounter++; // Increment the round counter.
    }

    // Display the final scoreboard.
    console.log('Scoreboard:');
    console.log(`Computer: ${computerScore} | You: ${humanScore}`);

    // Determine and log the overall game result.
    if (computerScore === humanScore) console.log('The game was a draw');
    else if (computerScore > humanScore) console.log('You lost! Better luck next time');
    else console.log("You win! Congratulations");
}

playGame(); // Game starts.
