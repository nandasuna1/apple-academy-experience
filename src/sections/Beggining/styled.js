import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #333;
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    color: green;
    
    a {
        margin: 50px;
        text-decoration: none;

        color: white;
        font-weight: bold;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ComputerBox = styled.section`
    background: #000;
    height: 60vh;
    width: 70vw;

    border: solid 2px #222;
    border-top: 20px solid #222;

    padding: 5px;

    display: flex;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: row;
        
        input {
            background-color: transparent;
            border: none;
            color: green;
        }
    }

`
