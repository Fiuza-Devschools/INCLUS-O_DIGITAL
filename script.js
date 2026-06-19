console.log("Conecta+ iniciado!");

/* ----------------------BOTAO A+ ------------------------------ */
const tamanho = document.getElementById("tamanho");


tamanho.addEventListener("click", aumentarFonte);

function aumentarFonte(){

    document.querySelectorAll("p, h1, h2").forEach(texto => {

        let tamanhoAtual = parseInt(
            window.getComputedStyle(texto).fontSize
        );

        texto.style.fontSize = (tamanhoAtual + 2) + "px";
    });

}
/* -------------------------BOTAO A- --------------------------- */
const diminuir = document.getElementById("diminuir");

diminuir.addEventListener("click", diminuirFonte);

function diminuirFonte(){

    document.querySelectorAll("p, h1, h2").forEach(texto => {

        let tamanhoAtual = parseInt(
            window.getComputedStyle(texto).fontSize
        );

        texto.style.fontSize = (tamanhoAtual - 2) + "px";
    });

}
/* ------------------------BOTAO A ---------------------------- */
const resetar = document.getElementById("resetar");

resetar.addEventListener("click", resetarFonte);

function resetarFonte(){

    document.querySelectorAll("p, h1, h2").forEach(texto => {

        texto.style.fontSize = "";

    });

}