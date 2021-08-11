/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1:

O código estabelece uma lógica para que, enquanto a variável "i" for menor que 5
seja incrementada de 1 e, posteriormente somado à variável "valor". Quando i for igual a 5
a execução sairá do bloco, imprimindo o último conteúdo atribuído à variavel "valor".
O resultado impresso no console sera "10".

2:

a) serão impressos no console os números da lista que são maiores que 18:

19
21
23
25
27
30

b) O for...of... sozinho não é suficiente para acessar o índice dos elementos,
sendo necessário combiná-lo com o método indexOf() em cada número da varredura
para descobrir seu índice.

3:

*
**
***
****

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1:

// a, b e c:

let numeroPets = Number(prompt('Quantos pets você tem?'));
let arrayPets = [];

if(numeroPets === 0){
    console.log('Que pena! Você pode adotar um pet!')
} else {
    if(numeroPets > 0) {
        for (let i = 0; i < numeroPets; i++) {
            let nomesPet = prompt("Informe, um por vez, os nomes dos seus Pets:");
            arrayPets.push(nomesPet);
            console.log(arrayPets[i])
        }
    }
}

// 2:

// a)

let arrayOriginal = [10, 15, 100, 20, 92, 80, 37, 12, 55, 70];

const imprimeArray = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i]);
    }
}
imprimeArray()

// b)

const imprimeDivisao = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i]/10)
    }
}
imprimeDivisao();

// c)

const imprimePares = () => {
    let novoArray = []
    let numero = 0
    for(numero of arrayOriginal){
        if(numero % 2 === 0){
            novoArray.push(numero);
        }
    }
    console.log(novoArray);
}
imprimePares();

// d:

const imprimeStrings = () => {
    let indice = 0
        for(indice of arrayOriginal){
            let posicao = arrayOriginal.indexOf(indice);
            let numero = indice.valueOf(posicao);
            console.log(`O elemento do índex ${posicao + 1} é: ${numero}`);
        }
    
    }
    imprimeStrings();

// e)

const imprimeMaiorEMenor = () => {
    let maiorNumero = 0;
    let menorNumero = 999;
    let numero = 0
    for(numero of arrayOriginal){
        if(numero > maiorNumero){
            maiorNumero = numero;
        } else if(numero < menorNumero){
            menorNumero = numero;
        }
    }
    console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`);
}
imprimeMaiorEMenor();