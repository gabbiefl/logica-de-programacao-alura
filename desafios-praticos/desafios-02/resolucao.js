// 1. Criar uma função que exibe "Olá, mundo!" no console.
function exibirMensagem() {
  console.log("Olá, mundo!");
}

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirCumprimento(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirCumprimento("Gabriela");

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(num) {
  return num * 2;
}

console.log(dobrarNumero(20));

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(calcularMedia(5, 3, 7));

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificarMaior(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 === num2) {
    console.log("Os números são iguais.");
    return num1;
  } else {
    return num2;
  }
}

console.log(verificarMaior(11, 19));

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function calcularNumeroAoQuadrado(num) {
  return num * num;
}

console.log(calcularNumeroAoQuadrado(10));
