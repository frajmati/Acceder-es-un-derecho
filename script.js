const menuIcon = document.getElementById("menuIcon"); // Ícono Hamburger
const navUl = document.querySelector(".nav__ul"); //Ul con links
const markIcon = document.querySelector(".container__markIcon"); 
const navLinks = document.querySelectorAll(".nav__li--a");
const body = document.body;

menuIcon.addEventListener("click", () => {
    navUl.classList.toggle("active");
    markIcon.classList.toggle("active");
    menuIcon.style.display = "none";
    body.style.overflow = "hidden";
});

markIcon.addEventListener("click", () => {
    menuIcon.style.display = "block";
    navUl.classList.toggle("active");
    markIcon.classList.toggle("active");
    body.style.overflow = "auto";
    
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuIcon.style.display = "block";
        markIcon.classList.toggle("active");
        navUl.classList.toggle("active");
        body.style.overflow = "auto";
    })
})