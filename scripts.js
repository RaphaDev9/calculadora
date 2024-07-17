// selecione os números

let inputDisplay = document.getElementById("display");

function selecao(e){
    let valor = '';
    valor = e.target.textContent;
    numAnterior(valor);
}

const numeros = document.querySelectorAll(".num, .virgula");
numeros.forEach(num => {
    num.addEventListener("click", selecao);
})

/* guardar número anterior e inserir no display */

let numerais = '';

function numAnterior(num){

    if (num === ",") {
        // se já houver um ponto decimal na string numerais, não adiciona outro
        if (numerais.includes(",")) {
            return;
        }
    }

    numerais = numerais + num
    inputDisplay.value = numerais;
}

/* botão reset */

function reset(){
    numerais = ''
    inputDisplay.value = '';
    let historico = document.querySelector("#historico");
    historico.innerHTML = '';
}

/* limpar display */

function limpaDisplay(){
    numerais = ''
    inputDisplay.value = '';
}

/* operações */

let operacao = '';

/* salvar operador */

const op = document.querySelectorAll(".operador");
op.forEach(op => {
    op.addEventListener("click", atualizarDisplay);
})

/* atualizar display */

function atualizarDisplay(o){
    let op = '';
    op = o.target.textContent;
    operacao = operacao + numerais + op;
    limpaDisplay();
    atualizarHistorico(operacao);
    console.log(operacao);
}

/* atualizar historico */

function atualizarHistorico(his){
    let historico = document.querySelector("#historico");
    historico.innerHTML = his;
}

/* resultado */

function resultado(){
    
}

