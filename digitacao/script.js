
// ==========================================
// BANCO DE PALAVRAS
// ==========================================

const palavrasPorNivel = {
    facil: [
        "computador",
        "teclado",
        "desenvolvimento",
        "programacao",
        "conhecimento",
        "velocidade",
        "aprendizado",
        "tecnologia",
        "criatividade",
        "experiencia"
    ],

    medio: [
        "extraordinario",
        "inconstitucional",
        "otorrino",
        "paralelepipedo",
        "conscientizacao",
        "psicologico",
        "eletrodomestico",
        "infraestrutura",
        "reconhecimento",
        "desproporcional"
    ],

    dificil: [
        "otorrinolaringologista",
        "desinstitucionalizacao",
        "inconstitucionalissimamente",
        "anticonstitucionalissimamente",
        "pneumoultramicroscopicossilicovulcanoconiose",
        "interdisciplinaridade",
        "esternocleidomastoideo",
        "oftalmotorrinolaringologista",
        "desoxirribonucleico",
        "multidimensionalidade"
    ]
};

// ==========================================
// CONFIGURAÇÕES DOS NÍVEIS
// ==========================================

const configuracoes = {
    facil: {
        nome: "FÁCIL",
        tempo: 90,
        pontosPorPalavra: 10
    },
    medio: {
        nome: "MÉDIO",
        tempo: 120,
        pontosPorPalavra: 20
    },
    dificil: {
        nome: "DIFÍCIL",
        tempo: 180,
        pontosPorPalavra: 30
    }
};

// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaResultado = document.getElementById("tela-resultado");

const nivelAtualElemento = document.getElementById("nivel-atual");
const contadorElemento = document.getElementById("contador");
const tempoElemento = document.getElementById("tempo");
const pontosElemento = document.getElementById("pontos");
const barraPreenchida = document.getElementById("barra-preenchida");

const palavraElemento = document.getElementById("palavra");
const campoDigitacao = document.getElementById("campo-digitacao");
const formulario = document.getElementById("formulario");
const botaoConfirmar = document.getElementById("botao-confirmar");
const botaoComecar = document.getElementById("botao-comecar");
const botaoSair = document.getElementById("botao-sair");
const botaoRepetir = document.getElementById("botao-repetir");
const botaoMenu = document.getElementById("botao-menu");
const feedbackElemento = document.getElementById("feedback");

const acertosElemento = document.getElementById("acertos");
const errosElemento = document.getElementById("erros");

// ==========================================
// VARIÁVEIS DO JOGO
// ==========================================

let nivelSelecionado = "";
let listaPalavras = [];
let indicePalavra = 0;
let tempoRestante = 0;
let pontos = 0;
let acertos = 0;
let erros = 0;
let tentativas = 0;
let temporizador = null;
let jogoIniciado = false;

// ==========================================
// ESCOLHER O NÍVEL
// ==========================================

document.querySelectorAll(".botao-nivel").forEach(function(botao) {
    botao.addEventListener("click", function() {
        nivelSelecionado = botao.dataset.nivel;
        prepararJogo();
    });
});

// ==========================================
// PREPARAR UMA PARTIDA
// ==========================================

function prepararJogo() {
    pararTemporizador();

    listaPalavras = [...palavrasPorNivel[nivelSelecionado]];
    indicePalavra = 0;
    tempoRestante = configuracoes[nivelSelecionado].tempo;
    pontos = 0;
    acertos = 0;
    erros = 0;
    tentativas = 0;
    jogoIniciado = false;

    nivelAtualElemento.textContent =
        "NÍVEL " + configuracoes[nivelSelecionado].nome;

    telaInicial.classList.add("escondido");
    telaResultado.classList.add("escondido");
    telaJogo.classList.remove("escondido");

    campoDigitacao.value = "";
    campoDigitacao.disabled = true;
    botaoConfirmar.disabled = true;
    botaoComecar.classList.remove("escondido");
    botaoComecar.textContent = "INICIAR DESAFIO";

    palavraElemento.textContent = "Preparado?";
    feedbackElemento.textContent =
        "Clique em iniciar quando estiver pronto.";
    feedbackElemento.className = "";

    atualizarEstatisticas();
}

// ==========================================
// INICIAR O JOGO
// ==========================================

botaoComecar.addEventListener("click", function() {
    if (jogoIniciado) {
        return;
    }

    jogoIniciado = true;
    botaoComecar.classList.add("escondido");

    campoDigitacao.disabled = false;
    botaoConfirmar.disabled = false;

    mostrarPalavra();
    campoDigitacao.focus();

    temporizador = setInterval(function() {
        tempoRestante--;
        atualizarEstatisticas();

        if (tempoRestante <= 0) {
            tempoRestante = 0;
            atualizarEstatisticas();
            finalizarJogo(false);
        }
    }, 1000);
});

// ==========================================
// MOSTRAR A PALAVRA ATUAL
// ==========================================

function mostrarPalavra() {
    if (indicePalavra >= listaPalavras.length) {
        finalizarJogo(true);
        return;
    }

    palavraElemento.textContent = listaPalavras[indicePalavra];
    campoDigitacao.value = "";
    feedbackElemento.textContent = "Digite a palavra exatamente como aparece.";
    feedbackElemento.className = "";

    atualizarEstatisticas();
    campoDigitacao.focus();
}

// ==========================================
// CONFERIR A PALAVRA DIGITADA
// ==========================================

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (!jogoIniciado || tempoRestante <= 0) {
        return;
    }

    const digitado = campoDigitacao.value.trim();
    const palavraCorreta = listaPalavras[indicePalavra];

    if (digitado.length === 0) {
        feedbackElemento.textContent = "Digite a palavra antes de confirmar.";
        feedbackElemento.className = "aviso";
        return;
    }

    tentativas++;

    if (digitado === palavraCorreta) {
        acertos++;

        const pontosBase =
            configuracoes[nivelSelecionado].pontosPorPalavra;

        // Palavras maiores valem pontos adicionais.
        const bonus = Math.max(0, palavraCorreta.length - 8);
        pontos += pontosBase + bonus;

        indicePalavra++;

        feedbackElemento.textContent =
            "Correto! +" + (pontosBase + bonus) + " pontos!";
        feedbackElemento.className = "sucesso";

        atualizarEstatisticas();

        if (indicePalavra >= listaPalavras.length) {
            finalizarJogo(true);
        } else {
            mostrarPalavra();
        }
    } else {
        erros++;

        feedbackElemento.textContent =
            "Ainda não! Confira a ortografia e tente novamente.";
        feedbackElemento.className = "erro";

        atualizarEstatisticas();
        campoDigitacao.select();
        campoDigitacao.focus();
    }
});

// ==========================================
// ATUALIZAR OS NÚMEROS NA TELA
// ==========================================

function atualizarEstatisticas() {
    contadorElemento.textContent = indicePalavra + "/10";
    tempoElemento.textContent = tempoRestante + "s";
    pontosElemento.textContent = pontos;
    acertosElemento.textContent = acertos;
    errosElemento.textContent = erros;

    const porcentagem = (indicePalavra / listaPalavras.length) * 100;
    barraPreenchida.style.width = porcentagem + "%";
}

// ==========================================
// PARAR O CRONÔMETRO
// ==========================================

function pararTemporizador() {
    if (temporizador !== null) {
        clearInterval(temporizador);
        temporizador = null;
    }
}

// ==========================================
// FINALIZAR O JOGO
// ==========================================

function finalizarJogo(completou) {
    pararTemporizador();
    jogoIniciado = false;

    campoDigitacao.disabled = true;
    botaoConfirmar.disabled = true;
    botaoComecar.classList.add("escondido");

    telaJogo.classList.add("escondido");
    telaResultado.classList.remove("escondido");

    const totalPalavras = listaPalavras.length;
    const palavrasConcluidas = indicePalavra;

    // Precisão considera as tentativas de palavras.
    const precisao = tentativas === 0
        ? 0
        : Math.round((acertos / tentativas) * 100);

    const tempoUsado =
        configuracoes[nivelSelecionado].tempo - tempoRestante;

    const minutos = tempoUsado / 60;

    const caracteresCorretos = listaPalavras
        .slice(0, palavrasConcluidas)
        .reduce(function(total, palavra) {
            return total + palavra.length;
        }, 0);

    const ppm = minutos > 0
        ? Math.round(caracteresCorretos / 5 / minutos)
        : 0;

    document.getElementById("titulo-resultado").textContent =
        completou ? "Desafio concluído!" : "Tempo esgotado!";

    document.getElementById("resumo-resultado").textContent =
        completou
            ? "Parabéns! Você digitou todas as palavras do nível " +
              configuracoes[nivelSelecionado].nome + "."
            : "Você completou " + palavrasConcluidas +
              " de " + totalPalavras + " palavras. Continue treinando!";

    document.getElementById("resultado-pontos").textContent = pontos;
    document.getElementById("resultado-precisao").textContent =
        precisao + "%";
    document.getElementById("resultado-palavras").textContent =
        palavrasConcluidas + "/" + totalPalavras;
    document.getElementById("resultado-ppm").textContent =
        ppm + " PPM";
}

// ==========================================
// SAIR E VOLTAR AO MENU
// ==========================================

botaoSair.addEventListener("click", function() {
    pararTemporizador();
    jogoIniciado = false;

    telaJogo.classList.add("escondido");
    telaResultado.classList.add("escondido");
    telaInicial.classList.remove("escondido");
});

// ==========================================
// JOGAR NOVAMENTE
// ==========================================

botaoRepetir.addEventListener("click", function() {
    prepararJogo();
});

// ==========================================
// ESCOLHER OUTRO NÍVEL
// ==========================================

botaoMenu.addEventListener("click", function() {
    pararTemporizador();
    jogoIniciado = false;

    telaResultado.classList.add("escondido");
    telaJogo.classList.add("escondido");
    telaInicial.classList.remove("escondido");
});
