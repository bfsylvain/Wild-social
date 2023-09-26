const navigation = document.querySelector("header.header");
window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        navigation.style.top = ("-70px");
    } else { 
        navigation.style.top = 0;
}
});

