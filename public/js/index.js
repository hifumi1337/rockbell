console.log("Welcome to Rockbell!");

window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navCollapse = document.body.querySelector('#mainNav');
        
        if (!navCollapse) { return; }
        
        if (window.scrollY === 0) {
            navCollapse.classList.remove('navbar-shrink')
        } else {
            navCollapse.classList.add('navbar-shrink')
        }
    };

    navbarShrink();
    
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };
    
    const navbarToggler = document.body.querySelector('.navbar-toggler');

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});