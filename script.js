/**
 * GESTION GLOBALE DES CARTES
 */
const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    // Si on clique sur un lien de paiement
    if (e.target.classList.contains("pay-link")) {
      const link = e.target;

      // Animation au clic
      link.classList.add("clicked");
      setTimeout(() => link.classList.remove("clicked"), 200);

      // On laisse l'événement continuer pour la redirection
      return;
    }

    // Empêche de fermer si on clique sur un élément interne sans importance
    if (e.target.tagName === "UL" || e.target.tagName === "LI") return;

    // Effet accordéon
    allCards.forEach((c) => {
      if (c !== card) c.classList.remove("is-active");
    });

    this.classList.toggle("is-active");
  });
});

/**
 * BOUTONS DE FERMETURE
 */
document.querySelectorAll(".btn-close").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = btn.closest(".card");
    if (parent) parent.classList.remove("is-active");
  });
});
