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
import ReactDOM from 'react-dom';
import Spinner from 'react-bootstrap/Spinner'

export class ReservasEnSitio extends Component{
  constructor(props){
    super(props);
    this.email = localStorage.getItem('user')
    this.handleSubmit = this.handleSubmit.bind(this);
  this.handleEncargado = this.handleEncargado.bind(this);
  this.handlechangehope = this.handlechangehope.bind(this);
    this.state={
      data:[],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://kingboooback.herokuapp.com/reservas/activeprovider/'+localStorage.getItem("providerUser"))
        .then(response => response.json())
        .then(result=>{
          setTimeout(() => {
            this.setState({ loading: false })
        }, 500);
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
	const beta = document.getElementById("delta");
	console.log(beta);
	ReactDOM.render(<div><input id='empleados' disabled ={true}  defaultValue={this.state.empleados} onChange={this.handleEncargado} ></input><span>   </span><button id={this.state.empleados} type="submit" variant="contained"  onClick={this.handlechangehope} className='btn btn-warning' >Editar encargado</button></div>,beta);


  };
  handlechangehope(e){
		e.preventDefault();
		console.log(e.target.id);
		const beta = document.getElementById("delta");
		console.log(beta);
		ReactDOM.render(<div><input id='empleados' disabled ={false}  defaultValue={e.target.id} onChange={this.handleEncargado} ></input><span>   </span><button id={e.target.id} type="submit" variant="contained"  onClick={this.handlechangehope} className='btn btn-warning' >Editar encargado</button></div>,beta);
				
  }
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
                          <TableCell ><span>Fecha: </span> {reserva.fecha.split("T")[0]} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Hora: </span> {reserva.hora} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Servicios: </span> {reserva.servicios} </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Cliente: </span> {reserva.user.userName}</TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell ><span>Comentarios: </span> {reserva.comentario} </TableCell>
                          </TableRow>
                          <TableRow >
                          <TableCell><span>Asignar encargado: </span> <div id="delta"> <input id='empleados' disabled ={true} value={reserva.encargado} onChange={this.handleEncargado} ></input><span>   </span><button id={reserva.encargado} type="submit" variant="contained" onClick={this.handlechangehope}  className='btn btn-warning' >Editar encargado</button></div></TableCell>
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
return this.state.loading?(
    <div style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"center",  }}>
      <Spinner
      as="span"
      animation="border"
      role="status"
      aria-hidden="true"
      style={{width:80, height:80}}

    />
  <span style={{marginLeft:25, fontSize:30, fontWeight:"bold"}}>Cargando...</span>

    </div>):(
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
