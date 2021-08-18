```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFixo = 2000;
 let comissaoFixa = Number(qtdeCarrosVendidos * 100);
 let comissaoPorcentagem = Number(valorTotalVendas * 0.05);
 let salarioFinal = Number(salarioFixo + comissaoFixa + comissaoPorcentagem);
 
 return salarioFinal

}

console.log(calculaSalario(3, 130000))
```
