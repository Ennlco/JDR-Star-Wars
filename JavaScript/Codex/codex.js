function afficherPersonnage(){
    const personnage = document.getElementById("personnage")
    personnage.style.display = "flex"
}

function afficherBestiaire(){
    const bestiaire = document.getElementById("bestiaire")
    bestiaire.style.display = "flex"
}

function afficherResumer(){
    const resumer = document.getElementById("resumer")
    resumer.style.display = "flex"
}

function cacherAll(){
    const personnage = document.getElementById("personnage")
    const bestiaire = document.getElementById("bestiaire")
    const resumer = document.getElementById("resumer")

    personnage.style.display = "none"
    bestiaire.style.display = "none"
    resumer.style.display = "none"
}

function choixBarre(){
    let btnBarre = document.querySelectorAll(".choix")
    let actif = false
    

    for(i = 0; i < btnBarre.length; i++){
        btnBarre[i].addEventListener("click", (event) =>{
            
            if(event.target === btnBarre[0]){
                if(actif === true){
                    cacherAll()
                    actif = false
                } else {
                    cacherAll()
                    afficherPersonnage()
                    actif = true
                }
            }
            
            if(event.target === btnBarre[1]){
                if(actif === true){
                    cacherAll()
                    actif = false
                } else {
                    cacherAll()
                    afficherBestiaire()
                    actif = true
                }
            }
            
            if(event.target === btnBarre[2]){
                if(actif === true){
                    cacherAll()
                    actif = false
                } else {
                    cacherAll()
                    afficherResumer()
                    actif = true
                }
            }
        })
    }
}

function choixInfoPerso(){
    let choix = document.querySelectorAll(".choixPersonnage .choixSecondaire")
    const divBase = document.querySelector(".elementInfo")

    for(i = 0; i < choix.length; i++){
        choix[i].addEventListener("click", (event) => {
            let clickId = event.target.id

            divBase.innerHTML = ""

            let h2 = document.createElement("h2")
            h2.innerText = personnage[clickId].title
            divBase.appendChild(h2)

            let divhearder = document.createElement("div")
            divhearder.className = "image_et_info"
            divBase.appendChild(divhearder)

            let imageE = document.createElement("img")
            imageE.src = personnage[clickId].image
            divhearder.appendChild(imageE)

            let divInfo = document.createElement("div")
            divhearder.appendChild(divInfo)

            let categoryE = document.createElement("p")
            categoryE.innerText = personnage[clickId].categorie
            divInfo.appendChild(categoryE)

            let especeE = document.createElement("p")
            especeE.innerText = personnage[clickId].espece
            divInfo.appendChild(especeE)

            let sexeE = document.createElement("p")
            sexeE.innerText = personnage[clickId].sexe
            divInfo.appendChild(sexeE)

            let statutE = document.createElement("p")
            statutE.innerText = personnage[clickId].statut
            divInfo.appendChild(statutE)

            let corpsE = document.createElement("p")
            corpsE.innerText = personnage[clickId].corps
            divBase.appendChild(corpsE)
        })
    }
}

function choixInfoBestiaure(){
    let choix = document.querySelectorAll(".choixBestiaire .choixSecondaire")
    const divBase = document.querySelector(".elementInfo")

    for(i = 0; i < choix.length; i++){
        choix[i].addEventListener("click", (event) => {
            let clickId = event.target.id

            divBase.innerHTML = ""

            let h2 = document.createElement("h2")
            h2.innerText = personnage[clickId].title
            divBase.appendChild(h2)

            let divhearder = document.createElement("div")
            divhearder.className = "image_et_info"
            divBase.appendChild(divhearder)

            let imageE = document.createElement("img")
            imageE.src = personnage[clickId].image
            divhearder.appendChild(imageE)

            let divInfo = document.createElement("div")
            divhearder.appendChild(divInfo)

            let categoryE = document.createElement("p")
            categoryE.innerText = personnage[clickId].categorie
            divInfo.appendChild(categoryE)

            let especeE = document.createElement("p")
            especeE.innerText = personnage[clickId].espece
            divInfo.appendChild(especeE)

            let sexeE = document.createElement("p")
            sexeE.innerText = personnage[clickId].sexe
            divInfo.appendChild(sexeE)

            let statutE = document.createElement("p")
            statutE.innerText = personnage[clickId].statut
            divInfo.appendChild(statutE)

            let corpsE = document.createElement("p")
            corpsE.innerText = personnage[clickId].corps
            divBase.appendChild(corpsE)
        })
    }
}

function choixInfoResumer(){
    let choix = document.querySelectorAll(".choixResumer .choixSecondaire")
    const divBase = document.querySelector(".elementInfo")

    for(i = 0; i < choix.length; i++){
        choix[i].addEventListener("click", (event) => {
            let clickId = event.target.id

            divBase.innerHTML = ""

            let h2 = document.createElement("h2")
            h2.innerText = personnage[clickId].title
            divBase.appendChild(h2)

            let divhearder = document.createElement("div")
            divhearder.className = "image_et_info"
            divBase.appendChild(divhearder)

            let imageE = document.createElement("img")
            imageE.src = personnage[clickId].image
            divhearder.appendChild(imageE)

            let divInfo = document.createElement("div")
            divhearder.appendChild(divInfo)

            let categoryE = document.createElement("p")
            categoryE.innerText = personnage[clickId].categorie
            divInfo.appendChild(categoryE)

            let especeE = document.createElement("p")
            especeE.innerText = personnage[clickId].espece
            divInfo.appendChild(especeE)

            let sexeE = document.createElement("p")
            sexeE.innerText = personnage[clickId].sexe
            divInfo.appendChild(sexeE)

            let statutE = document.createElement("p")
            statutE.innerText = personnage[clickId].statut
            divInfo.appendChild(statutE)

            let corpsE = document.createElement("p")
            corpsE.innerText = personnage[clickId].corps
            divBase.appendChild(corpsE)
        })
    }
}

choixBarre()
choixInfoPerso()
choixInfoBestiaure()