//PANTALLA DE CARGA

const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

window.addEventListener('load', function () {
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1200);
});




