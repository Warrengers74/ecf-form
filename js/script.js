let submitForm = document.getElementById("form");
let alert = document.getElementById("alert");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = new FormData(submitForm);
  fetch("./php/form.php", {
    method: "POST",
    body: form,
  });
  document.dataForm.reset()
  alert.innerHTML = "**Your message has been sent**"
});

let email = document.getElementById("mail");
let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

email.addEventListener("keyup", () => {
  if(email.value.match(regexMail)) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Please enter a valid email");
  }
});

let fullname = document.getElementById("name");
let regexName = /^[a-zA-ZÜ-ü-' ]{2,50}$/;

fullname.addEventListener("keyup", () => {
  if(fullname.value.match(regexName)) {
    fullname.setCustomValidity("");
  } else {
    fullname.setCustomValidity("Between 2 and 50 characters. Some characters are not allowed");
  }
});