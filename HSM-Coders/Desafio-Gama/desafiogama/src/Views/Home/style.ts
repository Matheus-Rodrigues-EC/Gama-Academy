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
        justify-content: center;
        align-items: center;
        padding: 3rem;
        background-color: goldenrod;
        border-radius: 50px;
    }

    a{
        justify-self: center;
        font-size: larger;
        color: black;
        text-decoration: none;
    }

    p{
        color: black;
        text-align: center;
    }

    .button{
        background-color: goldenrod;
        padding: 0.5rem 2rem;
        border-radius: 30px;
        border: solid;
        :hover{
            background-color: greenyellow;
            transition: 1s;
        }
    }
`