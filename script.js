// FICHIER JS PRINCIPAL

// Import des fonctions depuis functions.js
import {
  //createArticle,
  createProfile,
  removeShadowMode1,
  removeShadowMode,
  addShadowMode,
  shadowModeToggle,
  createPost,
  createComment,
  createMessage,
} from "./functions.js";

import {
  user,
  comments,
  posts,
  messageSenders,
} from "./objects_to_localStorage.js";

// Récupération des noeuds HTML dans des variables JS
const header = document.querySelector(".header");
const articleArea = document.querySelector(".article-area");
const main = document.querySelector(".main");

const messageBtn = document.querySelector(".message-img");
const profileBtn = document.querySelector(".user-img");
const wildBtn = document.querySelector(".website-img");

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

let messageStorage = JSON.stringify(messageSenders);
window.localStorage.setItem("messages", messageStorage);

// Utiliser le local storage pour les posts
let postsStorage;
if (localStorage.getItem("posts")) {
  postsStorage = JSON.parse(localStorage.getItem("posts"));
} else {
  postsStorage = JSON.stringify(posts);
  window.localStorage.setItem("posts", postsStorage);
}

// affichage des posts
postsStorage = JSON.parse(localStorage.getItem("posts"));
for (let i = postsStorage.length - 1; i >= 0; i--) {
  createPost(postsStorage[i], articleArea, [i]);
}

let commentsStorage;
// Utiliser le local storage pour les commentaires
if (localStorage.getItem("comments")) {
  commentsStorage = JSON.parse(localStorage.getItem("comments"));
} else {
  commentsStorage = JSON.stringify(comments);
  window.localStorage.setItem("comments", commentsStorage);
}

let likeBtns = document.querySelectorAll(".like-img");
let commentBtn = document.querySelectorAll(".comment-img");

// Affichage du profil utilisateur (barre latérale gauche)
createProfile(user, profile);

// Affichage des messages (barre latérale droite)
for (let messageSender of messageSenders) {
  createMessage(messageSender, messageArea);
}
const commentsPopupMsgs = document.querySelector(".commentsPopup-msgs");

for (let messageSender of messageSenders) {
  createMessage(messageSender, commentsPopupMsgs);
}

// Afficher ou masquer le header en fonction du scroll
let lastScroll = 0;
window.addEventListener("scroll", () => {
  if (window.innerWidth < 768) {
    if (window.scrollY < lastScroll) {
      header.style.top = 0;
    } else {
      header.style.top = "-8vh";
      sidebarLeft.classList.remove("active-left");
      sidebarRight.classList.remove("active-right");
      removeShadowMode1();
    }
    lastScroll = window.scrollY;
  }
});
// Bouton Wild Home remonte les posts
wildBtn.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
});

// Le bouton "messages" ouvre la barre latérale droite
messageBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    sidebarRight.classList.toggle("active-right");
    profileBtn.inert = true;
    postBtn.inert = true;
    shadowModeToggle();
  }
});

const seeAllBtn = document.querySelector(".messages-footer");
const commentsPopup = document.querySelector(".commentsPopup");

seeAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  commentsPopup.classList.add("pop");
});

// Le bouton "profil" ouvre la barre latérale gauche
profileBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    sidebarLeft.classList.toggle("active-left");
    messageBtn.inert = true;
    postBtn.inert = true;
    shadowModeToggle();
    header.classList.toggle("shadowMode");
  }
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
  ) {
    sidebarLeft.classList.remove("active-left");
    sidebarRight.classList.remove("active-right");
    newpostContainer.classList.remove("showComment");
    messageBtn.inert = false;
    profileBtn.inert = false;
    postBtn.inert = false;
    removeShadowMode1();
    removeShadowMode();
  }
});

// Incrémente ou décrémente le nombre de likes quand on clique sur l'icone dédiée
const library = new Set();
likeBtns.forEach((likeBtn, key) => {
  likeBtn.addEventListener("click", (event) => {
    const likeZone = event.target.parentNode;
    const likeCounter = likeZone.querySelector("span");
    if (library.has(key)) {
      event.target.src = "assets/icons/icon-heart.svg";
      likeCounter.innerHTML--;
      library.delete(key);
    } else {
      event.target.src = "assets/icons/icon-heart-red-outline.svg";
      likeCounter.innerHTML++;
      library.add(key);
    }
  });
});

// Affiche la popup "commentaires" quand on clique sur l'icone dédiée
const commentsLibrary = new Set();

commentBtn.forEach((button) =>
  button.addEventListener("click", (event) => {
    const targetPost = event.target.parentNode.parentNode.parentNode;
    commentsLibrary.add(parseInt(targetPost.id));
    //remets le conteneur à vide
    commentContainerContent.innerHTML = "";
    //recupere les commentaires et trie ceux liés à l'article
    commentsStorage = JSON.parse(localStorage.getItem("comments"));
    let matchUser = commentsStorage.filter(
      (comment) => comment.postId === parseInt(targetPost.id)
    );
    matchUser.forEach((match) => createComment(match, commentContainerContent));
    commentContainer.classList.add("showComment");
  })
);

// Masque la popup "commentaires" quand on clique sur "Annuler"
for (let cancelBtn of cancelBtns) {
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    commentContainer.classList.remove("showComment");
    newpostContainer.classList.remove("showComment");
    removeShadowMode();

    commentInput.value = "";
    commentsLibrary.clear();
  });
}

//Creation class pour commentaire d'un post
class Post {
  constructor(id, comment) {
    this.postId = id;
    (this.profilePic = "assets/img/profile/damien-jean.jpeg"),
      (this.firstname = user.firstname),
      (this.lastname = user.lastname),
      (this.date = getCurrentDate()),
      (this.text = comment);
  }
}

// Crée le commentaire quand on clique sur "Envoyer"
let commentInput = document.querySelector(".comment-txt");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const allPosts = document.querySelectorAll(".article");
  const targetPost = Array.from(allPosts).filter(
    (post) => parseInt(post.id) === [...commentsLibrary][0]
  );
  const commentCounter = targetPost[0].querySelector(".comment-span");
  commentCounter.innerHTML++;
  commentContainer.classList.remove("showComment");
  removeShadowMode();

  let newComment = commentInput.value;
  const essaiCommentaire = new Post([...commentsLibrary][0], newComment);
  comments.push(essaiCommentaire);
  //Envoi d'un nouveau commentaire dans le local storage
  let commentSenders = window.localStorage.getItem("comments");
  let commentsList = JSON.parse(commentSenders);
  commentsList.push(essaiCommentaire);
  commentsStorage = JSON.stringify(commentsList);
  window.localStorage.setItem("comments", commentsStorage);
  ////////////////////////////////////////////////////////
  user.message = newComment;
  commentInput.value = "";
  commentsLibrary.clear();
  commentContainerContent.innerHTML = "";
});

let postInput = document.querySelector(".post-txt");
let postSubmitBtn = document.querySelector(".submit-post");

//Ajouter un nouveau post
postSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let postsStorage = JSON.parse(localStorage.getItem("posts"));
  let userPost = user;
  userPost.profilePic = "assets/img/profile/damien-jean.jpeg";
  userPost.date = getCurrentDate();
  userPost.text = postInput.value;
  userPost.id = postsStorage.length;

  postsStorage.push(userPost);
  articleArea.innerHTML = "";
  for (let i = postsStorage.length - 1; i >= 0; i--) {
    createPost(postsStorage[i], articleArea, [i]);
  }
  let newPostStorage = JSON.stringify(postsStorage);
  window.localStorage.setItem("posts", newPostStorage);

  //remets à jour la liste des msg btns apres creation post
  commentBtn = document.querySelectorAll(".comment-img");

  //Réactive tous les boutons message apres creation d'un nouveau post
  commentBtn.forEach((button) =>
    button.addEventListener("click", (event) => {
      const targetPost = event.target.parentNode.parentNode.parentNode;
      commentsLibrary.add(parseInt(targetPost.id));
      commentContainerContent.innerHTML = "";
      commentsStorage = JSON.parse(localStorage.getItem("comments"));

      let matchUser = commentsStorage.filter(
        (comment) => comment.postId === parseInt(targetPost.id)
      );
      matchUser.forEach((match) =>
        createComment(match, commentContainerContent)
      );
      addShadowMode();

      commentContainer.classList.add("showComment");
    })
  );
  //remets à jour la liste des boutons like après création d'un post
  likeBtns = document.querySelectorAll(".like-img");

  //Réactive tous les boutons like après création d'un post
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

  postInput.value = "";
  newpostContainer.classList.remove("showComment");
  removeShadowMode();
});

// Affiche la popup "New post" quand on clique sur le bouton "+"
postBtn.addEventListener("click", () => {
  newpostContainer.classList.add("showComment");
  messageBtn.inert = true;
  profileBtn.inert = true;
  addShadowMode();
});

// Le bouton "home" remonte en haut de la liste de posts
homeBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Affichage Dates
function getCurrentDate() {
  let date = new Date();

  let options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleString("fr-FR", options);
}
