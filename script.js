// Variables and Initial Elements
let team = "";
currentRound = 1;
document.querySelector("#round-counter").textContent = currentRound;
let rounds = document.querySelector("#rounds").value.trim();
const newGenBtn = document.querySelector("#new-gen");
const oldGenBtn = document.querySelector("#old-gen");
const startBtn = document.querySelector('#start-button');
const popup = document.getElementById("game-popup");
const popupHeading = popup.querySelector("h2");
const popupMessage = popup.querySelector("p");
const popupButton = popup.querySelector("#popup-close");
let playerChoice;
let playerMembers;
let playerScore = 0;
document.querySelector("#player-score").textContent = playerScore;
let computerChoice;
let computerMembers;
let computerScore = 0;
document.querySelector("#computer-score").textContent = computerScore;
const summonNames = {
    "old-frog": "Gamabunta",
    "new-frog": "Gamakichi",
    "old-snake": "Manda",
    "new-snake": "Aoda",
    "old-slug": "Katsuyu (Tsunade)",
    "new-slug": "Katsuyu (Sakura)"
};

const summonImages = {
    "old-frog": "images/old-frog.png",
    "new-frog": "images/new-frog.png",
    "old-snake": "images/old-snake.png",
    "new-snake": "images/new-snake.png",
    "old-slug": "images/old-slug.png",
    "new-slug": "images/new-slug.png"
};

// Create Old-Gen Team Node
let oldGenTeam = document.createElement("div");
oldGenTeam.classList.add("old-gen-team");
oldGenTeam.innerHTML = `
    <img src="images/jiraiya.png" alt="Jiraiya" id="old-frog" class="team-member frog">
    <img src="images/orochimaru.png" alt="Orochimaru" id="old-snake" class="team-member snake">
    <img src="images/tsunade.png" alt="Tsunade" id="old-slug" class="team-member slug">
    <p id="team-name">Legendary Sanin</p>
`;

// Create New-Gen Team Node
let newGenTeam = document.createElement("div");
newGenTeam.classList.add("new-gen-team");
newGenTeam.innerHTML = `
    <img src="images/naruto.png" alt="Naruto" id="new-frog" class="team-member frog">
    <img src="images/sasuke.png" alt="Sasuke" id="new-snake" class="team-member snake">
    <img src="images/sakura.png" alt="Sakura" id="new-slug" class="team-member slug">
    <p id="team-name">Team Seven</p>          
`;

// Event Listener for Old-Gen Button
oldGenBtn.addEventListener("click", () => {
    team = "old-gen-team";
    updateTeams(oldGenTeam, newGenTeam, oldGenBtn, newGenBtn, "end", "start");
    //Update final popup message team section layout
    document.querySelector("#popup-player-team .popup-members").innerHTML = `
    <img src="images/old-frog.png" alt="Gamabunta">
    <img src="images/old-snake.png" alt="Manda">
    <img src="images/old-slug.png" alt="Katsuyu(Tsunade)">
    <p>Legendary Sanin</p>
    `;
    document.querySelector("#popup-computer-team .popup-members").innerHTML = `
     <img src="images/new-frog.png" alt="Gamakichi">
     <img src="images/new-snake.png" alt="Aoda">
     <img src="images/new-slug.png" alt="Katsuyu(Sakura)">
     <p>Team Seven</p>
    `;
});

// Event Listener for New-Gen Button
newGenBtn.addEventListener("click", () => {
    team = "new-gen-team";
    updateTeams(newGenTeam, oldGenTeam, newGenBtn, oldGenBtn, "end", "start");
    //Update final popup message team section layout
    document.querySelector("#popup-player-team .popup-members").innerHTML = `
    <img src="images/new-frog.png" alt="Gamakichi">
    <img src="images/new-snake.png" alt="Aoda">
    <img src="images/new-slug.png" alt="Katsuyu(Sakura)">
    <p>Team Seven</p>
    `;
    document.querySelector("#popup-computer-team .popup-members").innerHTML = `
     <img src="images/old-frog.png" alt="Gamabunta">
     <img src="images/old-snake.png" alt="Manda">
     <img src="images/old-slug.png" alt="Katsuyu(Tsunade)">
     <p>Legendary Sanin</p>
    `;
});

// Function to Update Teams
function updateTeams(playerTeamNode, computerTeamNode, activeBtn, inactiveBtn, playerJustify, computerJustify) {
    const playerTeam = document.querySelector(".player-team");
    const computerTeam = document.querySelector(".computer-team");

    // Add newly selected team
    activeBtn.style.cssText = "border: 4px solid green; transform: scale(1.05);";
    playerTeam.appendChild(playerTeamNode);
    playerTeamNode.style.justifyContent = playerJustify;
    computerTeam.appendChild(computerTeamNode);

    // Remove previously selected team
    inactiveBtn.style.cssText = "border: none;";
    computerTeamNode.style.justifyContent = computerJustify;
    if (playerTeam.contains(computerTeamNode)) playerTeam.removeChild(computerTeamNode);
    if (computerTeam.contains(playerTeamNode)) computerTeam.removeChild(playerTeamNode);

    // Reassign and Add Event Listeners to Player Members
    playerMembers = document.querySelectorAll(".player-team .team-member");
    computerMembers = document.querySelectorAll(".computer-team .team-member");
    playerMembers.forEach(member => {
        member.addEventListener("click", () => {
            if (playerChoice) playerChoice.removeAttribute("style");
            playerChoice = member;
            playerChoice.style.cssText = "border-color: #e76f51; transform: scale(1.05); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3);";
        });
    });
}

// Function to Show a Customized Popup
function showPopUp(headingText, paragraphText, buttonText) {
    popupHeading.textContent = headingText;
    popupMessage.textContent = paragraphText;
    popupButton.textContent = buttonText;
    popup.classList.remove("hidden");
}

// Function to Hide Popup
function hidePopUp() {
    popup.classList.add("hidden");
}

// Event Listener for Start Button
startBtn.addEventListener("click", () => {
    rounds = document.querySelector("#rounds").value.trim();
    if (isNaN(rounds) || !Number.isInteger(parseFloat(rounds)) || rounds === "" || team === "") {
        showPopUp("Wait!", "Enter a valid number of rounds and select a team before starting", "Ok");
        return;
    }
    document.querySelector(".game-area").classList.remove("hidden");
    document.querySelector(".team-selection").classList.add("hidden");
    document.querySelector("#header").classList.add("hidden");
    showPopUp("Game Started!", "Select a team member to fight", "Ok");
});

// Event Listener for Popup Close Button
popupButton.addEventListener("click", hidePopUp);


//Game mechanics

// functions that simulates one round
//*
//*2 Click fight button
document.querySelector("#fight-button").addEventListener("click", () => {
    if (!playerChoice) {
        showPopUp("Wait!", "Select a team member to fight:)", "Ok");
        return;
    }
    generateComputerChoice();
    fightResult(computerChoice, playerChoice);
    currentRound++;
    document.querySelector("#round-counter").textContent = currentRound;

    // Check if the game is over
    if (currentRound > Number(rounds)) {
        popupButton.textContent = "See Results";
        popupButton.addEventListener("click", () => {
            if (playerScore > computerScore) {
                showGameOverPopup(`Congratulations! You won the Battle.`);
            } else if (playerScore < computerScore) {
                showGameOverPopup(`Very Unfortunate! You lost the Battle.`);
            } else {
                showGameOverPopup(`DEADLOCK! The Battle ended in a stalemate.`);
            }
        });
    }
});
function showGameOverPopup(headingText) {
    document.querySelector("#over-popup #over-heading").textContent = headingText;
    document.querySelector("#popup-player-score").textContent = playerScore;
    document.querySelector("#popup-computer-score").textContent = computerScore;
    document.querySelector("#over-popup").classList.remove("hidden");
}
document.querySelector("#play-again").addEventListener("click", () => {
    location.reload();
});

//*3 Generate computer choice
// Generate computer's choice randomly.
function generateComputerChoice() {
    // Ensure there are members to choose from
    if (computerMembers.length === 0) return;

    // Reset previous choice styles
    if (computerChoice) computerChoice.style.cssText = "";

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * computerMembers.length);

    // Select the random member
    computerChoice = computerMembers[randomIndex];

    // Apply styles to the selected member
    computerChoice.style.cssText = "border-color: #2a9d8f; transform: scale(1.05); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3);";
}
function fightResult(computer, player) {
    const computerClass = computer.classList;
    const playerClass = player.classList;
   

    const computerId = computer.id;
    const playerId = player.id;

    // Determine result based on rules
    if (
        (playerClass.contains("frog") && computerClass.contains("slug")) ||
        (playerClass.contains("snake") && computerClass.contains("frog")) ||
        (playerClass.contains("slug") && computerClass.contains("snake"))
    ) {
        // Player wins
        const message = `${summonNames[playerId]} beat ${summonNames[computerId]}`;
        const image = summonImages[playerId];
        showPopUpWithImage("Victory!", message, "Next Round", image);
        playerScore++;
        document.querySelector("#player-score").textContent = playerScore;

    } else if (
        (playerClass.contains("slug") && computerClass.contains("frog")) ||
        (playerClass.contains("frog") && computerClass.contains("snake")) ||
        (playerClass.contains("snake") && computerClass.contains("slug"))
    ) {
        // Computer wins
        const message = `${summonNames[computerId]} beat ${summonNames[playerId]}`;
        const image = summonImages[computerId];
        showPopUpWithImage("Unfortunate loss:(", message, "Next Round", image);
        computerScore++;
        document.querySelector("#computer-score").textContent = computerScore;
    } else if (playerClass.contains("slug") && computerClass.contains("slug")) {
        // Special case for Katsuyu
        const winner = Math.random() < 0.5 ? "player" : "computer";
        if (winner === "player" && playerChoice.id === "old-slug") {
            playerScore++;
            document.querySelector("#player-score").textContent = playerScore;
            showPopUpWithImage("Victory!", "Katsuyu was summoned first by Tsunade", "Next Round", summonImages["old-slug"]);
        } else if (winner === "player" && playerChoice.id === "new-slug") {
            playerScore++;
            document.querySelector("#player-score").textContent = playerScore;
            showPopUpWithImage("Victory!", "Katsuyu was summoned first by Sakura", "Next Round", summonImages["new-slug"]);
        } else if (winner === "computer" && computerChoice.id === "old-slug") {
            computerScore++;
            document.querySelector("#computer-score").textContent = computerScore;
            showPopUpWithImage("Unfortunate loss:(", "Katsuyu was summoned first by Tsunade", "Next Round", summonImages["old-slug"]);
        } else {
            computerScore++;
            document.querySelector("#computer-score").textContent = computerScore;
            showPopUpWithImage("Unfortunate loss:(", "Katsuyu was summoned first by Sakura", "Next Round", summonImages["new-slug"]);
        }
        // const message = winner === "player"
        //     ? `Katsuyu was summoned first by Tsunade`
        //     : `Katsuyu was summoned first by Sakura`;
        // const image = winner === "player" ? summonImages["old-slug"] : summonImages["new-slug"];
        // showPopUpWithImage("Round Result", message, "Next Round", image);
    } else {
        // Draw
        const message = `${summonNames[playerId]} and ${summonNames[computerId]} refuse to fight, hence this round is a tie.`;
        const images = [summonImages[playerId], summonImages[computerId]];
        showPopUpWithImages("Stalemate!", message, "Next Round", images);
    }
}
//Popup function for case of clear win or lose 
function showPopUpWithImage(headingText, paragraphText, buttonText, imageUrl) {
    popupHeading.textContent = headingText;
    popupMessage.innerHTML = `${paragraphText}<br><img src="${imageUrl}" alt="Summon Image" style="width: 300px; height:auto; margin-top: 10px;">`;
    popupButton.textContent = buttonText;
    popup.classList.remove("hidden");
}
//Popup function for case of draw
function showPopUpWithImages(headingText, paragraphText, buttonText, imageUrls) {
    popupHeading.textContent = headingText;
    popupMessage.innerHTML = `${paragraphText}<br>
        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 10px;">
            <img src="${imageUrls[0]}" alt="Summon Image 1" style="width: 150px; height: auto;">
            <img src="${imageUrls[1]}" alt="Summon Image 2" style="width: 150px; height: auto;">
        </div>`;
    popupButton.textContent = buttonText;
    popup.classList.remove("hidden");
}

// Functions to show and hide help popups
document.querySelector("#help-button").addEventListener("click", () => {
    document.querySelector(".help").classList.remove("hidden");
});
document.querySelector("#close-help").addEventListener("click", () => {
    document.querySelector(".help").classList.add("hidden");
});

//Popup function for end of game








//*4 Update dom structure of battle area
//*5 Show battle area 
//*6 Show result popup
//*7 hide result popup 
//*8 Hide battle area


