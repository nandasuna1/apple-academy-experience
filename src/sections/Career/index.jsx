import React from 'react';
import pic from '../../assets/p2.png'
import { Bottom, Container, ModuleWrapper, Modulo, Top } from './styles';
import { NavLink } from 'react-router-dom';

// import { Container } from './styles';

function Career() {
  return (
    <Container>
        <NavLink to='/main'>Voltar</NavLink>    
        <section>
            <h1>Eu Profissional</h1>
            <p>Sou uma desenvolvedora Fullstack e Mobile autodidata, apaixonada por desenvolvimento e design e muito curiosa.</p>
            <p>Além de desenvolvimento de aplicativos, já estudei e esperimentei criação de jogos e ciência de dados</p>
            <p>Tenho 2 anos de experiência desenvolvendo soluções mas é hora de ir além</p>
        </section>

        <main>
        <p>Os 2 pilares que mais me atraem no desenvolvimento são:</p>
        <Top>

            <ModuleWrapper>
                <Modulo>
                    <p>Tecnologias</p>
                    <div>Explorar soluções tecnológicas que sejam belas e funcionais</div>                
                </Modulo>

                <Modulo>
                    <p>Design</p>
                    <div>Interfaces simples, limpas e intuitivas</div>                
                </Modulo>
        
            </ModuleWrapper>
        </Top>
        <Bottom>
            <img src={pic}/>
        </Bottom>
        </main>


    </Container>
  );
}

export default Career;