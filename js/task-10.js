function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.getElementById("controls");

const refs = {
  numberInput: controlsRef.firstElementChild,
  createBtn: controlsRef.querySelector("[data-create]"),
  destroyBtn: controlsRef.querySelector("[data-destroy]"),
  boxesRef: document.querySelector("#boxes"),
};

let boxSize = 30;
let amount = 0;

function createBoxes(amount) {
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxSize += 10;
  }

  destroyBoxes();
  refs.boxesRef.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  refs.boxesRef.innerHTML = "";
  boxSize = 30;
}

refs.numberInput.addEventListener("change", (event) => (amount = Number(event.currentTarget.value)));
refs.createBtn.addEventListener("click", () => createBoxes(amount));
refs.destroyBtn.addEventListener("click", () => destroyBoxes());
