import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from './title';
import Header from './header';
import {updateReserva} from './../api/createReserva';

export class ReservasEnSitio extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleIdReserva = this.handleSubmit.bind(this);
    //this.handleEncargado = this.handleEncargado.bind(this);
    this.state={
      data:[],
    };
  }

  componentDidMount() {
    fetch('https://kingboooback.herokuapp.com/reservas')
        .then(response => response.json())
        .then(result=>{
          this.setState({
            data : result,
          });
          console.log(result);
        })  
  }

  handleIdReserva(e){
    this.setState.idReserva({idRerserva: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(document.getElementById("idReserva").value);
    console.log(document.getElementById("empleados").value);
    
    const update ={
        
        encargado: document.getElementById("empleados").value,
        reservaId: document.getElementById("idReserva").value
      
    }
    updateReserva(update);
  };

  render(){
    const lista = this.state.data.map((reserva) => {
      return(
          <div>
            <input value={reserva.reservaId} id='idReserva' onChange={this.handleIdReserva}/>
            <TableContainer component={Paper} >
                <Table size="medium" aria-label="a dense table">
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
                        <TableCell ><span>Asignar encargado: </span>  <input id='empleados'></input></TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
          </div>
      );
    });

    return (
      <Fragment>
        <Header></Header>
        <Title pageTitle="Reservas Sitio X"/>
        <form onSubmit={this.handleSubmit}>
        <div>
          <div className='card reserv' >
            <div className='lista-datos'> 
            {lista}
            </div>
            <div className='botones'>
              <button className='btn btn-success'>Enviar datos</button>
              <button className='btn btn-secondary'>Cancelar datos</button>
            </div>
          </div>
        </div>
        </form>
      </Fragment>
    );
  }
}
