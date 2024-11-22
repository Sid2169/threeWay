
# Rock-Paper-Scissors Game 🎮

This is a simple console-based implementation of the classic *Rock-Paper-Scissors* game. The game is written in JavaScript and allows a user to play against the computer for a specified number of rounds. 

## Features ✨
- **Interactive Gameplay**: Users input their choices via prompts, while the computer generates its choices randomly.
- **Validation of Input**: Ensures that user inputs are valid (*rock*, *paper*, or *scissor*) and handles edge cases like cancellations or invalid entries gracefully.
- **Multiple Rounds**: Play as many rounds as desired by specifying the number at the start of the game.
- **Scoreboard and Results**: Tracks and displays the scores after each round and announces the final winner or if the game ends in a draw.
- **Error Handling**: Includes checks for invalid inputs or edge cases at various stages of the game.

## How It Works 🛠️
1. **Computer Choice Generation**:  
   The computer's choice is randomly generated using the `Math.random()` function.
   
2. **User Input**:  
   The user is prompted to provide a choice (*rock*, *paper*, or *scissor*). Invalid inputs result in re-prompting the user for valid input. The user can cancel at any time.

3. **Play Rounds**:  
   Each round compares the user's choice with the computer's choice:
   - The round is a draw if both choices are the same.
   - The winner is determined based on the game's rules (*rock beats scissors, scissors beat paper, paper beats rock*).

4. **Endgame Results**:  
   After all rounds, the scores are tallied, and the final result (win, lose, or draw) is announced.

## How to Run 🚀
1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Open the `index.html` file in a browser, or copy and paste the JavaScript code into the console of a modern browser (e.g., Chrome, Firefox, Edge).
3. Follow the prompts in the console to play the game.

## Example Output 🖥️
```
How many rounds you want to play?
> 3
Round 1: Computer: rock   You: paper
You won this round! You earn 1 point.

Round 2: Computer: paper   You: scissors
You won this round! You earn 1 point.

Round 3: Computer: scissors   You: scissors
This round is a draw!

Scoreboard:
Computer: 0 | You: 2
You win! Congratulations!
```

## Code Structure 📂
- **`computerChoice()`**: Generates the computer's choice randomly.
- **`gethumanChoice()`**: Prompts the user for a valid input and handles invalid entries.
- **`playRound()`**: Determines the winner of a single round and handles invalid inputs.
- **`playGame()`**: Manages the overall game flow, scorekeeping, and final results.

## Contributions 🤝
Contributions, suggestions, and improvements are welcome! Feel free to fork the repository and submit a pull request.

## License 📝
This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy the game and test your luck and strategy against the computer! 😊
