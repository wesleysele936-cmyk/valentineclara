const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

let noCount = 0;
let slide = 0;

const sweetSlides = [
  "Before we continue… 💕",
  "I just want you to know how special you are to me 🥺",
  "You make my days brighter just by being you ✨",
  "I can’t imagine Valentine’s Day — or life — without you ❤️"
];

function handleNo() {
  noCount++;

  const messages = [
    "Nope 😅 wrong answer",
    "Hmm… try again 💕",
    "That’s not it 🤭",
    "Be serious Clara 😌",
    "Obviously."
  ];

  text.textContent = messages[Math.min(noCount - 1, messages.length - 1)];

  if (noCount >= 5) {
    buttons.innerHTML = `
      <button class="yes" onclick="startSweetSlides()">Yes</button>
      <button class="no" onclick="startSweetSlides()">Obviously</button>
    `;
  }
}

function handleYes() {
  startSweetSlides();
}

function startSweetSlides() {
  slide = 0;
  showSweetSlide();
}

function showSweetSlide() {
  text.textContent = sweetSlides[slide];

  buttons.innerHTML = `
    <button class="yes" onclick="nextSlide()">Continue</button>
  `;
}

function nextSlide() {
  slide++;

  if (slide < sweetSlides.length) {
    showSweetSlide();
  } else {
    showFinalMessage();
  }
}

function showFinalMessage() {
  text.innerHTML = `
    <p>
      Clara,<br><br>
      I love you more than words can explain.<br>
      I want to spend Valentine’s Day with you,
      and honestly… every day after that too.<br><br>
      You’re my favorite person,
      my best friend,
      and my forever Valentine ❤️
    </p>
    <p style="font-size:14px; opacity:0.6;">
      February 14 — always us ❤️
    </p>
  `;

  buttons.innerHTML = `
    <button class="yes">
      Yes chichi I’ll be your Valentine ❤️
    </button>
  `;
}

