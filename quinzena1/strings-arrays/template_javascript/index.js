/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1:

a. undefined
b. null
c. 11
d. 3
e. (11) [3,19,5,6,7,8,9,10,11,12,13]
f. 9

2: SUBI NUM ÔNIBUS EM MIRROCOS27

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1:

const nome = prompt("Qual é o seu nome?");
const email = prompt("Qual é o seu email?");
const cadastro = `O email ${email} foi cadastrado com sucesso. Seja bem vinda(o) ${nome}!`;

console.log(cadastro);

// 2:

const comidasPreferidas = ["ceviche", "batata", "costelinha", "pudim", "couve"];

// a)

console.log(comidasPreferidas);

// b)

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

// c)

const comidaUsuario = prompt("Qual é a sua comida preferida?");

comidasPreferidas.splice(1,1,comidaUsuario);

console.log(comidasPreferidas);

// 3:

// a)

const listaDeTarefas = [];

// b)

listaDeTarefas[0] = prompt("Informe sua primeira tarefa do dia:");
listaDeTarefas[1] = prompt("Informe sua segunda tarefa do dia:");
listaDeTarefas[2] = prompt("Informe sua terceira tarefa do dia:");

// c)

console.log(listaDeTarefas);

// d)

const tarefaConcluida = prompt("Considerando que: 0 = primeira tarefa, 1 = segunda tarefa e 2 = terceira tarefa, informe qual das tarefas você já realizou:");

// e)

listaDeTarefas.splice(tarefaConcluida,1);

// f)

console.log(listaDeTarefas);