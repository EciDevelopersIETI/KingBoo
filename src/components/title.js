import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import LogoImage from '../img/logo.PNG';



export default class title extends Component {

    render() {
        return (
            <Row noGutters>
                <Col className={`d-flex justify-content-center align-items-center ${this.props.hasMargin ?? true ? "title-image" : ""}`}>
                    <img
                        alt=""
                        src={LogoImage}
                        className="img-fluid mr-5"
                        width="200"
                    />
                    <h1 className="display-1 font-weight-bold">{this.props.pageTitle}</h1>
                </Col>
            </Row>
        )
    }
}