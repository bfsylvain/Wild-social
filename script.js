
import { createArticle, createProfile} from "./functions.js"

let header = document.querySelector('.header')
let articleArea = document.querySelector('.article-area')
let footer = document.querySelector('.footer')

let messageBtn = document.querySelector('.message-img')
let sidebarRight = document.querySelector('.sidebar-right')

let profilImg = document.querySelector('.user-img')
let sidebarLeft = document.querySelector('.sidebar-left')

let messageArea = document.querySelector('.message-area')

let profile = document.querySelector('.user-profile')

const messageSenders = [
    {
        date: "hier",
        firstname: "Cédric", 
        lastname: "D",
        message: "Apéro ?"
    },
    {
        date: "hier",
        firstname: "John", 
        lastname: "John",
        message: "Banana Banana Banana Banana Banana"
    },
    {
        date: "hier",
        firstname: "John", 
        lastname: "Bob",
        message: "Banana Banana Banana Banana Banana"
    }
]

const user = {
    firstname: "Mr",
    lastname: "Fantastic",
    abonnes: 1961,
    abonnements: 3
}

for (let messageSender of messageSenders) {
    createArticle(messageSender, messageArea)
}

createProfile(user, profile)

messageBtn.addEventListener('click', () => {
    sidebarRight.classList.toggle('active-right')
    header.classList.toggle('shadowMode')
    articleArea.classList.toggle('shadowMode')
    footer.classList.toggle('shadowMode')
})

profilImg.addEventListener('click', () => {
    sidebarLeft.classList.toggle('active-left')
    header.classList.toggle('shadowMode')
    articleArea.classList.toggle('shadowMode')
    footer.classList.toggle('shadowMode')
})

document.addEventListener('click', e => {
    if(!sidebarRight.contains(e.target) && e.target !== messageBtn && e.target !== profilImg) {
        sidebarLeft.classList.remove('active-left')
        sidebarRight.classList.remove('active-right')
        header.classList.remove('shadowMode')
        articleArea.classList.remove('shadowMode')
        footer.classList.remove('shadowMode')
    }
})
const library = new Set();
const likeIcons = document.querySelectorAll(".like-img")

likeIcons.forEach((likeIcon, key) => {
    console.log(likeIcon, key)
    likeIcon.addEventListener("click", (event) => {
        const likeZone = event.target.parentNode
        const likeCounter = likeZone.querySelector("span")
        if (library.has(key)) {
            likeCounter.innerHTML--
            library.delete(key)
        } else {
        event.target.strokeStyle= "red"
        likeCounter.innerHTML++
        library.add(key);
        }
        
     })
})


