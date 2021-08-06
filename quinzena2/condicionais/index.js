/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1:

a) O código verifica se o número testado é par.
O teste divide o número inserido por 2 e verifica se o resultado é igual a zero.

b) O resultado "Passou no teste" aparece para números pares (divisíveis por 2).

c) O resultado "Não passou no teste" aparece para números ímpares (não divisíveis por 2).

2:

a) O código serve para informar ao usuário o preço da fruta consultada.

b) A mensagem será "O preço da fruta Maçã é R$ 2.25".

c) Não seria mostrado o preço da pêra (5.5), mas sim o preço inserido no default (5).

3:

a) A primeira linha está declarando uma variável cujo conteúdo será um número inserido
pelo usuário através de prompt.

b) Para o número 10 a mensagem será "Esse número passou no teste"

Para o número -10 nõ será impressa a mensagem do console.log, tendo em vista que,
sendo este menor que zero, o if não será executado.

c) Sim haverá um erro no console, uma vez que a última linha do código imprime uma
variável que foi declarada dentro do bloco (escopo filho), de modo que o escopo pai
(fora do bloco) não tem acesso a ela, sendo inviável a execução do comando. A tentativa
irá retornar como "mensagem is not defined"

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1:

// a) e b)

const idade = Number(prompt('Informe sua idade:'))

// c)

if (idade >= 18){
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}

// 2:

const turnoEstudo = prompt('Considerando "M" para matutino, "V" para vespertino e "N" para noturno, informe em qual turno você estuda:')

if (turnoEstudo === 'M'){
    console.log('Bom Dia!')
} else if (turnoEstudo === 'V') {
    console.log('Boa Tarde!')
} else if (turnoEstudo === 'N') {
    console.log('Boa Noite!')
}

// 3:

const turnoEstuda = prompt('Considerando "M" para matutino, "V" para vespertino e "N" para noturno, informe em qual turno você estuda:')

switch(turnoEstuda){ 
    case 'M':
        console.log('Bom Dia!');
        break;
    case 'V':
        console.log('Boa Tarde!');
        break;
    case 'N':
        console.log('Boa noite!');
        break;
    default:
        console.log('Insira um turno válido dentre as opções disponíveis.');
        break;
}

// 4:

const generoFilme = prompt('Informe o gênero do filme que irá assistir:')
const precoIngresso = prompt('Informe o preço do ingresso do filme escolhido:')

if(generoFilme === 'fantasia' && precoIngresso < 15){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}
