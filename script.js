
import { createArticle, createProfile,  removeShadowMode1, removeShadowMode, addShadowMode, shadowModeToggle} from "./functions.js"


const header = document.querySelector('.header')
const articleArea = document.querySelector('.article-area')
const footer = document.querySelector('.footer')

const messageBtn = document.querySelector('.message-img')
const profileBtn = document.querySelector('.user-img')

const likeBtns = document.querySelectorAll(".like-img")
const commentBtn = document.querySelectorAll(".comment-img");

const commentContainer = document.querySelector(".comment-container");
const lastComments = document.querySelectorAll(".last-comment")
console.log(lastComments)
const cancelBtn = document.querySelector(".cancel");
const submitBtn = document.querySelector(".submit")

const sidebarRight = document.querySelector('.sidebar-right')
const sidebarLeft = document.querySelector('.sidebar-left')

const messageArea = document.querySelector('.message-area')

const profile = document.querySelector('.user-profile')

const commentContainerContent = document.querySelector(".comment-container-content")

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

createProfile(user, profile)

for (let messageSender of messageSenders) {
    createArticle(messageSender, messageArea)
}

for (let messageSender of messageSenders) {
    createArticle(messageSender, commentContainerContent)
}

let lastScroll = 0;

window.addEventListener("scroll", () => {
    if(window.scrollY < lastScroll) {
        header.style.top = 0;
    } else {
        header.style.top = "-8vh";
        //tentative
        sidebarLeft.classList.remove('active-left')
        sidebarRight.classList.remove('active-right')
        removeShadowMode1()

    }
    lastScroll = window.scrollY;
})

messageBtn.addEventListener('click', () => {
    sidebarRight.classList.toggle('active-right')
    shadowModeToggle()
})

profileBtn.addEventListener('click', () => {
    sidebarLeft.classList.toggle('active-left')
    shadowModeToggle()
    header.classList.toggle('shadowMode')
})

document.addEventListener('click', e => {
    if(!sidebarRight.contains(e.target) && e.target !== messageBtn && e.target !== profileBtn) {
        sidebarLeft.classList.remove('active-left')
        sidebarRight.classList.remove('active-right')
        removeShadowMode1()
    }
})

const library = new Set();

likeBtns.forEach((likeBtn, key) => {
    likeBtn.addEventListener("click", (event) => {
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

const commentsLibrary = new Set();

commentBtn.forEach((button, index) =>
    button.addEventListener('click', () => {
    commentsLibrary.add(index)
    commentContainer.classList.add("showComment");
    addShadowMode()
    })
)

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    commentContainer.classList.remove("showComment");
    removeShadowMode();
    commentInput.value = ""
    commentsLibrary.clear()
})

let commentInput = document.querySelector(".comment-txt")
submitBtn.addEventListener("click", (e) =>  {
    e.preventDefault();
    const commentsZoneTarget = commentBtn[[...commentsLibrary][0]].parentNode
    const commentsCounter = commentsZoneTarget.querySelector("span")
    commentsCounter.innerHTML++
    commentContainer.classList.remove("showComment");
    removeShadowMode()
    console.log(commentInput.value)
    let newComment = commentInput.value
    user.message = newComment
    createArticle(user, lastComments[[...commentsLibrary][0]])
    commentInput.value = ""
    commentsLibrary.clear()
})




