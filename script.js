const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

let noCount = 0;
let slide = 0;

const sweetSlides = [
  "Before we continue… 💕",
  "I just want you to know how much you mean to me 🥺",
  "You make my life brighter just by being in it ✨",
  "And I want to spend Valentine’s Day — and life — with you ❤️"
];

function handleNo() {
  noCount++;

  const noMessages = [
    "Clara 💖💘<br>Oops that’s the wrong answer.",
    "Clara 💖💘<br>Be serious chipchip.",
    "Clara 💖💘<br>Mfana you’ll be your own Valentine 😒",
    "Clara 💖💘<br>Awe you can stop now."
  ];

  if (noCount <= 4) {
    text.innerHTML = noMessages[noCount - 1];
  } else {
    // Move NO button + change text to Obviously
    buttons.innerHTML = `
      <button class="yes" onclick="startSweetSlides()">Yes</button>
      <button class="no" onclick="startSweetSlides()" style="
        transform: translate(${Math.random() * 120 - 60}px, ${Math.random() * 80 - 40}px);
      ">
        Obviously
      </button>
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
  text.innerHTML = `Clara 💖💘<br>${sweetSlides[slide]}`;

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
    Clara 💖💘<br><br>
    I love you more than words can explain.<br>
    I want to spend Valentine’s Day with you,
    and honestly… every day after that too.<br><br>
    You’re my favorite person,
    my best friend,
    and my forever Valentine ❤️<br><br>
    <span style="font-size:14px; opacity:0.6;">
      February 14 — always us ❤️
    </span>
  `;

  buttons.innerHTML = `
    <button class="yes sparkle">
      Yes chichi I’ll be your Valentine ❤️
    </button>
  `;
}


