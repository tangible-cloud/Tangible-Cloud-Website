const hamburgerMenu = document.querySelector('.hamburger_menu');
const mobileMenuContainer = document.querySelector('nav.nav > .mobile_menu_container');
const mobileMenu = document.querySelector('nav.nav > .mobile_menu_container > .mobile_nav');
const sections = document.querySelectorAll('section');

hamburgerMenu.addEventListener('click', () => {
    mobileMenuContainer.classList.toggle('selected_state');
    mobileMenu.classList.toggle('show_menu');
});

window.document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    let stickyPoint = navbar.offsetTop;
    
    if (window.scrollY > stickyPoint) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

sections.forEach(section => {
    section.addEventListener('click', () => {
        mobileMenuContainer.classList.remove('selected_state');
        mobileMenu.classList.remove('show_menu');
    });
});

