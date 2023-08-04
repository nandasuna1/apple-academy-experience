import React from 'react';
import pic from '../../assets/p2.png'
import { Bottom, Container, ModuleWrapper, Modulo, Top } from './styles';
import { NavLink } from 'react-router-dom';
import { SiTypescript, SiJavascript, SiJest, SiReact, SiNodedotjs } from 'react-icons/si'

// import { Container } from './styles';

function Career() {
  return (
    <Container>
        <nav>
            <NavLink to='/main'>Voltar</NavLink>    
        </nav>
        <section>
            <h1>Eu Profissional</h1>
            <p>Sou uma desenvolvedora Fullstack e Mobile autodidata, apaixonada por desenvolvimento e design e muito curiosa.</p>
            <p>Além de desenvolvimento de aplicativos, já estudei e esperimentei criação de jogos e ciência de dados</p>
            <p>Tenho 2 anos de experiência desenvolvendo soluções mas é hora de ir além</p>
        </section>

        <main>
        <Top>

            <ModuleWrapper>
                <Modulo>
                    <h2>Tecnologias</h2>
                    <div>Explorar soluções tecnológicas que sejam belas e funcionais</div>                
                </Modulo>

                <Modulo>
                    <h2>Design</h2>
                    <div>Interfaces simples, limpas e intuitivas</div>                
                </Modulo>
        
            </ModuleWrapper>
        </Top>
        <Bottom>
            <img src={pic}/>
        </Bottom>
        </main>

        <footer>
            <SiJavascript size={50}/>
            <SiNodedotjs size={50}/>            
            <SiTypescript size={50}/>
            <SiJest size={50}/>
            <SiReact size={50}/>
        </footer>


    </Container>
  );
}

export default Career;