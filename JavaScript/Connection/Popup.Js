// Cette fonction affiche la popup pour créer un nouveau compte. 
function afficherPopup() {
    let popupBackgroundNewCompte = document.getElementById("popupBackgroundNewCompte")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackgroundNewCompte.style.display = "flex"
    // popupBackgroundNewCompte.style.display = "block"
}

//Cette fonction cache la popup pour créer un nouveau compte. 
function cacherPopup() {
    let popupBackgroundNewCompte = document.getElementById("popupBackgroundNewCompte")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackgroundNewCompte.style.display = "none"
}

/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "créer"
    btnCreer = document.querySelector(".btnNew button")
    let popupBackgroundNewCompte = document.querySelector(".popupBackgroundNewCompte")
    btnCreer.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton "+", on affiche la popup
        afficherPopup()
        
    })

    // On écoute le click sur la div "popupBackgroundNewCompte"
    popupBackgroundNewCompte.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackgroundNewCompte 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackgroundNewCompte) {
            // Alors on cache la popup
            cacherPopup()
        }
    })

}
