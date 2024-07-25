const btnModif = document.getElementById("btnModif")
let btnactif = false 

function previewImage(){
    const preview = document.querySelector(".previewImage");
    const divFile = document.querySelector(".imagePerso");
    const btnImage = document.getElementById("file");

    btnImage.addEventListener("change", () =>{
        const curFiles = btnImage.files;

        if(curFiles.length > 0){
            preview.innerHTML = "";

            const imgPreview = document.createElement("img");
            imgPreview.src = URL.createObjectURL(curFiles[0]);
            imgPreview.style.width = "100%";
            preview.appendChild(imgPreview);

            btnImage.style.display = "none";
            divFile.style.display = "none";
            preview.style.display = "flex";
        }
    });

}

btnModif.addEventListener("click", () =>{
    const btnTableau = document.querySelectorAll(".tdAjoutRetrait")
    
    if(btnactif === false){
        for(i = 0; i < btnTableau.length; i++){
            btnTableau[i].style.display = "flex"
        }
        btnactif = true
    } else {
        for(i = 0; i < btnTableau.length; i++){
            btnTableau[i].style.display = "none"
        }
        btnactif = false
    }
})

previewImage()