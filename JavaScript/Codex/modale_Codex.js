const modale = document.querySelector(".groundModale")
const btnOpen = document.getElementById("open")
const btnClose = document.querySelector(".closeModale")
//btnAjoutOnglet = document.getElementById("addInfo")

btnOpen.addEventListener("click", () =>{
    modale.style.display = "flex"
})

btnClose.addEventListener("click", () =>{
    cacherModale()
    resetOnglet()
})

function cacherModale(){
    modale.style.display = "none"
}

function resetOnglet(){
    inputModale = document.querySelectorAll(".modalContent input")
    selectModale = document.querySelectorAll(".modalContent select")
    textareaModale = document.querySelectorAll(".modalContent textarea")

    for(i = 0; i < inputModale.length; i++){
        inputModale[i].value = ""
    }
    for(i = 0; i < selectModale.length; i++){
        selectModale[i].value = ""
    }
    for(i = 0; i < textareaModale.length; i++){
        textareaModale[i].value = ""
    }
    
    optionChoix.innerHTML = ""
}

function afficherOption(){
    choixCategorie = document.getElementById("chooseSelect")

    choixCategorie.addEventListener("change", () =>{
        
        choixCategorieValue = choixCategorie.value

        if(choixCategorieValue == ""){
            optionChoix.innerHTML = ""
        }
        if(choixCategorieValue == "1"){
            generationOptionPerso()
        }
        if(choixCategorieValue == "2"){
            generationOptionBest()
        }
        if(choixCategorieValue == "3"){
            generationOptionResumer()
        }
    })

    
}

function optionResumer(){
    choixSousCatResumer = document.getElementById("categoryLessResumer")

    choixSousCatResumer.addEventListener("change", () =>{
        const divContenu = document.querySelector(".addComtenuResumer")

        if(choixSousCatResumer.value == ""){
            divContenu.innerHTML = ""
        }
        if(choixSousCatResumer.value == "1"){
            generationOptionResumer1()
        }
        if(choixSousCatResumer.value == "2"){
            generationOptionResumer2()
        }
        if(choixSousCatResumer.value == "3"){
            generationOptionResumer3()
        }
    })
}

/*btnAjoutOnglet.addEventListener("click", () =>{
    ajoutOnglet()
    cacherModale()
    resetOnglet()
})

function ajoutOnglet(){
    choixCategorie = document.getElementById("chooseSelect")
    choixSousCat = document.getElementById("categoryLess")
    nomOnglet = document.getElementById("nameOnglet")

    choixCategorieValue = choixCategorie.value
    choixSousCatValue = choixSousCat.value

    if(choixCategorieValue == "1" && choixSousCatValue == "1"){

        const onglet = {
            id: ongletPersoRepublique.length,
            nom: nomOnglet.value,
        };

        ongletPersoRepublique.push(onglet)
    }
    if(choixCategorieValue == "1" && choixSousCatValue == "2"){

        const onglet = {
            id: ongletPersoEmpire.length,
            nom: nomOnglet.value,
        };

        ongletPersoEmpire.push(onglet)
    }
    if(choixCategorieValue == "1" && choixSousCatValue == "3"){

        const onglet = {
            id: ongletPersoAutre.length,
            nom: nomOnglet.value,
        };

        ongletPersoAutre.push(onglet)
    }
    if(choixCategorieValue == "2"){

        const onglet = {
            id: ongletBestiaire.length,
            nom: nomOnglet.value,
        };

        ongletBestiaire.push(onglet)
    }
}


ajoutOnglet()*/
cacherModale()
afficherOption()