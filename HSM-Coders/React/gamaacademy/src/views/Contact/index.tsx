import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from "./style";

const Home: React.FC = () => {
    return (
        <Container>
            <h1>Contact</h1>
            <Link to='/'>Acessar a Home</Link>
        </Container>
    );
}

export default Home;