// Declarando arrays
const alunasGama = ["Paula", "Dreina", "Stef", "Tay"];
// capturando dados de um array
console.log(alunasGama[1]); // Dreina

// Operados Spread (...)
const alunasXp = [...alunasGama, "Sarah"];
console.log(alunasXp);

// Metodos de iteração
// 1 - Map: retorna o array sem alterar o array original
//          criando uma cópia com as alterações que desejamos
const alunas = ["Paula", "Dreina", "Stef", "Tay", "Sarah"];

alunas.map(aluna => console.log(aluna));

// 2 - Filter: retorna um novo array com os elementos filtrados
const numeros = [43, 35, 40, 67, 55, 90, 32, 87];

const resultNum = numeros.filter(numero => numero%2 != 0);
console.log(resultNum);

// 3 - find: encontra e retorna o primeiro elemento
//           que achar igual ao elemento passado por parâmetro
const produtos = ["notebook", "câmera", "Headphone", "caixa de som"];

const encontraProd = produtos.find(produto => produto === "câmera");
console.log(encontraProd);

// 4 - sort: ordena o array
const num = [43, 35, 40, 67, 55, 90, 32, 87, 110];
console.log(num.sort((a, b) => a-b));
console.log(num.sort((a, b) => b-a));

// 5 - reduce: reduz o array a um resultado de uma operação matemática
const numbers = [3, 7, 5, 4, 8, 23, 45, 57, 93];

const soma = numbers.reduce((ValorAnterior, ValorAtual) => {
    return ValorAnterior + ValorAtual;
});

console.log(soma);