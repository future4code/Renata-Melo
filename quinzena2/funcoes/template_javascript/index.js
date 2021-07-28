/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1:

a)
    10
    50

b)
    Com a exclusão do console.log a função seria executada normalmente, pois foi chamada.
    Contudo, nada apareceria no console, pois o comando de impressão foi excluido.

2:

a)
    A função recebe o texto inserido pelo usuário, transforma todo em letras minúsculas e, após,
    retorna um booleano que verifica se o texto inserido contém ou não a palavra definida na função.
    A utilidade da função é verificar se o texto inserido pelo usuário contém a string "cenoura".

b)
    i. true
    ii. true
    iii. true

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1:

// a)

function informacoesSobreMim() {
    console.log('Eu sou renata, tenho 29 anos, moro em Belo Horizonte e sou advogada.')
}

informacoesSobreMim()

// b)

function informacoesUsuario(nome, idade, cidade, profissao) {

    const frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

    console.log(frase)
}

informacoesUsuario("Amanda", 29, "Belo Horizonte", "DEV")

// 2:

// a)

function somaNumeros(numero1, numero2) {

    const soma = (numero1 + numero2)

    return soma
}

console.log(somaNumeros(10, 15))

// b)

function verificaNumeros(numero1, numero2) {

    const verificacao = (numero1 >= numero2)

    return verificacao
}

console.log(verificaNumeros(2, 3))

// c)

function ePar(numero) {

    let divisao = (numero % 2)
    const checagem = (divisao === 0)

    return checagem
}

console.log(ePar(2))

// d)

function imprimeTamanhoEMaiuscula(texto) {

    const impressao = console.log(`${texto.length}, ${texto.toUpperCase()}`)
        
    return impressao
}

imprimeTamanhoEMaiuscula('coração')

// 3:

function somarNumeros(numero1, numero2) {

    const soma = (numero1 + numero2)

    return soma
}

function subtrairNumeros(numero1, numero2) {

    const subtracao = (numero1 - numero2)

    return subtracao
}

function multiplicarNumeros(numero1, numero2) {

    const multiplicacao = (numero1 * numero2)

    return multiplicacao
}

function dividirNumeros(numero1, numero2) {

    const divisao = (numero1 / numero2)

    return divisao
}

const numeroUsuario1 = Number(prompt("Digite um número:"))
const numeroUsuario2 = Number(prompt("Digite outro número:"))

somarNumeros (numeroUsuario1, numeroUsuario2)
subtrairNumeros(numeroUsuario1, numeroUsuario2)
multiplicarNumeros(numeroUsuario1, numeroUsuario2)
dividirNumeros(numeroUsuario2, numeroUsuario2)

console.log(`Soma: ${somarNumeros(numeroUsuario1, numeroUsuario2)}`)
console.log(`Subtração: ${subtrairNumeros(numeroUsuario1, numeroUsuario2)}`)
console.log(`Multiplicação: ${multiplicarNumeros(numeroUsuario1, numeroUsuario2)}`)
console.log(`Divisão: ${dividirNumeros(numeroUsuario1, numeroUsuario2)}`)