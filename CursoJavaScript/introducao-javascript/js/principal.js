function validaAltura(altura) {

    return altura < 3.0 && altura >= 0;
}

function validaPeso(peso) {

    return peso >= 0 && peso <= 400;
}
function calculaImcTabelaInicial (nomePaciente) {

    var trPaciente = nomePaciente;
    var tdNome = trPaciente.querySelector(".info-nome");
    var tdImc = trPaciente.querySelector(".info-imc");
    var tdPeso = trPaciente.querySelector(".info-peso");
    var tdAltura = trPaciente.querySelector(".info-altura");

    var nome = tdNome.textContent;
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    let alturaEhValida = validaAltura(altura);
    let pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!";
        trPaciente.classList.add("paciente-invalido");
        pesoEhValido = false;
    }

    if(!alturaEhValida) {
        tdImc.textContent = "altura inválida";
        trPaciente.classList.add("paciente-invalido");
        pesoEhValido = false;
    }

    if(alturaEhValida && pesoEhValido) {
        imc = calcular(peso, altura);
        tdImc.textContent = imc;
    }

}

function calcular(peso, altura) {

    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

var lista = document.querySelectorAll(".paciente");

var botao = document.querySelector("#adicionar-paciente");

for (var i = 0; i < lista.length; i++) {
    calculaImcTabelaInicial(lista[i]);
}
