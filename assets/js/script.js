// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mudar navbar no scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 26, 36, 0.95)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.backgroundColor = 'rgba(17, 40, 54, 0.9)';
            navbar.style.padding = '1rem 0';
        }
    });
    
    // Carrossel de frases
    const fraseItems = document.querySelectorAll('.frase-item');
    const prevBtn = document.querySelector('.frase-prev');
    const nextBtn = document.querySelector('.frase-next');
    let currentIndex = 0;
    
    function showFrase(index) {
        fraseItems.forEach(item => item.classList.remove('active'));
        fraseItems[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextFrase() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= fraseItems.length) nextIndex = 0;
        showFrase(nextIndex);
    }
    
    function prevFrase() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = fraseItems.length - 1;
        showFrase(prevIndex);
    }
    
    nextBtn.addEventListener('click', nextFrase);
    prevBtn.addEventListener('click', prevFrase);
    
    // Auto-rotacionar frases
    let fraseInterval = setInterval(nextFrase, 5000);
    
    // Pausar ao interagir
    const carouselContainer = document.querySelector('.frases-carousel');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(fraseInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        fraseInterval = setInterval(nextFrase, 5000);
    });
    
    // Mostrar primeira frase
    showFrase(0);
});