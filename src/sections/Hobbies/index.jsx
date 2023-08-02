import React, { useState } from 'react';
import { CanvasWrap, Container, IconCard, IconWrap, LeftTop, ListIcons, RightBottom, Section, Text, Title } from './styles';
import StackCanva from '../../treejsCanvas/StackCanva';
import { NavLink } from 'react-router-dom';

// import { Container } from './styles';

export function Hobbies() {
    const iconData = [
        {
          label: 'Música',
          description: 'Desde pequena sempre fui apaixonada por música. Aprendi por conta propria a tocar inicialmente violão e estendi minhas expertises para outros instrumentos. Em 2020 em plena pandemia a música se mostrou uma grande amiga, a descoberta de novos sons e extilos me inspiraram a criar um instagram de música, postando alguns covers e conteúdos autorais.'
        },
        {
          label: 'Fotografia',
          description: 'Além da do som, a imagem também me atrai bastante. Aprender a compor fotos, enquadrar e procurar olhar por um ângulo diferente me ensina bastante sobre observar e aprender. De fotos digitais a analógicas, a fotografia é pra mim um meio de escapar sem fugir e antes de tudo parar para observar'
        },
        {
          label: 'Viagens',
          description: 'Sou absolutamente apaixonada por viajar e ter experiencias diferentes, conhecer culturas diferentes e ver como tudo é diferente mesmo as vezes não estando tão longe de casa "Viajar é sobre ir de verdade, não longe" - Experiência TBS '
        },
        {
          label: 'Tecnologia',
          description: 'Definitivamente algo que não poderia faltar. Seja a criação de sites, jogos ou IOT, desde que entrei no mundo da tecnologia tenho me facinado cada vez mais e encontrado cada vez mais maneiras de interagir com as pessoas e com o mundo, além de pensar em problemas que temos que a tecnologia pode sanar'
        }
      ]
    
      const [tech, setTech] = useState({name:'', description:''});
    
      const handleOnClick = (value) => {
        // e.preventDefault();
        setTech({name: value.label, description: value.description})
      }
    
    
      console.log(tech);
      return (
        <Section id='Projects'>
            <Container>
                {/* <Title>Stack</Title> */}
                <LeftTop>
                    <NavLink to='/main'>Voltar</NavLink>
                  <CanvasWrap>
                    <StackCanva techName={tech.name}/>
                  {!tech.name.length && <Text>Clique em um hobbie e descubra!</Text>}
                    <Text>{tech.description}</Text>
                  </CanvasWrap>
                </LeftTop>
                <RightBottom>
                  <Title>Hobbies e interesses</Title>
                  <ListIcons>
                      {iconData && iconData.map((icon, index) => (
                        <IconWrap key={icon.label} onClick={() => handleOnClick(iconData[index])}>
                          <IconCard>{tech.name === icon.label ? '>' : ''}{icon.label}</IconCard>
                        </IconWrap>
                    ))}
                  </ListIcons>
                </RightBottom>
            </Container>
        </Section>
      )
    }