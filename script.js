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

  // Sticky header
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
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
