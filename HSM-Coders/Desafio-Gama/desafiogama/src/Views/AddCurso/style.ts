import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: blueviolet;
    justify-content: center;
    align-items: center;
    color: black;

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

    .input--IMG{
        border-radius: 30px;
        padding: 0.5rem 2rem;
        margin: 0.5rem;
    }

    textarea{
        border-radius: 30px;
        padding: 0.1rem 2rem;
        margin: 0.5rem;
        border: solid 2px;
        
    }

    button{
        justify-self: center;
        border-radius: 30px;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        font-size: medium;
        height: 35px;
        width: 240px;
        border: solid 2px;
    }

    label{
        margin-top: 1rem;
        justify-self: center;
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
