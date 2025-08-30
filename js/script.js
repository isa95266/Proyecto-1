const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;

// Función para mover el carrusel
function moveSlide(index) {
  counter = (index + images.length) % images.length; // evitar que salga del rango
  slide.style.transform = `translateX(${-100 * counter}%)`;
}

// Automático
let autoSlide = setInterval(() => moveSlide(counter + 1), 3000);

// Botón siguiente
nextBtn.addEventListener("click", () => {
  moveSlide(counter + 1);
  resetAutoSlide();
});

// Botón anterior
prevBtn.addEventListener("click", () => {
  moveSlide(counter - 1);
  resetAutoSlide();
});

// Reiniciar el autoplay al hacer clic
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => moveSlide(counter + 1), 3000);
}
