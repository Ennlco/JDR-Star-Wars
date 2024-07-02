let baliseEmail = document.getElementById("email")
let email = baliseEmail.value

let BaliseMotDePasse = document.getElementById("motdepasse")
let motdepasse = BaliseMotDePasse.value

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @throws {Error}
 */
function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide.")
    }
    
}

/**
 * Cette fonction prend un mot de passe en paramètre et valide qu'il est au bon format
 * ici : six caractères au minimum
 * @param {string} motdepasse 
 * @throws {Error}
 */
function validerMotDePasse(motdepasse) {
    if (motdepasse.length < 6) {
        throw new Error("Le nom est trop court. ")
    }
    
}

function LancerConnection() {
    initAddEventListenerPopup()
    
}