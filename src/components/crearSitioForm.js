import React, { Component } from 'react';

import { Row, Col, Form, Button, CardDeck, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import "./crearSitioForm.css"

export default class crearSitioForm extends Component {

    state = {
        sitios: [],
        caracteristicas: [],
        //validated: false,
        //validmeals: false,
    }

    //sitio = { id: 15, chef: Cookies.getJSON('cook'), meals: this.state.meals, price: 0, description: "", name: "" };
   
    //onChange={(e) => this.handleTipoChange(e)}
    handleTipoChange(e) {
        this.sitio.tipo = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleNombreChange(e) {
        this.sitio.nombre = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleNitChange(e) {
        this.sitio.nit = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleCapacidadChange = (e) => {
        this.sitio.capacidad = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleDireccionChange = (e) => {
        this.sitio.direccion = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleCorreoChange = (e) => {
        this.sitio.correo = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleContactoUnoChange = (e) => {
        this.sitio.contactoUno = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleContactoDosChange = (e) => {
        this.sitio.contactoDos = e.target.value;
        this.setState({ sitio: this.state.sitio });
    }

    handleDescripcionChange = (e) => {
        this.sitio.descripcion = e.target.value;
        this.setState({ sitio: this.state.sitio });
        
    }

    handleRemove = (index) => {
        this.state.sitio.splice(index, 1);
        this.setState({ sitio: this.state.sitio });
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            this.setState({ validated: true });
            this.addMenu();
        }
    }


    render() {
        return (
            <div className="crearSitio">

                <h2>Información del negocio</h2>

                <div className="sitioForm">


                    <Form noValidate>
                        <div className="sitioFormGral">
                            <Form.Group as={Row} controlId="formTipoNegocio">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Tipo de negocio:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="text" placeholder="Tipo de negocio"
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa un tipo de negocio.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">El tipo de negocio es el sector al que pertenece.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formNombre">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Nombre:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="text" placeholder="Nombre del negocio"
                                        required  />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa un nombre al negocio.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">El nombre con el que se identifica el negocio.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formNit">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">NIT:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="number" min="1" placeholder="NIT del negocio"
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa el NIT del negocio.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">El NIT del negocio es el número de identificación tributaria.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formCapacidad">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Capacidad actual:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="number" min="1" placeholder="Cantidad de personas"
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa la cantidad de personas.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">La capacidad actual es la cantidad de personas que pueden ingresar al negocio.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formUbicacion">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Ubicación:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="text" placeholder="Dirección del negocio."
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa la ubicación del negocio.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">La ubicación del negocio es la dirección en la cual se encuentra localizado.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formCorreo">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Correo:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="email" placeholder="Correo corporativo"
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingrese el correo corporativo del negocio.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">El correo corporativo es el que usa la empresa.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formContactoUno">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Contacto 1:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="tel" placeholder="Teléfono"
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa un número telefónico.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">El contacto es el número telefónico a donde uno se puede comunicar en caso de una novedad.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formContactoDos">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Contacto 2:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control type="tel" placeholder="Teléfono"
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa un número telefónico.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">El contacto es el número telefónico a donde uno se puede comunicar en caso de una novedad.</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formDesc">
                                <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Descripción:</Form.Label>
                                <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                    <Form.Control as="textarea" rows="3" type="text" placeholder="Descripción del negocio"
                                        required />
                                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa una descripción del negocio.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">Aquí puedes ser más especifico con tu negocio.</Form.Text>
                                </Col>
                            </Form.Group>
                        </div>

                        <hr />
                        <h3>Añadir Caracteristicas</h3>
                        <hr />

                        <Form.Group as={Row} controlId="formImg">
                            <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Imagenes:</Form.Label>
                            <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                <Form.File
                                    id="custom-file-translate-scss"
                                    label="Subir imagenes"
                                    lang="es"
                                    custom
                                />
                            </Col>
                        </Form.Group>


                        <Button size="lg" type="reset" variant="success" style={{ border: 'medium solid black' }} className="buttonForm boxShadowPro font-weight-bold">
                            Crear
                        </Button>
                    </Form>
                </div>
            </div>

            /*
            <Form noValidate validated={this.state.validated} onSubmit={(event) => this.handleSubmit(event)}>

            {this.state.meals.map((meal, index) => {

            
             */

        )
    }
}