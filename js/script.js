let submitForm = document.getElementById("form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = new FormData(submitForm);
  fetch("./php/form.php", {
    method: "POST",
    body: form,
  });
});
