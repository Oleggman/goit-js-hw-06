function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  colorSpan: document.querySelector(".color"),
  colorBtn: document.querySelector(".change-color"),
};

refs.colorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.colorSpan.textContent = color;
}
