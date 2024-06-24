const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: ' A propagação de fake news sobre energias renováveis pode ter impactos significativos. Quais são as principais consequências ambientais e econômicas dessas informações falsas?',
        alternativas: [
            'A disseminação de fake news pode levar à desconfiança pública e à redução de investimentos em tecnologias sustentáveis.',
            'A disseminação de fake news pode aumentar o investimento em tecnologias não sustentáveis, como combustíveis fósseis.'
        ]
    }, 
    {
        enunciado: 'As fake news vêm disseminando informações que não condizem com a realidade e isso tem impactado todos os setores da economia. Quando pensamos em energia sustentável é necessário elencar que a preservação das florestas não são apenas dados quantitativos, mas qualitativos, porque tem como impacto os desastres ambientais que têm surgido em nosso contexto mundial. Pensando nisso, como combater as fake news relativo à produção de energia sustentável e qual o impacto disso no cotidiano da prevenção dos desastres ambientais?',
        alternativas: [
            'Expôr mais informações sobre o tema de Produção de Energias Sustentáveis a fim de informar a sociedade e blindá-la contra as fake news dos desastres ambientais.',
            'Não pesquisar sobre a veracidade das informações que vêm pelos portais de comunicação. Confiando cegamente nas notícias. '
        ]
    },
    {
        enunciado:'Desastres ambientais são eventos que acontecem no meio natural e que apresentam consequências negativas para os ecossistemas e para os seres humanos. Há um incentivo na produção de energias sustentáveis, mas esse incentivo não ajuda em nada na diminuição dos desastres ambientais. O que você  opina sobre assunto?',
        alternativas:[
            'Verdade',
            'Mentira'
        ]
    }
]