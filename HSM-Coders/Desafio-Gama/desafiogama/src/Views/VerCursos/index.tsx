import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cursos } from '../../Data/databse';

import { Container } from './style';
const cursos = Cursos;

const VerCursos: React.FC = () => {


    const [ search, setSearch ] = useState(true);
    
    return (
      <Container>
          { search ? (
              <form>
              <h1>Ver Cursos</h1>
              <hr />
              <input placeholder='Digite o ID do curso'></input>
              <button type='submit' onClick={ () => setSearch(!search)}>Buscar</button>
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