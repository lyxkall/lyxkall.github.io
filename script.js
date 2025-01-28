// *========== scroll sections active link ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// *========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section'); // Perbaikan selector
let navLinks = document.querySelectorAll('.navbar a'); // Perbaikan selector

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Perbaiki logika highlight active
      navLinks.forEach(link => {
        link.classList.remove('active');
        let targetLink = document.querySelector('.navbar a[href*=' + id + ']');
        if (targetLink) {
          targetLink.classList.add('active');
        }
      });
    }
  });

  // Sticky navbar */
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);

/*========== remove menu icon navbar when click navbar link (scroll) =========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*========== Swiper Configuration =========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/*========== dark light mode =========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*========== Scroll Reveal =========*/
ScrollReveal({
  //  reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .conttact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img,', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content,', { origin: 'right' });