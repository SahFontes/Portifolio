/* ==================================================
   NAVBAR - EFEITO AO ROLAR A PÁGINA
================================================== */

// Seleciona a navbar
const navbar = document.querySelector(".custom-navbar");

// Adiciona efeito ao scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        // Navbar compacta ao descer a página
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
        navbar.style.padding = "12px 0";
    } else {
        // Navbar normal no topo
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 0";
    }

});


/* ==================================================
   SCROLL SUAVE PARA LINKS INTERNOS
================================================== */

// Seleciona todos os links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        // Obtém a seção de destino
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==================================================
   LINK ATIVO NO MENU
================================================== */

// Todas as seções da página
const sections = document.querySelectorAll("section");

// Todos os links do menu
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* ==================================================
   ANIMAÇÃO DE REVELAÇÃO AO SCROLL
================================================== */

// Elementos que receberão animação
const revealElements = document.querySelectorAll(
    ".project-card, .timeline-item, .about-image, .skills-wrapper span"
);

// Função de animação
function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = "all 0.6s ease";

        }

    });

}

// Executa durante o scroll
window.addEventListener("scroll", revealOnScroll);


/* ==================================================
   ESTADO INICIAL DOS ELEMENTOS ANIMADOS
================================================== */

window.addEventListener("load", () => {

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";

    });

    revealOnScroll();

});


/* ==================================================
   FEEDBACK VISUAL DO FORMULÁRIO
================================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = this.querySelector("button");
        const originalText = button.innerText;

        // Estado de envio
        button.innerText = "Enviando...";
        button.disabled = true;

        setTimeout(() => {

            // Mensagem de sucesso
            button.innerText = "Mensagem enviada ✔";

            setTimeout(() => {

                // Retorna ao estado inicial
                button.innerText = originalText;
                button.disabled = false;
                form.reset();

            }, 2000);

        }, 1500);

    });

}


/* ==================================================
   SWIPER - CARROSSEL DE PROJETOS
================================================== */

const swiper = new Swiper(".mySwiper", {

    // Quantidade de slides visíveis
    slidesPerView: 3,

    // Espaçamento entre slides
    spaceBetween: 20,

    // Loop infinito
    loop: true,

    // Reprodução automática
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // Paginação
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Botões de navegação
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Responsividade
    breakpoints: {

        // Celulares
        0: {
            slidesPerView: 1
        },

        // Tablets
        768: {
            slidesPerView: 2
        },

        // Desktop
        992: {
            slidesPerView: 3
        }

    }

});