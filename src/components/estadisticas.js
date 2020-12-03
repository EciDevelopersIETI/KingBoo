import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component, Fragment } from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Title from '../components/title';


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
      </Fragment>
    )
  }
}
