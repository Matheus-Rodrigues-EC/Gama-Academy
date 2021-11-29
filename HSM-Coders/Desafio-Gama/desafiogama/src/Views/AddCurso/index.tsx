import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Cursos } from '../../Data/databse';

import { Container } from './style';

const AddCurso: React.FC = () => {

  function stopAction(e: Event) {
   e.preventDefault();
  }

  const cursos = Cursos;

  var Curso = {
    id: document.getElementById ('idDoCurso'),
    titulo: document.getElementById('nomeDoCurso'),
    descricao: document.getElementById('descricao'),
    imagem: document.getElementById('imagem'),
    nomeProfessor: document.getElementById('nomeProfessor'),
    listaDeAulas: document.getElementById('linkDasAulas')
  }
  
  if(Curso.id !== null){
    Cursos.push();
  }else{
    alert("Preencha os dados");
  }
  
  
  console.log(Curso);

  return (
      <Container>
          <form method='get' id='formulario'>
          <h1 className='Titulo'>Adicionar Curso</h1>
          <hr />
          <label>Selecione uma imagem para o curso</label>
          <input className='input--IMG' type='file' id='imagem'></input>
          <input placeholder='Digite o ID do curso' id='idDoCurso'></input>
          <input placeholder='Digite o título do curso' id='nomeDoCurso'></input>
          <textarea placeholder='Digite a descrição do curso' id='descricao' ></textarea>
          <input placeholder='Digite o nome do professor' id='nomeProfessor'></input>
          <input placeholder='Informe o link para as aulas' id='linkDasAulas'></input>
          <button type='submit' value='send'>Cadastrar</button>
          <Link to='/consulta'>Voltar</Link>
          </form>
      </Container>
          
      
  );
}

export default AddCurso;