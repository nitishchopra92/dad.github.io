AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const toggleicon = document.querySelector('.toggle-icon');
    const closeicon = document.querySelector('.closeicon');
    const nav = document.querySelector('nav');
    const navItems = nav.querySelectorAll('a');
    toggleicon.addEventListener('click', function (event) {
        nav.classList.add('active');
    });
    closeicon.addEventListener('click', function (event) {
        nav.classList.remove('active');
    });
    navItems.forEach(item => {
  item.addEventListener('click', function (event) {
    const href = item.getAttribute('href');

    // Only intercept if it's an in-page anchor link
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        nav.classList.remove('active');
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 76;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // External link or normal page navigation
      nav.classList.remove('active');
    }
  });
});

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY >= 20) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    document.querySelectorAll(".a-title").forEach(title => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling;
            const openContent = document.querySelector(".a-content.open");
            const activeTitle = document.querySelector(".a-title.active");

            if (openContent && openContent !== content) {
                openContent.classList.remove("open");
            }
            if (activeTitle && activeTitle !== title) {
                activeTitle.classList.remove("active");
            }

            // Always open the clicked one (no toggle close)
            content.classList.add("open");
            title.classList.add("active");
        });
    });


    $('.team-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.report-slider').owlCarousel({
        loop:false,
        margin:20,
        nav:false,
        dots: true,
        responsive: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    $('.events-slider').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots: true,
        responsive: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });
})