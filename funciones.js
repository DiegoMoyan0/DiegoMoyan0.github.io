// Agrega un efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(enlace => {
    enlace.addEventListener('click', e => {
        e.preventDefault();
        const seccion = document.querySelector(e.target.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});