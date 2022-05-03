let button = document.getElementById("submit")
let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    console.log("hello");
    e.preventDefault()
})