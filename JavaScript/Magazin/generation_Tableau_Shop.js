function consomable(){
    const divBase = document.getElementById("1")

    divBase.innerHTML = ""

    let h2 = document.createElement("h2")
    h2.innerText = "Consomables"
    divBase.appendChild(h2)

    let section = document.createElement("section")
    section.className = "choix_1"
    divBase.appendChild(section)

    let tableM = document.createElement("table")
    section.appendChild(tableM)

    let trTitleM = document.createElement("tr")
    tableM.appendChild(trTitleM)

    let thTitleM1 = document.createElement("th")
    thTitleM1.innerText = "Médical"
    trTitleM.appendChild(thTitleM1)

    let thTitleM2 = document.createElement("th")
    thTitleM2.innerText = "Détail"
    trTitleM.appendChild(thTitleM2)

    let thTitleM3 = document.createElement("th")
    thTitleM3.innerText = "Prix"
    trTitleM.appendChild(thTitleM3)

    let imgTitleM = document.createElement("img")
    imgTitleM.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleM.alt = "crédit"
    thTitleM3.appendChild(imgTitleM)

    for(i = 0; i < medicale.length; i++){
        let trElement = document.createElement("tr")
        tableM.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = medicale[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = medicale[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = medicale[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = medicale[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableS = document.createElement("table")
    section.appendChild(tableS)

    let trTitleS = document.createElement("tr")
    tableS.appendChild(trTitleS)

    let thTitleS1 = document.createElement("th")
    thTitleS1.innerText = "Stimulant"
    trTitleS.appendChild(thTitleS1)

    let thTitleS2 = document.createElement("th")
    thTitleS2.innerText = "Détail"
    trTitleS.appendChild(thTitleS2)

    let thTitleS3 = document.createElement("th")
    thTitleS3.innerText = "Prix"
    trTitleS.appendChild(thTitleS3)

    let imgTitleS = document.createElement("img")
    imgTitleS.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleS.alt = "crédit"
    thTitleS3.appendChild(imgTitleS)

    for(i = 0; i < stimulant.length; i++){
        let trElement = document.createElement("tr")
        tableS.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = stimulant[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = stimulant[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = stimulant[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = stimulant[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableA = document.createElement("table")
    section.appendChild(tableA)

    let trTitleA = document.createElement("tr")
    tableA.appendChild(trTitleA)

    let thTitleA1 = document.createElement("th")
    thTitleA1.innerText = "Armement"
    trTitleA.appendChild(thTitleA1)

    let thTitleA2 = document.createElement("th")
    thTitleA2.innerText = "Détail"
    trTitleA.appendChild(thTitleA2)

    let thTitleA3 = document.createElement("th")
    thTitleA3.innerText = "Prix"
    trTitleA.appendChild(thTitleA3)

    let imgTitleA = document.createElement("img")
    imgTitleA.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleA.alt = "crédit"
    thTitleA3.appendChild(imgTitleA)

    for(i = 0; i < armement.length; i++){
        let trElement = document.createElement("tr")
        tableA.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = armement[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = armement[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = armement[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = armement[i].imgCredit
        tdPrix.appendChild(imgElement)
    }
}

function vaisseaux(){
    const divBase = document.getElementById("1")

    divBase.innerHTML = ""

    let h2 = document.createElement("h2")
    h2.innerText = "Vaisseau"
    divBase.appendChild(h2)

    let section = document.createElement("section")
    section.className = "choix_2"
    divBase.appendChild(section)

    let table = document.createElement("table")
    section.appendChild(table)

    let trTitle = document.createElement("tr")
    table.appendChild(trTitle)

    let thTitle1 = document.createElement("th")
    thTitle1.innerText = "Meuble"
    trTitle.appendChild(thTitle1)

    let thTitle2 = document.createElement("th")
    thTitle2.innerText = "Détail"
    trTitle.appendChild(thTitle2)

    let thTitle3 = document.createElement("th")
    thTitle3.innerText = "Prix"
    trTitle.appendChild(thTitle3)

    let imgTitle = document.createElement("img")
    imgTitle.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitle.alt = "crédit"
    thTitle3.appendChild(imgTitle)

    for(i = 0; i < vaisseau.length; i++){
        let trElement = document.createElement("tr")
        table.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = vaisseau[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = vaisseau[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = vaisseau[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = vaisseau[i].imgCredit
        tdPrix.appendChild(imgElement)
    }
}

function arme(){
    const divBase = document.getElementById("1")

    divBase.innerHTML = ""

    let h2 = document.createElement("h2")
    h2.innerText = "Armes"
    divBase.appendChild(h2)

    let section = document.createElement("section")
    section.className = "choix_1"
    divBase.appendChild(section)

    let tableB = document.createElement("table")
    section.appendChild(tableB)

    let trTitleB = document.createElement("tr")
    tableB.appendChild(trTitleB)

    let thTitleB1 = document.createElement("th")
    thTitleB1.innerText = "Blaster"
    trTitleB.appendChild(thTitleB1)

    let thTitleB2 = document.createElement("th")
    thTitleB2.innerText = "Détail"
    trTitleB.appendChild(thTitleB2)

    let thTitleB3 = document.createElement("th")
    thTitleB3.innerText = "Prix"
    trTitleB.appendChild(thTitleB3)

    let imgTitleB = document.createElement("img")
    imgTitleB.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleB.alt = "crédit"
    thTitleB3.appendChild(imgTitleB)

    for(i = 0; i < blasteur.length; i++){
        let trElement = document.createElement("tr")
        tableB.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = blasteur[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = blasteur[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = blasteur[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = blasteur[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableS = document.createElement("table")
    section.appendChild(tableS)

    let trTitleS = document.createElement("tr")
    tableS.appendChild(trTitleS)

    let thTitleS1 = document.createElement("th")
    thTitleS1.innerText = "Sabre Laser"
    trTitleS.appendChild(thTitleS1)

    let thTitleS2 = document.createElement("th")
    thTitleS2.innerText = "Détail"
    trTitleS.appendChild(thTitleS2)

    let thTitleS3 = document.createElement("th")
    thTitleS3.innerText = "Prix"
    trTitleS.appendChild(thTitleS3)

    let imgTitleS = document.createElement("img")
    imgTitleS.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleS.alt = "crédit"
    thTitleS3.appendChild(imgTitleS)

    for(i = 0; i < sabreLaser.length; i++){
        let trElement = document.createElement("tr")
        tableS.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = sabreLaser[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = sabreLaser[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = sabreLaser[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = sabreLaser[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableE = document.createElement("table")
    section.appendChild(tableE)

    let trTitleE = document.createElement("tr")
    tableE.appendChild(trTitleE)

    let thTitleE1 = document.createElement("th")
    thTitleE1.innerText = "Equipement Mandalorien"
    trTitleE.appendChild(thTitleE1)

    let thTitleE2 = document.createElement("th")
    thTitleE2.innerText = "Détail"
    trTitleE.appendChild(thTitleE2)

    let thTitleE3 = document.createElement("th")
    thTitleE3.innerText = "Prix"
    trTitleE.appendChild(thTitleE3)

    let imgTitleE = document.createElement("img")
    imgTitleE.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleE.alt = "crédit"
    thTitleE3.appendChild(imgTitleE)

    for(i = 0; i < equipementMando.length; i++){
        let trElement = document.createElement("tr")
        tableE.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = equipementMando[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = equipementMando[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = equipementMando[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = equipementMando[i].imgCredit
        tdPrix.appendChild(imgElement)
    }
}

function armure(){
    const divBase = document.getElementById("1")

    divBase.innerHTML = ""

    let h2 = document.createElement("h2")
    h2.innerText = "Armures"
    divBase.appendChild(h2)

    let section = document.createElement("section")
    section.className = "choix_1"
    divBase.appendChild(section)

    let tableAS = document.createElement("table")
    section.appendChild(tableAS)

    let trTitleAS = document.createElement("tr")
    tableAS.appendChild(trTitleAS)

    let thTitleAS1 = document.createElement("th")
    thTitleAS1.innerText = "Armure Simple"
    trTitleAS.appendChild(thTitleAS1)

    let thTitleAS2 = document.createElement("th")
    thTitleAS2.innerText = "Détail"
    trTitleAS.appendChild(thTitleAS2)

    let thTitleAS3 = document.createElement("th")
    thTitleAS3.innerText = "Prix"
    trTitleAS.appendChild(thTitleAS3)

    let imgTitleAS = document.createElement("img")
    imgTitleAS.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleAS.alt = "crédit"
    thTitleAS3.appendChild(imgTitleAS)

    for(i = 0; i < armureSimple.length; i++){
        let trElement = document.createElement("tr")
        tableAS.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = armureSimple[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = armureSimple[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = armureSimple[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = armureSimple[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableAI = document.createElement("table")
    section.appendChild(tableAI)

    let trTitleAI = document.createElement("tr")
    tableAI.appendChild(trTitleAI)

    let thTitleAI1 = document.createElement("th")
    thTitleAI1.innerText = "Armure Intermédiare"
    trTitleAI.appendChild(thTitleAI1)

    let thTitleAI2 = document.createElement("th")
    thTitleAI2.innerText = "Détail"
    trTitleAI.appendChild(thTitleAI2)

    let thTitleAI3 = document.createElement("th")
    thTitleAI3.innerText = "Prix"
    trTitleAI.appendChild(thTitleAI3)

    let imgTitleAI = document.createElement("img")
    imgTitleAI.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleAI.alt = "crédit"
    thTitleAI3.appendChild(imgTitleAI)

    for(i = 0; i < armureIntermédiare.length; i++){
        let trElement = document.createElement("tr")
        tableAI.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = armureIntermédiare[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = armureIntermédiare[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = armureIntermédiare[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = armureIntermédiare[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableAL = document.createElement("table")
    section.appendChild(tableAL)

    let trTitleAL = document.createElement("tr")
    tableAL.appendChild(trTitleAL)

    let thTitleAL1 = document.createElement("th")
    thTitleAL1.innerText = "Armure Lourde"
    trTitleAL.appendChild(thTitleAL1)

    let thTitleAL2 = document.createElement("th")
    thTitleAL2.innerText = "Détail"
    trTitleAL.appendChild(thTitleAL2)

    let thTitleAL3 = document.createElement("th")
    thTitleAL3.innerText = "Prix"
    trTitleAL.appendChild(thTitleAL3)

    let imgTitleAL = document.createElement("img")
    imgTitleAL.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleAL.alt = "crédit"
    thTitleAL3.appendChild(imgTitleAL)

    for(i = 0; i < blasteur.length; i++){
        let trElement = document.createElement("tr")
        tableAL.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = blasteur[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = blasteur[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = blasteur[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = blasteur[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

}

function cristeaux(){
    const divBase = document.getElementById("1")

    divBase.innerHTML = ""

    let h2 = document.createElement("h2")
    h2.innerText = "Cristeaux"
    divBase.appendChild(h2)

    let section = document.createElement("section")
    section.className = "choix_1"
    divBase.appendChild(section)

    let tableCS = document.createElement("table")
    section.appendChild(tableCS)

    let trTitleCS = document.createElement("tr")
    tableCS.appendChild(trTitleCS)

    let thTitleCS1 = document.createElement("th")
    thTitleCS1.innerText = "Sabre Laser"
    trTitleCS.appendChild(thTitleCS1)

    let thTitleCS2 = document.createElement("th")
    thTitleCS2.innerText = "Détail"
    trTitleCS.appendChild(thTitleCS2)

    let thTitleCS3 = document.createElement("th")
    thTitleCS3.innerText = "Prix"
    trTitleCS.appendChild(thTitleCS3)

    let imgTitleCS = document.createElement("img")
    imgTitleCS.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleCS.alt = "crédit"
    thTitleCS3.appendChild(imgTitleCS)

    for(i = 0; i < cristeauSabre.length; i++){
        let trElement = document.createElement("tr")
        tableCS.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = cristeauSabre[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = cristeauSabre[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = cristeauSabre[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = cristeauSabre[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableCB = document.createElement("table")
    section.appendChild(tableCB)

    let trTitleCB = document.createElement("tr")
    tableCB.appendChild(trTitleCB)

    let thTitleCB1 = document.createElement("th")
    thTitleCB1.innerText = "Blaster"
    trTitleCB.appendChild(thTitleCB1)

    let thTitleCB2 = document.createElement("th")
    thTitleCB2.innerText = "Détail"
    trTitleCB.appendChild(thTitleCB2)

    let thTitleCB3 = document.createElement("th")
    thTitleCB3.innerText = "Prix"
    trTitleCB.appendChild(thTitleCB3)

    let imgTitleCB = document.createElement("img")
    imgTitleCB.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleCB.alt = "crédit"
    thTitleCB3.appendChild(imgTitleCB)

    for(i = 0; i < cristeauBlaster.length; i++){
        let trElement = document.createElement("tr")
        tableCB.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = cristeauBlaster[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = cristeauBlaster[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = cristeauBlaster[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = cristeauBlaster[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

}

function modificateur(){
    const divBase = document.getElementById("1")

    divBase.innerHTML = ""

    let h2 = document.createElement("h2")
    h2.innerText = "Modificateurs"
    divBase.appendChild(h2)

    let section = document.createElement("section")
    section.className = "choix_1"
    divBase.appendChild(section)

    let tableMS = document.createElement("table")
    section.appendChild(tableMS)

    let trTitleMS = document.createElement("tr")
    tableMS.appendChild(trTitleMS)

    let thTitleMS1 = document.createElement("th")
    thTitleMS1.innerText = "Armure"
    trTitleMS.appendChild(thTitleMS1)

    let thTitleMS2 = document.createElement("th")
    thTitleMS2.innerText = "Détail"
    trTitleMS.appendChild(thTitleMS2)

    let thTitleMS3 = document.createElement("th")
    thTitleMS3.innerText = "Prix"
    trTitleMS.appendChild(thTitleMS3)

    let imgTitleMS = document.createElement("img")
    imgTitleMS.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleMS.alt = "crédit"
    thTitleMS3.appendChild(imgTitleMS)

    for(i = 0; i < modificateurArmure.length; i++){
        let trElement = document.createElement("tr")
        tableMS.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = modificateurArmure[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = modificateurArmure[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = modificateurArmure[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = modificateurArmure[i].imgCredit
        tdPrix.appendChild(imgElement)
    }

    let tableMA = document.createElement("table")
    section.appendChild(tableMA)

    let trTitleMA = document.createElement("tr")
    tableMA.appendChild(trTitleMA)

    let thTitleMA1 = document.createElement("th")
    thTitleMA1.innerText = "Arme"
    trTitleMA.appendChild(thTitleMA1)

    let thTitleMA2 = document.createElement("th")
    thTitleMA2.innerText = "Détail"
    trTitleMA.appendChild(thTitleMA2)

    let thTitleMA3 = document.createElement("th")
    thTitleMA3.innerText = "Prix"
    trTitleMA.appendChild(thTitleMA3)

    let imgTitleMA = document.createElement("img")
    imgTitleMA.src = "Ressource/Image/Picto/Picto_Credit.png"
    imgTitleMA.alt = "crédit"
    thTitleMA3.appendChild(imgTitleMA)

    for(i = 0; i < modificateurArme.length; i++){
        let trElement = document.createElement("tr")
        tableMA.appendChild(trElement)

        let tdTitle = document.createElement("td")
        tdTitle.innerText = modificateurArme[i].nom
        trElement.appendChild(tdTitle)

        let tdDetail = document.createElement("td")
        tdDetail.innerText = modificateurArme[i].detail
        trElement.appendChild(tdDetail)

        let tdPrix = document.createElement("td")
        tdPrix.innerText = modificateurArme[i].prix
        trElement.appendChild(tdPrix)

        let imgElement = document.createElement("img")
        imgElement.src = modificateurArme[i].imgCredit
        tdPrix.appendChild(imgElement)
    }
}
