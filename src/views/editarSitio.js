import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import CrearSitioForm from '../components/crearSitioForm';
import Copyright from '../components/copyright';
import Title from '../components/title';
import EditarRegistro from '../components/editarRegistro';



export default class crearSitio extends Component {

    render() {
        return (
            <div>
                <Title pageTitle="Editar Sitio"/>

                <Container fluid>
                    <Row>
                        <Col xs="6">
                            <CrearSitioForm></CrearSitioForm>
                        </Col>
                        <Col xs="6">
                            <EditarRegistro></EditarRegistro>
                        </Col>
                    </Row>
                <Copyright></Copyright>
                </Container>
            </div>

        )
    }
}
