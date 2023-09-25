let header = document.querySelector('.header')
let articleArea = document.querySelector('.article-area')
let footer = document.querySelector('.footer')

let messageBtn = document.querySelector('.message-img')
let sidebarRight = document.querySelector('.sidebar-right')

let profilImg = document.querySelector('.user-img')
let sidebarLeft = document.querySelector('.sidebar-left')


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

const likeIcons = document.querySelectorAll(".like-img")

 for (let likeIcon of likeIcons) {
     likeIcon.addEventListener("click", (event) => {
        console.log(event.target)
        event.target.strokeStyle= "red"
         const likeZone = event.target.parentNode
         const likeCounter = likeZone.querySelector("span")
         likeCounter.innerHTML++
         likeIcon.removeEventListener('click', event)
        
     })
 }



