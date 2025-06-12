// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularImc(peso, altura) {
  let imc = peso / altura ** 2;
  return imc;
}

console.log(calcularImc(53, 1.64).toFixed(2));

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(num) {
  let resultado = 1;

  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log(calcularFatorial(5));

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterParaReais(valorEmDolar) {
  const cotacaoDoDolar = 4.8;
  const valorEmReais = valorEmDolar * cotacaoDoDolar;

  return valorEmReais;
}

console.log(converterParaReais(10));

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  return `A área da sala retangular corresponde a ${area.toFixed(
    2
  )}, enquanto o perímetro corresponde a ${perimetro.toFixed(2)}`;
}
console.log(calcularSalaRetangular(5, 2));

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularSalaCircular(raio) {
  const pi = 3.14;
  let area = pi * raio ** 2;
  let perimetro = 2 * pi * raio;

  return `A área da sala circular corresponde a ${area.toFixed(
    2
  )}, enquanto o perímetro corresponde a ${perimetro.toFixed(2)}`;
}

console.log(calcularSalaCircular(5));

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function calcularTabuada(num) {
  let tabuada = [];

  for (let contador = 1; contador <= 10; contador++) {
    tabuada.push(`${num} x ${contador} = ${num * contador}`);
  }
  return tabuada;
}

console.log(calcularTabuada(2));
