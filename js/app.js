document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
});

function navegacionFija(){
    const barra = document.querySelector('.header');

    // Registrar el Intersection Observer (API)
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else {
            barra.classList.add('fijo');
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('#aboutme'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function(enlaces) {
        enlaces.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}