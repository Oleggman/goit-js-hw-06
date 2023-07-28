const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  const curTarget = event.currentTarget;

  if (curTarget.value.length == curTarget.dataset.length) {
    curTarget.classList.remove("invalid");
    curTarget.classList.add("valid");
    return;
  }

  curTarget.classList.remove("valid");
  curTarget.classList.add("invalid");
}
