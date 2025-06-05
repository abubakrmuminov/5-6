import { elModal, elCloseBtn, elOpenBtn } from "./html-element.js";

export function modal() {
  elOpenBtn.addEventListener("click", () => {
    elModal.style.display = "block";
  });

  elCloseBtn.addEventListener("click", () => {
    elModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === elModal) {
      elModal.style.display = "none";
    }
  });
}
