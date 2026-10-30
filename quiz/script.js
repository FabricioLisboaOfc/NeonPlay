// BANCO DE PERGUNTAS: 10 POR CATEGORIA
const perguntasPorTema = {
    tecnologia: [
        {
            pergunta: "O que significa HTML?",
            alternativas: ["HyperText Markup Language", "High Technology Modern Language", "Home Tool Markup Language", "Hyper Transfer Main Link"],
            correta: 0
        },
        {
            pergunta: "Qual linguagem é usada para estilizar páginas web?",
            alternativas: ["Python", "CSS", "SQL", "C++"],
            correta: 1
        },
        {
            pergunta: "Qual linguagem permite adicionar interatividade a um site?",
            alternativas: ["HTML", "CSS", "JavaScript", "XML"],
            correta: 2
        },
        {
            pergunta: "Para que serve o Git?",
            alternativas: ["Editar vídeos", "Controlar versões de arquivos", "Criar imagens", "Navegar na internet"],
            correta: 1
        },
        {
            pergunta: "Para que serve um banco de dados?",
            alternativas: ["Editar imagens", "Aumentar a internet", "Armazenar informações", "Montar computadores"],
            correta: 2
        },
        {
            pergunta: "Qual destes é um sistema operacional?",
            alternativas: ["Windows", "Google Chrome", "HTML", "Instagram"],
            correta: 0
        },
        {
            pergunta: "O que significa CPU?",
            alternativas: ["Central Processing Unit", "Computer Personal User", "Control Program Utility", "Central Print Unit"],
            correta: 0
        },
        {
            pergunta: "Qual destas opções é um navegador de internet?",
            alternativas: ["Excel", "Google Chrome", "Windows", "Photoshop"],
            correta: 1
        },
        {
            pergunta: "Qual é a função principal da memória RAM?",
            alternativas: ["Guardar arquivos para sempre", "Exibir imagens impressas", "Armazenar temporariamente dados em uso", "Proteger contra vírus sozinha"],
            correta: 2
        },
        {
            pergunta: "O que é phishing?",
            alternativas: ["Um tipo de monitor", "Uma tentativa de golpe para obter dados", "Uma linguagem de programação", "Um sistema operacional"],
            correta: 1
        }
    ],

    gerais: [
        {
            pergunta: "Qual é a capital do Brasil?",
            alternativas: ["São Paulo", "Brasília", "Salvador", "Rio de Janeiro"],
            correta: 1
        },
        {
            pergunta: "Quantos dias tem um ano bissexto?",
            alternativas: ["364", "365", "366", "367"],
            correta: 2
        },
        {
            pergunta: "Qual é o maior planeta do Sistema Solar?",
            alternativas: ["Terra", "Marte", "Saturno", "Júpiter"],
            correta: 3
        },
        {
            pergunta: "Qual é o maior oceano do planeta?",
            alternativas: ["Atlântico", "Pacífico", "Índico", "Ártico"],
            correta: 1
        },
        {
            pergunta: "Quantos lados tem um hexágono?",
            alternativas: ["Cinco", "Seis", "Sete", "Oito"],
            correta: 1
        },
        {
            pergunta: "Qual é o idioma oficial do Brasil?",
            alternativas: ["Espanhol", "Inglês", "Português", "Francês"],
            correta: 2
        },
        {
            pergunta: "Quantos minutos tem uma hora?",
            alternativas: ["30", "45", "60", "100"],
            correta: 2
        },
        {
            pergunta: "Em qual continente fica o Egito?",
            alternativas: ["Europa", "África", "Oceania", "América do Sul"],
            correta: 1
        },
        {
            pergunta: "Qual animal é conhecido como rei da selva?",
            alternativas: ["Tigre", "Elefante", "Leão", "Lobo"],
            correta: 2
        },
        {
            pergunta: "Quantas cores há tradicionalmente no arco-íris?",
            alternativas: ["Cinco", "Seis", "Sete", "Oito"],
            correta: 2
        }
    ],

    games: [
        {
            pergunta: "Qual empresa criou Minecraft?",
            alternativas: ["Nintendo", "Mojang", "Ubisoft", "Sega"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do protagonista de The Legend of Zelda?",
            alternativas: ["Mario", "Donkey Kong", "Link", "Kirby"],
            correta: 2
        },
        {
            pergunta: "Qual destes jogos é um battle royale?",
            alternativas: ["The Sims", "Fortnite", "Tetris", "Stardew Valley"],
            correta: 1
        },
        {
            pergunta: "Qual empresa criou o PlayStation?",
            alternativas: ["Microsoft", "Sony", "Nintendo", "Apple"],
            correta: 1
        },
        {
            pergunta: "Em qual jogo aparece o personagem Sonic?",
            alternativas: ["Sonic the Hedgehog", "God of War", "Halo", "FIFA"],
            correta: 0
        },
        {
            pergunta: "Qual personagem é o principal símbolo da Nintendo?",
            alternativas: ["Kratos", "Mario", "Master Chief", "Lara Croft"],
            correta: 1
        },
        {
            pergunta: "Em Minecraft, qual material é necessário para criar uma mesa de trabalho?",
            alternativas: ["Madeira", "Diamante", "Areia", "Ferro"],
            correta: 0
        },
        {
            pergunta: "Qual empresa desenvolveu o jogo Fortnite?",
            alternativas: ["Epic Games", "Rockstar Games", "Valve", "Capcom"],
            correta: 0
        },
        {
            pergunta: "Qual destes jogos é conhecido por partidas de futebol?",
            alternativas: ["League of Legends", "Rocket League", "The Sims", "Resident Evil"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do mundo de Pokémon onde os treinadores capturam criaturas?",
            alternativas: ["Hyrule", "Mundo Pokémon", "Mundo de Azeroth", "San Andreas"],
            correta: 1
        }
    ],

    filmes: [
        {
            pergunta: "Qual é o nome do bruxo protagonista de Harry Potter?",
            alternativas: ["Ron Weasley", "Harry Potter", "Draco Malfoy", "Neville Longbottom"],
            correta: 1
        },
        {
            pergunta: "Quem é conhecido como Homem de Ferro?",
            alternativas: ["Steve Rogers", "Bruce Banner", "Tony Stark", "Thor"],
            correta: 2
        },
        {
            pergunta: "Em qual filme aparecem Woody e Buzz Lightyear?",
            alternativas: ["Shrek", "Toy Story", "Carros", "Procurando Nemo"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do reino de Elsa em Frozen?",
            alternativas: ["Nárnia", "Arendelle", "Atlântida", "Hogwarts"],
            correta: 1
        },
        {
            pergunta: "Qual personagem diz a famosa frase sobre ser o pai de Luke em Star Wars?",
            alternativas: ["Luke Skywalker", "Han Solo", "Obi-Wan Kenobi", "Darth Vader"],
            correta: 3
        },
        {
            pergunta: "Qual é o nome do ogro protagonista de uma famosa animação?",
            alternativas: ["Shrek", "Hulk", "Tarzan", "Simba"],
            correta: 0
        },
        {
            pergunta: "Qual super-herói é conhecido como o Homem-Aranha?",
            alternativas: ["Clark Kent", "Peter Parker", "Bruce Wayne", "Barry Allen"],
            correta: 1
        },
        {
            pergunta: "Em qual filme aparece um navio chamado Titanic?",
            alternativas: ["Avatar", "Titanic", "Interestelar", "Gladiador"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do leão protagonista de O Rei Leão?",
            alternativas: ["Mufasa", "Scar", "Simba", "Timon"],
            correta: 2
        },
        {
            pergunta: "Qual personagem vive aventuras com o burro Falante na animação Shrek?",
            alternativas: ["Fiona", "Gato de Botas", "Shrek", "Pinóquio"],
            correta: 2
        }
    ],

    ciencias: [
        {
            pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
            alternativas: ["Vênus", "Marte", "Mercúrio", "Netuno"],
            correta: 1
        },
        {
            pergunta: "Qual órgão bombeia o sangue pelo corpo?",
            alternativas: ["Pulmão", "Cérebro", "Coração", "Estômago"],
            correta: 2
        },
        {
            pergunta: "Qual gás as plantas absorvem na fotossíntese?",
            alternativas: ["Oxigênio", "Hidrogênio", "Gás carbônico", "Hélio"],
            correta: 2
        },
        {
            pergunta: "Qual é a fórmula química da água?",
            alternativas: ["CO2", "O2", "H2O", "NaCl"],
            correta: 2
        },
        {
            pergunta: "Qual é a estrela mais próxima da Terra?",
            alternativas: ["Sirius", "Sol", "Próxima Centauri", "Vega"],
            correta: 1
        },
        {
            pergunta: "Qual é o maior órgão do corpo humano?",
            alternativas: ["Coração", "Pele", "Fígado", "Pulmão"],
            correta: 1
        },
        {
            pergunta: "Quantos planetas existem no Sistema Solar?",
            alternativas: ["Sete", "Oito", "Nove", "Dez"],
            correta: 1
        },
        {
            pergunta: "Qual parte da planta geralmente absorve água do solo?",
            alternativas: ["Flor", "Folha", "Raiz", "Fruto"],
            correta: 2
        },
        {
            pergunta: "Qual força nos mantém próximos à superfície da Terra?",
            alternativas: ["Magnetismo apenas", "Gravidade", "Eletricidade", "Atrito"],
            correta: 1
        },
        {
            pergunta: "Qual é o estado da água quando está congelada?",
            alternativas: ["Gasoso", "Líquido", "Sólido", "Plasma"],
            correta: 2
        }
    ]
};

// ELEMENTOS DAS TELAS
const telaInicial = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const nomeTema = document.getElementById("nome-tema");
const progresso = document.getElementById("progresso");
const barraProgresso = document.getElementById("progresso-preenchido");
const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");
const mensagem = document.getElementById("mensagem");

const botaoProximo = document.getElementById("botao-proximo");
const botaoReiniciar = document.getElementById("botao-reiniciar");
const botaoTemas = document.getElementById("botao-temas");
const botaoEncerrar = document.getElementById("botao-encerrar");
const resultadoElemento = document.getElementById("resultado");
const mensagemFinal = document.getElementById("mensagem-final");

// VARIÁVEIS DO JOGO
let temaAtual = "";
let perguntasAtuais = [];
let indicePergunta = 0;
let pontuacao = 0;
let respostaSelecionada = null;
let respostaConfirmada = false;

const nomesTemas = {
    tecnologia: "Tecnologia",
    gerais: "Conhecimentos Gerais",
    games: "Games",
    filmes: "Filmes",
    ciencias: "Ciências"
};

// SELECIONAR UMA CATEGORIA
document.querySelectorAll(".botao-tema").forEach(function(botao) {
    botao.addEventListener("click", function() {
        iniciarQuiz(botao.dataset.tema);
    });
});

// INICIAR O QUIZ
function iniciarQuiz(tema) {
    temaAtual = tema;
    perguntasAtuais = perguntasPorTema[tema];
    indicePergunta = 0;
    pontuacao = 0;

    telaInicial.classList.add("escondido");
    telaResultado.classList.add("escondido");
    telaQuiz.classList.remove("escondido");

    nomeTema.textContent = nomesTemas[tema];

    mostrarPergunta();
}

// MOSTRAR A PERGUNTA ATUAL
function mostrarPergunta() {
    const perguntaAtual = perguntasAtuais[indicePergunta];

    respostaSelecionada = null;
    respostaConfirmada = false;

    perguntaElemento.textContent = perguntaAtual.pergunta;

    progresso.textContent =
        `Pergunta ${indicePergunta + 1} de ${perguntasAtuais.length}`;

    const porcentagem =
        (indicePergunta / perguntasAtuais.length) * 100;

    barraProgresso.style.width = porcentagem + "%";

    alternativasElemento.innerHTML = "";
    mensagem.textContent = "";

    botaoProximo.disabled = true;
    botaoProximo.textContent = "Confirmar resposta";

    perguntaAtual.alternativas.forEach(function(alternativa, indice) {
        const botao = document.createElement("button");

        botao.textContent = alternativa;
        botao.classList.add("alternativa");

        botao.addEventListener("click", function() {
            selecionarResposta(indice);
        });

        alternativasElemento.appendChild(botao);
    });
}

// SELECIONAR UMA ALTERNATIVA
function selecionarResposta(indice) {
    if (respostaConfirmada) {
        return;
    }

    respostaSelecionada = indice;

    const botoes = alternativasElemento.querySelectorAll("button");

    botoes.forEach(function(botao, posicao) {
        botao.classList.toggle("selecionada", posicao === indice);
    });

    botaoProximo.disabled = false;
    mensagem.textContent = "Resposta selecionada. Confirme para continuar.";
}

// CONFIRMAR A RESPOSTA E AVANÇAR
botaoProximo.addEventListener("click", function() {
    if (respostaSelecionada === null) {
        mensagem.textContent = "Escolha uma alternativa antes de continuar.";
        return;
    }

    if (!respostaConfirmada) {
        confirmarResposta();
    } else {
        indicePergunta++;

        if (indicePergunta < perguntasAtuais.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }
});

// VERIFICAR SE A RESPOSTA ESTÁ CORRETA
function confirmarResposta() {
    const perguntaAtual = perguntasAtuais[indicePergunta];
    const botoes = alternativasElemento.querySelectorAll("button");

    respostaConfirmada = true;

    botoes.forEach(function(botao, indice) {
        botao.disabled = true;

        if (indice === perguntaAtual.correta) {
            botao.classList.add("correta");
        } else if (indice === respostaSelecionada) {
            botao.classList.add("errada");
        }
    });

    if (respostaSelecionada === perguntaAtual.correta) {
        pontuacao++;
        mensagem.textContent = "Muito bem! Você acertou!";
    } else {
        mensagem.textContent =
            "Você errou! A resposta correta está destacada em verde.";
    }

    const porcentagem =
        ((indicePergunta + 1) / perguntasAtuais.length) * 100;

    barraProgresso.style.width = porcentagem + "%";

    if (indicePergunta === perguntasAtuais.length - 1) {
        botaoProximo.textContent = "Ver resultado";
    } else {
        botaoProximo.textContent = "Próxima pergunta";
    }
}

// MOSTRAR A PONTUAÇÃO FINAL
function mostrarResultado() {
    telaQuiz.classList.add("escondido");
    telaResultado.classList.remove("escondido");

    const total = perguntasAtuais.length;
    const porcentagem = Math.round((pontuacao / total) * 100);

    resultadoElemento.textContent =
        `${pontuacao} de ${total} acertos (${porcentagem}%)`;

    if (pontuacao === total) {
        mensagemFinal.textContent =
            "Excelente! Você acertou todas as perguntas!";
    } else if (pontuacao >= 7) {
        mensagemFinal.textContent =
            "Muito bem! Você conhece bastante esse tema!";
    } else if (pontuacao >= 5) {
        mensagemFinal.textContent =
            "Bom trabalho! Continue praticando para melhorar!";
    } else {
        mensagemFinal.textContent =
            "Continue praticando! Tente novamente para melhorar sua pontuação.";
    }
}

// JOGAR NOVAMENTE NO MESMO TEMA
botaoReiniciar.addEventListener("click", function() {
    iniciarQuiz(temaAtual);
});

// VOLTAR À SELEÇÃO DE TEMAS
botaoTemas.addEventListener("click", function() {
    telaResultado.classList.add("escondido");
    telaInicial.classList.remove("escondido");
});
// ENCERRAR O QUIZ E VOLTAR AO MENU DE TEMAS
botaoEncerrar.addEventListener("click", function() {
    telaQuiz.classList.add("escondido");
    telaResultado.classList.add("escondido");
    telaInicial.classList.remove("escondido");

    // Limpar o progresso da partida interrompida
    indicePergunta = 0;
    pontuacao = 0;
    respostaSelecionada = null;
    respostaConfirmada = false;
});