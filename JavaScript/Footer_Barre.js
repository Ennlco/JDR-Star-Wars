const divContentFooterBarre = document.querySelector(".contentBarreAnimation")

const divBaseBarreFoot = document.createElement("div")
divBaseBarreFoot.className = "conteneur"
divContentFooterBarre.appendChild(divBaseBarreFoot)

for(i = 0; i < 39; i++){
    const divBarre = document.createElement("div")
    divBarre.className = `barre barre${[i]}`
    divBaseBarreFoot.appendChild(divBarre)
}

const divBaseShadow = document.createElement("div")
divBaseShadow.className = "conteneurShadow"
divContentFooterBarre.appendChild(divBaseShadow)

for(i = 0; i < 39; i++){
    const divBarre = document.createElement("div")
    divBarre.className = `Shadow Shadow${[i]}`
    divBaseShadow.appendChild(divBarre)
}