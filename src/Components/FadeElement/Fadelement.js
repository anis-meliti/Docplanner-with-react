import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Style/FadeElement.css'


const Fadelement = (props) => {

    return (
        <Container className="service-div" >

            <Row className="title">
                <Col className="title">For {props.destination}</Col>
            </Row>
            <Row>
                <Col className="desc"><h3>{props.description}</h3></Col>
            </Row>
            {(props.countries !== undefined) && <Row>
                <Col md={{ span: 2, offset: 1 }} className="countries-select">
                    <select>

                        {
                            props.countries.map((el, i) => {
                                return (<option key={i} value={el.toString().toUpperCase()}>{el.toString()}</option>)
                            })
                        }
                    </select>
                </Col>
            </Row>

            }

            <Row className="place-img">
                <img src={props.image} alt="pic" />
            </Row>

        </Container>
    );

}
export default Fadelement;