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
const lastComments = document.querySelectorAll(".last-comment");
const cancelBtn = document.querySelector(".cancel");
const submitBtn = document.querySelector(".submit");

const sidebarRight = document.querySelector(".sidebar-right");
const sidebarLeft = document.querySelector(".sidebar-left");

const messageArea = document.querySelector(".message-area");

const profile = document.querySelector(".user-profile");

const commentContainerContent = document.querySelector(
  ".comment-container-content"
);

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
  }

]
// affichage des posts
for(let i = posts.length - 1; i >= 0; i--) {
  createPost(posts[i], articleArea)
}

const likeBtns = document.querySelectorAll(".like-img");
const commentBtn = document.querySelectorAll(".comment-img");
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
    //tentative
    sidebarLeft.classList.remove("active-left");
    sidebarRight.classList.remove("active-right");
    removeShadowMode1();
  }
  lastScroll = window.scrollY;
});

// Le bouton "messages" ouvre la barre latérale droite
messageBtn.addEventListener("click", () => {
  sidebarRight.classList.toggle("active-right");
  shadowModeToggle();
});

// Le bouton "profil" ouvre la barre latérale gauche
profileBtn.addEventListener("click", () => {
  sidebarLeft.classList.toggle("active-left");
  shadowModeToggle();
  header.classList.toggle("shadowMode");
});

// Fermer la sidebar si on clique en dehors de la sidebar
document.addEventListener("click", (e) => {
  if (
    !sidebarRight.contains(e.target) &&
    e.target !== messageBtn &&
    e.target !== profileBtn
  ) {
    sidebarLeft.classList.remove("active-left");
    sidebarRight.classList.remove("active-right");
    removeShadowMode1();
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
      library.add(key);
    }
  });
});

// Affiche la popup "commentaires" quand on clique sur l'icone dédiée
const commentsLibrary = new Set();

commentBtn.forEach((button, index) =>
  button.addEventListener("click", () => {
    commentsLibrary.add(index);
    console.log(commentsLibrary)
    commentContainer.classList.add("showComment");
    addShadowMode();
  })
);

// Masque la popup "commentaires" quand on clique sur "Annuler"
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  commentContainer.classList.remove("showComment");
  removeShadowMode();
  commentInput.value = "";
  commentsLibrary.clear();
});

// Crée le commentaire quand on clique sur "Envoyer"
let commentInput = document.querySelector(".comment-txt");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const commentsZoneTarget = commentBtn[[...commentsLibrary][0]].parentNode;
  const commentsCounter = commentsZoneTarget.querySelector("span");
  commentsCounter.innerHTML++;
  commentContainer.classList.remove("showComment");
  removeShadowMode();
  console.log(commentInput.value);
  let newComment = commentInput.value;
  user.message = newComment;
  createArticle(user, lastComments[[...commentsLibrary][0]]);
  commentInput.value = "";
  commentsLibrary.clear();
});
