let messageBtn = document.querySelector('.message-img')
console.log(messageBtn)
let messageList = document.querySelector('.list-msg')
let messageClasslist = messageList.classList

let header = document.querySelector('.header')
let headerClasslist = header.classList
let mainPage = document.querySelector('.mainPage')
let mainPageClasslist = mainPage.classList
let footer = document.querySelector('.footer')
let footerClasslist = footer.classList

messageBtn.addEventListener('click', () => {
    messageClasslist.toggle('active')
    headerClasslist.toggle('shadowMode')
    mainPageClasslist.toggle('ShadowMode')
    footerClasslist.toggle('shadowMode')
})

let profilImg = document.querySelector('.profile-img')
let sidebarList = document.querySelector('.sidebar-list')
let sidebarListClasslist = sidebarList.classList

profilImg.addEventListener('click', () => {
    sidebarListClasslist.toggle('activeLeft')
    headerClasslist.toggle('shadowMode')
    mainPageClasslist.toggle('ShadowMode')
    footerClasslist.toggle('shadowMode')
})