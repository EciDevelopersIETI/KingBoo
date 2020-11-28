import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Copyright from '../components/copyright';
import CrearSitioForm from '../components/crearSitioForm';
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
