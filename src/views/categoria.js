import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'reactstrap';
import CardSitio from "../components/cardSitio";
import Copyright from '../components/copyright';
import Title from '../components/title';







export default class crearSitio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            listaProviders: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: true })
        }, 500);
        this.setState({ listaProviders: JSON.parse(localStorage.getItem("listaProviders")) })

    }


    render() {

        //console.log(localStorage.getItem("listaProviders"));
        //console.log(JSON.parse(localStorage.getItem("listaProviders")));
        return (
            <div>
                {!this.state.loading ?
                    <div style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                            style={{ width: 80, height: 80 }}

                        />
                        <span style={{ marginLeft: 25, fontSize: 30, fontWeight: "bold" }}>Cargando...</span>
                    </div>
                    :
                    <Container >
                        <Title pageTitle="Tiendas" />
                        <div className='card reserv'>
                            <CardDeck className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
                                {
                                    JSON.parse(localStorage.getItem("listaProviders")).map(serv => (
                                        <CardSitio cardImage={serv.provImgUrl} cardTitle={serv.providerName} />
                                    ))
                                }
                            </CardDeck>
                        </div>
                        <p></p>
                        <Copyright></Copyright>
                    </Container>
                }
            </div>
        )
    }
}
