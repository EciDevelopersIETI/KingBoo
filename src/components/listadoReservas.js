import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import Header from './header';
import Title from './title'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Copyright from './copyright';

import CardSitio from "./cardSitio";


import MapaImage from '../img/mapa.png'
import Image1 from '../img/salonbelleza1.jpg'
import Image2 from '../img/peluqueria2.jpg'
import Image3 from '../img/parqueadero1.jpeg'



export default class listadoReservas extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <Title pageTitle="Reservas"/>

                <Container >
                    <Row>
                        <Col lg={{span:4}} className="ml-5">
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Buscar"
                                aria-label="Campo de busqueda"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Buscar</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <CardDeck className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
                        <CardSitio cardImage={Image1} cardTitle="Consultar reservas"/>
                        <CardSitio cardImage={Image2} cardTitle="Consultar reservas"/>
                        <CardSitio cardImage={Image3} cardTitle="Consultar reservas"/>
                        <CardSitio cardImage={Image2} cardTitle="Consultar reservas"/>
                        <CardSitio cardImage={Image3} cardTitle="Consultar reservas"/>
                    </CardDeck>
                    <Copyright></Copyright>
                </Container>
            </div>

        )
    }
}
