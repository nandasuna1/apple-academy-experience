import React from 'react';
import { NavLink } from 'react-router-dom';
import { Characteristics, Container, Img, Left, List, Right, StyledLink } from './styled';
import pic from '../../assets/eu1.jpg'
// import { Container } from './styles';

const data = [
    {text: '> Começo', path: 'beggining'},
    {text: '> Hobbies', path: 'hobbies'},
    {text: '> Carreira', path: 'career'},
    {text: '> Futuro', path: 'future'},
];

export function Main() {
  return (
  <Container>
    <Left>
        <Img src={pic} />
        <Characteristics>
            <p>Caracteristicas</p>
            <ul>
                <li>Adaptabilidade: <b>5/5</b></li>
                <li>Curiosidade: <b>5/5</b></li>
                <li>Proatividade: <b>4/5</b></li>
                <li>Criatividade: <b>4/5</b></li>
            </ul>
        </Characteristics>
    </Left>

    <Right>
        <div>
            <p>Explorado: 25%</p>
        </div>
        <List>
            {data.map((item) =>  (
                <StyledLink key={item.text} text={item.text} to={`${item.path}`}>
                    {item.text}
                </StyledLink>
            ))}
            {/* <NavLink title='Começo'>Começo</NavLink>
            <NavLink title='Hobbies'>Hobbies</NavLink>
            <NavLink title='Carreira'>Carreira</NavLink>
            <NavLink title='Futuro'>Futuro</NavLink> */}
        </List>
    </Right>
  </Container>
  );
}
