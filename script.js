const bouton = document.querySelector(".btn-forfait");
const message = document.querySelector("#message");

message.textContent = ""; // Message vide au chargement

bouton.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le reload de la page

    // Changement visuel du bouton
    bouton.classList.add("btn-actif");

    // Affiche le message
    message.textContent = "Merci ! Nous allons vous contacter très bientôt.";
    message.style.color = "#222";
    message.style.fontWeight = "bold";
    message.style.marginTop = "10px";

    // Faire disparaître le message après 10 secondes (10000 ms)
    setTimeout(function() {
        message.textContent = "";
        bouton.classList.remove("btn-actif"); // Optionnel : remettre le bouton normal
    }, 10000);
});
