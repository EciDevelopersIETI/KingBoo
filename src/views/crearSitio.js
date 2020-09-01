import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import CrearSitioForm from '../components/crearSitioForm';
import Copyright from '../components/copyright';
import Title from '../components/title';


import LogoImage from '../img/logo.PNG'


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
