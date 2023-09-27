
import { createArticle, createProfile, removeShadowMode1, removeShadowMode, addShadowMode, shadowModeToggle} from "./functions.js"


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


const commentContainerContent = document.querySelector(".comment-container-content")

for (let messageSender of messageSenders) {
    createArticle(messageSender, commentContainerContent)
}

createProfile(user, profile)

let lastScroll = 0;

window.addEventListener("scroll", () => {
    if(window.scrollY < lastScroll) {
        header.style.top = 0;
    } else {
        header.style.top = "-8vh";
    }
    lastScroll = window.scrollY;
})



messageBtn.addEventListener('click', () => {
    sidebarRight.classList.toggle('active-right')
    
    header.classList.toggle('shadowMode')
    articleArea.classList.toggle('shadowMode')
    footer.classList.toggle('shadowMode')
})

profilImg.addEventListener('click', () => {
    sidebarLeft.classList.toggle('active-left')
    shadowModeToggle()
    header.classList.toggle('shadowMode')
    // articleArea.classList.toggle('shadowMode')
    // footer.classList.toggle('shadowMode')
})

document.addEventListener('click', e => {
    if(!sidebarRight.contains(e.target) && e.target !== messageBtn && e.target !== profilImg) {
        sidebarLeft.classList.remove('active-left')
        sidebarRight.classList.remove('active-right')
        removeShadowMode1()
        // header.classList.remove('shadowMode')
        // articleArea.classList.remove('shadowMode')
        // footer.classList.remove('shadowMode')
    }
})
const library = new Set();
const likeIcons = document.querySelectorAll(".like-img")

likeIcons.forEach((likeIcon, key) => {
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

const commentImg = document.querySelectorAll(".comment-img");
const commentContainer = document.querySelector(".comment-container");
const cancelButton = document.querySelector(".cancel");

const commentsLibrary = new Set();

commentImg.forEach((button, index) =>
    button.addEventListener('click', () => {
    commentsLibrary.add(index)
    commentContainer.classList.add("showComment");
    addShadowMode()
    })
    )

cancelButton.addEventListener('click', (e) => {
    e.preventDefault()
    commentContainer.classList.remove("showComment");
    removeShadowMode();
    commentsLibrary.clear()
})

const submitBtn = document.querySelector(".submit")
submitBtn.addEventListener("click", (e) =>  {
    e.preventDefault();
    const commentsZoneTarget = commentImg[[...commentsLibrary][0]].parentNode
    const commentsCounter = commentsZoneTarget.querySelector("span")
    commentsCounter.innerHTML++
    commentContainer.classList.remove("showComment");
    removeShadowMode()
    console.log()
    //ajout pour l'iteration du bouton
    commentsLibrary.clear()
})




