const pessoa = {
    nome: "Dreina",
    idade: 22,
    cidade: "Caninde"
}

// Notação de ponto
console.log(pessoa.nome); // Dreina

// Notação de Colchetes
console.log(pessoa['idade']); // 22

// Como desestruturar objetos
const { nome, idade, cidade } = pessoa;
console.log(nome); // Dreina
console.log(idade); // 22
console.log(cidade); // Caninde