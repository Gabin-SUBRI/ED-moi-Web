// script.js
document.addEventListener("DOMContentLoaded", function () {
  const days = document.querySelectorAll(".day");

  let today = new Date().getDay(); // Retourne 0 (Dimanche) à 6 (Samedi)

  //let today = 6; // faire croire au programme que l'on est sur un autre jour

  if (today === 0) today = 7; // Convertir Dimanche (0) en 7 pour correspondre à tes données

  days.forEach((day, index) => {
    const dayNumber = index + 1; // Associer 1 = Lundi, ..., 7 = Dimanche

    if (dayNumber < today) {
      day.querySelector(".circle").classList.add("filled"); // Jour passé
    } else if (dayNumber === today) {
      day.querySelector(".circle").classList.add("current"); // Jour actuel
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("progression-footer");
  const fleche = document.getElementById("fleche-formation");
  const progressSection = document.querySelector(".progress-section");

  // Récupérer l'état précédent depuis le localStorage
  let isExpanded = localStorage.getItem("footerState") === "true";

  // Appliquer l'état sauvegardé
  if (isExpanded) {
    footer.style.height = "300px";
    progressSection.style.display = "grid";
    fleche.style.transform = "rotate(0deg)";
  } else {
    footer.style.height = "auto";
    progressSection.style.display = "none";
    fleche.style.transform = "rotate(-180deg)";
  }

  // Gérer le clic sur la flèche
  fleche.addEventListener("click", function () {
    if (isExpanded) {
      footer.style.height = "auto";
      progressSection.style.display = "none";
      fleche.style.transform = "rotate(-180deg)";
    } else {
      footer.style.height = "300px";
      progressSection.style.display = "grid";
      fleche.style.transform = "rotate(0deg)";
    }

    // Mettre à jour l'état
    isExpanded = !isExpanded;

    // Sauvegarder l'état dans le localStorage
    localStorage.setItem("footerState", isExpanded);
  });
});


