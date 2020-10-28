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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { newUser } from '../api/createUser';
import { DesktopWindows } from '@material-ui/icons';
import Title from '../components/title'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default class SignUpShop extends Component{
    render(){
    const services = [];
    const prices = [];
    //const classes = useStyles();

    const handleChangeChk = e => {
        console.log(e.target.checked);
        if(!(services.includes(e.target.value))){
            //console.log(document.getElementById(e.target.value));
            if(document.getElementById(e.target.value).value!==""){
                services.push((e.target.value));
                prices.push((e.target.value)+" ($"+(document.getElementById(e.target.value).value)+")");
            }else{
                e.target.click();
                //alert("Se requiere ingresar el precio")
            }
            console.log(e.target.checked);
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
                firstName: document.getElementById("firstName").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                telefono: (document.getElementById("telefono").value).toString(),
                provider: {
                    providerName: document.getElementById("orgName").value,
                    nit: (document.getElementById("nit").value).toString(),
                    description: document.getElementById("description").value,
                    address: document.getElementById("address").value,
                    capacity: (document.getElementById("capacity").value).toString(),
                    services: prices

                }
            }; newUser(user);
            setTimeout(function() {
                window.location.href="/login";
            }.bind(this), 1200);
        }



    };

    return (
            <Fragment>
              <Title pageTitle="Sign up as provider" />
              <Avatar>
                  <LockOutlinedIcon />
              </Avatar>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div >
                <br></br>
                <br></br>

                <form onSubmit={handleSubmit}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="oname"
                                name="organizationName"
                                variant="outlined"
                                required
                                fullWidth
                                id="orgName"
                                label="Nombre de la Empresa"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="number"
                                id="nit"
                                label="NIT"
                                name="nit"
                                autoComplete="Nit"
                            />
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
                                Que servicio quieres
                                </ListSubheader>
                                }
                                >
                                <ListItem button>
                                    <ListItemText primary="Corte de Cabello" />
                                    <TextField
                                        type="number"
                                        id="Corte de Cabello"
                                        label="precio:"
                                        name="pcorte"
                                    />
                                    <Checkbox id="pcorte" label="Corte de Cabello" edge="start" value="Corte de Cabello"  tabIndex={-1} disableRipple onChange={handleChangeChk} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Barba" />
                                    <TextField
                                        type="number"
                                        id="Barba"
                                        label="precio:"
                                        name="pbarba"
                                    />
                                    <Checkbox id="pbarba" edge="start"  value="Barba" tabIndex={-1} disableRipple onChange={handleChangeChk} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Manicura" />
                                    <TextField
                                        type="number"
                                        id="Manicura"
                                        label="precio:"
                                        name="pmani"
                                    />
                                    <Checkbox id="pmani" edge="start" tabIndex={-1} value="Manicura" disableRipple onChange={handleChangeChk} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Depilacion" />
                                    <TextField
                                        type="number"
                                        id="Depilacion"
                                        label="precio:"
                                        name="pdepil"
                                    />
                                    <Checkbox id="pdepil" edge="start" tabIndex={-1} value="Depilacion" disableRipple onChange={handleChangeChk } />
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
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Nombre del encargado"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/sign-up" variant="body2">
                                {"Regresar"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
              </div>
            </Container>
            <p></p>
            <Copyright></Copyright>
            <br></br>
          </Fragment>
    );
  }
}
