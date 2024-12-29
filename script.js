// Variables and Initial Elements
let team = "";
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
let computerChoice;
let computerMembers;

// Create Old-Gen Team Node
let oldGenTeam = document.createElement("div");
oldGenTeam.classList.add("old-gen-team");
oldGenTeam.innerHTML = `
    <img src="images/jiraiya.png" alt="Jiraiya" id="old-frog" class="team-member frog">
    <img src="images/orochimaru.png" alt="Orochimaru" id="old-snake" class="team-member snake">
    <img src="images/tsunade.png" alt="Tsunade" id="old-slug" class="team-member slug">
`;

// Create New-Gen Team Node
let newGenTeam = document.createElement("div");
newGenTeam.classList.add("new-gen-team");
newGenTeam.innerHTML = `
    <img src="images/naruto.png" alt="Naruto" id="new-frog" class="team-member frog">
    <img src="images/sasuke.png" alt="Sasuke" id="new-snake" class="team-member snake">
    <img src="images/sakura.png" alt="Sakura" id="new-slug" class="team-member slug">          
`;

// Event Listener for Old-Gen Button
oldGenBtn.addEventListener("click", () => {
    team = "old-gen-team";
    updateTeams(oldGenTeam, newGenTeam, oldGenBtn, newGenBtn, "end", "start");
});

// Event Listener for New-Gen Button
newGenBtn.addEventListener("click", () => {
    team = "new-gen-team";
    updateTeams(newGenTeam, oldGenTeam, newGenBtn, oldGenBtn, "end", "start");
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
});

// Event Listener for Popup Close Button
popupButton.addEventListener("click", hidePopUp);


//Game mechanics

// functions that simulates one round
//*
//*2 Click fight button
document.querySelector("#fight-button").addEventListener("click", () => {
   if(!playerChoice)  showPopUp("Wait!", "Select a team member to fight:)", "Ok");
   generateComputerChoice();

   
})
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

//*4 Update dom structure of battle area
//*5 Show battle area 
//*6 Show result popup
//*7 hide result popup 
//*8 Hide battle area

//A loop that iterates for number of rounds
