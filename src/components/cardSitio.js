import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class cardSitio extends Component {

    render() {
        return (
            <div class="col mb-4">
                <Card>
                <Card.Img variant="top" className="card-img-top" src={this.props.cardImage} />
                <Card.Body>
                
                </Card.Body>
                <Card.Footer>
                    <a href="./proveedoruser" role="button" className="btn btn-primary btn-block">{this.props.cardTitle}</a>
                </Card.Footer>
            </Card>
            </div>
            
        )
    }
}