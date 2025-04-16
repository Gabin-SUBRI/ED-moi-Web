// script.js
document.addEventListener("DOMContentLoaded", function () {
  const days = document.querySelectorAll(".day");

  let today = new Date().getDay(); // Retourne 0 (Dimanche) à 6 (Samedi)

  //let today = 5; // faire croire au programme que l'on est sur un autre jour

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
