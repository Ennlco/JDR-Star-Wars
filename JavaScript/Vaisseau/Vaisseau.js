function afficherSelectionChambreKin(){
    let selction = document.querySelector(".kinSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionChambreKin(){
    let selction = document.querySelector(".kinSelection")
    selction.style.display = "none"
}

function afficherSelectionChambreLizan(){
    let selction = document.querySelector(".lizanSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionChambreLizan(){
    let selction = document.querySelector(".lizanSelection")
    selction.style.display = "none"
}

function afficherSelectionReacteur(){
    let selction = document.querySelector(".reacteurSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionReacteur(){
    let selction = document.querySelector(".reacteurSelection")
    selction.style.display = "none"
}

function afficherSelectionCommun(){
    let selction = document.querySelector(".communeSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionCommun(){
    let selction = document.querySelector(".communeSelection")
    selction.style.display = "none"
}

function afficherSelectionStockage(){
    let selction = document.querySelector(".stockageSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionStockage(){
    let selction = document.querySelector(".stockageSelection")
    selction.style.display = "none"
}

function afficherSelectionReunion(){
    let selction = document.querySelector(".reunionSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionReunion(){
    let selction = document.querySelector(".reunionSelection")
    selction.style.display = "none"
}

function afficherSelectionMedicale(){
    let selction = document.querySelector(".medicaleSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionMedicale(){
    let selction = document.querySelector(".medicaleSelection")
    selction.style.display = "none"
}

function afficherSelectionPilotage(){
    let selction = document.querySelector(".pilotageSelection")
    selction.style.display = "flex"
}
function desAfficherSelectionPilotage(){
    let selction = document.querySelector(".pilotageSelection")
    selction.style.display = "none"
}


function desAfficherAllSelection(){
    desAfficherSelectionChambreKin()
    desAfficherSelectionChambreLizan()
    desAfficherSelectionReacteur()
    desAfficherSelectionCommun()
    desAfficherSelectionStockage()
    desAfficherSelectionReunion()
    desAfficherSelectionMedicale()
    desAfficherSelectionPilotage()
}


function addListenerSelection(){
    let btnKin = document.getElementById("kinSelection")
    let btnLizan = document.getElementById("lizanSelection")
    let btnReacteur = document.getElementById("reacteurSelection")
    let btnCommun = document.getElementById("communeSelection")
    let btnStockage = document.getElementById("stockageSelection")
    let btnReunion = document.getElementById("reunionSelection")
    let btnMedicale = document.getElementById("medicaleSelection")
    let btnPilotage = document.getElementById("pilotageSelection")

    
    btnKin.addEventListener("pointerenter", (event) =>{
        if(event.target === btnKin){
            desAfficherAllSelection()
            afficherSelectionChambreKin()
        }
    })
    btnKin.addEventListener("pointerout", (event) =>{
        if(event.target === btnKin){
            desAfficherAllSelection()
        }
    })

    btnLizan.addEventListener("pointerenter", (event) =>{
        if(event.target === btnLizan){
            desAfficherAllSelection()
            afficherSelectionChambreLizan()
        }
    })
    btnLizan.addEventListener("pointerout", (event) =>{
        if(event.target === btnLizan){
            desAfficherAllSelection()
        }
    })

    btnReacteur.addEventListener("pointerenter", (event) =>{
        if(event.target === btnReacteur){
            desAfficherAllSelection()
            afficherSelectionReacteur()
        }
    })
    btnReacteur.addEventListener("pointerout", (event) =>{
        if(event.target === btnReacteur){
            desAfficherAllSelection()
        }
    })

    btnCommun.addEventListener("pointerenter", (event) =>{
        if(event.target === btnCommun){
            desAfficherAllSelection()
            afficherSelectionCommun()
        }
    })
    btnCommun.addEventListener("pointerout", (event) =>{
        if(event.target === btnCommun){
            desAfficherAllSelection()
        }
    })

    btnStockage.addEventListener("pointerenter", (event) =>{
        if(event.target === btnStockage){
            desAfficherAllSelection()
            afficherSelectionStockage()
        }
    })
    btnStockage.addEventListener("pointerout", (event) =>{
        if(event.target === btnStockage){
            desAfficherAllSelection()
        }
    })

    btnReunion.addEventListener("pointerenter", (event) =>{
        if(event.target === btnReunion){
            desAfficherAllSelection()
            afficherSelectionReunion()
        }
    })
    btnReunion.addEventListener("pointerout", (event) =>{
        if(event.target === btnReunion){
            desAfficherAllSelection()
        }
    })

    btnMedicale.addEventListener("pointerenter", (event) =>{
        if(event.target === btnMedicale){
            desAfficherAllSelection()
            afficherSelectionMedicale()
        }
    })
    btnMedicale.addEventListener("pointerout", (event) =>{
        if(event.target === btnMedicale){
            desAfficherAllSelection()
        }
    })

    btnPilotage.addEventListener("pointerenter", (event) =>{
        if(event.target === btnPilotage){
            desAfficherAllSelection()
            afficherSelectionPilotage()
        }
    })
    btnPilotage.addEventListener("pointerout", (event) =>{
        if(event.target === btnPilotage){
            desAfficherAllSelection()
        }
    })

}

addListenerSelection()