// 1. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// 2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(linguagensDeProgramacao);

// 3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push("Java", "Ruby", "GoLang");
console.log(linguagensDeProgramacao);

// 4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes1 = ["Maria", "Ana", "João"];

console.log(nomes1[0]);

// 5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let nomes2 = ["Elisandra", "Melina", "Gabriela"];

console.log(nomes2[1]);

// 6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let nomes3 = ["Paulo", "Carlos", "Janilson"];

console.log(nomes3[nomes3.length - 1]); // console.log(nomes3[2])
