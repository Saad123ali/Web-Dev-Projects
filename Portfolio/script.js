// The javascript for hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
// The javascript for dark and light mode and also header 
const toggleDark = document.getElementById("sun");
const body = document.body;
const header = document.querySelector("header");
toggleDark.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        header.classList.remove("dark");
        header.classList.add("light");
        toggleDark.classList.remove("bi-brightness-high-fill");
        toggleDark.classList.add("bi-moon-fill");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        header.classList.remove("light");
        header.classList.add("dark");
        toggleDark.classList.remove("bi-moon-fill");
        toggleDark.classList.add("bi-brightness-high-fill");
    }
    // body.style.transition = "2s";
});
// The javascript for typing animations
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
        strings: ['Saad Ali.', 'Programmer.', 'Web Designer.'],
        typeSpeed: 60,
        loop: true,  
        loopCount: Infinity,  
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,  
        backSpeed: 30,
    });
});
