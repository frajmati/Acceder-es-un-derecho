const links = document.querySelectorAll(".nav__li--a");
const navInfo = document.querySelector(".nav__info");



links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        navInfo.classList.toggle("active");
    })
    link.addEventListener("mouseout", () => {
        navInfo.classList.toggle("active");
    })
})

const menuIcon = document.getElementById("menuIcon");
const navUl = document.querySelector(".nav__ul");

menuIcon.addEventListener("click", () => {
    navUl.classList.toggle("active");
});