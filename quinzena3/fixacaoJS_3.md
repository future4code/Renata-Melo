```javascript

function calculaNota(ex, p1, p2) {
  let somaNotas = Number((ex * 1) + (p1 * 2) + (p2 * 3));
  let somaPesos = Number(1 + 2 + 3);
  let media = Number(somaNotas / somaPesos);
  let conceito
  if (media >=9) {
    conceito = "A"
  } else if (media < 9 && media >= 7.5) {
    conceito = "B"
  } else if (media < 7.5 && media >= 6) {
    conceito = "C"
  } else {
    conceito = "D"
  }
  return conceito
}
```