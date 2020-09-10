import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import CrearSitioForm from '../components/crearSitioForm';
import Copyright from '../components/copyright';
import Title from '../components/title';




export default class crearSitio extends Component {

    render() {
        return (
            <div>
                <Title pageTitle="Crear Sitio"/>

                <Container fluid>

                    <CrearSitioForm></CrearSitioForm>

                    <Copyright></Copyright>

                </Container>
            </div>

        )
    }
}
