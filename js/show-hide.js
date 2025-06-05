import { elGameZone, elResultZone } from "./html-element.js";

export function showHideSection(bool) {
  if (bool) {
    elGameZone.style.display = "none";
    elResultZone.style.display = "inline";
  } else {
    elGameZone.style.display = "inline";
    elResultZone.style.display = "none";
  }
}
