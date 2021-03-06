import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Container, Row } from 'reactstrap';
import Image2 from '../img/peluqueria2.jpg';
import Image3 from '../img/peluqueria3.jpeg';
import Image1 from '../img/salonbelleza1.jpg';
import CardReserva from "./cardReserva";
import Copyright from './copyright';
import Title from './title';







export default class listadoReservas extends Component {

    render() {
        return (
            <div>
                <Title pageTitle="Reservas" />

                <Container >
                    <Row>
                        <Col lg={{ span: 4 }} className="ml-5">
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
                        <CardReserva cardImage={Image1} cardTitle="Consultar reservas" />
                        <CardReserva cardImage={Image2} cardTitle="Consultar reservas" />
                        <CardReserva cardImage={Image3} cardTitle="Consultar reservas" />
                        <CardReserva cardImage={Image2} cardTitle="Consultar reservas" />
                        <CardReserva cardImage={Image3} cardTitle="Consultar reservas" />
                    </CardDeck>
                    <Copyright></Copyright>
                </Container>
            </div>

        )
    }
}
