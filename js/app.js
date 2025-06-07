import { findWinner } from "./find-winner.js";
import { elHand, elPC, elRefresh, elUser } from "./html-element.js";
import { modal } from "./modal.js";
import { robotChoose } from "./robot-choose.js";
import { showHideSection } from "./show-hide.js";
import { updateScore } from "./update-score.js";


const elResultMessage = document.getElementById("resultMessage");

// ===== \\
// start \\
// ===== \\
showHideSection(false);

elHand.forEach((hand) => {
  hand.addEventListener("click", (e) => {
    showHideSection(true);
    const userHand = e.target.alt;
    const robotHand = robotChoose();
    elUser.src = `../img/${userHand}.svg`;
    setTimeout(() => {
      elPC.src = `../img/${robotHand}.svg`;
      const result = findWinner(userHand, robotHand);
      if (result === "user") {
        elResultMessage.textContent = "YOU WON";
      } else if (result === "robot") {
        elResultMessage.textContent = "YOU LOSE";
      } else {
        elResultMessage.textContent = "YOU TIED";
      }

      if (result !== "tied") {
        if (result === "user") {
          elUser.classList.add("win-shadow")
        }
        if (result === "robot") {
          elPC.classList.add("win-shadow")
        }
        updateScore(result)
      }
    }, 1000);
  });
});

// refreshgame
elRefresh.addEventListener("click", () => {
  showHideSection(false)
  elPC.src = `../img/oval.svg`
  elUser.classList.remove("win-shadow")
  elPC.classList.remove("win-shadow")
  elResultMessage.textContent = "";
})

modal()