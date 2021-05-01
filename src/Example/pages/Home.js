import { Button } from 'Example/components/button';
import { Col, Container, Row } from 'Example/components/layout';
import { H1, H3 } from '../../Example/components/fonts';
import React from 'react';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src="https://abs.twimg.com/sticky/illustrations/lohp_850x623.png" style={{width : '100%', height : '100vh'}}  alt="" />
                </Col>
                <Col>
                        <Col>
                        <H1>Lo que esta pasando ahora</H1>
                        <H3>únete a Twitter hot mismo.</H3>
                        </Col>
                      

                        <Button contained rounded>Registrarse</Button><br />
                        <Button rounded >Iniciar sesión</Button>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;
