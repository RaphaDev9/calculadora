// Selecione os números

function selecao(e){
    let valor = '';
    valor = e.target.textContent;
    numAnterior(valor);
}

const numeros = document.querySelectorAll(".num, .virgula");
numeros.forEach(num => {
    num.addEventListener("click", selecao);
})

/* Guardar número anterior e inserir no display */

let numerais = '';

function numAnterior(num){

    if (num === ",") {
        // Se já houver um ponto decimal na string numerais, não adiciona outro
        if (numerais.includes(",")) {
            return;
        }
    }

    numerais = numerais + num
    let inputDisplay = document.getElementById("display");
    inputDisplay.value = numerais;
}

/* botão reset */

function reset(){
    numerais = ''
    let inputDisplay = document.getElementById("display");
    inputDisplay.value = '';
}