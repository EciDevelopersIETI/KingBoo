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
                <Container fluid>
                        <EditarRegistro></EditarRegistro>
                </Container>
            </div>

        )
    }
}
