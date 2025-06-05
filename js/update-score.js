import { elScore } from "./html-element.js";

export function updateScore(winner) {
  if (winner === "user") {
    elScore.innerText = Number(elScore.innerText) + 1;
  } else if (winner === "robot" && Number(elScore.innerText) > 0) {
    elScore.innerText = Number(elScore.innerText) - 1;
  }
}