// /* ==========================
//    NAVBAR SCROLL EFFECT
// ========================== */

// const navbar = document.querySelector('.custom-navbar');

// window.addEventListener('scroll', () => {

//     if (window.scrollY > 50) {

//         navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
//         navbar.style.padding = "12px 0";

//     } else {

//         navbar.style.boxShadow = "none";
//         navbar.style.padding = "18px 0";

//     }

// });


// /* ==========================
//    SCROLL SUAVE PARA LINKS
// ========================== */

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//     anchor.addEventListener('click', function (e) {

//         e.preventDefault();

//         const target = document.querySelector(this.getAttribute('href'));

//         if (target) {

//             target.scrollIntoView({

//                 behavior: 'smooth',
//                 block: 'start'

//             });

//         }

//     });

// });


// /* ==========================
//    ACTIVE LINK NO MENU
// ========================== */

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link");

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach(section => {

//         const sectionTop = section.offsetTop;

//         if (scrollY >= sectionTop - 150) {
//             current = section.getAttribute("id");
//         }

//     });

//     navLinks.forEach(link => {

//         link.classList.remove("active");

//         if (link.getAttribute("href") === "#" + current) {

//             link.classList.add("active");

//         }

//     });

// });


// /* ==========================
//    ANIMAÇÃO AO SCROLL (REVEAL)
// ========================== */

// const revealElements = document.querySelectorAll(
//     ".project-card, .timeline-item, .about-image, .skills-wrapper span"
// );

// const revealOnScroll = () => {

//     const windowHeight = window.innerHeight;

//     revealElements.forEach(el => {

//         const elementTop = el.getBoundingClientRect().top;

//         if (elementTop < windowHeight - 100) {

//             el.style.opacity = "1";
//             el.style.transform = "translateY(0)";
//             el.style.transition = "all 0.6s ease";

//         }

//     });

// };

// window.addEventListener("scroll", revealOnScroll);


// /* ==========================
//    ESTADO INICIAL (ANIMAÇÃO)
// ========================== */

// window.addEventListener("load", () => {

//     revealElements.forEach(el => {

//         el.style.opacity = "0";
//         el.style.transform = "translateY(20px)";

//     });

//     revealOnScroll();

// });


// /* ==========================
//    FORMULÁRIO (UX FEEDBACK)
// ========================== */

// const form = document.querySelector("form");

// if (form) {

//     form.addEventListener("submit", function (e) {

//         e.preventDefault();

//         const button = this.querySelector("button");

//         const originalText = button.innerText;

//         button.innerText = "Enviando...";
//         button.disabled = true;

//         setTimeout(() => {

//             button.innerText = "Mensagem enviada ✔";

//             setTimeout(() => {

//                 button.innerText = originalText;
//                 button.disabled = false;
//                 form.reset();

//             }, 2000);

//         }, 1500);

//     });

// }

// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//         0: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         },
//         992: {
//             slidesPerView: 3
//         }
//     }
// });
