let buttonCadastrar = document.getElementById("buttonCriaCadastro")
let buttonEntrar = document.getElementById("buttonEntrar");
var body = document.querySelector("body")

buttonCadastrar.addEventListener("click", function(){
    body.className = "CliqueCadastrar"
})

buttonEntrar.addEventListener("click", function(){
    body.className = "CliqueLogin"
})



var loader = document.getElementById("preloader");
addEventListener("load", function(){
    setTimeout(function(){
        loader.style.display = "none"
    },2000)
    
})
