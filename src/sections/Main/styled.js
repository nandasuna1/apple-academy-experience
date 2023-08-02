import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
    flex: 1;
    /* width: 100%; */
    height: 100vh;
    display: flex;
    flex-direction: row;

    box-sizing: border-box;

`

export const Left = styled.section`
    /* width: 50%; */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    padding: 50px 100px ;

    background-color: violet;
`

export const Right = styled.section`
    flex: 1;
    padding: 100px;

    background-color: azure;

    display: flex;
    flex-direction: column;
    align-items: start;

    row-gap: 50px;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;

        align-items: end;

        p {
            color: violet;
            font-size: 25px;
            font-weight: bold;
        }
    }
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const StyledLink = styled(NavLink)`
    font-size: 50px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 2px violet;
    position: relative;
    width: fit-content;

    &:after {
      content: "${(props) => props.text}";
      
      color: pink;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      white-space: nowrap;
      width: 0px;
      filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2);

    }

    &:hover {
      &:after {
        
        animation: moveText 0.5s linear both;
        
        @keyframes moveText {
          to {
            width: 100%;
          }
        }
      }
    }
`
export const Img = styled.img`
    width: 250px;
`

export const Characteristics = styled.div`
    margin-top: 50px;

    p {
        font-size: 36px;
        color: whitesmoke;
    }

    ul {
        li {
            list-style: none;
            color: beige;
            font-size: 20px;
            width: 100%;

            b {
                color: pink;
                filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(1) brightness(2);
            }
        }
    }
`