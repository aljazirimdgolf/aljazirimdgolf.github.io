"use strict";
const plans = {
  pressure: ["Make 6-foot putts count","Try ten putts at the same distance, then repeat with a one-ball, must-make format. Track makes and whether you followed the same routine."],
  dispersion: ["Find a tighter shot pattern","Hit ten balls to one simulator target with the same club. Compare the size and direction of the group when you retest."],
  routine: ["Build a routine that holds up","Pick a breath, a target and one swing cue. Try it on ten shots, record completed routines, and repeat after adding a scoring target."]
};
let active = "pressure";
const buttons = [...document.querySelectorAll("[data-goal]")];
const title = document.querySelector("#plan-title");
const body = document.querySelector("#plan-body");
const status = document.querySelector("#copy-status");
buttons.forEach(button => button.addEventListener("click", () => {
  active = button.dataset.goal;
  buttons.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
  [title.textContent,body.textContent] = plans[active];
  status.textContent = "";
}));
document.querySelector("#copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(plans[active].join("\n\n"));
    status.textContent = "Plan copied.";
  } catch(e) {
    status.textContent = "Copy unavailable. You can select the plan above.";
  }
});
