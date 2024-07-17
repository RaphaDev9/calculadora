// Selecione um número e adicione ao input

function selecao(e){
    let valor = '';
    let inputDisplay = document.getElementById("display");
    valor = e.target.textContent;
    console.log(valor);
    inputDisplay.value = valor;
}

const numeros = document.querySelectorAll(".num");
numeros.forEach(num => {
    num.addEventListener("click", selecao);
})

/**/