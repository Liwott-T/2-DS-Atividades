// Valor Base (Function Expression)
const calcularValorBase = function (horas, valorHora) {
    return horas * valorHora;
}

// Taxa Fixa (Arrow Function)
const adicionarTaxa = (valor) => valor + 2.00;

// Emitir Recibo (Function Declaration)
function emitirRecibo(totalFinal) {
    console.log("------Estacionamento------")
    console.log("Total a pagar: R$" + totalFinal.toFixed(2))
}

// Executar
let valorBruto = calcularValorBase(3, 10)
let valorComTaxa = adicionarTaxa(valorBruto)
emitirRecibo(valorComTaxa);