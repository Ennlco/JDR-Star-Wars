const divBase = document.getElementById("1")
const selectCat = document.getElementById("selectCat")
const range = document.querySelector(".rangePrix")

const elmConsomable = consomableList
const elmVes = vaisseau
const elmArme = armeList
const elmArmure = armureList
const elmCristaux = Cristaux
const elmModificateur = modificateurList

let consActive = false
let VesActive = false
let ArmeActive = false
let ArmureActive = false
let CristActive = false
let ModifActive = false

function consomable(elmConsomable){

    consActive = true
    VesActive = false
    ArmeActive = false
    ArmureActive = false
    CristActive = false
    ModifActive = false

    divBase.innerHTML = ""
    selectCat.innerHTML = ""
    
    const option = document.createElement("option")
    option.value = ""
    option.innerText = "----"
    selectCat.appendChild(option)

    consomableCat.forEach(item => {
        const option = document.createElement("option")
        option.value = item.categorie
        option.innerText = item.categorie
        selectCat.appendChild(option)
    });

    for (let i = 0; i < elmConsomable.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = elmConsomable[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = elmConsomable[i].imgCredit
        imgPrice.alt = `${elmConsomable[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = elmConsomable[i].image
        imgCristal.alt = elmConsomable[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = elmConsomable[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = elmConsomable[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = elmConsomable[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = elmConsomable[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}

function vaisseaux(elmVes){

    consActive = false
    VesActive = true
    ArmeActive = false
    ArmureActive = false
    CristActive = false
    ModifActive = false

    divBase.innerHTML = ""
    selectCat.innerHTML = ""

    const option = document.createElement("option")
    option.value = ""
    option.innerText = "----"
    selectCat.appendChild(option)

    for (let i = 0; i < elmVes.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = elmVes[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = elmVes[i].imgCredit
        imgPrice.alt = `${elmVes[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = elmVes[i].image
        imgCristal.alt = elmVes[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = elmVes[i].nom
        divContentNom.appendChild(h4)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = elmVes[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = elmVes[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}

function arme(elmArme){

    consActive = false
    VesActive = false
    ArmeActive = true
    ArmureActive = false
    CristActive = false
    ModifActive = false

    divBase.innerHTML = ""
    selectCat.innerHTML = ""

    const option = document.createElement("option")
    option.value = ""
    option.innerText = "----"
    selectCat.appendChild(option)

    armeCat.forEach(item => {
        const option = document.createElement("option")
        option.value = item.categorie
        option.innerText = item.categorie
        selectCat.appendChild(option)
    });

    for (let i = 0; i < elmArme.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = elmArme[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = elmArme[i].imgCredit
        imgPrice.alt = `${elmArme[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = elmArme[i].image
        imgCristal.alt = elmArme[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = elmArme[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = elmArme[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = elmArme[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = elmArme[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}

function armure(elmArmure){

    consActive = false
    VesActive = false
    ArmeActive = false
    ArmureActive = true
    CristActive = false
    ModifActive = false

    divBase.innerHTML = ""
    selectCat.innerHTML = ""

    const option = document.createElement("option")
    option.value = ""
    option.innerText = "----"
    selectCat.appendChild(option)

    armureCat.forEach(item => {
        const option = document.createElement("option")
        option.value = item.categorie
        option.innerText = item.categorie
        selectCat.appendChild(option)
    });

    for (let i = 0; i < elmArmure.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-armure-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-armure-price'
        spanPrice.innerHTML = elmArmure[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-armure-price-img'
        imgPrice.src = elmArmure[i].imgCredit
        imgPrice.alt = `${elmArmure[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = elmArmure[i].image
        imgCristal.alt = elmArmure[i].nom
        imgCristal.className = 'sws-armure-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-armure-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = elmArmure[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = elmArmure[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-armure-info'
        pInfo.innerText = elmArmure[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-armure-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-armure-img'
        imgCredit.src = elmArmure[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }

}

function cristeaux(elmCristaux){

    consActive = false
    VesActive = false
    ArmeActive = false
    ArmureActive = false
    CristActive = true
    ModifActive = false

    divBase.innerHTML = ""
    selectCat.innerHTML = ""

    const option = document.createElement("option")
    option.value = ""
    option.innerText = "----"
    selectCat.appendChild(option)

    cristauCat.forEach(item => {
        const option = document.createElement("option")
        option.value = item.categorie
        option.innerText = item.categorie
        selectCat.appendChild(option)
    });

    for (let i = 0; i < elmCristaux.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = elmCristaux[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = elmCristaux[i].imgCredit
        imgPrice.alt = `${elmCristaux[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = elmCristaux[i].image
        imgCristal.alt = elmCristaux[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = elmCristaux[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = elmCristaux[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = elmCristaux[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = elmCristaux[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }

}

function modificateur(elmModificateur){

    consActive = false
    VesActive = false
    ArmeActive = false
    ArmureActive = false
    CristActive = false
    ModifActive = true

    divBase.innerHTML = ""
    selectCat.innerHTML = ""

    const option = document.createElement("option")
    option.value = ""
    option.innerText = "----"
    selectCat.appendChild(option)

    modificateurCat.forEach(item => {
        const option = document.createElement("option")
        option.value = item.categorie
        option.innerText = item.categorie
        selectCat.appendChild(option)
    });

    for (let i = 0; i < elmModificateur.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = elmModificateur[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = elmModificateur[i].imgCredit
        imgPrice.alt = `${elmModificateur[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = elmModificateur[i].image
        imgCristal.alt = elmModificateur[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = elmModificateur[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = elmModificateur[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = elmModificateur[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = elmModificateur[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}
