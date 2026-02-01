const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

let noCount = 0;

function handleYes() {
  text.innerHTML = "YES works 💖";
}

function handleNo() {
  noCount++;

  const messages = [
    "Clara 💖💘<br>Oops that’s the wrong answer.",
    "Clara 💖💘<br>Be serious chipchip.",
    "Clara 💖💘<br>Mfana you’ll be your own Valentine 😒",
    "Clara 💖💘<br>Awe you can stop now."
  ];

  if (noCount <= 4) {
    text.innerHTML = messages[noCount - 1];
  } else {
    buttons.innerHTML = `
      <button class="yes" onclick="handleYes()">Yes</button>
      <button class="no" onclick="handleYes()">Obviously</button>
    `;
  }
}



