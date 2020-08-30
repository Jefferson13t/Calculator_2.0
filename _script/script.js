//pegar os valores - input
let val1 = "";
let val2 = "";
let ctrl = false;
let operacao = "";
let resultado = "";

function adcNum(a = "") {
    if (!ctrl) {
        val1 += a; 
    } else {
        val2 += a
    }
    resul()
}
function op(op) {
    operacao = op;
    ctrl = !ctrl;
}
function apagar() {
    if (!ctrl) {
        val1 = val1.slice(0, val1.length - 1)
    } else {
        val2 = val2.slice(0, val2.length - 1)
    }
    resul()
}

//fazer a operação - data treatment
function operar(op, v1, v2) {
        resultado = op(Number(v1), Number(v2))
    resul()
}
const somar = function(a, b) {
    return a + b;
}
const subtrair = function(a, b) {
    return a - b;
}
const multiplicar = function(a, b) {
    return a * b;
}
const dividir = function(a, b) {
    return a / b
}

//mostrar o resultado - output
function resul() {
    let visor1 = document.getElementById("val1");
    let visor2 = document.getElementById("val2");
    let result = document.getElementById("resul");
    visor1.innerText = val1;
    visor2.innerText = val2;
    result.innerText = resultado;
}