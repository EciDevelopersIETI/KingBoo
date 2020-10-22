import React, { Fragment, Component }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from '../components/title'
import { updateUser } from '../api/updateUser';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { DesktopWindows } from '@material-ui/icons';

import axios from "axios";

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
}));

export default class editarRegistro extends Component{
  //const classes = useStyles();
  constructor(props){
    super(props);
    this.state={
      datos:[],
    };
  }
  componentDidMount() {
    console.log("Im in comp")
    fetch('https://kingboooback.herokuapp.com/users/'+localStorage.getItem("user"))
        .then(response => response.json())
        .then(result=>{
          this.setState({
            datos : result,
          });
          //console.log(this.state.datos);
        })
  }


  render(){
    var dato = this.state.datos;
    var provider = dato.provider;
    var lisProv = [];
    for(var i in provider){
      lisProv.push(provider[i])
      //console.log(provider[i]);
    }
    const services = [];
    const handleChangeChk = e => {
        console.log(e.target.value);
        if(!(services.includes(e.target.value))){
            services.push(e.target.value);
        }
        else{
            services.splice(services.indexOf(e.target.value), 1);
        }
        //console.log(services);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(services.length === 0){
            alert("Porfavor seleccione alemos un servico");
        }else{
            console.log(services)
            const user = {
                firstName: dato.userName,
                email: dato.email,
                password: dato.password,
                telefono: (document.getElementById("telefono").value).toString(),
                provider: {
                    providerName: lisProv[0],
                    nit: (lisProv[1]).toString(),
                    description: document.getElementById("description").value,
                    address: document.getElementById("address").value,
                    capacity: (document.getElementById("capacity").value).toString(),
                    services: services
                }
            }; updateUser(user); //Vamos a crear uno para update
        }
    };

  return (
    <Fragment>
      <Title pageTitle="Editar Informacion" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div >
        <br></br>
        <br></br>

        <form
              onSubmit={handleSubmit}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} >
                  <h3>
                    Nombre de la empresa:{lisProv[0]}
                  </h3>
                </Grid>
                <Grid item xs={12}>
                  <h5>
                    NIT: {lisProv[1]}
                  </h5>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="Direccion"
                        name="address"
                        autoComplete="dir"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="number"
                        id="capacity"
                        label="Capacidad del lugar:"
                        name="capacity"
                        autoComplete="capacidad"
                    />
                </Grid>


                <Grid item xs={12}>
                    <List
                    component="nav" id="hope" aria-label="nested-list-subheader"  subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        Que servicios prestas?
                        </ListSubheader>
                        }
                        >
                        <ListItem button>
                            <ListItemText primary="Corte de Cabello" />
                            <Checkbox  label="Corte de Cabello" edge="start" value="Corte de Cabello"  tabIndex={-1} disableRipple onChange={handleChangeChk} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Barba" />
                            <Checkbox edge="start"  value="Barba" tabIndex={-1} disableRipple onChange={handleChangeChk} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Manicura" />
                            <Checkbox edge="start" tabIndex={-1} value="Manicura" disableRipple onChange={handleChangeChk} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Depilacion" />
                            <Checkbox edge="start" tabIndex={-1} value="Depilacion" disableRipple onChange={handleChangeChk } />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        multiline
                        rows={5}
                        required
                        fullWidth
                        id="description"
                        label="Descripcion"
                        name="description"
                        autoComplete="description"
                    />
                </Grid>


                <Grid item xs={12}>
                    <Typography component="h6" variant="h6">
                        Datos del Responsable
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                  <h5>
                    Nombre: {dato.userName}
                  </h5>
                </Grid>
                <Grid item xs={12}>
                  <h5>
                    Nombre: {dato.email}
                  </h5>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="number"
                        id="telefono"
                        label="Telefono"
                        name="telefono"
                        autoComplete="Telefono"
                    />
                </Grid>
            </Grid>
            <br/>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Update
            </Button>
        </form>
        </div>
      </Container>
      <p></p>
      <Copyright></Copyright>
      <br></br>
    </Fragment>
  );
}}
