const text = document.getElementById("text");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  text.textContent = "YES BUTTON WORKS 💖";
});

noBtn.addEventListener("click", () => {
  text.textContent = "NO BUTTON WORKS 😅";
});




