let header = document.querySelector('.header')
let headerClasslist = header.classList
let articleArea = document.querySelector('.article-area')
let articleAreaClasslist = articleArea.classList
let footer = document.querySelector('.footer')
let footerClasslist = footer.classList

let messageBtn = document.querySelector('.message-img')
let sidebarRight = document.querySelector('.sidebar-right')
let sidebarRightClassList = sidebarRight.classList

messageBtn.addEventListener('click', () => {
    sidebarRightClassList.toggle('active-right')
    headerClasslist.toggle('shadowMode')
    articleAreaClasslist.toggle('shadowMode')
    footerClasslist.toggle('shadowMode')
})

let profilImg = document.querySelector('.user-img')
let sidebarLeft = document.querySelector('.sidebar-left')
let sidebarLeftClassList = sidebarLeft.classList


profilImg.addEventListener('click', () => {
    sidebarLeftClassList.toggle('active-left')
    headerClasslist.toggle('shadowMode')
    articleAreaClassList.toggle('shadowMode')
    footerClasslist.toggle('shadowMode')
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



