import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cursos } from '../../Data/databse';

import { Container } from './style';

const VerCursos: React.FC = () => {

    {/*function mostrarCursos(){
      const id = document.getElementById ('idDoCurso');
      const titulo = document.getElementById('nomeDoCurso');
      const descricao = document.getElementById('descricao');
      const imagem = document.getElementById('imagem');
      const nomeProfessor = document.getElementById('nomeProfessor');
      const listaDeAulas = document.getElementById('linkDasAulas');
    }*/}

    var Id = (<HTMLSelectElement>document.getElementById('busca')).value;

    function mostrarValor() {
      alert(document.getElementById("busca").value);
  }

    document.getElementById("buscar").onclick = function(e) {
      mostrarValor();
      e.preventDefault();
  }


    function buscarCurso(id: string){
      
      
      /*const Id = document.getElementById('busca')?.innerText;
      Cursos.filter(curso => curso.id === Id);*/
      console.log(Cursos);
    }

    const [ search, setSearch ] = useState(true);
    
    return (
      <Container>
          { search ? (
              <form id='formulario' action=''>
              <h1>Ver Cursos</h1>
              <hr />
              <input type='text' id='busca' name='busca' placeholder='Digite o ID do curso'></input>
              <button type='submit' value='enviar'  onClick={ () => {setSearch(!search)}}>Buscar</button>
              <Link to='/consulta'>Voltar</Link>
          </form>
          ) : (
              <form>
                <h1>Ver Cursos</h1>
                <hr />
                

                <button onClick={ () => setSearch(!search)}>Voltar</button>
              </form>
          ) }
          
      </Container>
  );
}

export default VerCursos;