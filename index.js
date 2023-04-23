let logregBox = document.querySelector(".logreg-box")
let loginLink = document.querySelector(".login-link")
let registerLink = document.querySelector(".register-link")

registerLink.addEventListener("click", () => {
	logregBox.classList.add("active")
})

loginLink.addEventListener("click", () => {
	logregBox.classList.remove("active")
})
