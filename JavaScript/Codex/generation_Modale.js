const optionChoix = document.querySelector(".optionChoix")

function generationOptionPerso(){
    optionChoix.innerHTML = ""

    let divBase = document.createElement("div")
    divBase.className = "addOnglet"
    optionChoix.appendChild(divBase)


    let divElement = document.createElement("div")
    divElement.className = "ongletPerso"
    divBase.appendChild(divElement)

    let labelSelect = document.createElement("label")
    labelSelect.setAttribute("for", "categoryLess")
    labelSelect.innerText = "Dans quelle sous catégorie"
    divElement.appendChild(labelSelect)

    let selectElement = document.createElement("select")
    selectElement.name = "categoryLess"
    selectElement.id = "categoryLess"
    divElement.appendChild(selectElement)

    let option1 = document.createElement("option")
    option1.value = ""
    selectElement.appendChild(option1)

    let option2 = document.createElement("option")
    option2.value = "1"
    option2.innerText = "République"
    selectElement.appendChild(option2)

    let option3 = document.createElement("option")
    option3.value = "2"
    option3.innerText = "Empire"
    selectElement.appendChild(option3)

    let option4 = document.createElement("option")
    option4.value = "3"
    option4.innerText = "Autre"
    selectElement.appendChild(option4)

    let divContenue = document.createElement("div")
    divContenue.className = "addComtenuPerso"
    optionChoix.appendChild(divContenue)

    let labelTitlePerso = document.createElement("label")
    labelTitlePerso.setAttribute("for", "titrePerso")
    labelTitlePerso.innerText = "Nom du Personnage"
    divContenue.appendChild(labelTitlePerso)

    let inputTitlePerso = document.createElement("input")
    inputTitlePerso.type = "text"
    inputTitlePerso.name = "titre"
    inputTitlePerso.id = "titrePerso"
    divContenue.appendChild(inputTitlePerso)

    let divInfoSecondaire = document.createElement("div")
    divInfoSecondaire.className = "infoSecondaire"
    divContenue.appendChild(divInfoSecondaire)

    let divPreview = document.createElement("div")
    divPreview.className = "previewImage"
    divInfoSecondaire.appendChild(divPreview)

    let divImage = document.createElement("div")
    divImage.className = "fileImage"
    divInfoSecondaire.appendChild(divImage)

    let inputImage = document.createElement("input")
    inputImage.type = "file"
    inputImage.id = "file"
    inputImage.accept = "image/*"
    divImage.appendChild(inputImage)

    let labelImage = document.createElement("label")
    labelImage.setAttribute("for", "file")
    labelImage.className = "labelFile"
    labelImage.innerText = "+ Ajouter photo"
    divImage.appendChild(labelImage)

    let divInputSecondaire = document.createElement("div")
    divInputSecondaire.className = "inputSecondaire"
    divInfoSecondaire.appendChild(divInputSecondaire)

    let labelCategorie = document.createElement("label")
    labelCategorie.setAttribute("for", "categorieInfo")
    labelCategorie.innerText = "Categorie"
    divInputSecondaire.appendChild(labelCategorie)

    let inputCategorie = document.createElement("input")
    inputCategorie.type = "text"
    inputCategorie.name = "catégorie"
    inputCategorie.id = "categorieInfo"
    divInputSecondaire.appendChild(inputCategorie)

    let labelEspece = document.createElement("label")
    labelEspece.setAttribute("for", "especeInfo")
    labelEspece.innerText = "Espece"
    divInputSecondaire.appendChild(labelEspece)

    let inputEspece = document.createElement("input")
    inputEspece.type = "text"
    inputEspece.name = "espece"
    inputEspece.id = "especeInfo"
    divInputSecondaire.appendChild(inputEspece)

    let labelSexe = document.createElement("label")
    labelSexe.setAttribute("for", "sexeInfo")
    labelSexe.innerText = "Sexe"
    divInputSecondaire.appendChild(labelSexe)

    let inputSexe = document.createElement("input")
    inputSexe.type = "text"
    inputSexe.name = "sexe"
    inputSexe.id = "sexeInfo"
    divInputSecondaire.appendChild(inputSexe)

    let labelStatut = document.createElement("label")
    labelStatut.setAttribute("for", "statutInfo")
    labelStatut.innerText = "Statut"
    divInputSecondaire.appendChild(labelStatut)

    let inputStatut = document.createElement("input")
    inputStatut.type = "text"
    inputStatut.name = "statut"
    inputStatut.id = "statutInfo"
    divInputSecondaire.appendChild(inputStatut)

    let labelCorp = document.createElement("label")
    labelCorp.setAttribute("for", "corpsContenuInfo")
    labelCorp.innerText = "Histoire du personnage"
    divContenue.appendChild(labelCorp)

    let textareaCorp = document.createElement("textarea")
    textareaCorp.name = "corpsContenu"
    textareaCorp.id = "corpsContenuInfo"
    textareaCorp.rows = "5"
    textareaCorp.cols = "50"
    divContenue.appendChild(textareaCorp)
}

function generationOptionBest(){
    optionChoix.innerHTML = ""

    let divBase = document.createElement("div")
    divBase.className = "addComtenuBest"
    optionChoix.appendChild(divBase)

    let labelBestName = document.createElement("label")
    labelBestName.setAttribute("for", "titreMonstre")
    labelBestName.innerText = "Nom du Monstre"
    divBase.appendChild(labelBestName)

    let inputName = document.createElement("input")
    inputName.type = "text"
    inputName.name = "titre"
    inputName.id = "titreMonstre"
    divBase.appendChild(inputName)

    let divPreview = document.createElement("div")
    divPreview.className = "previewImage"
    divBase.appendChild(divPreview)

    let divImage = document.createElement("div")
    divImage.className = "fileImageMonstre"
    divBase.appendChild(divImage)

    let inputImage = document.createElement("input")
    inputImage.type = "file"
    inputImage.id = "file"
    inputImage.accept = "image/*"
    divImage.appendChild(inputImage)

    let labelImage = document.createElement("label")
    labelImage.setAttribute("for", "file")
    labelImage.className = "labelFile"
    labelImage.innerText = "+ Ajouter photo"
    divImage.appendChild(labelImage)

    let labelCorp = document.createElement("label")
    labelCorp.setAttribute("for", "corpsContenuInfo")
    labelCorp.innerText = "Histoire du Monstre"
    divBase.appendChild(labelCorp)

    let textareaCorp = document.createElement("textarea")
    textareaCorp.name = "corpsContenu"
    textareaCorp.id = "corpsContenuInfo"
    textareaCorp.rows = "5"
    textareaCorp.cols = "50"
    divBase.appendChild(textareaCorp)
}

function generationOptionResumer(){
    optionChoix.innerHTML = ""

    let divBase = document.createElement("div")
    divBase.className = "sousCatResumer"
    optionChoix.appendChild(divBase)

    let labelSelect = document.createElement("label")
    labelSelect.setAttribute("for", "categoryLessResumer")
    labelSelect.innerText = "Quelle sous catégorie"
    divBase.appendChild(labelSelect)

    let selectElement = document.createElement("select")
    selectElement.name = "categoryLess"
    selectElement.id = "categoryLessResumer"
    divBase.appendChild(selectElement)

    let option1 = document.createElement("option")
    option1.value = ""
    selectElement.appendChild(option1)

    let option2 = document.createElement("option")
    option2.value = "1"
    option2.innerText = "Résumer"
    selectElement.appendChild(option2)

    let option3 = document.createElement("option")
    option3.value = "2"
    option3.innerText = "Résumer Bidon"
    selectElement.appendChild(option3)

    let option4 = document.createElement("option")
    option4.value = "3"
    option4.innerText = "Enregistrement"
    selectElement.appendChild(option4)

    let divContenu = document.createElement("div")
    divContenu.className = "addComtenuResumer"
    optionChoix.appendChild(divContenu)

    optionResumer()
}

function generationOptionResumer1(){
    const divContenu = document.querySelector(".addComtenuResumer")

    divContenu.innerHTML = ""

    let labelTitlePerso = document.createElement("label")
    labelTitlePerso.setAttribute("for", "titrePerso")
    labelTitlePerso.innerText = "Titre du Chapitre"
    divContenu.appendChild(labelTitlePerso)

    let inputTitlePerso = document.createElement("input")
    inputTitlePerso.type = "text"
    inputTitlePerso.name = "titre"
    inputTitlePerso.id = "titrePerso"
    divContenu.appendChild(inputTitlePerso)

    let labelPara1 = document.createElement("label")
    labelPara1.setAttribute("for", "paragraphe1")
    labelPara1.innerText = "Paragraphe 1"
    divContenu.appendChild(labelPara1)

    let textareaPara1 = document.createElement("textarea")
    textareaPara1.name = "corpsContenu"
    textareaPara1.id = "paragraphe1"
    textareaPara1.rows = "5"
    textareaPara1.cols = "50"
    divContenu.appendChild(textareaPara1)

    let labelPara2 = document.createElement("label")
    labelPara2.setAttribute("for", "paragraphe2")
    labelPara2.innerText = "Paragraphe 2"
    divContenu.appendChild(labelPara2)

    let textareaPara2 = document.createElement("textarea")
    textareaPara2.name = "corpsContenu"
    textareaPara2.id = "paragraphe2"
    textareaPara2.rows = "5"
    textareaPara2.cols = "50"
    divContenu.appendChild(textareaPara2)

    let labelPara3 = document.createElement("label")
    labelPara3.setAttribute("for", "paragraphe3")
    labelPara3.innerText = "Paragraphe 3"
    divContenu.appendChild(labelPara3)

    let textareaPara3 = document.createElement("textarea")
    textareaPara3.name = "corpsContenu"
    textareaPara3.id = "paragraphe3"
    textareaPara3.rows = "5"
    textareaPara3.cols = "50"
    divContenu.appendChild(textareaPara3)

    let labelPara4 = document.createElement("label")
    labelPara4.setAttribute("for", "paragraphe4")
    labelPara4.innerText = "Paragraphe 4"
    divContenu.appendChild(labelPara4)

    let textareaPara4 = document.createElement("textarea")
    textareaPara4.name = "corpsContenu"
    textareaPara4.id = "paragraphe4"
    textareaPara4.rows = "5"
    textareaPara4.cols = "50"
    divContenu.appendChild(textareaPara4)

    let labelPara5 = document.createElement("label")
    labelPara5.setAttribute("for", "paragraphe5")
    labelPara5.innerText = "Paragraphe 5"
    divContenu.appendChild(labelPara5)

    let textareaPara5 = document.createElement("textarea")
    textareaPara5.name = "corpsContenu"
    textareaPara5.id = "paragraphe5"
    textareaPara5.rows = "5"
    textareaPara5.cols = "50"
    divContenu.appendChild(textareaPara5)

    let labelPara6 = document.createElement("label")
    labelPara6.setAttribute("for", "paragraphe6")
    labelPara6.innerText = "Paragraphe 6"
    divContenu.appendChild(labelPara6)

    let textareaPara6 = document.createElement("textarea")
    textareaPara6.name = "corpsContenu"
    textareaPara6.id = "paragraphe6"
    textareaPara6.rows = "5"
    textareaPara6.cols = "50"
    divContenu.appendChild(textareaPara6)

    let labelPara7 = document.createElement("label")
    labelPara7.setAttribute("for", "paragraphe7")
    labelPara7.innerText = "Paragraphe 7"
    divContenu.appendChild(labelPara7)

    let textareaPara7 = document.createElement("textarea")
    textareaPara7.name = "corpsContenu"
    textareaPara7.id = "paragraphe7"
    textareaPara7.rows = "5"
    textareaPara7.cols = "50"
    divContenu.appendChild(textareaPara7)

    let labelPara8 = document.createElement("label")
    labelPara8.setAttribute("for", "paragraphe8")
    labelPara8.innerText = "Paragraphe 8"
    divContenu.appendChild(labelPara8)

    let textareaPara8 = document.createElement("textarea")
    textareaPara8.name = "corpsContenu"
    textareaPara8.id = "paragraphe8"
    textareaPara8.rows = "5"
    textareaPara8.cols = "50"
    divContenu.appendChild(textareaPara8)
}

function generationOptionResumer2(){
    const divContenu = document.querySelector(".addComtenuResumer")

    divContenu.innerHTML = ""

    let inputImage = document.createElement("input")
    inputImage.type = "file"
    inputImage.id = "file"
    inputImage.accept = ".pdf"
    divContenu.appendChild(inputImage)

    let labelImage = document.createElement("label")
    labelImage.setAttribute("for", "file")
    labelImage.className = "labelFilePDF"
    labelImage.innerText = "+ Ajouter un fichier PDF"
    divContenu.appendChild(labelImage)
}

function generationOptionResumer3(){
    const divContenu = document.querySelector(".addComtenuResumer")

    divContenu.innerHTML = ""

    let labelTitle = document.createElement("label")
    labelTitle.setAttribute("for", "titreEnregistrement")
    labelTitle.innerText = "Titre"
    divContenu.appendChild(labelTitle)

    let inputTitle = document.createElement("input")
    inputTitle.type = "text"
    inputTitle.name = "titre"
    inputTitle.id = "titreEnregistrement"
    divContenu.appendChild(inputTitle)

    let labelContenu = document.createElement("label")
    labelContenu.setAttribute("for", "corpsContenuInfo")
    labelContenu.innerText = "Contenu"
    divContenu.appendChild(labelContenu)

    let textareaContenu = document.createElement("textarea")
    textareaContenu.name = "corpsContenu"
    textareaContenu.id = "corpsContenuInfo"
    textareaContenu.rows = "5"
    textareaContenu.cols = "50"
    divContenu.appendChild(textareaContenu)
}