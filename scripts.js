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

// guardar número anterior e inserir no display

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

// botão reset

function reset(){
    numerais = '';
    operacao = '';
    inputDisplay.value = '';
    let historico = document.querySelector("#historico");
    historico.innerHTML = '';
};

// limpar display

function limpaDisplay(){
    numerais = ''
    inputDisplay.value = '';
};

// operações

function conta(cont){
    if (cont.includes("+")){
        soma(cont);
    } else if (cont.includes("-")){
        sub(cont);
    } else if (cont.includes("x")){
        multi(cont);
    } else if (cont.includes("÷")){
        divi(cont);
    }
};

function soma(cont){
    contSplit = cont.split("+");
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] + contSplit[1];
    atualizarResultado(cont, resultado);
}

function sub(cont){
    contSplit = cont.split("-");
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] - contSplit[1];
    atualizarResultado(cont, resultado);
}

function multi(cont){
    contSplit = cont.split("x");
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] * contSplit[1];
    atualizarResultado(cont, resultado);
}

function divi(cont){
    contSplit = cont.split("÷");
    contSplit[0] = Number(contSplit[0]);
    contSplit[1] = Number(contSplit[1]);
    let resultado = contSplit[0] / contSplit[1];
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

    // verificar se tem algum número digitado ao clicar em um operador

    if(inputDisplay.value == ''){
        alert("Campo vazio, digite um número");
        return;
    }

    let op = '';
    op = o.target.textContent;
    operacao = operacao + numerais + op;
    limpaDisplay();
    atualizarHistorico(operacao);
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
}

/* resultado */ 

function result(){
    operacao = operacao + numerais;
    atualizarHistorico(operacao);
    limpaDisplay();
    conta(operacao);
};
