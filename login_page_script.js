const userId = "4f"
const userPassword = "4f"
const loginBtn = document.querySelector('.login-btn')
console.log(loginBtn)
const email = document.getElementById("email")
const password = document.getElementById("password")

console.log(password)
loginBtn.addEventListener("click", () => {
    if(email.value === userId && password.value === userPassword) {
        window.location.href = "index.html"
    }
})