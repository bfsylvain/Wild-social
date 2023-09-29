// Animation de la barre nav lors d'un scroll //
const navigation = document.querySelector("header.header");
window.addEventListener("scroll", (e) => {
  console.log(window.e);
});

/* window.addEventListener('scroll', () => {

    if (window.scrollY > 120) {
        navigation.style.top = ("-70px");
    } else { 
        navigation.style.top = 0;
}
}); */

// Animation du pop up Message //

const message = document.querySelector(".mail");
const popUpMessage = document.querySelector(".popUpMessage");

message.addEventListener("click", () => {
  popUpMessage.style.left = "150px";
});
