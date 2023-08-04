import React from 'react'
import { Container, Img, LeftTop, RightBottom, Section, SubTitle, Title, WhatWeDo } from './styled'
import { NavLink } from 'react-router-dom'
import Foto from '../../assets/hero.png'

export default function Hero() {
  return (
    <Section>
      {/* <Navbar/> */}
      <Container>
        <LeftTop>
          <Title>Quem sou eu?</Title>
          <NavLink to='main'>
            Descobrir
          </NavLink>
        </LeftTop>
        <RightBottom>
          {/* <Canvas >
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Sphere args={[1,100,200]} scale={1.5}>
                <MeshDistortMaterial 
                  color="#7a0c7a" 
                  attach="material" 
                  distort={0.5} 
                  speed={2}
                  />
              </Sphere>
          </Canvas> */}
          <Img src={Foto} />
        </RightBottom>
      </Container>
    </Section>
  )
}
