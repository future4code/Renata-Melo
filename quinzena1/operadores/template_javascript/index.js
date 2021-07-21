/* 

EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1:

a. false
b. false
c. true
d. boolean

2:

O erro do cógido é que ao inserir as informações por meio de prompt o resultado será obrigatoriamente uma string, não sendo possível somá-las. Da forma como está o código agora a impressão mostra os números lado a lado ao invés da soma (ex: 2 + 3 = 23 e nao 2 + 3 = 5).

3:

Para solucionar ele deve transformar as variáveis em número e, somente após isso, realizar a operação de soma.

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1:

let idade = Number(prompt("Qual é a sua idade?"));
let idadeAmigo = Number(prompt("Qual é a idade de seu melhor amigo?"));

console.log("Sua idade é maior que a do seu melhor amige?", idade > idadeAmigo);

console.log(idade - idadeAmigo);

// 2:

let numeroPar = Number(prompt("Digite um número par:"));

const resultado = numeroPar % 2;

console.log(resultado);

/* 

O padrão é que a divisão de números pares sempre terá resto zero. Como estamos usando o operador de resto, o resultado para números pares será sempre o mesmo. 

Caso o usuário insira um número ímpar, o valor impresso na tela será o resto da divisão (5 % 2 = 1

*/

// 3:

let idadeEmAnos = Number(prompt("Qual é a sua idade?"));

console.log(idadeEmAnos * 12);
console.log(idadeEmAnos * 365);
console.log(idadeEmAnos * 365 * 24);

// 4:

let primeiroNumero = Number(prompt("Digite um número:"));
let segundoNumero = Number(prompt("Digite outro número:"));

console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero);
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0);
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0);