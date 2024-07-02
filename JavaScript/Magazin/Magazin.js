function choix(){

    const btnChoix = document.querySelectorAll("button")
    const choixShop = document.querySelectorAll(".choixShop")

    for (i = 0; i < btnChoix.length; i++){
        btnChoix[i].addEventListener("click", (event) =>{
            if ( event.target === btnChoix[0]){
                consomable()
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

choix()


