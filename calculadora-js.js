var acumulador = "";
var numero = "";
var calc = [undefined,undefined,undefined];
var resultado = undefined;
var manterResultado = undefined;

function visor (conteudo) {
    acumulador = acumulador.concat(conteudo);
    
    var tela = document.getElementById('display');
    tela.value = acumulador;
}

function botaoNum (num) {
    numero = numero.concat(num);
    visor(num);
}

function botaoOperacao (op) {
    if (calc[1] == undefined) {
        calc[0] = numero;
        calc[1] = op;
        visor(op);
        numero = "";
    }
    else if (calc[1] != undefined) {
        calc[1] = op;
        visor(op);
        numero = "";
    }
}

function botaoRaiz () {
    if (numero != "" && numero > 0)
        numero = Math.sqrt(numero);

        var tela = document.getElementById('display');
        tela.value = numero;
}

function resetaMemoria () {
    numero = "";
    calc = [undefined, undefined, undefined];
    resultado = undefined;
}


function resetaDisplay () {
    acumulador = "";
    
    var tela = document.getElementById('display');
    tela.value = acumulador;
}

function resetaTudo () {
    manterResultado = undefined;
    resetaDisplay();
    resetaMemoria();
}

function negate () {
    numero = numero * -1;
    resetaDisplay();
    visor(numero);

}

function calcula () {
    calc[2] = numero;
    if (calc[0] != undefined && calc[1] != undefined && numero != ""){
        switch (calc[1]) {
            case '+':
                resultado = Number(calc[0]) + Number(calc[2]);
                break;
            case '-':
                resultado = Number(calc[0]) - Number(calc[2]);
                break;
            case 'x':
                resultado = Number(calc[0]) * Number(calc[2]);
                break;
            case '/':
                resultado = Number(calc[0]) / Number(calc[2]);
                break;
        }
        manterResultado = resultado;
        resetaDisplay();
        visor(resultado);
        resetaMemoria();
        numero = manterResultado.toString();
    }
}