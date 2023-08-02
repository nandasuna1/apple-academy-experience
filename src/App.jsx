import React from "react"
import { styled } from "styled-components"
import Hero from "./sections/Hero"
import Who from "./sections/Who"
import Works from "./sections/Works"
import Contact from "./sections/Contact"
import Test from "./treejsCanvas/Test"
import Stacks from "./sections/Stacks"
import Navbar from "./component/Navbar"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

// import Test from "./component/Test"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  color: white;
  background: url("/img/background/bg-img2.jpg");
  background-repeat: round;

  &::-webkit-scrollbar {
    display: none;
  }
`
function App() {

  return (
    <BrowserRouter>
      <Router />
        {/* <Container>
        <Hero/>
        <Who/>
        <Stacks/>
        <Contact/>
      </Container> */}
    </BrowserRouter>

  )
}

export default App
