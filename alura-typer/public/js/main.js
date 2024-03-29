let tempoInicial = $(".tempo-digitacao").text();
let campo = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContador();
    inicializaCronometro();
    confereGrafia();
    $("#botao-reiniciar").click(reiniciarJogo);
});

function atualizaTamanhoFrase() {
    let frase = $(".frase").text();

    let numeroPalavras = frase.split(" ").length;
    let tamanhoFrase = $(".tamanho-frase");

    tamanhoFrase.text(numeroPalavras);

}
function inicializaContador() {


    campo.on("input",function(){
        let conteudo = campo.val();
        let quantidadePalavras = conteudo.split(/\S+/).length - 1;
        $(".contador-palavras").text(quantidadePalavras);

        let quantidadeCaracteres = conteudo.length;
        $(".contador-caracteres").text(quantidadeCaracteres);
    });

}
function inicializaCronometro() {

    let tempoRestante = $(".tempo-digitacao").text();
    campo.one("focus", function () {
        let cronometroID = setInterval(function(){
            tempoRestante--;
            $(".tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        },1000)
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();

}

function confereGrafia() {
    let frase = $(".frase").text();
    campo.on("input", function () {
        let digitado = campo.val();
        let comparavel = frase.substr(0, digitado.length);

        if(digitado === comparavel) {
            campo.addClass("campo-correto");
            campo.removeClass("campo-errado");
        }else {
            campo.addClass("campo-errado");
            campo.addClass("campo-correto");
        }
    })
}

function reiniciarJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("contador-palavras").text("0");
    $("contador-caracteres").text("0");
    $(".tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("campo-correto");
    campo.removeClass("campo-errado");
}

