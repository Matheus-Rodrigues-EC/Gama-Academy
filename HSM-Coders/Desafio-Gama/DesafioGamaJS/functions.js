const Cursos = require('./DataBase')


const readline = require('readline-sync');

function adicionarCurso(){
    const id = readline.question('Digite o ID do curso.');
    Cursos.id = id;
    const titulo = readline.question('Digite o Nome do Curso.');
    Cursos.titulo = titulo;
    const descricao = readline.question('Digite a descricao do Curso.');
    Cursos.descricao = descricao;
    const imagem = readline.question('Digite o endereco da imagem.');
    Cursos.imagem = imagem;
    const professor = readline.question('Digite o nome do professor.');
    Cursos.nomeProfessor = professor;
    const aulas = readline.question('Digite o link para as aulas.')
    Cursos.listaDeAulas = aulas;

    const verifica = readline.question('Tem certeza que quer adicionar esse curso ?  S/N');

    if(verifica === 'S' || verifica === 's'){
        Cursos.push();
        console.log('Curso Adicionado com sucesso');
    }else{
        console.log('Curso não adicionado.')
    }


}