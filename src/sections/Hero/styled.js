import { styled } from "styled-components"

export const Section = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: azure;
`
export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 85%;
  display: flex;
  justify-content: space-between;
`
export const LeftTop = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  a {
    background-color: violet;
    color: azure;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    padding: 20px;
    width: 100px;
    border-radius: 20px;
    border: 2px solid violet;

    transition: linear 200ms;
    &:hover {
    background-color: azure;
    color: violet;
    border: 2px solid violet;
  }
  }
`
export const Title = styled.h1`
  font-size: 74px;
  letter-spacing: -2px;
  line-height: 70px;
  margin-bottom: 35px;
`
export const WhatWeDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`
export const SubTitle = styled.h2`
  color: #ff007d;
  font-size: 30px;
`
export const RightBottom = styled.div`
  flex: 3;
  position: relative;
`
export const Description = styled.p`
  font-size: 24px;
  color: white;
`
export const Img = styled.img`
  width: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
    to {
      transform: translateY(30px)
    }
  }
`
export const Line = styled.img``