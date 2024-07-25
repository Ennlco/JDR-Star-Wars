const modale = document.querySelector(".groundModale");
const btnOpen = document.getElementById("open");
const btnClose = document.querySelector(".closeModale");
//btnAjoutOnglet = document.getElementById("addInfo");

btnOpen.addEventListener("click", () =>{
    modale.style.display = "flex";
})

btnClose.addEventListener("click", () =>{
    cacherModale();
    resetModale();
})

function cacherModale(){
    modale.style.display = "none";
}

function resetModale(){
    const inputModale = document.querySelectorAll(".modalContent input");
    const selectModale = document.querySelectorAll(".modalContent select");
    const textareaModale = document.querySelectorAll(".modalContent textarea");
    const preview = document.querySelector(".previewImage");
    const divFile = document.querySelector(".fileImage");
    const btnImage = document.getElementById("file");

    for(i = 0; i < inputModale.length; i++){
        inputModale[i].value = "";
    }
    for(i = 0; i < selectModale.length; i++){
        selectModale[i].value = "";
    }
    for(i = 0; i < textareaModale.length; i++){
        textareaModale[i].value = "";
    }
    
    optionChoix.innerHTML = "";
    preview.innerHTML = "";

    btnImage.style.display = "flex";
    divFile.style.display = "flex";
    preview.style.display = "none";
}

function afficherOption(){
    choixCategorie = document.getElementById("chooseSelect");

    choixCategorie.addEventListener("change", () =>{
        
        choixCategorieValue = choixCategorie.value;

        if(choixCategorieValue == ""){
            optionChoix.innerHTML = "";
        }
        if(choixCategorieValue == "1"){
            generationOptionPerso();
            previewImage();
        }
        if(choixCategorieValue == "2"){
            generationOptionBest();
        }
        if(choixCategorieValue == "3"){
            generationOptionResumer();
        }
    });

    
}

function optionResumer(){
    choixSousCatResumer = document.getElementById("categoryLessResumer");

    choixSousCatResumer.addEventListener("change", () =>{
        const divContenu = document.querySelector(".addComtenuResumer");

        if(choixSousCatResumer.value == ""){
            divContenu.innerHTML = "";
        }
        if(choixSousCatResumer.value == "1"){
            generationOptionResumer1();
        }
        if(choixSousCatResumer.value == "2"){
            generationOptionResumer2();
        }
        if(choixSousCatResumer.value == "3"){
            generationOptionResumer3();
        }
    });
}

function previewImage(){
    const preview = document.querySelector(".previewImage");
    const divFile = document.querySelector(".fileImage");
    const btnImage = document.getElementById("file");

    btnImage.addEventListener("change", () =>{
        const curFiles = btnImage.files;

        if(curFiles.length > 0){
            preview.innerHTML = "";

            const imgPreview = document.createElement("img");
            imgPreview.src = URL.createObjectURL(curFiles[0]);
            imgPreview.style.width = "100%";
            preview.appendChild(imgPreview);

            btnImage.style.display = "none";
            divFile.style.display = "none";
            preview.style.display = "flex";
        }
    });

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
cacherModale();
afficherOption();