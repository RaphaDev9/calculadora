// selecione os números

let inputDisplay = document.getElementById("display");

function selecao(e){
    let valor = '';
    valor = e.target.textContent;
    numAnterior(valor);
};

const numeros = document.querySelectorAll(".num, .virgula");
numeros.forEach(num => {
    num.addEventListener("click", selecao);
});

/* guardar número anterior e inserir no display */

let numerais = '';

function numAnterior(num){

    if (num === ",") {
        // se já houver um ponto decimal na string numerais, não adiciona outro
        if (numerais.includes(",")) {
            return;
        };
    };

    numerais = numerais + num;
    inputDisplay.value = numerais;
};

/* botão reset */

function reset(){
    numerais = '';
    operacao = '';
    inputDisplay.value = '';
    let historico = document.querySelector("#historico");
    historico.innerHTML = '';
};

/* limpar display */

function limpaDisplay(){
    numerais = ''
    inputDisplay.value = '';
};

/* operações */

function conta(cont){
    if (cont.includes("+")){
        console.log("soma");
        soma(cont);
    } else if (cont.includes("-")){
        console.log("subtração");
        sub(cont);
    } else if (cont.includes("x")){
        console.log("multiplicação");
        multi(cont);
    } else if (cont.includes("÷")){
        console.log("subtração");
        divi(cont);
    }
};

function soma(cont){
    contSplit = cont.split("+");
    console.log(contSplit);
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] + contSplit[1];
    console.log(resultado);
    atualizarResultado(cont, resultado);
}

function sub(cont){
    contSplit = cont.split("-");
    console.log(contSplit);
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] - contSplit[1];
    console.log(resultado);
    atualizarResultado(cont, resultado);
}

function multi(cont){
    console.log(cont);
    contSplit = cont.split("x");
    console.log(contSplit);
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] * contSplit[1];
    console.log(resultado);
    atualizarResultado(cont, resultado);
}

function divi(cont){
    contSplit = cont.split("÷");
    console.log(contSplit);
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] / contSplit[1];
    console.log(resultado);
    atualizarResultado(cont, resultado);
}

/* salvar operador */

const op = document.querySelectorAll(".operador");
op.forEach(op => {
    op.addEventListener("click", atualizarDisplay);
});

/* atualizar display */

let operacao = '';

function atualizarDisplay(o){
    let op = '';
    op = o.target.textContent;
    operacao = operacao + numerais + op;
    limpaDisplay();
    atualizarHistorico(operacao);
    console.log("Atualizar display", operacao);
};

/* atualizar historico */

function atualizarHistorico(his){
    let historico = document.querySelector("#historico");
    historico.innerHTML = his;
};

/* atualizar resultado */

function atualizarResultado(cont, result){
    atualizarHistorico(cont);
    let resultado = String(result);
    inputDisplay.value = resultado;
    operacao = resultado;
    console.log("Atualizar resultado", resultado);
}

/* resultado */ 

function result(){
    operacao = operacao + numerais;
    atualizarHistorico(operacao);
    limpaDisplay();
    conta(operacao);
};

