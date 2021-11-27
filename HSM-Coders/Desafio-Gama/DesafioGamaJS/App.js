const Cursos = require('./DataBase');
const Cursos = 
/*  ● id (número identificador)
    ● título
    ● descrição
    ● imagem (caminho da imagem)
    ● nome do professor
    ● lista de aulas (links) */

const readline = require('readline-sync');
//const addCurso = require('./functions')
    
console.log('\n\n\n\n\n\n\n\n\n----------------------------Bem Vindo(a)----------------------------\n')
console.log('------------Edu. Finc. Sua escola de educacao financeira------------\n')
console.log('1 - Adicionar um curso');
console.log('2 - Exibir Cursos');
console.log('3 - Atualizar um curso');
console.log('4 - Deletar um curso\n');
const entradaInicial = readline.question('O que voce deseja fazer ?  ');
console.log('\nPara sair digite 0\n')

if(entradaInicial == 0){
    console.log('\n\n\nObrigado por utilizar nosso sistemas\n\n\n')
}else if(entradaInicial == 1){
    addCurso().push;
}else if(entradaInicial == 2){
    const busca2 = readline.question('Deseja buscar por ID? S/N :  ');
    if(busca2 === 'S' || busca2 === 's') buscarCurso();
    if(busca2 === 'N' || busca2 === 'n') console.table(Cursos.filter(curso => curso.id));
}

    //console.log('Selecione uma das opcoes fornecidas');


// criarCurso: recebe todos os dados por parâmetro e adiciona na lista de cursos como objeto.
// exibirCurso: recebe o id de um curso por parâmetro e imprime todos os dados do curso selecionado.
// atualizarCurso: recebe todos os dados por parâmetro e atualiza na lista de cursos.
// deletarCurso: recebe o id por parâmetro e remove o curso selecionado da lista.
// listaCursos: imprime todos os cursos. teste

function addCurso(){

    const curso = {
        id: null,
        titulo: '',
        descricao: '',
        imagem: '',
        nomeProfessor: '',
        listaDeAulas: ''
    }

    const id = readline.question('Digite o ID do curso: ');
    const titulo = readline.question('Digite o Nome do Curso: ');
    const descricao = readline.question('Digite a descricao do Curso: ');
    const imagem = readline.question('Digite o endereco da imagem: ');
    const professor = readline.question('Digite o nome do professor: ');
    const aulas = readline.question('Digite o link para as aulas: ')

    const verifica = readline.question('Tem certeza que quer adicionar esse curso ?  S/N :  ');
    
    if(verifica === 'S' || verifica === 's'){  
        //Cursos.push({id: id, titulo: titulo, descricao: descricao, imagem: imagem, nomeProfessor: professor, listaDeAulas: aulas}); 
        
        curso.id = id;
        curso.titulo = titulo;
        curso.descricao = descricao;
        curso.imagem = imagem;
        curso.nomeProfessor = professor;
        curso.listaDeAulas = aulas;
        
        
        //console.log(Cursos);
        
        console.log('Curso Adicionado com sucesso');    
        return curso;
    }else{
        console.log('Curso não adicionado.')
    }
}

function buscarCurso(){
    const busca = readline.question("Digite o ID do Curso que deseja: ")
    console.table(Cursos.filter(curso => curso.id == busca));
}
