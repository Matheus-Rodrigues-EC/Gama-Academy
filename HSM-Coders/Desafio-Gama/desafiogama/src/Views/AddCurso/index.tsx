import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

const AddCurso: React.FC = () => {
  return (
      <Container>
          <form>
          <h1 className='Titulo'>Adicionar Curso</h1>
          <hr />
          <input className='input--IMG' type='file' ></input>
          <input placeholder='Digite o ID do curso'></input>
          <input placeholder='Digite o título do curso'></input>
          <input placeholder='Digite a descrição do curso'></input>
          <input placeholder='Digite o nome do professor'></input>
          <input placeholder='Digite o ID do curso'></input>
          <button type="submit">Cadastrar</button>
          <Link to='/consulta'>Voltar</Link>
          </form>
      </Container>
  );
}

export default AddCurso;