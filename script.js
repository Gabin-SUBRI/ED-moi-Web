const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");

let index = 0;

function startCarousel() {
  index = (index + 1) % images.length; // Boucle vers la première image après la dernière
  const width = images[0].clientWidth;
  carousel.style.transform = `translateX(${-index * width}px)`;
}

setInterval(startCarousel, 3000); // Change d'image toutes les 3 secondes

// Ajuste le défilement si la fenêtre est redimensionnée
window.addEventListener("resize", () => {
  carousel.style.transform = `translateX(${-index * images[0].clientWidth}px)`;
});
