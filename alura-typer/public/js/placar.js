$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Gabriel";
    let numPalavras = $(".contador-palavras").text();
    let linha = criaLinha(usuario, numPalavras);

    linha.find(".botao-remover").click(function (event) {
        event.preventDefault();
        var linha = $(this).parent().parent();
        linha.fadeOut();
        setTimeout(function() {
            linha.remove()
        },1000)
    });
    corpoTabela.append(linha);
    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    let posicaoPlacar = $(".placar").offsetTop;
    $("body").animate({
        scrollTop: posicaoPlacar +"px"
    },1000);
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

    return linha;
}

function mostraPlacar() {

    $(".placar").stop().slideToggle(600);
}