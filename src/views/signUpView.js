import React, { Component } from 'react';
import { Container } from 'reactstrap';
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
