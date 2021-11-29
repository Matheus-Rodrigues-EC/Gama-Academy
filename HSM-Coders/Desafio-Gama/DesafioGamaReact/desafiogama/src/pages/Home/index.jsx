import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

// import { Container } from './styles';

function Home() {
  return (
    <Container>
    <form>
        <h1 className='Titulo'>
            Bem vindo(a) a Edu. Finc.
        </h1>
        <hr />
        <br />
        <p>A sua plataforma de Educação Financeira</p>
        <br />
        <Link to="/consulta" className='button'>Consulta</Link>
    </form>
</Container>
  );
}

export default Home;