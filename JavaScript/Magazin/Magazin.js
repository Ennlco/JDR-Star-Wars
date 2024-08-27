const rangeRef = document.getElementById("prixRange")
const pName = document.getElementById("prixRangeText")

function choix(){

    const btnChoix = document.querySelectorAll("input")

    for (i = 0; i < btnChoix.length; i++){
        btnChoix[i].addEventListener("click", (event) =>{

            if ( event.target === btnChoix[0] || ''){
                consomable(elmConsomable)
                rangeRef.max = "1500"
                rangeRef.step = "100"
                rangeRef.value = "0"
                pName.innerText = "0"
            }

            if ( event.target === btnChoix[1]){
                vaisseaux(elmVes)
                rangeRef.max = "100000"
                rangeRef.step = "10000"
                rangeRef.value = "0"
                pName.innerText = "0"
            }

            if ( event.target === btnChoix[2]){
                arme(elmArme)
                rangeRef.max = "6000"
                rangeRef.step = "1000"
                rangeRef.value = "0"
                pName.innerText = "0"
            }

            if ( event.target === btnChoix[3]){
                armure(elmArmure)
                rangeRef.max = "50000"
                rangeRef.step = "5000"
                rangeRef.value = "0"
                pName.innerText = "0"
            }

            if ( event.target === btnChoix[4]){
                cristeaux(elmCristaux)
                rangeRef.max = "30000"
                rangeRef.step = "1000"
                rangeRef.value = "0"
                pName.innerText = "0"
            }

            if ( event.target === btnChoix[5]){
                modificateur(elmModificateur)
                rangeRef.max = "8000"
                rangeRef.step = "100"
                rangeRef.value = "0"
                pName.innerText = "0"
            }

        })
    }
}

function choixMobile(){
    let select = document.getElementById("selectShop")

    select.addEventListener("change", () =>{
        let selectValue = select.value

        if(selectValue == ""){
            divBase.innerHTML = ""
        }
        if(selectValue == "1"){
            consomable(elmConsomable)
            rangeRef.max = "1500"
            rangeRef.step = "100"
            rangeRef.value = "0"
            pName.innerText = "0"
        }
        if(selectValue == "2"){
            vaisseaux(elmVes)
            rangeRef.max = "100000"
            rangeRef.step = "10000"
            rangeRef.value = "0"
            pName.innerText = "0"
        }
        if(selectValue == "3"){
            arme(elmArme)
            rangeRef.max = "6000"
            rangeRef.step = "1000"
            rangeRef.value = "0"
            pName.innerText = "0"
        }
        if(selectValue == "4"){
            armure(elmArmure)
            rangeRef.max = "50000"
            rangeRef.step = "5000"
            rangeRef.value = "0"
            pName.innerText = "0"
        }
        if(selectValue == "5"){
            cristeaux(elmCristaux)
            rangeRef.max = "30000"
            rangeRef.step = "1000"
            rangeRef.value = "0"
            pName.innerText = "0"
        }
        if(selectValue == "6"){
            modificateur(elmModificateur)
            rangeRef.max = "8000"
            rangeRef.step = "100"
            rangeRef.value = "0"
            pName.innerText = "0"
        }
    })
}

function selectCategorie(){

    selectCat.addEventListener("change", function(){
        let selectValue = selectCat.value
        console.log(selectValue)

        if (selectValue === "Medicale" || selectValue === "Stimulant" || selectValue === "Armement"){
            const consFltr = consomableList.filter(function(consomableList){
                return consomableList.categorie === selectValue
            })
            divBase.innerHTML = ""
            consomable(consFltr)
        }
        if (selectValue === "Blasteur" || selectValue === "Sabre Laser" || selectValue === "Mandalorien"){
            const armeFltr = armeList.filter(function(armeList){
                return armeList.categorie === selectValue
            })
            divBase.innerHTML = ""
            arme(armeFltr)
        }
        if (selectValue === "Armure Simple" || selectValue === "Armure Intermédiare" || selectValue === "Armure Lourde"){
            const armureFltr = armureList.filter(function(armureList){
                return armureList.categorie === selectValue
            })
            divBase.innerHTML = ""
            armure(armureFltr)
        }
        if (selectValue === "Sabre" || selectValue === "Blaster"){
            const cristFltr = Cristaux.filter(function(Cristaux){
                return Cristaux.categorie === selectValue
            })
            divBase.innerHTML = ""
            cristeaux(cristFltr)
        }
        if (selectValue === "Armure" || selectValue === "Arme"){
            const modifFltr = modificateurList.filter(function(modificateurList){
                return modificateurList.categorie === selectValue
            })
            divBase.innerHTML = ""
            modificateur(modifFltr)
        } 
    })
}

function selectPrixMax(){
    const prixMax = document.getElementById("Prix-Max")
    prixMax.addEventListener("click", function(){
        if(consActive === true){
            const Max = consomableList.filter(function(item){
                return item.prix >= 500
            })
            divBase.innerHTML = ""
            consomable(Max)
        }
        if(VesActive === true){
            const Max = vaisseau.filter(function(item){
                return item.prix >= 100000
            })
            divBase.innerHTML = ""
            vaisseaux(Max)
        }
        if(ArmeActive === true){
            const Max = armeList.filter(function(item){
                return item.prix >= 4000
            })
            divBase.innerHTML = ""
            arme(Max)
        }
        if(ArmureActive === true){
            const Max = armureList.filter(function(item){
                return item.prix >= 50000
            })
            divBase.innerHTML = ""
            armure(Max)
        }
        if(CristActive === true){
            const Max = Cristaux.filter(function(item){
                return item.prix >= 6000
            })
            divBase.innerHTML = ""
            cristeaux(Max)
        }
        if(ModifActive === true){
            const Max = modificateurList.filter(function(item){
                return item.prix >= 5000
            })
            divBase.innerHTML = ""
            modificateur(Max)
        }
    })
}

function selectPrixMin(){
    const prixMin = document.getElementById("Prix-Min")
    prixMin.addEventListener("click", function(){
        if(consActive === true){
            const Min = consomableList.filter(function(item){
                return item.prix <= 300
            })
            divBase.innerHTML = ""
            consomable(Min)
        }
        if(VesActive === true){
            const Min = vaisseau.filter(function(item){
                return item.prix <= 50000
            })
            divBase.innerHTML = ""
            vaisseaux(Min)
        }
        if(ArmeActive === true){
            const Min = armeList.filter(function(item){
                return item.prix <= 3000
            })
            divBase.innerHTML = ""
            arme(Min)
        }
        if(ArmureActive === true){
            const Min = armureList.filter(function(item){
                return item.prix <= 40000
            })
            divBase.innerHTML = ""
            armure(Min)
        }
        if(CristActive === true){
            const Min = Cristaux.filter(function(item){
                return item.prix <= 4000
            })
            divBase.innerHTML = ""
            cristeaux(Min)
        }
        if(ModifActive === true){
            const Min = modificateurList.filter(function(item){
                return item.prix <= 3000
            })
            divBase.innerHTML = ""
            modificateur(Min)
        }
    })
}

function selectRangePrix(){
    rangeRef.addEventListener("change", function(){
        let currentPrix = rangeRef.value

        pName.innerText = currentPrix

        if(consActive === true){
            const currentFltr = consomableList.filter(function(item){
                return item.prix <= currentPrix
            })
            divBase.innerHTML = ""
            consomable(currentFltr)
        }
        if(VesActive === true){
            const currentFltr = vaisseau.filter(function(item){
                return item.prix <= currentPrix
            })
            divBase.innerHTML = ""
            vaisseaux(currentFltr)
        }
        if(ArmeActive === true){
            const currentFltr = armeList.filter(function(item){
                return item.prix <= currentPrix
            })
            divBase.innerHTML = ""
            arme(currentFltr)
        }
        if(ArmureActive === true){
            const currentFltr = armureList.filter(function(item){
                return item.prix <= currentPrix
            })
            divBase.innerHTML = ""
            armure(currentFltr)
        }
        if(CristActive === true){
            const currentFltr = Cristaux.filter(function(item){
                return item.prix <= currentPrix
            })
            divBase.innerHTML = ""
            cristeaux(currentFltr)
        }
        if(ModifActive === true){
            const currentFltr = modificateurList.filter(function(item){
                return item.prix <= currentPrix
            })
            divBase.innerHTML = ""
            modificateur(currentFltr)
        }
    })
    
}

choix()
choixMobile()
selectCategorie()
selectPrixMax()
selectPrixMin()
selectRangePrix()