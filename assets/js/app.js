//*================ SHOW MENU================ //
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

//* ===== MENU SHOW ======================
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

//*======MENU HIDDEN ======
// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

//**===================REMOVE MENU MOBILE========================= */

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  //When we click on each nav__link, we remove the show-menu
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

//* ================HOME SWIPER ==========================
let homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: 'true',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//*=========================== CHANGE BACKGROUND HEADER========================

function scrollHeader() {
  const header = document.getElementById('header');

  //When the scroll is greater than 100 viewport height , add
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//*=========================NEW SWIPER=================================
let newSwiper = new Swiper('.new-swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: 'true',
});

//* ==========================SCROLL SECTION ACTIVE LINK=======================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // может 50
    sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

//* ===================SHOW SCROLL UP===================================
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

//*==========SCROLL REVEAL=======================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset:true
});

sr.reveal('.home-swiper, .new-swiper, .newsletter__container');
sr.reveal('.category__data, .trick__content, .footer__content', {
  interval: 100,
});
sr.reveal('.about__data, .discount__img', { origin: 'left' });
sr.reveal('.about__img, .discount__data', { origin: 'right' });

//*=================Colorful Rain===================================
function rain() {
  let amount = 100;
  let body = document.querySelector('body');
  let i = 0;

  while (i < amount) {
    let drop = document.createElement('i');
    drop.classList.add('rainItem');
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';

    body.appendChild(drop);
    i++;
  }
  console.log(body);
}
rain();

// i {
//   // ! Моё добавление
//    top: 0;
//   //================
//   position: absolute;
//   height: 200px;
//   background: linear-gradient(transparent, #fff);
//   border-bottom-left-radius: 5px;
//   border-bottom-right-radius: 5px;

//   animation: animate 5s linear infinite;
// }
// i:nth-child(3n + 1) {
//   background: linear-gradient(transparent, #0ff);
// }
// i:nth-child(3n + 2) {
//   background: linear-gradient(transparent, #0f0);
// }

// i:nth-child(3n + 3) {
//   background: linear-gradient(transparent, #f00);
// }

// @keyframes animate {
//   0% {
//     transform: translateY(-200px);
//   }
//   100% {
//     transform: translateY(calc(100vh + 200px));
//   }
// }
