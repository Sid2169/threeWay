let team = "";
let rounds = document.querySelector("#rounds").value.trim();
const newGenBtn = document.querySelector("#new-gen");
const oldGenBtn = document.querySelector("#old-gen");
const startBtn = document.querySelector('#start-button');
rounds = document.querySelector("#rounds").value;
//Create old-gen-team node
let oldGenTeam = document.createElement("div");
oldGenTeam.classList.add("old-gen-team");
oldGenTeam.innerHTML = `
          <img src="images/jiraiya.png" alt="Jiraiya" id="old-frog" class="team-member player-select">
          <img src="images/tsunade.png" alt="Tsunade" id="old-slug" class="team-member player-select">
          <img src="images/orochimaru.png" alt="Orochimaru" id="old-snake" class="team-member player-select">
`;

//Create new-gen-team node
let newGenTeam = document.createElement("div");
newGenTeam.classList.add("new-gen-team");
newGenTeam.innerHTML = `
          <img src="images/naruto.png" alt="Naruto" id="new-frog" class="team-member">
          <img src="images/sasuke.png" alt="Sasuke" id="new-snake" class="team-member">
          <img src="images/sakura.png" alt="Sakura" id="new-slug" class="team-member">          
`;



oldGenBtn.addEventListener("click", () => {
   team = "old-gen-team";
   let playerTeam = document.querySelector(".player-team");
   let computerTeam = document.querySelector(".computer-team");

   //Add newly selected team
   oldGenBtn.style.cssText = "border: 4px solid green; transform: scale(1.05)";
   playerTeam.appendChild(oldGenTeam);
   oldGenTeam.style.justifyContent = "end";
   computerTeam.appendChild(newGenTeam);

   //Remove previously selected team;
   newGenBtn.style.cssText = "border: none;"
   newGenTeam.style.justifyContent = "start";
   playerTeam.removeChild(newGenTeam);
   computerTeam.removeChild(oldGenTeam);

})

newGenBtn.addEventListener("click", () => {
   team = "new-gen-team";
   let playerTeam = document.querySelector(".player-team");
   let computerTeam = document.querySelector(".computer-team");

   //Add newly selected team
   newGenBtn.style.cssText = "border: 4px solid orange; transform: scale(1.05); ";
   playerTeam.appendChild(newGenTeam);
   newGenTeam.style.justifyContent = "end";
   computerTeam.appendChild(oldGenTeam);

   //Remove previously selected tea=x
   oldGenBtn.style.cssText = "border: none;";
   oldGenTeam.style.justifyContent = "start";
   playerTeam.removeChild(oldGenTeam);
   computerTeam.removeChild(newGenTeam);

})


//PopUpRelated functions and variables
const popup = document.getElementById("game-popup");
const popupHeading = popup.querySelector("h2"); // Popup heading
const popupMessage = popup.querySelector("p");  // Popup paragraph
const popupButton = popup.querySelector("#popup-close"); // Popup button
// Function to show a customized popup
function showPopUp(headingText, paragraphText, buttonText) {

   // Update the content dynamically
   popupHeading.textContent = headingText;
   popupMessage.textContent = paragraphText;
   popupButton.textContent = buttonText;

   // Show the popup
   popup.classList.remove("hidden");
}

//Function to hide popup
function hidePopUp() {
   popup.classList.add("hidden");
}

startBtn.addEventListener("click", () => {
   rounds = document.querySelector("#rounds").value.trim();
   if (isNaN(rounds) || !Number.isInteger(parseFloat(rounds)) || rounds === "" || team === "") {
      showPopUp("Wait!", "Enter a valid number of rounds and select a team before starting", "Ok");
      return;
   }
   const gameArea = document.querySelector(".game-area");
   gameArea.classList.remove("hidden");
   document.querySelector(".team-selection").classList.add("hidden");
   document.querySelector("#header").classList.add("hidden");
});
popupButton.addEventListener("click", () => {
   hidePopUp();
});

//Game mechanics

// functions that simulates one round
//*1 Take players choice
let playerChoice;
const playerMembers = document.querySelectorAll(".player-team .team-member");
playerMembers.forEach(member => {
   member.addEventListener("click", () => {
      console.log(`Event listener applid to ${member.id}`);
      if (!(playerChoice === null)) playerChoice.style.cssText = "border: none; transform: scale(1); box-shadow: none;";
      playerChoice = member;
      playerChoice.style.cssText = " border-color: #e76f51; transform: scale(1.05); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3);";
   })
});


//*2 Click fight button
//*3 Generate computer choice
//*4 Update dom structure of battle area
//*5 Show battle area 
//*6 Show result popup
//*7 hide result popup 
//*8 Hide battle area

//A loop that iterates for number of rounds


