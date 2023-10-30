const menuIcon = document.querySelector(".container__menuIcon");
const markIcon = document.querySelector(".container__markIcon");
const navMobile = document.querySelector(".nav__mobile");
const navMobilelinks = document.querySelectorAll(".nav__ul--mobile .nav__li .nav__li--a");

menuIcon.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    navMobile.classList.toggle("active");
});

markIcon.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    document.body.style.overflow = "auto";
    
})

navMobilelinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMobile.classList.toggle("active");
        document.body.style.overflow = "auto";
    })
})






