import Link from '@material-ui/core/Link';
import {  withStyles , makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component, Fragment } from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Title from '../components/title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';	


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  displayblock: {
    display: 'block'
  },
  table: {
	minWidth: 200,
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        KingBoo
            </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class estadisticas extends Component {
  render() { 
	const StyledTableCell = withStyles((theme) => ({
	  head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	  },
	  body: {
		fontSize: 14,
	  },
	}))(TableCell);

	const StyledTableRow = withStyles((theme) => ({
	  table: {
		'&:nth-of-type(odd)': {
		  backgroundColor: theme.palette.action.hover,
		},
	  },
	}))(TableRow);
    var lista = JSON.parse(localStorage.getItem("estadisticas"));
    var listaHora = JSON.parse(localStorage.getItem("estadisticasHora"));
    const data = {
      labels: ['Corte de Cabello', 'Barba', 'Manicura', 'Depilación'],
      datasets: [{
        data: lista,
        backgroundColor: ['#fa8072', '#735686', '#97dc91', '#7fccf3']
      }]
    };
    const opciones = {
      responsive: true
    }
    const dataBarras={
      labels: ["07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30"],
      datasets:[{
        label:'Horas reservadas',
        backgroundColor:'rgba(57, 73, 114,1)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(57, 73, 114,0.2)',
        hoverBorderColor: '#FF0000',
        data: listaHora
      }]
    }
    const opcionesHora = {
      maintainAspectRatio: false,
      responsive: true
    }
    return (
      <Fragment>
        <Title hasMargin={false} pageTitle="Estadisticas" />
        <p></p>
        <h1>Tipo de reserva</h1>
        <div className="App">
          <Pie width={150} height={50} data={data} options={opciones} />
        </div>
        <br></br>
        <h1>Reservas por hora</h1>
        <div className="App">
          <Bar height={250} data={dataBarras} options={opcionesHora} />
        </div>
        <p></p>
        <Copyright></Copyright>
        <br></br>
		<h1>Clientes Frecuentes</h1>
		<div className="table" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>	
				<TableContainer component={Paper} style={{width: 1200}}>
				  <Table aria-label="simple table" >
					<TableHead>
					  <TableRow>
						<TableCell style={{ background: "#283747",width: 200, border: '1px solid black'}} align="center">Numero de Reservas</TableCell>
						<TableCell style={{ background: "#283747",width: 200, border: '1px solid black'}} align="center">Nombre</TableCell>
						<TableCell style={{ background: "#283747",width: 200, border: '1px solid black'}} align="center">Correo</TableCell>
						<TableCell style={{ background: "#283747",width: 200, border: '1px solid black'}} align="center">Telefono</TableCell>
						<TableCell style={{ background: "#283747",width: 400, border: '1px solid black'}} align="center">Foto</TableCell>

					  </TableRow>
					</TableHead>
					<TableBody>
					{JSON.parse(localStorage.getItem("clientesfrecuentes")).map((row) => (
						
						<TableRow key={row[1]}>
						  <TableCell style={{ background: "#5D6D7E",width: 200, border: '1px solid black'}} align="center" className="align-middle">{row[0]}</TableCell>
						  <TableCell style={{ background: "#5D6D7E",width: 200, border: '1px solid black'}} align="center" className="align-middle">{row[1].userName}</TableCell>
						  <TableCell style={{ background: "#5D6D7E",width: 200, border: '1px solid black'}} align="center" className="align-middle">{row[1].email}</TableCell>
						  <TableCell style={{ background: "#5D6D7E",width: 200, border: '1px solid black'}} align="center" className="align-middle">{row[1].telefono}</TableCell>
						   <TableCell style={{ background: "#5D6D7E",width: 200, border: '1px solid black'}} align="center"><img src={row[1].imgUrl} alt="Foto" style={{height:"50%"}}/></TableCell>

						</TableRow>
					))}
					</TableBody>
				  </Table>
				</TableContainer>
				</div>
      </Fragment>
    )
  }
}
