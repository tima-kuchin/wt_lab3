import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [selectedComponent, setSelectedComponent] = useState('Main');

  const handleButtonClick = (event) => {
    const buttonId = event.target.id;

    if (buttonId === 'mainPage') {
      setSelectedComponent('Main');
    } else if (buttonId === 'aboutMe') {
      setSelectedComponent('AboutMe');
    }
  };
  
  return (
    <Container>
    <Row>
      <Col>
        <Header onButtonClick={handleButtonClick} />
      </Col>
    </Row>
    <Row>
      {selectedComponent === 'Main' ? <Main/> : <AboutMe />}
    </Row>
    <Row>
      <Col>
        <Footer/>
      </Col>
    </Row>
    </Container>
  );
} 

export default App;
