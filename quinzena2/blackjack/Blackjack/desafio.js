// NOSSO JOGO.JS:
/*
console.log('Bem-vindo ao jogo de blackjack!')

let novaRodada = confirm('Quer iniciar uma nova rodada?')

if (novaRodada) {
    let carta1Jogador = comprarCarta()
    let carta2Jogador = comprarCarta()
    let carta1Computador = comprarCarta()
    let carta2Computador = comprarCarta()

    let pontosJogador = Number(carta1Jogador.valor + carta2Jogador.valor)
    let pontosComputador = Number(carta1Computador.valor + carta2Computador.valor)

    console.log(`Usuário - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - ${pontosJogador}`)
    console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontosComputador}`)

    if (pontosJogador > pontosComputador) {
        console.log('O usuário ganhou!')
    } else if (pontosComputador > pontosJogador) {
        console.log('O computador ganhou!')
    } else if (pontosJogador === pontosComputador) {
        console.log('Empate!')
    }

} else {
    console.log('O jogo acabou.')
}
*/

// DESAFIO

/* consegui fazer apenas o desafio 8 e inserir as cartas sorteadas nos arrays. Não tive muito tempo essa semana para desenvolver
os itens do desafio, mas já me programei para fazê-lo durante os próximos dias */

console.log('Bem vindo ao jogo de Blackjack!')

let cartasJogador = [];
let cartasComputador = [];

let pontosJogador = Number(carta1Jogador.valor + carta2Jogador.valor)
let pontosComputador = Number(carta1Computador.valor + carta2Computador.valor)

function distribuirCartas() {
   let carta1Jogador = comprarCarta()
   let carta2Jogador = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   cartasJogador.push(carta1Jogador, carta2Jogador)
   cartasComputador.push(carta1Computador, carta2Computador)
}

function jogada() {
   if ((carta1Jogador.valor && carta2Jogador === "A") || (carta1Computador.valor && carta2Computador.valor === "A")) {
      confirm('Sorteie novamente as cartas para jogar.')
   } else if ((carta1Jogador.valor && carta2Jogador !== "A") && (carta1Computador.valor && carta2Computador!== "A")) {
      console.log(`Usuário - cartas:${carta1Jogador.texto}, ${carta2Jogador.texto} - pontuação (${somaJogador}`)
      console.log(`Computador - cartas:${carta1Computador.texto}, ${carta2Computador.texto}- pontuação ${somaComputador}`)
   }
}
