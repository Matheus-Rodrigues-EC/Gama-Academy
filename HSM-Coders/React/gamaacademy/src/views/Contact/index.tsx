import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from "./style";


interface iData{
    name: string;
    email: string;
}

const Home: React.FC = () => {
    const [ data, setData ] = useState<iData>({} as iData);
    return (
        <Container>
            <div className="form-wrapper">
                <h1>Contact</h1>
                Name: {data?.name}
                <br />
                Email: {data?.email}
                <div className="card">
                    <form onSubmit={ () => {}}>
                        <input 
                            type="text" 
                            placeholder="Nome"
                            onChange={ e => setData({ ...data, name: e.target.value}) }
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            onChange={ e=> setData({ ...data, email: e.target.value}) }
                        />
                        <input 
                            type="submit" 
                            value="Cadastrar" 
                        />
                    </form>
                </div>
                <Link to='/' className="Link">
                    Acessar a Home
                </Link>
            </div>
        </Container>
    );
}

export default Home;