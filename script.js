const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao iniciar o ano letivo, a escola decide incentivar a prática esportiva e hábitos saudáveis propondo um desafio de bem-estar. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Prefiro manter minha rotina atual, não gosto muito de mudar meus hábitos.",
                afirmacao: "No começo sentiu receio em mudar sua rotina e sair da zona de conforto."
            },
            {
                texto: "Achei a ideia incrível e quero buscar novas formas de me exercitar!",
                afirmacao: "Ficou muito empolgado para aprender mais sobre saúde e atividades físicas."
            }
        ]
    },
    {
        enunciado: "O professor de Educação Física pede que cada aluno escolha uma meta pessoal de atividade física para cumprir no mês. O que você decide fazer?",
        alternativas: [
            {
                texto: "Procurar um esporte coletivo ou uma caminhada ao ar livre que consiga praticar com frequência.",
                afirmacao: "Descobriu que praticar exercícios ao ar livre traz energia e melhora o humor."
            },
            {
                texto: "Fazer exercícios rápidos em casa seguindo vídeos da internet.",
                afirmacao: "Percebeu que pequenas rotinas diárias de treino já fazem diferença na disposição."
            }
        ]
    },
    {
        enunciado: "Em uma aula sobre nutrição e saúde mental, a turma debate como a alimentação impacta o rendimento nos estudos e nos esportes. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defendo que pequenos ajustes no cardápio, como comer mais frutas e beber água, já melhoram muito o foco e a saúde.",
                afirmacao: "Passou a prestar mais atenção na alimentação e incentivou os colegas a fazerem escolhas mais saudáveis."
            },
            {
                texto: "Acredito que não é preciso radicalizar, o importante é comer o que gosta sem exagerar.",
                afirmacao: "Entendeu a importância do equilíbrio na alimentação sem precisar passar por restrições severas."
            }
        ]
    },
    {
        enunciado: "Para divulgar a importância do esporte, a turma precisa criar um projeto final de conscientização. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Organizar um torneio amigável na escola para integrar as turmas e incentivar a prática esportiva.",
                afirmacao: "Ajudou a promover a união da turma através do esporte coletivo e do trabalho em equipe."
            },
            {
                texto: "Montar um cartaz ou informativo digital com dicas de hábitos saudáveis e prevenção de lesões.",
                afirmacao: "Aprendeu bastante sobre como cuidar do corpo com segurança e compartilhou esse conhecimento com os outros."
            }
        ]
    },
    {
        enunciado: "No último dia do desafio, um colega sugere usar suplementos sem orientação médica para tentar ter resultados mais rápidos. O que você diz a ele?",
        alternativas: [
            {
                texto: "Tudo bem, desde que seja só para dar um gás rápido durante essa semana.",
                afirmacao: "Acabou percebendo depois que procurar atalhos nem sempre é o caminho mais seguro para a saúde."
            },
            {
                texto: "É arriscado tomar qualquer coisa sem orientação de um profissional, o mais importante é manter a constância nos treinos.",
                afirmacao: "Compreendeu que a saúde e a boa forma são construídas com consistência e acompanhamento adequado ao longo do tempo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));