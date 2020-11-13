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
import { updateUser } from '../api/updateUser';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


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
  displayblock:{
    display:'block'
  }
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
    const prices = [];
    const handleChangeChk = e => {
        console.log(e.target.value);
        if(!(services.includes(e.target.value))){
          if(document.getElementById(e.target.value).value!==""){
              services.push((e.target.value));
              prices.push((e.target.value)+" ($"+(document.getElementById(e.target.value).value)+")");
          }else{
              e.target.click();
              //alert("Se requiere ingresar el precio")
          }
        }
        else{
            services.splice(services.indexOf(e.target.value), 1);
            prices.splice(services.indexOf((e.target.value)+" ($"+(document.getElementById(e.target.value).value)+")"), 1);
        }
        console.log(services);
        console.log(prices);
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
                    services: prices
                }
            }; updateUser(user); //Vamos a crear uno para update
        }
    };

  return (
    <Fragment>
      <Title hasMargin={false} pageTitle="Editar Información" />
      <div className='card reserv'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className='card reserv'>
        <br></br>
        <br></br>

        <form
              onSubmit={handleSubmit}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} >
                  <h3>
                    <b>Nombre de la empresa:</b> <p></p>{lisProv[0]}
                  </h3>
                </Grid>
                <Grid item xs={12}>
                  <h5>
                    <b>NIT:</b> {lisProv[1]}
                  </h5>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="Dirección"
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
                        label="Capacidad del lugar"
                        name="capacity"
                        autoComplete="capacidad"
                    />
                </Grid>


                <Grid item xs={12}>
                    <List style={{display:'block'}}
                    component="nav" id="hope" aria-label="nested-list-subheader"  subheader={
                        <Typography component="h1" variant="h5">
                        <b>¿Qué servicios prestas?</b>
                        </Typography>
                        }
                        >
                        <ListItem button>
                            <ListItemText primary="Corte de cabello" />
                            <TextField
                                type="number"
                                id="Corte de Cabello"
                                label="Precio:"
                                name="pcorte"
                            />
                            <Checkbox  label="Corte de Cabello" edge="start" value="Corte de Cabello"  tabIndex={-1} disableRipple onChange={handleChangeChk} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Barba" />
                            <TextField
                                type="number"
                                id="Barba"
                                label="Precio:"
                                name="pbarba"
                            />
                            <Checkbox edge="start"  value="Barba" tabIndex={-1} disableRipple onChange={handleChangeChk} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Manicura" />
                            <TextField
                                type="number"
                                id="Manicura"
                                label="Precio:"
                                name="pmani"
                            />
                            <Checkbox edge="start" tabIndex={-1} value="Manicura" disableRipple onChange={handleChangeChk} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Depilación" />
                            <TextField
                                type="number"
                                id="Depilacion"
                                label="Precio:"
                                name="pdepil"
                            />
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
                        label="Descripción"
                        name="description"
                        autoComplete="description"
                    />
                </Grid>


                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        <b>Datos del responsable</b>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                  <h5>
                     <b>Nombre:</b> {dato.userName}
                  </h5>
                </Grid>
                <Grid item xs={12}>
                  <h5>
                    <b>Correo:</b> {dato.email}
                  </h5>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="number"
                        id="telefono"
                        label="Teléfono"
                        name="telefono"
                        autoComplete="Telefono"
                    />
                </Grid>
            </Grid>
            <br/>
            <Button
                type="submit"
                class="btn btn-warning"
                fullWidth
                variant="contained"
            >
                Actualizar
            </Button>
        </form>
        </div>
      </Container>
      </div>
      <p></p>
      <Copyright></Copyright>
      <br></br>
    </Fragment>
  );
}}
