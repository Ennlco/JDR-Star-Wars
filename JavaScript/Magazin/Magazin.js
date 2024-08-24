function choix(){

    const btnChoix = document.querySelectorAll("input")


    for (i = 0; i < btnChoix.length; i++){
        btnChoix[i].addEventListener("click", (event) =>{

            console.log(event.target)
            if ( event.target === btnChoix[0] || ''){
                consomable()
                console.log('consomable')
            }

            if ( event.target === btnChoix[1]){
                vaisseaux()
            }

            if ( event.target === btnChoix[2]){
                arme()
            }

            if ( event.target === btnChoix[3]){
                armure()
            }

            if ( event.target === btnChoix[4]){
                cristeaux()
            }

            if ( event.target === btnChoix[5]){
                modificateur()
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
            consomable()
        }
        if(selectValue == "2"){
            vaisseaux()
        }
        if(selectValue == "3"){
            arme()
        }
        if(selectValue == "4"){
            armure()
        }
        if(selectValue == "5"){
            cristeaux()
        }
        if(selectValue == "6"){
            modificateur()
        }
    })
}

choix()
choixMobile()