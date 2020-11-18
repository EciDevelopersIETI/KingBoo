import React, { Fragment, Component }from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from '../components/title'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import {Pie} from 'react-chartjs-2';
import axios from "axios";

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
  displayblock:{
    display:'block'
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

export default class estadisticas extends Component{
  render(){
    console.log(JSON.parse(localStorage.getItem("estadisticas")));
    var lista = JSON.parse(localStorage.getItem("estadisticas"));
    const data = {
      labels:['Corte de Cabello','Barba','Manicura','Depilación'],
      datasets:[{
        data:lista,
        backgroundColor:['#fa8072','#735686','#97dc91','#7fccf3']
      }]
    };
    const opciones = {
      responsive: true
    }
    return(
      <Fragment>
        <Title hasMargin={false} pageTitle="Estadisticas" />
        <p></p>
        <div className="App">
          <Pie width={150} height={50} data={data} options={opciones}/>
        </div>
      <p></p>
      <Copyright></Copyright>
      <br></br>
      </Fragment>
    )
  }

}
