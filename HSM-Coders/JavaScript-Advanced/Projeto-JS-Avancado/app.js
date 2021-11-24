// capturar o input
// se Sim, mostrar categorias disponíveis, e pergutar qual escolhe
// se Não, mostrar todos os livros e ordem crescente por quantidade de páginas

const livros = require('./database');

const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro por categoria ? S/N');

if(entradaInicial === 'N'  || entradaInicial === 'n'){
    console.log('Esses são todos os livros disponíveis: ');
    console.table(livros.sort((a, b) => a.paginas-b.paginas));

}else if(entradaInicial === 'S' || entradaInicial === 's'){
    console.log('Essas são as categorias disponíveis: ');
    console.log('Suspense', '/ Aventura', '/ Ficcao', '/ Poema', '/ Romance', '/ Contos', '/ Tecnologia');

    const entradaCategoria = readline.question('Qual categoria voce escolhe ?');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);

}