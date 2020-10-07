import React from 'react';
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


export default function SignUpShop() {

    const services = [];
    const classes = useStyles();

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
                    services: services

                }
            }; newUser(user);
            setTimeout(function() {
                window.location.href="/login";
            }.bind(this), 1000);
        }



    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up as provider
                </Typography>
                <form className={classes.form}
                      onSubmit={handleSubmit}
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
                        className={classes.submit}
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
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
