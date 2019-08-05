import React from 'react';
import './App.css';
import logo from "./img/sygnet.png"
import Myheader from './Components/Myheader/Myheader';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Myheader />
      <Container>
        <Row >
          <Col md={{ offset: 6 }}><img src={logo} alt="Docplanner Logo " ></img></Col>
        </Row>

        <Row><Col md={{ offset: 2 }}> <h1>Making the healthcare experience more human</h1></Col></Row>

        <Row>
          <Col lg={{ span: 6 }}><span className="description-container">We want patients to find the perfect doctor and book
            an appointment in the most easy way. The patient journey
            should be enjoyable, and that's why we are
            always next to them: to help them find the best
                        possible care. Anytime, anywhere.</span></Col>

          <Col lg={{ span: 6 }}>
            <span className="description-container">We also help doctors to better manage their practice
                  and build their online reputation. With our integrated
                  end-to-end solution,
                  doctors are able not only to improve their online presence,
                  but also to devote their time to what really matters: their patients.
             </span>
          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default App;
