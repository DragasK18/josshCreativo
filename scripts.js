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
