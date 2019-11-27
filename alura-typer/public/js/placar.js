function inserePlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Gabriel";
    let numPalavras = $(".contador-palavras").text();
    let linha = criaLinha(usuario, numPalavras);

    linha.find(".botao-remover").click(function (event) {
        event.preventDefault();
        $(this).parent().parent().remove();
    });
    corpoTabela.append(linha);
}

function criaLinha(usuario, numPalavras) {
    let linha = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(numPalavras);
    let colunaRemover = $("<td>");
    let link = $("<a>").addClass("botao-remover").attr("href","#");
    let icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    console.log(linha);
    return linha;
}

$(".botao-remover").click(function(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
});