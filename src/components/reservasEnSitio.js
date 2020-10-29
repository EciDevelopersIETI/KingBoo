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
import axios from "axios";

export class ReservasEnSitio extends Component{
  constructor(props){
    super(props);
    this.email = localStorage.getItem('user')
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleEncargado = this.handleEncargado.bind(this);
    this.state={
      data:[],
    };
    axios.get('https://kingboooback.herokuapp.com/users/'+this.email)
    .then(response => {
      console.log(response.data.provider.providerName);
      localStorage.setItem("providerUser",response.data.provider.providerName);
    })
    .catch(function (error){
      console.log(error);});
  }

  componentDidMount() {
    fetch('https://kingboooback.herokuapp.com/reservas/provider/'+localStorage.getItem("providerUser"))
        .then(response => response.json())
        .then(result=>{
          this.setState({
            data : result,
          });
          console.log(result);
          localStorage.setItem("reservas",JSON.stringify(result));
        })

  }

  handleEncargado(e){
    this.setState({empleados: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.id);
    console.log(this.state.empleados);
    
    
    const update ={
        
        encargado: this.state.empleados,
        reservaId: e.target.id
      
    }
    updateReserva(update);
    
  };

  render(){
    
    const   lista = this.state.data.map((reserva) => {
      return(
        <form id={reserva.reservaId} onSubmit={this.handleSubmit}>
          <div className="card reserv padding-60px" >
              <TableContainer component={Paper} id="table" >
                  <Table aria-label="a dense table" id="tableDos">
                    <TableHead>
                          <TableRow>
                          <TableCell ><span>IDReserva: </span> {reserva.reservaId} </TableCell>
                          </TableRow>
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
                          <TableRow>
                          <TableCell > <button id="button" type="submit" variant="contained" className='btn btn-warning' >Enviar datos</button></TableCell>
                          </TableRow>
                      </TableHead>
                  </Table>
              </TableContainer>
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
