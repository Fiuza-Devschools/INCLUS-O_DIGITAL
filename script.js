console.log("Conecta+ iniciado!");


const tamanho = document.getElementById("tamanho");

let fonte = 16;

tamanho.addEventListener("click", aumentarFonte);

function aumentarFonte(){
alert("clicou");
    document.querySelectorAll("p, h1, h2").forEach(texto => {

        let tamanhoAtual = parseInt(
            window.getComputedStyle(texto).fontSize
        );

        texto.style.fontSize = (tamanhoAtual + 2) + "px";

    });

}