import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './OfficeStyle/style.css';

// const Office=() =>{

// }
const Office = ({ imageOffice, city }) => {
    return (
        <Container className="wrapper">

            <a href="/">
                <Row> <img src={imageOffice} alt={city} /></Row>

                <Row  >
                    <Col className="bottom-row">
                        <span className="city-desc">{city}</span>
                    </Col>
                    <Col>
                        <button className="seemore-btn">SEE OPENNINGS</button>
                    </Col>

                </Row>
            </a>
        </Container>
    );
}

export default Office;
