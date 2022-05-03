let submitForm = document.getElementById("form");

submitForm.addEventListener("submit", (e) => {
  console.log("hello");
  let form = new FormData(submitForm);
  fetch("form.php", {
    method: "POST",
    body: form,
  });
  e.preventDefault();
});
