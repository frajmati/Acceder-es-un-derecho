//MENÚ

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



//CONTADOR

const infoP = document.querySelector(".info__p");


let contador = 1;
let limite = 50;

const elementoObservado = document.querySelector(".info__p");

const observerInfo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (contador == 51) {
                
            }
            else {
                let intervalo = setInterval(() => {
                    infoP.textContent = `+ ${contador}`;
                    contador++;
                  
                    if (contador > 50) {
                      clearInterval(intervalo);
                    }
                  }, 50);
            }
            
        }
    })
});

observerInfo.observe(elementoObservado);

//SCROLL TO TOP

const btn = document.querySelector(".btn__scrollToTop");

document.addEventListener("scroll",() => {
    let scrollY = (window.scrollY);

    if (scrollY > 100) {
        btn.style.opacity = 1;
    }
    else {
        btn.style.opacity = 0;
    }
})

btn.addEventListener("click", () => {
    window.scroll(0,0);
})