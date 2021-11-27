import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './style';

const VerCursos: React.FC = () => {
  return (
      <Container>
          <form>
              <h1>Ver Cursos</h1>
              <hr />
              <input placeholder='Digite o ID do curso'></input>
              <button type='submit'>Buscar</button>
              <Link to='/adicionar+curso'>Voltar</Link>
          </form>
      </Container>
  );
}

export default VerCursos;