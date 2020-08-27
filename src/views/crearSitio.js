import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import CrearSitioForm from '../components/crearSitioForm';
import Copyright from '../components/copyright';


import LogoImage from '../img/logo.PNG'


export default class crearSitio extends Component {

    render() {
        return (
            <div>
                <Row noGutters>
                    <Col>
                        <img
                            alt=""
                            src={LogoImage}
                            width="150"
                            height="150"
                            className="d-inline-block align-top"
                        />{' '}
                    </Col>
                    <Col>Crear Sitio</Col>
                </Row>

                <Container fluid>

                    <CrearSitioForm></CrearSitioForm>

                    <Copyright></Copyright>

                </Container>
            </div>

        )
    }
}
