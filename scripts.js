// Animación para las secciones al hacer scroll
const sections = document.querySelectorAll('.section');
const options = {
    root: null,
    threshold: 0.1,
};

// Observador para aplicar animaciones al desplazarse
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Animación para el carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-container img');
const totalSlides = slides.length;

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * 50; // Ajusta el desplazamiento al ancho de la imagen (50%)
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Cambia de imagen automáticamente cada 10 segundos
setInterval(() => {
    moveSlide(1);
}, 10000);
