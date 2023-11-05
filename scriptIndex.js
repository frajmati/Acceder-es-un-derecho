//PANTALLA DE CARGA

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1200);
    
});



