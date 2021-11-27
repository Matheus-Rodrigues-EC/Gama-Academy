import styled from 'styled-components';

export const Container = styled.div`
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    form{
        display: grid;
        background-color: goldenrod;
        padding: 2rem;
        border-radius: 50px;
    }

    h1{
        justify-self: center;
    }

    input{
        border-radius: 30px;
        padding: 0.5rem 2rem;
        margin: 0.5rem;
    }

    button{
        justify-self: center;
        border-radius: 30px;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        font-size: medium;
        height: 35px;
        width: 240px;
    }

    a{
        margin-top: 0.5rem;
        justify-self: center;
        font-size: 18px;
        color: black;
        padding: 0.5rem 2rem;
        border-radius: 30px;
        border: solid;
        :hover{
            background-color: azure;
            transition: 1s;
        }
    }

`