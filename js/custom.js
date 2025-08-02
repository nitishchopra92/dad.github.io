AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const toggleicon = document.querySelector('.toggle-icon');
    const closeicon = document.querySelector('.closeicon');
    const nav = document.querySelector('nav');
    const navItems = nav.querySelectorAll('a');
    toggleicon.addEventListener('click', function(event) {
        nav.classList.add('active');
    });
    closeicon.addEventListener('click', function(event) {
        nav.classList.remove('active');
    });
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                nav.classList.remove('active');
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 76;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY >= 10) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });
})