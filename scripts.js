let operacao = '';
let numerais = '';

// selecione os números
let inputDisplay = document.getElementById("display");

const numeros = document.querySelectorAll(".num, .virgula");
numeros.forEach(num => {
    num.addEventListener("click", selecao);
});

function selecao(e){
    let valor = '';
    valor = e.target.textContent;
    numAnterior(valor);
};

// guardar número anterior e inserir no display
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
    console.log("display limpo");
};

// operações
function conta(cont, segundOp){
    if (cont.includes("+")){
        soma(cont, segundOp);
    } else if (cont.includes("-")){
        sub(cont, segundOp);
    } else if (cont.includes("x")){
        multi(cont, segundOp);
    } else if (cont.includes("÷")){
        divi(cont, segundOp);
    }
};

function soma(cont, segundOp){
    let contSplit = cont.split("+");
    contSplit[0] = Number(contSplit[0].replace(",", "."));
    contSplit[1] = Number(contSplit[1].replace(",", "."));
    let resultado = contSplit[0] + contSplit[1];
    console.log("conta soma: ", resultado);
    atualizarResultado(cont, resultado, segundOp);
}

function sub(cont, segundOp){
    // lidando com números negativos
    let contSplit = [];
    let sinalSub = '-';
    let primeiro = cont.indexOf(sinalSub);
    let segundo = cont.indexOf(sinalSub, primeiro + 1);

    if (segundo !== -1) {
        let num1 = cont.substring(0, segundo);
        let num2 = cont.substring(segundo + 1);
        contSplit[0] = Number(num1.replace(",", "."));
        contSplit[1] = Number(num2.replace(",", "."));
    } else {
        contSplit = cont.split("-");
        contSplit[0] = Number(contSplit[0].replace(",", "."));
        contSplit[1] = Number(contSplit[1].replace(",", "."));
    } 
    //
    let resultado = contSplit[0] - contSplit[1];
    atualizarResultado(cont, resultado, segundOp);
}

function multi(cont, segundOp){
    contSplit = cont.split("x");
    contSplit[0] = Number(contSplit[0].replace(",", "."));
    contSplit[1] = Number(contSplit[1].replace(",", "."));
    let resultado = contSplit[0] * contSplit[1];
    atualizarResultado(cont, resultado, segundOp);
}

function divi(cont, segundOp){
    contSplit = cont.split("÷");
    contSplit[0] = Number(contSplit[0].replace(",", "."));
    contSplit[1] = Number(contSplit[1].replace(",", "."));
    let resultado = contSplit[0] / contSplit[1];
    atualizarResultado(cont, resultado, segundOp);
}

// salvar operador
const op = document.querySelectorAll(".operador");
op.forEach(op => {
    op.addEventListener("click", continuarCalculo);
});

// atualizar display
function atualizarDisplay(){

    // verificar se tem algum número digitado ao clicar em um operador
    if(inputDisplay.value == ''){
        alert("Campo vazio, digite um número");
        return;
    }
    limpaDisplay();
    atualizarHistorico(operacao);
};

// atualizar historico
function atualizarHistorico(his, resultado, segundOp){
    let historico = document.querySelector("#historico");

    if(!segundOp){
        console.log("segundo não existe");
        historico.innerHTML = his;
    } else{
        historico.innerHTML = resultado + segundOp;
        console.log("segundo existe");
    }
};

// atualizar resultado
function atualizarResultado(cont, resultado, segundOp){
    let result = String(resultado).replace(".", ',');
    atualizarHistorico(cont, result, segundOp);

    if(!segundOp){
        console.log('segundo operador não existe')
        inputDisplay.value = result;
        operacao = result; 
    } else{
        console.log('segundo operador existe', segundOp);
        operacao = resultado + segundOp;
        console.log("BBBB", operacao);
    }
}

// resultado
function resultado(){
    operacao = operacao + numerais;
    atualizarHistorico(operacao);
    limpaDisplay();
    conta(operacao);
    console.log("resultado", operacao);
};

// inverter sinal
function invertSinal(){
    let numInvert = "-" + inputDisplay.value;
    inputDisplay.value = numInvert;
    numerais = numInvert;
}

// fazer o cálculo caso clicar novamente em um operador
function continuarCalculo(o){
    console.log("AAA", operacao);
    let operador = o.target.textContent;
    operacaoSemSinal = operacao + numerais;
    operacao = operacao + numerais + operador;
    let primeiroSinal = operacao.indexOf(operador);
    let segundoSinal = operacao.indexOf(operador, primeiroSinal + 1);
    console.log('operação sem sinal: ', operacaoSemSinal);
    console.log("SINAL", segundoSinal);
    if(segundoSinal !== -1){
        console.log("CONTINUAR CALCULO");
        conta(operacaoSemSinal, operador);
        limpaDisplay();
    } else{
        atualizarDisplay(operador);
    }
}

// ajustar cálculo ao clicar no operador

// adicionar as functions de conta o sinal como argumento para diminuir o número de linhas e ficar mais dinâmico
