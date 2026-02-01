const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

let noCount = 0;

function handleYes() {
  text.textContent = "YES works 💖";
}

function handleNo() {
  noCount++;

  const messages = [
    "Oops that’s the wrong answer.",
    "Be serious chipchip.",
    "Mfana you’ll be your own Valentine 😒",
    "Awe you can stop now."
  ];

  if (noCount <= 4) {
    text.textContent = messages[noCount - 1];
  } else {
    buttons.innerHTML = `
      <button class="yes" onclick="handleYes()">Yes</button>
      <button class="no" onclick="handleYes()">Obviously</button>
    `;
  }
}

}



