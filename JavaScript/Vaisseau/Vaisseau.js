const select1 = document.getElementById("1")
const select2 = document.getElementById("2")
const select3 = document.getElementById("3")
const select4 = document.getElementById("4")
const select5 = document.getElementById("5")
const select6 = document.getElementById("6")
const select7 = document.getElementById("7")
const select8 = document.getElementById("8")

const select = document.querySelectorAll(".slide")

const divContent = document.querySelector(".img-content")
const title = document.querySelector(".nameZone")

const slider = document.querySelector('.sliderShow')

const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentTranslate = -0

prev.addEventListener('click', () => {
    ++currentTranslate 
    slider.style.transform = `translateX(${currentTranslate * 200}px)`
    slider.style.transition = "transform 300ms ease-in-out"
    console.log(slider.style.transform)
})

next.addEventListener('click', () => {
    --currentTranslate 
    slider.style.transform = `translateX(${currentTranslate * 200}px)`
    slider.style.transition = "transform 300ms ease-in-out"
    console.log(slider.style.transform)
})


for(i = 0; i < select.length; i++){
    
    select[i].addEventListener("pointerenter", (event) =>{

        if(event.target === select1){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/ChambreKinSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Chambre de Kin"
        }
        if(event.target === select2){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/ChambreLizanSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Chambre de Lizân"
        }
        if(event.target === select3){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/CocpitePilotageSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Cocpite du vaisseau"
        }
        if(event.target === select4){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/LieuReunionSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Lieu de réunion du vaisseau"
        }
        if(event.target === select5){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/ReacteurSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Réacteur du vaisseau et chambre de 4M"
        }
        if(event.target === select6){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/ZoneCommuneSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Zone de vie commune et chambre de Alourra"
        }
        if(event.target === select7){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/ZoneMedicaleSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Baie médicale du vaisseau"
        }
        if(event.target === select8){
            divContent.innerHTML = ""

            const div = document.createElement("div")
            div.style.backgroundImage = "url(Ressource/Image/Vaisseau/WebP/ZonesStockageSelection.webp)"
            div.className = "overlay"
            divContent.appendChild(div)

            title.innerText = "Zone de stockage du vaisseau et chambre de Nix"
        }
    })

    select[i].addEventListener("pointerout", () =>{
        divContent.innerHTML = ""

        title.innerText = "zone du vaisseau"
    })
}

function selectionChoix(){
    let select = document.getElementById("selectZone")
    const divBase = document.querySelector(".vueGlobalMobile div")

    select.addEventListener("change", () =>{
        let selectValue = select.value

        if(selectValue == "1"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/ChambreKinSelection.png"
            img.alt = "Chambre kin"
            img.className = "imgSelect"
            divBase.appendChild(img)
        }
        if(selectValue == "2"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/ChambreLizanSelection.png"
            img.alt = "Chambre Lizân"
            img.className = "imgSelect"
            divBase.appendChild(img) 
        }
        if(selectValue == "3"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/ReacteurSelection.png"
            img.alt = "Zone Réacteur et chambre de 4M"
            img.className = "imgSelect"
            divBase.appendChild(img) 
        }
        if(selectValue == "4"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/ZoneCommuneSelection.png"
            img.alt = "Zone Commune et chambre de Alourra"
            img.className = "imgSelect"
            divBase.appendChild(img) 
        }
        if(selectValue == "5"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/ZonesStockageSelection.png"
            img.alt = "Zone Stockage et chambre de Nix"
            img.className = "imgSelect"
            divBase.appendChild(img) 
        }
        if(selectValue == "6"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/LieuReunionSelection.png"
            img.alt = "Lieu Réunion"
            img.className = "imgSelect"
            divBase.appendChild(img) 
        }
        if(selectValue == "7"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/ZoneMedicaleSelection.png"
            img.alt = "Baie Médicale"
            img.className = "imgSelect"
            divBase.appendChild(img) 
        }
        if(selectValue == "8"){
            divBase.innerHTML = ""

            const img = document.createElement("img")
            img.src = "Ressource/Image/Vaisseau/CocpitePilotageSelection.png"
            img.alt = "Cocpite Pilotage"
            img.className = "imgSelect"
            divBase.appendChild(img) 
        }
    })
    

}

selectionChoix()