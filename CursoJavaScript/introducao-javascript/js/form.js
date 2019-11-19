let erros = [];
var ul = document.querySelector("#mensagem-erro");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#adiciona");
    var paciente = pegarInformacoes(form);

    validaPaciente(paciente);

    if (erros.length > 0) {
        exibeErros(erros);
        erros = [];
        return;
    }

    adicionaNaTabela(paciente);
    erros = [];
    ul.classList.add("invisivel");
    form.reset();

});

function pegarInformacoes(form) {

    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcular(form.peso.value, form.altura.value),
    };

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    let imc = pacienteTr.querySelector(".info-imc");

    if (imc.textContent < 17 || imc.textContent > 25) imc.classList.add("imc-alterado");

    return pacienteTr;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function adicionaNaTabela(paciente) {

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function validaPaciente(paciente) {

    if (!validaPeso(paciente.peso) || paciente.peso.length === 0) erros.push("Peso inválido!");

    if (!validaAltura(paciente.altura) || paciente.altura.length === 0) erros.push("Altura inválida!");

    if (paciente.nome.length === 0) erros.push("O nome não deve estar em branco");

    if (paciente.gordura.length === 0) erros.push("Gordura corporal inválida");

    return erros;
}

function exibeErros(erros) {

    ul.innerHTML = "";
    ul.classList.remove("invisivel");
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}