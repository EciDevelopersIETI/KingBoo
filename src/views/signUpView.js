import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import Copyright from '../components/copyright';
import Title from '../components/title';
import SignUpShop from '../components/signUpShop';



export default class signUpView extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                        <SignUpShop></SignUpShop>
                </Container>
            </div>

        )
    }
}
