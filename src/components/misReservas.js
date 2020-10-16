import React, { Component, Fragment } from 'react';
import Title from "./title";
import Header from "./header";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Copyright from '../components/copyright';

export class MisReservas extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
    };
  }

  componentDidMount() {
    fetch('https://kingboooback.herokuapp.com/reservas/user/fernando@mail.com')
        .then(response => response.json())
        .then(result=>{
          this.setState({
            data : result,
          });
          console.log(result);
        })  
  }

  render(){
    const lista = this.state.data.map((reserva) => {
      return (
        <div className="card reserv padding-60px">
          <div className="lista-datos">
            <h2>
              <span>{reserva.provider.providerName}</span>
            </h2>
            <label>{reserva.provider.description}</label>
            <br></br>
            <li>
              <span>Direccion:</span> {reserva.provider.address}
            </li>
            <br></br>
            <div>
              <TableContainer component={Paper} >
                <Table size="medium" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell ><span>Servicio</span></TableCell>
                      <TableCell ><span>Fecha y Hora Reserva</span></TableCell>
                      <TableCell ><span>Cancelar Reserva</span></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                          <TableCell >
                          {reserva.servicios}
                        </TableCell>
                        <TableCell >
                          {reserva.fecha} - {reserva.hora}
                        </TableCell>
                        <TableCell>
                          <button className="btn btn-secondary">Cancelar reserva</button>
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <img src='https://www.logopik.com/wp-content/uploads/edd/2018/11/Beauty-Salon-Logo-Vector.png'></img>
        </div>
      );
    });

    return (
      <Fragment>
        <Title hasMargin={false} pageTitle="Mis Reservas" />
        <div className="mt-5">
          {lista}
        </div>
        <p></p>
        <Copyright></Copyright>
        <p></p>
      </Fragment>
    );
  };
}

