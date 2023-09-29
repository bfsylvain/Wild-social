// FICHIER JS PRINCIPAL

// Import des fonctions depuis functions.js
import {
  createArticle,
  createProfile,
  removeShadowMode1,
  removeShadowMode,
  addShadowMode,
  shadowModeToggle,
  createPost
} from "./functions.js";

// Récupération des noeuds HTML dans des variables JS
const header = document.querySelector(".header");
const articleArea = document.querySelector(".article-area");
const footer = document.querySelector(".footer");


const messageBtn = document.querySelector(".message-img");
const profileBtn = document.querySelector(".user-img");

const commentContainer = document.querySelector(".comment-container");
const cancelBtns = document.querySelectorAll(".cancel");

const submitBtn = document.querySelector(".submit");

const sidebarRight = document.querySelector(".sidebar-right");
const sidebarLeft = document.querySelector(".sidebar-left");

const messageArea = document.querySelector(".message-area");

const profile = document.querySelector(".user-profile");

const commentContainerContent = document.querySelector(
  ".comment-container-content"
);

const postBtn = document.querySelector(".post-button");
const newpostContainer = document.querySelector(".newpost-container");

const homeBtn = document.querySelector(".homeBtn");

// Création d'un tableau d'objets représentant les messages du site
const messageSenders = [
  {
    date: "hier",
    firstname: "Cédric",
    lastname: "D",
    message: "Apéro ?",
  },
  {
    date: "hier",
    firstname: "John",
    lastname: "John",
    message: "Banana Banana Banana Banana Banana",
  },
  {
    date: "hier",
    firstname: "John",
    lastname: "Bob",
    message: "Banana Banana Banana Banana Banana",
  },
];

// Création de l'objet "profil de l'utilisateur"
const user = {
  firstname: "Mr",
  lastname: "Fantastic",
  abonnes: 1961,
  abonnements: 3,
  date: "A l'instant"
};

const posts = [
  {
    profilePic: "assets/img/user1.png",
    firstname: "John",
    lastname: "John",
    date: "demain",
    text: "Un post blablabla",
    picture: "assets/img/post1.png"
  },
  {
    profilePic: "assets/img/user1.png",
    firstname: "John",
    lastname: "Wick",
    date: "hier",
    text: "Do you knox who I am ?!",
    picture: "assets/img/post1.png"
  },
  {
    profilePic: "assets/img/user1.png",
    firstname: "John",
    lastname: "Snow",
    date: "avant-hier",
    text: "You know nothing...",
    picture: "assets/img/post1.png"
  },
  {
    profilePic: "assets/img/user1.png",
    firstname: "John",
    lastname: "John",
    date: "demain",
    text: "Un post blablabla",
    picture: "assets/img/post1.png"
  },
  {
    profilePic: "assets/img/user1.png",
    firstname: "John",
    lastname: "Wick",
    date: "hier",
    text: "Do you knox who I am ?!",
    picture: "assets/img/post1.png"
  },
  {
    profilePic: "assets/img/user1.png",
    firstname: "John",
    lastname: "Rambo",
    date: "avant-hier",
    text: "C'était pas ma guerre, Adrienne !",
    picture: "assets/img/post1.png"
  }

]
// affichage des posts
for(let i = posts.length - 1; i >= 0; i--) {
  createPost(posts[i], articleArea)
}

const likeBtns = document.querySelectorAll(".like-img");
const commentBtn = document.querySelectorAll(".comment-img");
const lastComments = document.querySelectorAll(".last-comment");


console.log(commentBtn)

// Affichage du profil utilisateur (barre latérale gauche)
createProfile(user, profile);

// Affichage des messages (barre latérale droite)
for (let messageSender of messageSenders) {
  createArticle(messageSender, messageArea);
}

// Affichage des commentaires (popup en bas)
for (let messageSender of messageSenders) {
  createArticle(messageSender, commentContainerContent);
}

// Afficher ou masquer le header en fonction du scroll
let lastScroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    header.style.top = 0;
  } else {
    header.style.top = "-8vh";
    sidebarLeft.classList.remove("active-left");
    sidebarRight.classList.remove("active-right");
    removeShadowMode1();
  }
  lastScroll = window.scrollY;
});

// Le bouton "messages" ouvre la barre latérale droite
messageBtn.addEventListener("click", () => {
  sidebarRight.classList.toggle("active-right");
  profileBtn.inert =true
  postBtn.inert = true
  shadowModeToggle();
});

// Le bouton "profil" ouvre la barre latérale gauche
profileBtn.addEventListener("click", () => {
  sidebarLeft.classList.toggle("active-left");
  messageBtn.inert = true
  postBtn.inert = true
  shadowModeToggle();
  header.classList.toggle("shadowMode");
});

// Fermer la sidebar si on clique en dehors des sidebars ou du slider nouveau post
document.addEventListener("click", (e) => {
  if (
    !sidebarRight.contains(e.target) &&
    !sidebarLeft.contains(e.target) &&
    !newpostContainer.contains(e.target) &&
    e.target !== messageBtn &&
    e.target !== profileBtn &&
    e.target !== postBtn
  ) 
  {
    sidebarLeft.classList.remove("active-left");
    sidebarRight.classList.remove("active-right");
    newpostContainer.classList.remove("showComment");
    messageBtn.inert = false
    profileBtn.inert = false
    postBtn.inert = false
    removeShadowMode1();
    removeShadowMode()
  }
});

// Incrémente ou décrémente le nombre de likes quand on clique sur l'icone dédiée
const library = new Set();
likeBtns.forEach((likeBtn, key) => {
  likeBtn.addEventListener("click", (event) => {
    const likeZone = event.target.parentNode;
    const likeCounter = likeZone.querySelector("span");
    if (library.has(key)) {
      likeCounter.innerHTML--;
      library.delete(key);
    } else {
      event.target.strokeStyle = "red";
      likeCounter.innerHTML++;
      library.add(key)
    }
  });
});

// Affiche la popup "commentaires" quand on clique sur l'icone dédiée
const commentsLibrary = new Set();

commentBtn.forEach((button, index) =>
  button.addEventListener("click", () => {
    commentsLibrary.add(index);
    console.log(commentsLibrary)
    addShadowMode()
    // header.style.filter = "brightness(50%)"
    // articleArea.style.filter = "brightness(50%)"
    // footer.style.filter = "brightness(50%)"
    commentContainer.classList.add("showComment");
  })
);

// Masque la popup "commentaires" quand on clique sur "Annuler"
for(let cancelBtn of cancelBtns) {
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    commentContainer.classList.remove("showComment");
    newpostContainer.classList.remove("showComment");
    removeShadowMode()
    // header.style.filter = "brightness(100%)"
    // articleArea.style.filter = "brightness(100%)"
    // footer.style.filter = "brightness(100%)"
    commentInput.value = "";
    commentsLibrary.clear();
  })
};

// Crée le commentaire quand on clique sur "Envoyer"
let commentInput = document.querySelector(".comment-txt");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const commentsZoneTarget = commentBtn[[...commentsLibrary][0]].parentNode;
  const commentsCounter = commentsZoneTarget.querySelector("span");
  commentsCounter.innerHTML++;
  commentContainer.classList.remove("showComment");
  removeShadowMode()
  // header.style.filter = "brightness(100%)"
  // articleArea.style.filter = "brightness(100%)"
  // footer.style.filter = "brightness(100%)"
  console.log(commentInput.value);
  let newComment = commentInput.value;
  user.message = newComment;
  createArticle(user, lastComments[[...commentsLibrary][0]]);
  commentInput.value = "";
  commentsLibrary.clear();
});

let postInput = document.querySelector(".post-txt")
let postSubmitBtn = document.querySelector(".submit-post")

postSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userPost = user;
  userPost.profilePic = "assets/img/user1.png";
  userPost.date = "A l'instant";
  userPost.text = postInput.value;
  userPost.picture = "assets/img/post1.png";
  posts.push(userPost)
  articleArea.innerHTML = ""
  for(let i = posts.length - 1; i >= 0; i--) {
    createPost(posts[i], articleArea)
  }
  postInput.value = ""
  newpostContainer.classList.remove("showComment")
  removeShadowMode()
})

// Affiche la popup "New post" quand on clique sur le bouton "+"
postBtn.addEventListener("click", () => {
  newpostContainer.classList.add("showComment");
  messageBtn.inert = true
    profileBtn.inert = true
  addShadowMode();
});

// Le bouton "home" remonte en haut de la liste de posts
homeBtn.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    left:0,
  behavior:"smooth"})
})

