import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'reactstrap';



export default class header extends Component {

    render() {
        return (
            <div>
                <Navbar className="border" bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="border-right pl-0" href="../listaSitios">Inicio</Nav.Link>
                            <Nav.Link className="border-right" href="./">Acerca de</Nav.Link>
                            <Nav.Link className="border-right" href="#link">Precios</Nav.Link>
                            <Nav.Link className="border-right" href="#link">Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-success">Botón</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}