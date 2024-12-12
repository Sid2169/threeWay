let team;
const newGenBtn = document.querySelector("#new-gen");
const oldGenBtn = document.querySelector("#old-gen");

newGenBtn.addEventListener("click", () => {
    team = "new-gen"
    newGenBtn.style.cssText = "border: 4px solid orange; transform: scale(1.05); ";
    oldGenBtn.style.cssText = "border: none;";
})
oldGenBtn.addEventListener("click", () => {
    team = "old-gen"
    oldGenBtn.style.cssText = "border: 4px solid green; transform: scale(1.05)";
    newGenBtn.style.cssText = "border: none;"
})
