export function createArticle(objet, parent) {
    const message = document.createElement('div')
    message.classList.add('message')
    const profile = document.createElement('div')
    profile.classList.add('profile')
    const senderImg = document.createElement('img')
    senderImg.classList.add('sender-img')
    senderImg.setAttribute('src', 'assets/img/WF Image Placeholder.png')
    const sender = document.createElement('div')
    sender.classList.add('sender')
    const senderName = document.createElement('p')
    senderName.classList.add('sender-name')
    senderName.innerHTML = `${objet.firstname} ${objet.lastname}`
    const senderTime = document.createElement('p')
    senderTime.innerHTML = objet.date
    const msgTxt = document.createElement('div')
    msgTxt.classList.add('message-text')
    const text = document.createElement('p')
    text.classList.add('text')
    text.innerText = objet.message
    parent.appendChild(message)
    message.appendChild(profile)
    profile.appendChild(senderImg)
    profile.appendChild(sender)
    sender.appendChild(senderName)
    sender.appendChild(senderTime)
    message.appendChild(msgTxt)
    msgTxt.appendChild(text)
}

export function createProfile(objet, parent) {
    const message = document.createElement('div')
    message.classList.add('message')
    const profile = document.createElement('div')
    profile.classList.add('profile')
    const senderImg = document.createElement('img')
    senderImg.classList.add('sender-img')
    senderImg.setAttribute('src', 'assets/img/WF Image Placeholder.png')
    const sender = document.createElement('div')
    sender.classList.add('sender')
    const senderName = document.createElement('p')
    senderName.classList.add('sender-name')
    senderName.innerText = `${objet.firstname} ${objet.lastname}`
    const msgTxt = document.createElement('div')
    msgTxt.classList.add('message-text')
    const abonnements = document.createElement('p')
    abonnements.classList.add('text')
    abonnements.innerText = `${objet.abonnements} abonnements`
    const abonnes = document.createElement('p')
    abonnes.classList.add('text')
    abonnes.innerHTML = `${objet.abonnes} abonnés`
    parent.appendChild(message)
    message.appendChild(profile)
    profile.appendChild(senderImg)
    profile.appendChild(sender)
    sender.appendChild(senderName)
    message.appendChild(msgTxt)
    msgTxt.appendChild(abonnements)
    msgTxt.appendChild(abonnes)
}
let header = document.querySelector('.header')
let articleArea = document.querySelector('.article-area')
let footer = document.querySelector('.footer')

export function removeShadowMode1() {
    header.classList.remove('shadowMode');
    articleArea.classList.remove('shadowMode');
    footer.classList.remove('shadowMode');
}

export function removeShadowMode() {
    header.classList.remove('shadowMode2');
    articleArea.classList.remove('shadowMode2');
    footer.classList.remove('shadowMode2');
}

export function addShadowMode() {
    header.classList.add('shadowMode2');
    articleArea.classList.add('shadowMode2');
    footer.classList.add('shadowMode2');
}

export function shadowModeToggle() {
    header.classList.toggle('shadowMode')
    articleArea.classList.toggle('shadowMode')
    footer.classList.toggle('shadowMode')
}