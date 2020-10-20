import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

import axios from "axios";

export default class CardReserva extends Component {
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
      e.preventDefault();
      //console.log(this.props.cardTitle);
      localStorage.setItem("provider",this.props.cardTitle);
      window.location.href="./reservasEnSitio";
    };
    render() {
        return (
            <div class="col mb-4">
                <Card>
                <Card.Img variant="top" className="card-img-top" src={this.props.cardImage} />
                <Card.Body>

                </Card.Body>
                <Card.Footer>
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-block">
                    {this.props.cardTitle}
                    </button>
                </Card.Footer>
            </Card>
            </div>

        )
    }
}
