//PANTALLA DE CARGA

const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

// window.addEventListener('load', function () {
//     loader.style.display = 'block';
//     setTimeout(() => {
//         loader.style.display = 'none';
//         content.style.display = 'block';
//     }, 1200);
// });

loader.style.display = 'none';
        content.style.display = 'block';



//SCRIPT PARA QUE ESCRIBA EL CÓDIGO CON JS

//ELEMENTOS
// indexInfo es el div en el que se van a escribir las secciones
const indexInfo = document.querySelector('.info');
//Links del header
const logoLink = document.querySelector(".main__logoLink");
const proyectoLink = document.querySelector(".li__a--proyecto");
const institucionesLink = document.querySelector(".li__a--instituciones");
const equipoLink = document.querySelector(".li__a--equipo");
const recursosLink = document.querySelector(".li__a--recursos");
const contactoLink = document.querySelector(".li__a--contacto");

let mainInfo = 
`
<main class="main" id="inicio">
        <div class="container__left">
            <div class="container__h1">
                <h1 class="main__h1">Acceder es un derecho</h1>
            </div>
            <a href="proyecto.html" class="main__a">Conocer más</a>
        </div>
        <div class="container__imgMain">
            <img src="img/logo.svg" alt="Logo del sitio web" class="main__img">
        </div>
        <section class="section__wave">
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
            <div class="wave wave4"></div>
        </section>
    </main>
`;

let proyectoInfo = `

<section class="proyecto">
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

let institucionesInfo = `
<section class="instituciones">
        <h2 class="instituciones__h2" id="proyecto">Instituciones</h2>
        <p class="instituciones__p">Las instituciones que trabajan articuladamente en el proyecto son:</p>
        <ul class="instituciones__ul">
            <li class="instituciones__li">
                <u>Facultad de Educación:</u> a través de la secretaría de Extensión que coordina la propuesta, su Programa EBA (Ecosistema Bimodal de Aprendizaje) y el espacio curricular "Tecnología Digital en las prácticas escolares”.
            </li>
            <li class="instituciones__li">
                <u>Escuela N° 4-020 Ingeniero Gabriel del Mazo:</u> se destaca por su capacidad para adaptar dispositivos electrónicos como parte de la formación de futuros técnicos. Esto otorga a los estudiantes una visión integral del mundo laboral y les permite desarrollar habilidades técnicas prácticas relacionadas con la tecnología de apoyo.
            </li>
            <li class="instituciones__li">
                <u>Escuela de Comercio Martín Zapata:</u> trabaja en la creación de contenido accesible para la web, como una extensión extraescolar del espacio curricular orientado “Proyecto de Investigación en Informática”. En este marco de trabaja en la creación y actualización de un sitio web considerando aspectos de accesibilidad creciente para los contenidos digitales; además de canales y redes sociales para asegurar la difusión del avance del proyecto; elementos gráficos, entre otras piezas digitales.
            </li>
            <li class="instituciones__li">
                <u>Institución Terapéutica Thadi y Escuela 2-033 Fidela Maldonado de Cano:</u> cuentan con personal profesional capacitado para el aprovechamiento efectivo de dispositivos. Ambas instituciones realizarán propuestas pedagógicas superadoras de su uso.
            </li>    
        </ul>
        

        

        


        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide-1 slide-item img-1">
                    <div class="textContainer">
                        <h3 class="slider-title">Título 1</h3>
                    </div>
                </div>
                <div class="swiper-slide slide-2 slide-item img-2">
                    <div class="textContainer">
                        <h3 class="slider-title">Título 2</h3>
                    </div>
                </div>
                <div class="swiper-slide slide-3 slide-item img-3">
                    <div class="textContainer">
                        <h3 class="slider-title">Título 3</h3>
                    </div>
                </div>
                <div class="swiper-slide slide-4 slide-item img-4">
                    <div class="textContainer">
                        <h3 class="slider-title">Título 4</h3>
                    </div>
                </div>
                <div class="swiper-slide slide-5 slide-item img-5">
                    <div class="textContainer">
                        <h3 class="slider-title">Título 5</h3>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

`;

let equipoInfo = `
<section class="equipo">
        <h2 class="equipo__h2" id="proyecto">Equipo</h2>
        <p class="equipo__p">
            El equipo está conformado por profesionales, docentes y estudiantes, que trabajan en forma articulada y solidaria, con el objetivo de establecer una relación crítica y participativa que permita habilitar soluciones a problemáticas de las personas con discapacidad, relacionadas con el uso de tecnologías de apoyo. La fortaleza de este equipo interdisciplinario radica en la experiencia de cada uno de sus miembros. Desde el diagnóstico pedagógico, hasta la implementación de soluciones técnicas, la capacitación tecno-pedagógica y la generación de contenidos accesibles.
        </p>
        <p class="equipo__p equipo__p--escuela">Facultad de Educación UNCUYO</p>
        <ul class="equipo__ul">
            <li class="equipo__li">Adriana Moreno (Secretaria de Extensión FED)</li>
            <li class="equipo__li">Viviana Andrea Leo (Directora del proyecto)</li>
            <li class="equipo__li">Alejandro Omar Guerra</li>
            <li class="equipo__li">Carlos Omar Arancibia</li>
            <li class="equipo__li">Fernanda Ozollo</li>
            <li class="equipo__li">Javier Osimani</li>
        </ul>  
        <p class="equipo__p equipo__p--escuela">Escuela de Comercio Martín Zapata UNCUYO</p>
        <ul class="equipo__ul">
            <li class="equipo__li">Matías Oliva (Estudiante)</li>
            <li class="equipo__li">Josefina Ravotti (Estudiante)</li>
            <li class="equipo__li">Juan Manuel Frajberg (Estudiante)</li>
            <li class="equipo__li">Matías Frajberg (Estudiante)</li>
            <li class="equipo__li">Cristina Iriarte (Docente)</li>
            <li class="equipo__li">Cristian Gamba (Director)</li>
        </ul>  
        <p class="equipo__p equipo__p--escuela">Escuela 4-020 Ingeniero Gabriel del Mazo DGE</p>
        <ul class="equipo__ul">
            <li class="equipo__li">Aguilera Gastón (Estudiante)</li>
            <li class="equipo__li">Lucas Romero (Estudiante)</li>
            <li class="equipo__li">Gramajo Mauro (Estudiante)</li>
            <li class="equipo__li">Miranda Alejo (Estudiante)</li>
            <li class="equipo__li">Luciano Vallone (Estudiante)</li>
            <li class="equipo__li">Ismael Póquet (Estudiante)</li>
            <li class="equipo__li">Lautaro Arancibia (Estudiante)</li>
            <li class="equipo__li">Gabriel Olivares (Docente)</li>
            <li class="equipo__li">Pablo Leiva (Docente)</li>
            <li class="equipo__li">Carlos Esteban (Docente)</li>
            <li class="equipo__li">Lucía Zárate (Directora)</li>
        </ul>  
        <p class="equipo__p equipo__p--escuela">Escuela 2-033 Fidela Maldonado de Cano DGE</p>
        <ul class="equipo__ul">
            <li class="equipo__li">Cristina Da Lozzo (Docente)</li>
            <li class="equipo__li">Cintia Comella (Docente)</li>
            <li class="equipo__li">Mariela Climiño (Directora)</li>
        </ul>  
        <p class="equipo__p equipo__p--escuela">Institución Terapéutica Thadi</p>
        <ul class="equipo__ul">
            <li class="equipo__li">Marina Vidal (Docente)</li>
            <li class="equipo__li">Sonia Viviana Parlanti (Directora)</li>
        </ul>      
    </section>`;
let recursosInfo = 
    `<section class="equipo">
        <h2 class="equipo__h2" id="proyecto">Recursos</h2>
        <p class="equipo__p">
            Tutoriales:
        </p>  
    </section>`
;
let contactoInfo = 
`<section class="contacto">
<h2 class="contacto__h2" id="proyecto">Contacto</h2>
<form action="https://formsubmit.co/06e91e179444aa564735ce1838e1e896" method="POST" class="form">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="http://127.0.0.1:5500/gracias.html">
    <input type="name" name="Nombre" placeholder="Nombre" required>
    <input type="email" name="Correo electrónico" placeholder="Correo electrónico" required>
    <textarea name="Información" placeholder="Cuerpo del mensaje"></textarea>
    <input type="submit" value="Enviar" class="btn__submit"></input>
</form>
<!-- ÍCONOS EN BALCNO Y NEGRO, LES DOY CLICK Y CAMBIAN A SU COLOR ORIGINAL -->
<div class="redes">
    <a href="https://www.instagram.com/accederesunderecho/" target="_blank" class="redes__a" aria-label="Visitar la cuenta de Instagram del proyecto"><i class="fa-brands fa-instagram instagramIcon"></i></a>
    <a href="https://www.youtube.com/@comunicaciondigitalmz" target="_blank" class="redes__a" aria-label="Visitar la cuenta de YouTube del proyecto"><i class="fa-brands fa-youtube youtubeIcon"></i></a>
    <a href="mailto:viandrealeo@gmail.com" target="_blank" class="redes__a" aria-label="Enviar un correo electrónico al organizador"><i class="fa-solid fa-envelope mailIcon"></i></a>
</div>
</section>`
;

indexInfo.innerHTML = institucionesInfo;

logoLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.title = "Acceder es un derecho | Inicio";
    indexInfo.innerHTML = mainInfo;
});

proyectoLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.title = "Acceder es un derecho | Proyecto";
    indexInfo.innerHTML = proyectoInfo;
});

institucionesLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.title = "Acceder es un derecho | Instituciones";
    indexInfo.innerHTML = institucionesInfo;
});

equipoLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.title = "Acceder es un derecho | Equipo";
    indexInfo.innerHTML = equipoInfo;
});

recursosLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.title = "Acceder es un derecho | Recursos";
    indexInfo.innerHTML = recursosInfo;
});

contactoLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.title = "Acceder es un derecho | Contacto";
    indexInfo.innerHTML = contactoInfo;
});



