// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const alturaRetangulo = prompt("Informe a altura do retângulo:");
  const larguraRetangulo = prompt("Informe a largura do retângulo:");
  const areaRetangulo = alturaRetangulo * larguraRetangulo;

console.log(areaRetangulo);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt("Informe em que ano estamos:");
  const anoNascimento = prompt("Informe em que ano você nasceu:");
  const idade = anoAtual - anoNascimento;

  console.log(idade);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt("Informe seu peso em kg:");
  const altura = prompt("Informe sua altura em metros:");
  const imc = peso / (altura * altura);

  console.log(imc);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Informe seu nome:");
  const idade = prompt("Informe sua idade:");
  const email = prompt("Informe seu email:");
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`;

  console.log(frase);
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt("Qual sua cor favorita?");
  const cor2 = prompt("Qual sua segunda cor favorita?");
  const cor3 = prompt("Qual sua terceira cor favorita?");
  const coresFavoritas = [cor1, cor2, cor3];

  console.log(coresFavoritas);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const frase = prompt("Digite sua frase favorita:");

  console.log(frase.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = prompt("Informe o custo do espetáculo de teatro:");
  const valorIngresso = prompt("Informe o valor de cada ingresso do espetáculo:");
  const numeroIngressos = custoEspetaculo / valorIngresso;

  console.log(numeroIngressos);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const timeUsuario = prompt("Para qual time você torce?");
  const timeAmigo = prompt("Para qual time seu melhor amigo torce?");
  const resultado = timeUsuario.length === timeAmigo.length;

  console.log(resultado);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const inverno = prompt("Você gosta do inverno?");
  const verao = prompt("Você gosta do verão?");
  const resultado = inverno.toLowerCase() === verao.toLowerCase();

  console.log(resultado);
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt("Em que ano estamos?");
  const anoNascimento = prompt("Em que ano você nasceu?");
  const anoEmissao = prompt("Em que ano sua carteira de identidade foi emitida?");

  const idadeUsuario = anoAtual - anoNascimento;
  const renovacaoId = anoAtual - anoEmissao;

  const criterio1 = idadeUsuario <= 20 && renovacaoId >= 5;
  const criterio2 = (idadeUsuario > 20 && idadeUsuario <= 50) && renovacaoId >= 10;
  const criterio3 = idadeUsuario > 50 && renovacaoId >15;

  const precisaRenovar = criterio1 || criterio2 || criterio3;

  console.log(precisaRenovar);
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt("Informe um ano utilizando o formato 4 dígitos:");

  const criterio1 = (ano % 400) === 0;
  const criterio2 = (ano % 4) === 0 && (ano % 100) !== 0;

  const anoBissexto = criterio1 || criterio2;

  console.log(anoBissexto);
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos? (utilize sim ou não para responder)");
  const formacao = prompt("Você possui ensino médio completo?");
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (utilize sim ou não para responder)");

  const inscricaoValida = (maiorDeIdade.toLowerCase() == "sim") && (formacao.toLowerCase() == "sim") && (disponibilidade.toLowerCase() == "sim");

  console.log(inscricaoValida);
}