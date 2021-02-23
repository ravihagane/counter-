let value = 0;
let val = document.querySelector(".val").textContent;
const increase = document.querySelector(".incButton");
const decrease = document.querySelector(".decButton");
const reset = document.querySelector(".resButton");

increase.addEventListener("click", () => {
  value++;
  document.querySelector(".val").textContent = value;
  if (value > 0) {
    document.querySelector(".val").style.color = "green";
  }
});
decrease.addEventListener("click", () => {
  value--;
  document.querySelector(".val").textContent = value;
  if (value < 0) {
    document.querySelector(".val").style.color = "red";
  } else if (value >= 0) {
    document.querySelector(".val").style.color = "hsl(209, 61%, 16%)";
  }
});
reset.addEventListener("click", () => {
  value = 0;
  document.querySelector(".val").textContent = 0;
  document.querySelector(".val").style.color = "hsl(209, 61%, 16%)";
});
