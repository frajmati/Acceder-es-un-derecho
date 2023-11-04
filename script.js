//MENÚ

const menuIcon = document.querySelector(".container__menuIcon");
// const markIcon = document.querySelector(".container__markIcon");
const navMobile = document.querySelector(".nav__mobile");
const navMobilelinks = document.querySelectorAll(".nav__ul--mobile .nav__li .nav__li--a");

menuIcon.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    navMobile.classList.toggle("active");
});

// markIcon.addEventListener("click", () => {
//     navMobile.classList.toggle("active");
//     document.body.style.overflow = "auto";
    
// })

navMobilelinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMobile.classList.toggle("active");
        document.body.style.overflow = "auto";
    })
})


//ANIMACIONES


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


//PANTALLA DE CARGA

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 0);
    
});



console.log(window.innerHeight);

alert("Altura: " + window.innerHeight);
alert("Ancho: " + window.innerWidth);