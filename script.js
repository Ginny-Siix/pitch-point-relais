let currentSlide = 0; // Index de la diapositive active
const slides = document.querySelectorAll(".slide"); // Sélection de toutes les diapositives

// Fonction pour afficher la diapositive active
function showSlide(index) {
  // Masquer toutes les diapositives
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Afficher la diapositive active
  slides[index].classList.add("active");
}

// Fonction pour aller à la diapositive suivante
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Fonction pour aller à la diapositive précédente
function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Fonction pour revenir à la première diapositive
function goToFirstSlide() {
  currentSlide = 0;
  showSlide(currentSlide);
}

// Écouter les touches directionnelles pour changer de slide
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextSlide(); // Flèche droite pour la diapositive suivante
  } else if (event.key === "ArrowLeft") {
    previousSlide(); // Flèche gauche pour la diapositive précédente
  }
});

// Initialiser la première diapositive
showSlide(currentSlide);
