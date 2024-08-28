const btnMenu = document.querySelector(".navMoblile");
let navActif = false;

btnMenu.addEventListener("click", () =>{
    const divBase = document.querySelector(".choixNavigation");

    if(navActif == false){
        divBase.innerHTML = "";
        divBase.style.display = "flex";

        const divContent = document.createElement("div");
        divContent.className = "div-nav-content"
        divBase.appendChild(divContent);
    
        const lien_Accueil = document.createElement("a");
        lien_Accueil.href = "Page_Accueil.html";
        divContent.appendChild(lien_Accueil);

        const img_Accueil = document.createElement("img")
        img_Accueil.src = "Ressource/Image/Picto/WebP/Picto_Accueil.webp"
        img_Accueil.alt = "Pictogramme menu accueil"
        lien_Accueil.appendChild(img_Accueil)
    
        const lien_Perso = document.createElement("a");
        lien_Perso.href = "Page_Personnage.html";
        divContent.appendChild(lien_Perso);

        const img_Perso = document.createElement("img")
        img_Perso.src = "Ressource/Image/Picto/WebP/Picto_Personnage.webp"
        img_Perso.alt = "Pictogramme menu personnage"
        lien_Perso.appendChild(img_Perso)
    
        const lien_Vaisseau = document.createElement("a");
        lien_Vaisseau.href = "Page_Vaisseau.html";
        divContent.appendChild(lien_Vaisseau);
        
        const img_Vaisseau = document.createElement("img")
        img_Vaisseau.src = "Ressource/Image/Picto/WebP/Picto_Vaisseau.webp"
        img_Vaisseau.alt = "Pictogramme menu vaisseau"
        lien_Vaisseau.appendChild(img_Vaisseau)

        const lien_Carte = document.createElement("a");
        lien_Carte.href = "Page_Carte.html";
        divContent.appendChild(lien_Carte);

        const img_Carte = document.createElement("img")
        img_Carte.src = "Ressource/Image/Picto/WebP/Picto_Carte.webp"
        img_Carte.alt = "Pictogramme menu carte"
        lien_Carte.appendChild(img_Carte)
    
        const lien_Magasin = document.createElement("a");
        lien_Magasin.href = "Page_Magazin.html";
        divContent.appendChild(lien_Magasin);

        const img_Magasin = document.createElement("img")
        img_Magasin.src = "Ressource/Image/Picto/WebP/Picto_Magazin.webp"
        img_Magasin.alt = "Pictogramme menu magazin"
        lien_Magasin.appendChild(img_Magasin)
    
        const lien_Codex = document.createElement("a");
        lien_Codex.href = "Page_Codex.html";
        divContent.appendChild(lien_Codex);

        const img_Codex = document.createElement("img")
        img_Codex.src = "Ressource/Image/Picto/WebP/Picto_Codex.webp"
        img_Codex.alt = "Pictogramme menu codex"
        lien_Codex.appendChild(img_Codex)

        navActif = true

    } else {
        
        divBase.innerHTML = "";
        divBase.style.display = "none";

        navActif = false;
    }


})