/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

// 1:

a) Matheus Nachtergaele
   Virginia Cavendish
   {
        canal:"Globo",
        horario:"14h"
    }

    // 2:

    a)

    {
        nome:"Juca",
        idade:3,
        raca:"SRD"
    }
    {
        nome:"Juba",
        idade:3,
        raca:"SRD"
    }
    {
        nome:"Jubo",
        idade:3,
        raca:"SRD"
    }

    b) A sintaxe de três pontos antes do objeto copia suas informações para
    o novo objeto que está sendo criado. Também é possivel inlcuir ou alterar
    informações do objeto no qual se deu o "Spread" para que estas constem conforme
    determinado na sintaxe.
    
// 3:

    a)
    
    false
    undefined

    b)

    No primeiro caso foi impresso o valor atribuído à propriedade (backender) do objeto
    em questão (pessoa).
    Já no segundo caso o resultado impresso foi "undefined" pois a propriedade "altura"
    não existe dentro do objeto em questão (pessoa.).
    Os retornos acima explicados decorrem da função declara que, ao ser chamada dentro 
    do console.log imprimirá a propriedade do objeto conforme argumentos fornecidos para 
    os parâmetros correspondentes.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1:

// a)

const pessoa = {
    nome: 'Renata',
    apelidos: ['Rê', 'Renatinha', 'Rerê'],
}

const apresentação = function (objeto) {
    const impressao = console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
    return impressao
}

apresentação(pessoa)

// b)

const novaPessoa = {
    ...pessoa,
    apelidos: ['Flor', 'Querida', 'Coração'],
}

apresentação(novaPessoa)

// 2:

// a)

const pessoa1 = {
    nome: 'Renata',
    idade: '29',
    profissao: 'advogada',
}

const pessoa2 = {
    nome: 'Amanda',
    idade: '29',
    profissao: 'DEV'
}

const arrayPessoa = function(objeto1, objeto2) {
    const informacoes = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length, 
        objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length]
    return informacoes
}

console.log(arrayPessoa(pessoa1, pessoa2))

// 3:

// a)

const carrinho = []

// b)

const fruta1 = {
    nome: 'maça',
    disponibilidade: true,
}

const fruta2 = {
    nome: 'banana',
    disponibilidade: true,
}

const fruta3 = {
    nome: 'limão',
    disponibilidade: true,
}

// c)

const comprasSacolao = function (frt1, frt2, frt3) {
    carrinho.push(frt1, frt2, frt3)
    return carrinho
}

comprasSacolao(fruta1, fruta2, fruta3)

console.log(carrinho)