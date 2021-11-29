import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Consulta() {
  return (
    <Container>
        <form>
            <h1 className='Titulo'>
                Consulta
            </h1>
            <hr />
            <Link to='/adicionar+curso' className='Link--adicionar'>Adicionar Curso</Link>
            <Link to='/pesquisar+cursos' className='Link--ver'>Ver Cursos</Link>
            <Link to='' className='Link--atualizar'>Atualizar Curso</Link>
            <Link to='' className='Link--delete'>Deletar Curso</Link>
            <br />
            <Link to='/'>
                Voltar para a Home
            </Link>
        </form>
    </Container>
  );
}

export default Consulta;