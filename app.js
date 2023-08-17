const board = document.querySelector("#board");
const colors = [
  "#FF1493",
  "#8A2BE2",
  "#DC143C",
  "#FA8072",
  "#FF6347",
  "#00FA9A",
  "#20B2AA",
  "#BC8F8F",
  "#0000FF",
  "#7FFFD4",
  "#A52A2A",
  "#BC8F8F",
];
const SQUARE_NUMBER = 1200;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
