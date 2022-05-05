let submitForm = document.getElementById("form");
let alert = document.getElementById("alert");
let email = document.getElementById("mail");
let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
let fullname = document.getElementById("name");
let regexName = /^[a-zA-ZÜ-ü-' ]*$/;

// envoi des données du formulaire
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

// verification du champs "email"
email.addEventListener("keyup", () => {
  if(email.value.match(regexMail)) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Please enter a valid email");
  }
});

// verification du champs "full name"
fullname.addEventListener("keyup", () => {
  if(!fullname.value.match(regexName)) {
    fullname.setCustomValidity("Some characters are not allowed");
  }else if(fullname.value.length < 2) {
    fullname.setCustomValidity("2 characters minimum");
  } else if (fullname.value.length > 10) {
    fullname.setCustomValidity("50 characters maximum")
  } else {
    fullname.setCustomValidity("");
  }
});