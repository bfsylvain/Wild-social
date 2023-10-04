const popupAlert = document.querySelector(".popupAlert")

const userId = "4f"
const userPassword = "4f"

const loginBtn = document.querySelector('.login-btn')
const alertMsg = document.querySelector(".alert-msg")
const email = document.getElementById("email")
const password = document.getElementById("password")

loginBtn.addEventListener("click", () => {
    alertMsg.innerHTML = ""
    if(email.value === userId && password.value === userPassword) {
        window.location.href = "index.html"
    } else if (email.value === userId){
        alertMsg.innerHTML = "Oops, mauvais mot de passe !"
        popupAlert.classList.add("show-popup")
        password.value = ""
    } else {
        alertMsg.innerHTML = "Oops, identifiant inconnu !"
        popupAlert.classList.add("show-popup")
        email.value = ""
        password.value = ""
    }
})

document.addEventListener("mousedown", () => {
    popupAlert.classList.remove("show-popup")
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        alertMsg.innerHTML = ""
        if(email.value === userId && password.value === userPassword) {
            window.location.href = "index.html"
        } else if (email.value === userId){
            alertMsg.innerHTML = "Oops, mauvais mot de passe !"
            popupAlert.classList.add("show-popup")
            password.value = ""
        } else {
            alertMsg.innerHTML = "Oops, identifiant inconnu !"
            popupAlert.classList.add("show-popup")
            email.value = ""
            password.value = ""
        }    
    }
})