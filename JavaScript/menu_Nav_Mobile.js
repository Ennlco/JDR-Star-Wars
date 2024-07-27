const btnMenu = document.querySelector(".navMoblile");
let navActif = false;

btnMenu.addEventListener("click", () =>{
    const divBase = document.querySelector(".choixNavigation");

    if(navActif == false){
        divBase.innerHTML = "";
        divBase.style.display = "flex";
    
        const lien_Accueil = document.createElement("a");
        lien_Accueil.href = "Page_Accueil.html";
        lien_Accueil.innerHTML = "Accueil";
        divBase.appendChild(lien_Accueil);
    
        const lien_Perso = document.createElement("a");
        lien_Perso.href = "Page_Personnage.html";
        lien_Perso.innerHTML = "Personnage";
        divBase.appendChild(lien_Perso);
    
        const lien_Vaisseau = document.createElement("a");
        lien_Vaisseau.href = "Page_Vaisseau.html";
        lien_Vaisseau.innerHTML = "Vaisseau";
        divBase.appendChild(lien_Vaisseau);

        const lien_Carte = document.createElement("a");
        lien_Carte.href = "Page_Carte.html";
        lien_Carte.innerHTML = "Carte";
        divBase.appendChild(lien_Carte);
    
        const lien_Magasin = document.createElement("a");
        lien_Magasin.href = "Page_Magazin.html";
        lien_Magasin.innerHTML = "Magasin";
        divBase.appendChild(lien_Magasin);
    
        const lien_Codex = document.createElement("a");
        lien_Codex.href = "Page_Codex.html";
        lien_Codex.innerHTML = "Codex";
        divBase.appendChild(lien_Codex);

        navActif = true

    } else {
        
        divBase.innerHTML = "";
        divBase.style.display = "none";

        navActif = false;
    }


})