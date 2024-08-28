

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
            divBase.style.display = "flex"
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

                const title = document.createElement("h1")
                title.innerText = "En construction ! 🏗"
                divBase.appendChild(title)
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

function choixMobile(){
    let select1 = document.getElementById("selectOnglet")
    const divAllContent = document.querySelector(".barreChoixMobile")

    select1.addEventListener("change", () =>{
        
        if(select1.value == ""){
            const base = document.querySelector(".optionSecondaire")
            base.innerHTML = ""
        }
        if(select1.value == "1"){
            const base = document.querySelector(".optionSecondaire")
            
            base.innerHTML = ""
            
            const selectElement = document.createElement("select")
            selectElement.name = "categorySecondaire"
            selectElement.id = "categorySecondaire"
            base.appendChild(selectElement)

            const option1 = document.createElement("option")
            option1.value = ""
            selectElement.appendChild(option1)

            const option2 = document.createElement("option")
            option2.value = "1"
            option2.innerText = "République"
            selectElement.appendChild(option2)

            const option3 = document.createElement("option")
            option3.value = "2"
            option3.innerText = "Empire"
            selectElement.appendChild(option3)
            
            const option4 = document.createElement("option")
            option4.value = "3"
            option4.innerText = "Autre"
            selectElement.appendChild(option4)

            const divContent = document.createElement("div")
            divContent.className = "choixNonPerso"
            base.appendChild(divContent)

            choixMobilePerso()

        }
        if(select1.value == "2"){
            const base = document.querySelector(".optionSecondaire")
            
            base.innerHTML = ""
            
            const selectElement = document.createElement("select")
            selectElement.name = "ChooseBestName"
            selectElement.id = "ChooseBestName"
            base.appendChild(selectElement)

            const option1 = document.createElement("option")
            option1.value = ""
            selectElement.appendChild(option1)

            for(i = 0; i < bestiaire.length; i++){
                const optionElm = document.createElement("option")
                optionElm.value = [i]
                optionElm.innerText = bestiaire[i].nom
                selectElement.appendChild(optionElm)
            }

            choixMobileBest()
        }
        if(select1.value == "3"){
            const base = document.querySelector(".optionSecondaire")
            
            base.innerHTML = ""

            const selectElement = document.createElement("select")
            selectElement.name = "ChooseResumeName"
            selectElement.id = "ChooseResumeName"
            base.appendChild(selectElement)

            const option1 = document.createElement("option")
            option1.value = ""
            selectElement.appendChild(option1)

            const option2 = document.createElement("option")
            option2.value = "1"
            option2.innerText = "Resumer"
            selectElement.appendChild(option2)

            const option3 = document.createElement("option")
            option3.value = "2"
            option3.innerText = "Resumer bidon"
            selectElement.appendChild(option3)
            
            const option4 = document.createElement("option")
            option4.value = "3"
            option4.innerText = "Enregistrement"
            selectElement.appendChild(option4)

            choixMobileResum()
        }
    })
}

function choixMobilePerso(){
    const selectPersoMoblie = document.getElementById("categorySecondaire")

    const divBase = document.querySelector(".choixNonPerso")


    selectPersoMoblie.addEventListener("change", () =>{
        if(selectPersoMoblie.value == ""){
            divBase.innerHTML = ""
        }
        if(selectPersoMoblie.value == "1"){
            divBase.innerHTML = ""

            const selectElement = document.createElement("select")
            selectElement.name = "choixName"
            selectElement.id = "choixName"
            divBase.appendChild(selectElement)

            const option1 = document.createElement("option")
            option1.value = ""
            selectElement.appendChild(option1)

            for(i = 0; i < InfoPersoRepublique.length; i++){
                const optionElm = document.createElement("option")
                optionElm.value = [i]
                optionElm.innerText = InfoPersoRepublique[i].title
                selectElement.appendChild(optionElm)
            }

            choixMobilePersoRep()
        }
        if(selectPersoMoblie.value == "2"){
            divBase.innerHTML = ""

            const selectElement = document.createElement("select")
            selectElement.name = "choixName"
            selectElement.id = "choixName"
            divBase.appendChild(selectElement)

            const option1 = document.createElement("option")
            option1.value = ""
            selectElement.appendChild(option1)

            for(i = 0; i < InfoPersoEmpire.length; i++){
                const optionElm = document.createElement("option")
                optionElm.value = [i]
                optionElm.innerText = InfoPersoEmpire[i].title
                selectElement.appendChild(optionElm)
            }

            choixMobilePersoEmp()
        }
        if(selectPersoMoblie.value == "3"){
            divBase.innerHTML = ""

            const selectElement = document.createElement("select")
            selectElement.name = "choixName"
            selectElement.id = "choixName"
            divBase.appendChild(selectElement)

            const option1 = document.createElement("option")
            option1.value = ""
            selectElement.appendChild(option1)

            for(i = 0; i < InfoPersoAutre.length; i++){
                const optionElm = document.createElement("option")
                optionElm.value = [i]
                optionElm.innerText = InfoPersoAutre[i].title
                selectElement.appendChild(optionElm)
            }

            choixMobilePersoAu()
        }
    })
}

function choixMobilePersoRep(){
    const select = document.getElementById("choixName")
    const divBase = document.querySelector(".elementInfo")

    select.addEventListener("change", () =>{
        if(select.value == ""){
            divBase.innerHTML = ""
        }
        for(i = 0; i < select.length; i++){
            if(select.value == [i]){
                divBase.innerHTML = ""
                divBase.style.display = "flex"

                let h2 = document.createElement("h2")
                h2.innerText = InfoPersoRepublique[i].title
                divBase.appendChild(h2)
    
                let divhearder = document.createElement("div")
                divhearder.className = "image_et_info"
                divBase.appendChild(divhearder)
    
                let imageE = document.createElement("img")
                imageE.src = InfoPersoRepublique[i].image
                divhearder.appendChild(imageE)
    
                let divInfo = document.createElement("div")
                divhearder.appendChild(divInfo)
    
                let categoryE = document.createElement("p")
                categoryE.innerText = InfoPersoRepublique[i].categorie
                divInfo.appendChild(categoryE)
    
                let especeE = document.createElement("p")
                especeE.innerText = InfoPersoRepublique[i].espece
                divInfo.appendChild(especeE)
    
                let sexeE = document.createElement("p")
                sexeE.innerText = InfoPersoRepublique[i].sexe
                divInfo.appendChild(sexeE)
    
                let statutE = document.createElement("p")
                statutE.innerText = InfoPersoRepublique[i].statut
                divInfo.appendChild(statutE)
    
                let corpsE = document.createElement("p")
                corpsE.innerText = InfoPersoRepublique[i].corps
                divBase.appendChild(corpsE)
            }
        }
    })
}

function choixMobilePersoEmp(){
    const select = document.getElementById("choixName")
    const divBase = document.querySelector(".elementInfo")

    select.addEventListener("change", () =>{
        if(select.value == ""){
            divBase.innerHTML = ""
        }
        for(i = 0; i < select.length; i++){
            if(select.value == [i]){
                divBase.innerHTML = ""
                divBase.style.display = "flex"

                let h2 = document.createElement("h2")
                h2.innerText = InfoPersoEmpire[i].title
                divBase.appendChild(h2)
    
                let divhearder = document.createElement("div")
                divhearder.className = "image_et_info"
                divBase.appendChild(divhearder)
    
                let imageE = document.createElement("img")
                imageE.src = InfoPersoEmpire[i].image
                divhearder.appendChild(imageE)
    
                let divInfo = document.createElement("div")
                divhearder.appendChild(divInfo)
    
                let categoryE = document.createElement("p")
                categoryE.innerText = InfoPersoEmpire[i].categorie
                divInfo.appendChild(categoryE)
    
                let especeE = document.createElement("p")
                especeE.innerText = InfoPersoEmpire[i].espece
                divInfo.appendChild(especeE)
    
                let sexeE = document.createElement("p")
                sexeE.innerText = InfoPersoEmpire[i].sexe
                divInfo.appendChild(sexeE)
    
                let statutE = document.createElement("p")
                statutE.innerText = InfoPersoEmpire[i].statut
                divInfo.appendChild(statutE)
    
                let corpsE = document.createElement("p")
                corpsE.innerText = InfoPersoEmpire[i].corps
                divBase.appendChild(corpsE)
            }
        }
    })
}

function choixMobilePersoAu(){
    const select = document.getElementById("choixName")
    const divBase = document.querySelector(".elementInfo")

    select.addEventListener("change", () =>{
        if(select.value == ""){
            divBase.innerHTML = ""
        }
        for(i = 0; i < select.length; i++){
            if(select.value == [i]){
                divBase.innerHTML = ""
                divBase.style.display = "flex"

                let h2 = document.createElement("h2")
                h2.innerText = InfoPersoAutre[i].title
                divBase.appendChild(h2)
    
                let divhearder = document.createElement("div")
                divhearder.className = "image_et_info"
                divBase.appendChild(divhearder)
    
                let imageE = document.createElement("img")
                imageE.src = InfoPersoAutre[i].image
                divhearder.appendChild(imageE)
    
                let divInfo = document.createElement("div")
                divhearder.appendChild(divInfo)
    
                let categoryE = document.createElement("p")
                categoryE.innerText = InfoPersoAutre[i].categorie
                divInfo.appendChild(categoryE)
    
                let especeE = document.createElement("p")
                especeE.innerText = InfoPersoAutre[i].espece
                divInfo.appendChild(especeE)
    
                let sexeE = document.createElement("p")
                sexeE.innerText = InfoPersoAutre[i].sexe
                divInfo.appendChild(sexeE)
    
                let statutE = document.createElement("p")
                statutE.innerText = InfoPersoAutre[i].statut
                divInfo.appendChild(statutE)
    
                let corpsE = document.createElement("p")
                corpsE.innerText = InfoPersoAutre[i].corps
                divBase.appendChild(corpsE)
            }
        }
    })
}

function choixMobileBest(){
    const select = document.getElementById("ChooseBestName")
    const divBase = document.querySelector(".elementInfo")

    select.addEventListener("change", () =>{
        if(select.value == ""){
            divBase.innerHTML = ""
        }
        for(i = 0; i < select.length; i++){
            if(select.value == [i]){
                divBase.innerHTML = ""
                divBase.style.display = "flex"

                let h2 = document.createElement("h2")
                h2.innerText = bestiaire[i].nom
                divBase.appendChild(h2)
    
                let divhearder = document.createElement("div")
                divhearder.className = "image_et_info"
                divBase.appendChild(divhearder)
    
                let imageE = document.createElement("img")
                imageE.src = bestiaire[i].image
                divhearder.appendChild(imageE)
    
                let corpsE = document.createElement("p")
                corpsE.innerText = bestiaire[i].corps
                divBase.appendChild(corpsE)
            }
        }
    })

    /*for(i = 0; i < select.length; i++){

    }*/
}

function choixMobileResum(){
    const selectResum = document.getElementById("ChooseResumeName")
    const divBase = document.querySelector(".elementInfo")

    selectResum.addEventListener("change", () =>{
        if(selectResum.value == ""){
            divBase.innerHTML = ""
        }

        if(selectResum.value == "1"){
            divBase.innerHTML = ""
            divBase.style.display = "flex"

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

        if(selectResum.value == "2"){
            divBase.innerHTML = ""
            divBase.style.display = "flex"

            const title = document.createElement("h1")
            title.innerText = "En construction ! 🏗"
            divBase.appendChild(title)
        }

        if(selectResum.value == "3"){
            divBase.innerHTML = ""
            divBase.style.display = "flex"

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

choixBarre()
choixMobile()