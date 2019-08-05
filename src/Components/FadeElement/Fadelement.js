import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/FormGroup';


const Fadelement = (props) => {
    return (
        <Container>
            <Row>
                <Col>For {props.destination}</Col>
            </Row>
            <Row>
                <Col><h3>{props.description}</h3></Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 1 }}>
                    <Form.control as select>
                        {
                            props.countries.map((el, i) => {
                                return (<option key={i} value={el}>el</option>)
                            })
                        }
                    </Form.control>



                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={props.image}></img>
                </Col>
            </Row>
        </Container>
    );

}
export default Fadelement;