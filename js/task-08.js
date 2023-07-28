const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("All the fields should be filled!!!");
    return;
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  formRef.reset();
}
