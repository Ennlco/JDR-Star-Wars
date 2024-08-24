const divBase = document.getElementById("1")

function consomable(){

    divBase.innerHTML = ""

    for (let i = 0; i < consomableList.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = consomableList[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = consomableList[i].imgCredit
        imgPrice.alt = `${consomableList[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = consomableList[i].image
        imgCristal.alt = consomableList[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = consomableList[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = consomableList[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = consomableList[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = consomableList[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}

function vaisseaux(){

    divBase.innerHTML = ""

    for (let i = 0; i < vaisseau.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = vaisseau[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = vaisseau[i].imgCredit
        imgPrice.alt = `${vaisseau[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = vaisseau[i].image
        imgCristal.alt = vaisseau[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = vaisseau[i].nom
        divContentNom.appendChild(h4)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = vaisseau[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = vaisseau[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}

function arme(){

    divBase.innerHTML = ""

    for (let i = 0; i < armeList.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = armeList[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = armeList[i].imgCredit
        imgPrice.alt = `${armeList[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = armeList[i].image
        imgCristal.alt = armeList[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = armeList[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = armeList[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = armeList[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = armeList[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}

function armure(){

    divBase.innerHTML = ""

    for (let i = 0; i < armureList.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-armure-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-armure-price'
        spanPrice.innerHTML = armureList[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-armure-price-img'
        imgPrice.src = armureList[i].imgCredit
        imgPrice.alt = `${armureList[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = armureList[i].image
        imgCristal.alt = armureList[i].nom
        imgCristal.className = 'sws-armure-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-armure-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = armureList[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = armureList[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-armure-info'
        pInfo.innerText = armureList[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-armure-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-armure-img'
        imgCredit.src = armureList[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }

}

function cristeaux(){

    divBase.innerHTML = ""

    for (let i = 0; i < Cristaux.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = Cristaux[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = Cristaux[i].imgCredit
        imgPrice.alt = `${Cristaux[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = Cristaux[i].image
        imgCristal.alt = Cristaux[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = Cristaux[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = Cristaux[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = Cristaux[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = Cristaux[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }

}

function modificateur(){

    divBase.innerHTML = ""

    for (let i = 0; i < modificateurList.length; i++) {
        
        let divContent = document.createElement("div")
        divContent.className = 'sws-cristal-card'
        divBase.appendChild(divContent)

        let spanPrice = document.createElement("span")
        spanPrice.className = 'sws-cristal-price'
        spanPrice.innerHTML = modificateurList[i].prix
        divContent.appendChild(spanPrice)

        let imgPrice = document.createElement("img")
        imgPrice.className = 'sws-cristal-price-img'
        imgPrice.src = modificateurList[i].imgCredit
        imgPrice.alt = `${modificateurList[i].prix} Crédit`
        spanPrice.appendChild(imgPrice)

        let imgCristal = document.createElement("img")
        imgCristal.src = modificateurList[i].image
        imgCristal.alt = modificateurList[i].nom
        imgCristal.className = 'sws-cristal-img'
        divContent.appendChild(imgCristal)

        let divContentNom = document.createElement("div")
        divContentNom.className = 'sws-cristal-nom'
        divContent.appendChild(divContentNom)

        let h4 = document.createElement("h4")
        h4.innerText = modificateurList[i].nom
        divContentNom.appendChild(h4)

        let p = document.createElement("p")
        p.innerText = modificateurList[i].categorie
        divContentNom.appendChild(p)

        let pInfo = document.createElement("p")
        pInfo.className = 'sws-cristal-info'
        pInfo.innerText = modificateurList[i].detail
        divContent.appendChild(pInfo)

        let button = document.createElement("button")
        button.className = 'sws-cart-ajout'
        button.innerText = 'Acheter'
        divContent.appendChild(button)

        let imgCredit = document.createElement("img")
        imgCredit.className = 'sws-cart-ajout-img'
        imgCredit.src = modificateurList[i].imgCredit
        imgCredit.alt = "crédit républicain"
        button.appendChild(imgCredit)
    }
}
