const messages = [
  "Hey… this is not a normal website 💫",
  "Love grows silently… just like this 🌸"
];

const textEl = document.getElementById("text");
const tree = document.getElementById("tree");

let msgIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < messages[msgIndex].length) {
    textEl.textContent += messages[msgIndex][charIndex];
    charIndex++;
    setTimeout(typeText, 70);
  } else {
    setTimeout(nextMessage, 1800);
  }
}

function nextMessage() {
  textEl.textContent = "";
  charIndex = 0;
  msgIndex++;

  if (msgIndex < messages.length) {
    typeText();
  } else {
    textEl.classList.add("hidden");
    tree.classList.remove("hidden");
  }
}

typeText();
