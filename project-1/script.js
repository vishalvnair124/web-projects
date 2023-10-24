const bg_color = [
  "red",
  "yellow",
  "blue",
  "orange",
  "pink",
  "purple",
  "black",
  "white",
];
function ChangeColor() {
  const body = document.querySelector("body");
  let num = Math.random();
  let len = bg_color.length;
  let index = num * len;
  let int_index = parseInt(index);

  body.style.backgroundColor = bg_color[int_index];
}
const text_color = [
  "white",
  "red",
  "yellow",
  "blue",
  "green",
  "orange",
  "pink",
  "purple",
];
function ChangeTextColor() {
  const text = document.getElementById("text");
  let num = Math.random();
  let len = bg_color.length;
  let index = num * len;
  let int_index = parseInt(index);

  text.style.color = bg_color[int_index];
}
