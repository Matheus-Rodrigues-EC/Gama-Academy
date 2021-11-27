import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: blueviolet;
    justify-content: center;
    align-items: center;

    .Titulo{
        display: block;
        justify-self: center;
    }

    form{
        display: grid;
        background-color: goldenrod;
        padding: 3rem;
        border-radius: 50px;
    }

    Link{
        justify-self: center;
        margin: 1rem;
        padding: 0.5rem 5rem;
        border-radius: 30px;
        border: solid;
    }

    
    .Link--adicionar{
        background-color: azure;
        justify-self: center;
        margin: 1rem;
        padding: 0.5rem 2rem;
        border-radius: 30px;
        border: solid;
        :hover{
            background-color: #FF0; 
            transition: 1s;
        }
    }

    .Link--ver{
        background-color: azure;
        justify-self: center;
        margin: 1rem;
        padding: 0.5rem 3.25rem;
        border-radius: 30px;
        border: solid;
        :hover{
            background-color: #00ff00; 
            transition: 1s;
        }
        
    }

    .Link--atualizar{
        background-color: azure;
        justify-self: center;
        margin: 1rem;
        padding: 0.5rem 2rem;
        border-radius: 30px;
        border: solid;
        :hover{
            background-color: #FF0; 
            transition: 1s;
        }
    }

    .Link--delete{
        background-color: azure;
        justify-self: center;
        margin: 1rem;
        padding: 0.5rem 2.5rem;
        border-radius: 30px;
        border: solid;
        :hover{
            background-color: #FF3737; 
            transition: 1s;
        }
    }

    a{
        font-size: larger;
        justify-self: center;
        padding: 0.5rem 1rem;
        border: solid;
        border-radius: 30px;
        text-decoration: none;
        color: black;
        :hover{
            transition: 1s;
            background-color: #00ff00;
        }
    }
`