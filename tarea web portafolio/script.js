// --- FADE-IN ---
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("show");
        }
    });
}, {
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px"
});

const elementos = document.querySelectorAll(".fade-in");
elementos.forEach(el => observador.observe(el));

// --- HEADER SCROLL ---
const header = document.querySelector(".hd");
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
});

// --- MENÚ ACTIVAR LINK SEGÚN PÁGINA ---
const urlActual = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo
document.querySelectorAll(".nav a").forEach(link => {
    if (link.getAttribute("href") === urlActual) {
        link.classList.add("act");
    } else {
        link.classList.remove("act");
    }
});

// --- SCROLL SUAVE PARA ANCLAS ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
