import React, {Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from './title';
import { Container, Row, Col } from 'reactstrap';
import {updateReserva} from './../api/updateReserva';
import Copyright from '../components/copyright';

export class ReservasEnSitio extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.input = React.createRef();
    this.handleEncargado = this.handleEncargado.bind(this);
    this.state={
      data:[],
    };
  }

  componentDidMount() {
    fetch('https://kingboooback.herokuapp.com/reservas/provider/Luis%20Shop')
        .then(response => response.json())
        .then(result=>{
          this.setState({
            data : result,
          });
          console.log(result);
        })  
  }

  handleEncargado(e){
    this.setState({empleados: e.target.value});
  }

  handleSubmit(e){
    console.log("idFront: " + this.input.current.value);
    console.log("Encargado: " + this.state.empleados);
    e.preventDefault();
    /** 
    const update ={
        
        encargado: this.state.empleados,
        reservaId: this.state.idRerserva
      
    }
    updateReserva(update);
    */
  };

  render(){

    const   lista = this.state.data.map((reserva,i) => {
      return(
        <form onSubmit={this.handleSubmit} key={reserva.reservaId} >
          <div className="card reserv padding-60px" >
            <div key={i}>
              <input defaultValue={reserva.reservaId} type="text" ref={this.input}></input> 
              <TableContainer component={Paper} >
                  <Table aria-label="a dense table">
                    <TableHead>
                          <TableRow>
                          <TableCell ><span>Fecha: </span> {reserva.fecha} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Hora: </span> {reserva.hora} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Servicios: </span> {reserva.servicios} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Cliente: </span> {reserva.user.userName} Telefono: {reserva.user.telefono} email: {reserva.user.email} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Comentarios: </span> {reserva.comentario} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Asignar encargado: </span>  <input id='empleados' onChange={this.handleEncargado} ></input></TableCell>
                          </TableRow>
                      </TableHead>
                  </Table>
              </TableContainer>
            </div>
            <button type="submit" variant="contained" className='btn btn-success'>Enviar datos</button>
          </div>
        </form>
      );
    });

    return (
      <div>
        <Title hasMargin={false} pageTitle="Reservas Sitio X"/>
      <Container fluid>
            <div className='card reserv' >
              <div className='lista-datos'> 
              {lista}
              </div>
            </div>
        <p></p>
        <Copyright></Copyright>
        <p></p>
        </Container>
      </div>
    );  
  }
}
