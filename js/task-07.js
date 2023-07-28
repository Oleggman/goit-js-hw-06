const refs = {
  input: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.input.value = 16;
refs.input.addEventListener("input", onRangeInput);

function onRangeInput(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
