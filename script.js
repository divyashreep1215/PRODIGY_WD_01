document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // 1. SCROLL EFFECT: Toggle Navbar Background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. MOBILE MENU: Toggle Toggle Functionality
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Basic hamburger animation state (optional: add CSS for .toggle)
        hamburger.classList.toggle('toggle');
    });

    // 3. AUTO-CLOSE: Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});