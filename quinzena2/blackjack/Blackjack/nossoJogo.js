    console.log('Bem-vindo ao jogo de blackjack!')

    let novaRodada = confirm('Quer iniciar uma nova rodada?')
    
    if (novaRodada) {
        let carta1Jogador = comprarCarta()
        let carta2Jogador = comprarCarta()
        let carta1Computador = comprarCarta()
        let carta2Computador = comprarCarta()
    
        let pontosJogador = carta1Jogador.valor + carta2Jogador.valor
        let pontosComputador = carta1Computador.valor + carta2Computador.valor
    
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