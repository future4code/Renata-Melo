/* Exercícios de interpretação de código:

Enunciado 1:
   
    10
    10 5

Enunciado 2:

    10 10 10

Enunciado 3:

    A função do programa é calcular quanto o usuário ganha por hora baseado na quantidade de horas trabalhadas no dia e o valor recebido por um dia.
    Para melhorar o programa eu o reescreveria da forma abaixo:

       let horasDiarias= prompt("Quantas horas você trabalha por dia?")
       let salarioDiario = prompt("Quanto você recebe por dia?")
       alert(`Voce recebe ${t/p} por hora`)
*/

// Exercícios de escrita de código:

// Enunciado 1:

let nome;
let idade;

console.log(typeof nome);

/* O tipo de variável obtido ao imprimir foi "undefined".
Isso ocorreu devido ao fato de não ter havido atribuição de valores às variáveis. */

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?")

console.log(typeof nome);
console.log(typeof idade);

// O tipo de ambas as variáveis é string, pois toda resposta de um prompt é string.

console.log("Olá,", nome, "você tem", idade, "anos.");

// Enunciado 2:

const perguntaBlusa = "Sua blusa é de couro?";
const perguntaCalça = "Sua calça é de lã?";
const perguntaClima = "Você está com frio?";

let respostaBlusa = "Sim";
let respostaCalça = "Sim";
let respostaClima = "Não";

console.log(perguntaBlusa, respostaBlusa);
console.log(perguntaCalça, respostaCalça);
console.log(perguntaClima, respostaClima);

// Enunciado 3:

let a = 10;
let b = 25;

let c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);