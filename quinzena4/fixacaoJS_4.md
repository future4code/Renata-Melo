ˋˋˋjavascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const resultado = arrayDeNumeros.filter(numero => numero === numeroEscolhido)
  if (resultado.length === 0) {
      return 'Número não encontrado'
  } else {
     return `O número ${numeroEscolhido} aparece ${resultado.length}x`
  }
}
ˋˋˋ
