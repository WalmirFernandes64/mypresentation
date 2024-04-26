document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offsetTop = document.querySelector(this.getAttribute('href')).offsetTop;
        const headerHeight = document.querySelector('header').offsetHeight; // Altura do cabeçalho

        window.scrollTo({
            top: offsetTop - headerHeight, // Ajusta a posição de rolagem
            behavior: 'smooth'
        });
    });
});
