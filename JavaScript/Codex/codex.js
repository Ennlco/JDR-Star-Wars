function choixBarre(){
    let btnBarre = document.querySelectorAll(".choix")
    const personnage = document.getElementById("personnage")
    const bestiaire = document.getElementById("bestiaire")
    const resumer = document.getElementById("resumer")
    
    let Persoactif = false
    let Bestactif = false
    let Resactif = false
    
    for(i = 0; i < btnBarre.length; i++){
        btnBarre[i].addEventListener("click", (event) =>{
            
            if(event.target === btnBarre[0]){
                if(Persoactif === true){
                    personnage.style.display = "none"
                    personnage.innerHTML = ""
                    Persoactif = false
                } else {
                    personnage.style.display = "flex"
                    personnage.innerHTML = ""
                    
                    let divRep = document.createElement("div")
                    divRep.className = "choixSection"
                    divRep.id = "republique"
                    divRep.innerText = "République"
                    personnage.appendChild(divRep)

                    let divBaseRep = document.createElement("div")
                    divBaseRep.className = "choixRepublique"
                    personnage.appendChild(divBaseRep)

                    ongletPersoRepublique.forEach(e => {
                        let div = document.createElement("div")
                        div.className = "choixSecondaire"
                        div.id = e.id
                        div.innerText = e.nom
                        divBaseRep.appendChild(div)
                    });

                    let divEmp = document.createElement("div")
                    divEmp.className = "choixSection"
                    divEmp.id = "empire"
                    divEmp.innerText = "Empire"
                    personnage.appendChild(divEmp)

                    let divBaseEmp = document.createElement("div")
                    divBaseEmp.className = "choixEmpire"
                    personnage.appendChild(divBaseEmp)

                    ongletPersoEmpire.forEach(e => {
                        let div = document.createElement("div")
                        div.className = "choixSecondaire"
                        div.id = e.id
                        div.innerText = e.nom
                        divBaseEmp.appendChild(div)
                    });

                    let divAu = document.createElement("div")
                    divAu.className = "choixSection"
                    divAu.id = "autre"
                    divAu.innerText = "Autre"
                    personnage.appendChild(divAu)

                    let divBaseAu = document.createElement("div")
                    divBaseAu.className = "choixAutre"
                    personnage.appendChild(divBaseAu)

                    ongletPersoAutre.forEach(e => {
                        let div = document.createElement("div")
                        div.className = "choixSecondaire"
                        div.id = e.id
                        div.innerText = e.nom
                        divBaseAu.appendChild(div)
                    });

                    Persoactif = true
                    choixInfoPersoRep()
                    choixInfoPersoEmp()
                    choixInfoPersoAu()
                }
            }
            
            if(event.target === btnBarre[1]){
                if(Bestactif === true){ 
                    bestiaire.style.display = "none"
                    bestiaire.innerHTML = ""
                    Bestactif = false
                } else {
                    bestiaire.style.display = "flex"
                    bestiaire.innerHTML = ""
                    
                    for(i = 0; i < ongletBestiaire.length; i++){
                        let div = document.createElement("div")
                        div.className = "choixSecondaire"
                        div.id = ongletBestiaire[i].id
                        div.innerText = ongletBestiaire[i].nom
                        bestiaire.appendChild(div)
                    }

                    Bestactif = true
                    choixInfoBestiaure()
                }
            }
            
            if(event.target === btnBarre[2]){
                if(Resactif === true){
                    resumer.style.display = "none"
                    resumer.innerHTML = ""
                    Resactif = false
                } else {
                    resumer.style.display = "flex"
                    resumer.innerHTML = ""
                    
                    for(i = 0; i < ongletResumer.length; i++){
                        let div = document.createElement("div")
                        div.className = "choixSecondaire"
                        div.id = ongletResumer[i].id
                        div.innerText = ongletResumer[i].nom
                        resumer.appendChild(div)
                    }

                    Resactif = true
                    choixInfoResumer()
                }
            }
        })
    }
}

function choixInfoPersoRep(){
    let choix = document.querySelectorAll(".choixRepublique .choixSecondaire")
    const divBase = document.querySelector(".elementInfo")

    for(i = 0; i < choix.length; i++){
        choix[i].addEventListener("click", (event) => {
            let clickId = event.target.id

            divBase.innerHTML = ""

            let h2 = document.createElement("h2")
            h2.innerText = InfoPersoRepublique[clickId].title
            divBase.appendChild(h2)

            let divhearder = document.createElement("div")
            divhearder.className = "image_et_info"
            divBase.appendChild(divhearder)

            let imageE = document.createElement("img")
            imageE.src = InfoPersoRepublique[clickId].image
            divhearder.appendChild(imageE)

            let divInfo = document.createElement("div")
            divhearder.appendChild(divInfo)

            let categoryE = document.createElement("p")
            categoryE.innerText = InfoPersoRepublique[clickId].categorie
            divInfo.appendChild(categoryE)

            let especeE = document.createElement("p")
            especeE.innerText = InfoPersoRepublique[clickId].espece
            divInfo.appendChild(especeE)

            let sexeE = document.createElement("p")
            sexeE.innerText = InfoPersoRepublique[clickId].sexe
            divInfo.appendChild(sexeE)

            let statutE = document.createElement("p")
            statutE.innerText = InfoPersoRepublique[clickId].statut
            divInfo.appendChild(statutE)

            let corpsE = document.createElement("p")
            corpsE.innerText = InfoPersoRepublique[clickId].corps
            divBase.appendChild(corpsE)

        })
    }
}

function choixInfoPersoEmp(){
    let choix = document.querySelectorAll(".choixEmpire .choixSecondaire")
    const divBase = document.querySelector(".elementInfo")

    for(i = 0; i < choix.length; i++){
        choix[i].addEventListener("click", (event) => {
            let clickId = event.target.id

            divBase.innerHTML = ""

            let h2 = document.createElement("h2")
            h2.innerText = InfoPersoEmpire[clickId].title
            divBase.appendChild(h2)

            let divhearder = document.createElement("div")
            divhearder.className = "image_et_info"
            divBase.appendChild(divhearder)

            let imageE = document.createElement("img")
            imageE.src = InfoPersoEmpire[clickId].image
            divhearder.appendChild(imageE)

            let divInfo = document.createElement("div")
            divhearder.appendChild(divInfo)

            let categoryE = document.createElement("p")
            categoryE.innerText = InfoPersoEmpire[clickId].categorie
            divInfo.appendChild(categoryE)

            let especeE = document.createElement("p")
            especeE.innerText = InfoPersoEmpire[clickId].espece
            divInfo.appendChild(especeE)

            let sexeE = document.createElement("p")
            sexeE.innerText = InfoPersoEmpire[clickId].sexe
            divInfo.appendChild(sexeE)

            let statutE = document.createElement("p")
            statutE.innerText = InfoPersoEmpire[clickId].statut
            divInfo.appendChild(statutE)

            let corpsE = document.createElement("p")
            corpsE.innerText = InfoPersoEmpire[clickId].corps
            divBase.appendChild(corpsE)
        })
    }
}

function choixInfoPersoAu(){
    let choix = document.querySelectorAll(".choixAutre .choixSecondaire")
    const divBase = document.querySelector(".elementInfo")

    for(i = 0; i < choix.length; i++){
        choix[i].addEventListener("click", (event) => {
            let clickId = event.target.id

            divBase.innerHTML = ""

            let h2 = document.createElement("h2")
            h2.innerText = InfoPersoAutre[clickId].title
            divBase.appendChild(h2)

            let divhearder = document.createElement("div")
            divhearder.className = "image_et_info"
            divBase.appendChild(divhearder)

            let imageE = document.createElement("img")
            imageE.src = InfoPersoAutre[clickId].image
            divhearder.appendChild(imageE)

            let divInfo = document.createElement("div")
            divhearder.appendChild(divInfo)

            let categoryE = document.createElement("p")
            categoryE.innerText = InfoPersoAutre[clickId].categorie
            divInfo.appendChild(categoryE)

            let especeE = document.createElement("p")
            especeE.innerText = InfoPersoAutre[clickId].espece
            divInfo.appendChild(especeE)

            let sexeE = document.createElement("p")
            sexeE.innerText = InfoPersoAutre[clickId].sexe
            divInfo.appendChild(sexeE)

            let statutE = document.createElement("p")
            statutE.innerText = InfoPersoAutre[clickId].statut
            divInfo.appendChild(statutE)

            let corpsE = document.createElement("p")
            corpsE.innerText = InfoPersoAutre[clickId].corps
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
            h2.innerText = bestiaire[clickId].nom
            divBase.appendChild(h2)

            let divhearder = document.createElement("div")
            divhearder.className = "image_et_info"
            divBase.appendChild(divhearder)

            let imageE = document.createElement("img")
            imageE.src = bestiaire[clickId].image
            divhearder.appendChild(imageE)

            let corpsE = document.createElement("p")
            corpsE.innerText = bestiaire[clickId].corps
            divBase.appendChild(corpsE)
        })
    }
}

function choixInfoResumer(){
    let choix = document.querySelectorAll(".choixResumer .choixSecondaire")
    const divBase = document.querySelector(".elementInfo")

    for(i = 0; i < choix.length; i++){
        choix[i].addEventListener("click", (event) => {
            if(event.target === choix[0]){
                divBase.innerHTML = ""
                for(i = 0; i < resumer.length; i++){
                    let h2 = document.createElement("h2")
                    h2.innerText = resumer[i].title
                    divBase.appendChild(h2)

                    let Para1 = document.createElement("p")
                    Para1.innerText = resumer[i].paragraphe1
                    divBase.appendChild(Para1)

                    let Para2 = document.createElement("p")
                    Para2.innerText = resumer[i].paragraphe2
                    divBase.appendChild(Para2)
                    
                    let Para3 = document.createElement("p")
                    Para3.innerText = resumer[i].paragraphe3
                    divBase.appendChild(Para3)

                    let Para4 = document.createElement("p")
                    Para4.innerText = resumer[i].paragraphe4
                    divBase.appendChild(Para4)

                    let Para5 = document.createElement("p")
                    Para5.innerText = resumer[i].paragraphe5
                    divBase.appendChild(Para5)

                    let Para6 = document.createElement("p")
                    Para6.innerText = resumer[i].paragraphe6
                    divBase.appendChild(Para6)

                    let Para7 = document.createElement("p")
                    Para7.innerText = resumer[i].paragraphe7
                    divBase.appendChild(Para7)

                    let Para8 = document.createElement("p")
                    Para8.innerText = resumer[i].paragraphe8
                    divBase.appendChild(Para8)
                }
            }
            if(event.target === choix[1]){
                divBase.innerHTML = ""
                for(i = 0; i < resumerBidon.length; i++){
                    let h2 = document.createElement("h2")
                    h2.innerText = resumerBidon[i].title
                    divBase.appendChild(h2)

                    let corpsE = document.createElement("p")
                    corpsE.innerText = resumerBidon[i].corps
                    divBase.appendChild(corpsE)
                }
            }
            if(event.target === choix[2]){
                divBase.innerHTML = ""
                for(i = 0; i < enregistrement.length; i++){
                    let h2 = document.createElement("h2")
                    h2.innerText = enregistrement[i].title
                    divBase.appendChild(h2)

                    let corpsE = document.createElement("p")
                    corpsE.innerText = enregistrement[i].corps
                    divBase.appendChild(corpsE)
                }
            }
        })
    }
}

choixBarre()