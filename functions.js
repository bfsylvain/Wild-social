export function createElement(objet, parent) {
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
    const senderTime = document.createElement('p')
    senderTime.innerText = objet.date
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