import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;

    overflow-x: hidden;

    flex-direction: column;

    align-items: start;
    justify-content: center;


    background-color: azure;

    main {
        background-color: violet;
        display: flex;
        margin: 20px;

        border-radius: 20px;
    }

    a {
        text-decoration: none;

        color: violet;
        font-weight: bold;
        font-size: 24px;

        margin: 20px;
    }

    section {
        padding: 15px;
    }
    
`

export const Top = styled.div`
    flex: 3;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 60px;

`

export const Bottom = styled.div`
    flex: 2;
    justify-items: end;


    img {
        height: 350px;
        margin-bottom: -4px;
    }
`
export const Modulo = styled.section`
    background-color: azure;
    padding: 10px;
    width: 300px;
    border-radius: 10px;
    
    p {
        font-size: 24px;
        font-weight: bold;
    }

    div {
        margin-top: 10px;
    }
`

export const ModuleWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-items: center;

    column-gap: 50px;
`