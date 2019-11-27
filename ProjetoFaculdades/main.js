$(function () {
   removerTabela();
});
$("button").click(function (event) {
    event.preventDefault();
    inserePlacar();
    $(".formulario").trigger("reset");
    $("body").animate({
        scrollTop: "100%"
    },1000);
});

function criaLinha(faculdade, curso, tipo, periodo, preco, anotacoes) {
    let linha = $("<tr>");
    let colunaFaculdade = $("<td>").text(faculdade);
    let colunaCurso = $("<td>").text(curso);
    let colunaTipo = $("<td>").text(tipo);
    let colunaPeriodo = $("<td>").text(periodo);
    let colunaPreco = $("<td>").text(preco);
    let colunaAnotacoes = $("<td>").text(anotacoes);

    linha.append(colunaFaculdade);
    linha.append(colunaCurso);
    linha.append(colunaTipo);
    linha.append(colunaPeriodo);
    linha.append(colunaPreco);
    linha.append(colunaAnotacoes);

    return linha;
}

function inserePlacar() {
    let corpoTabela = $(".tabela-informacoes").find("tbody");
    let faculdade = $("#faculdade").val();
    let curso = $("#curso").val();
    let preco = $("#preco").val();
    let anotacoes = $("#anotacoes").val();
    let tipo = $("input[name='tipo']:checked").val();
    let periodo = $("input[name='periodo']:checked").val();

    let linha = criaLinha(faculdade, curso, tipo, periodo, preco, anotacoes);

    corpoTabela.append(linha);
}

function removerTabela() {
    let tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function (event) {
        event.target.parentNode.remove();
    });
}