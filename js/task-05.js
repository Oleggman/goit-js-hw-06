const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

refs.input.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    refs.output.textContent = event.currentTarget.value;
  } else {
    refs.output.textContent = "Anonymous";
  }
});
