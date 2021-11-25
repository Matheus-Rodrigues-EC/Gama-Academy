import React, { useState, useCallback, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../service/api';
import { Container } from "./style";


interface iData{
    name: string;
    email: string;
}

const Home: React.FC = () => {
    const [ data, setData ] = useState<iData>({} as iData);
    const [ submit, setSubmit] = useState(false);

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('', data).then( response => {
            if(response.status === 200){
                setSubmit(true);
            }
        });
    }, [data]);

    return (
        <Container>
            <div className="form-wrapper">
                <h1>Contact</h1>
                Name: {data?.name}
                <br />
                Email: {data?.email}
                <div className="card">
                    { submit ? (
                        <div>
                            <h1>
                                Obrigado pelo envio dos Dados.
                            </h1>
                        </div>
                    ): (
                        <form onSubmit={ handleSubmit }>
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
                    )}
                </div>
                <Link to='/' className="Link">
                    Acessar a Home
                </Link>
            </div>
        </Container>
    );
}

export default Home;