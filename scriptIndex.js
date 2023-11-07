//PANTALLA DE CARGA

const loader = document.querySelector('.loader');
const content = document.querySelector('.content');
const indexInfo = document.querySelector('.info');

// window.addEventListener('load', function () {
//     loader.style.display = 'block';
//     setTimeout(() => {
//         loader.style.display = 'none';
//         content.style.display = 'block';
//     }, 1200);
// });

loader.style.display = 'none';
content.style.display = 'block';



const proyectoLink = document.querySelector(".li--a--proyecto");




let proyectoInfo = `<section class="proyecto" style="animation: animationOpacity 1s;">
<h2 class="proyecto__h2" id="proyecto">Proyecto</h2>
<p class="proyecto__p">
    "Las personas con discapacidad múltiple y su derecho a acceder a las tecnologías de apoyo" es un proyecto coordinado por la Secretaría de Extensión de la Facultad de Educación y articulado con las escuelas Fidela Maldonado de Cano, Ing. Gabriel del Mazo, Thadi y Escuela de Comercio Martín Zapata.
    <br>
    Su objetivo central es ofrecer acceso a dispositivos adaptados en la búsqueda concreta de mejorar las oportunidades de comunicación, aprendizaje y calidad de vida de personas con discapacidad múltiple. Estos dispositivos no solo facilitarán la comunicación, sino que también mejorarán la participación de los estudiantes en las actividades escolares diarias en las instituciones participantes. 
    <br>
    El objetivo final es contribuir a la construcción de una educación inclusiva que promueva los derechos de todas las personas y derribe las barreras que limitan su desarrollo personal y social.
    <br>
    Está financiado por la Secretaría de Políticas Universitarias (SPU), en el marco del Programa de Fortalecimiento de la Extensión. 
</p>
<div class="container__iframe">
    <iframe src="https://www.youtube.com/embed/oGwozESziPw" title="Proyecto &quot;Las personas con discapacidad múltiple y su derecho a acceder a las tecnologías de apoyo&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="proyecto__iframe"></iframe>
</div>
</section>`;

proyectoLink.addEventListener("click", function(event) {
    event.preventDefault();
    document.title = "Acceder es un derecho | Proyecto";
    indexInfo.innerHTML = proyectoInfo;
    // Esto impedirá que el enlace te lleve a otro sitio.
});