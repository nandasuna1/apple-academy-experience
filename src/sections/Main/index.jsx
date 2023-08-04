import React from 'react';
import { NavLink } from 'react-router-dom';
import { Characteristics, Container, Img, Left, List, Right, StyledLink } from './styled';
import pic from '../../assets/eu1.jpg'
import { Stars } from '../../component/Stars';
// import { Container } from './styles';

const data = [
    {text: '> Começo', path: 'beggining'},
    {text: '> Hobbies', path: 'hobbies'},
    {text: '> Carreira', path: 'career'},
];

export function Main() {
  return (
  <Container>
    <Left>
        <Img src={pic} />
        <Characteristics>
            <p>Caracteristicas</p>
            <ul>
                <li>Adaptabilidade: <Stars quantity={5} /></li>
                <li>Curiosidade: <Stars quantity={5}/></li>
                <li>Proatividade: <Stars quantity={4}/></li>
                <li>Criatividade: <Stars quantity={4}/></li>
            </ul>
        </Characteristics>
    </Left>

    <Right>
        <List>
            <h1>- Um pouco sobre mim</h1>
            {data.map((item) =>  (
                <StyledLink key={item.text} text={item.text} to={`${item.path}`}>
                    {item.text}
                </StyledLink>
            ))}
        </List>
    </Right>
  </Container>
  );
}
