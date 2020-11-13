import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
import axios from "axios";
import {newReserva} from './../api/createReserva';
import Title from "./title";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


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

export default function Reserva() {
    const classes = useStyles();
	let	servicesHope = axios.get('https://kingboooback.herokuapp.com/provider/'+localStorage.getItem("provider")+'/service').then(function (response) {localStorage.setItem("servicesPro",response.data);}).catch(function (error) { console.log(error);});
	const services = [];
	const handleSubmit = e => {
        e.preventDefault();
		if(services.length === 0){
      alert("Por favor seleccione al menos un servicio");
		}
		else{
			console.log('xdddddddddddddddddddddddddddddddddddddddd15555555555555555');
			var userReserva = axios.get('https://kingboooback.herokuapp.com/users/'+localStorage.getItem("user")).then(function (response) {userReserva = response.data;}).catch(function (error) { console.log(error);});
			var providerReserva = axios.get('https://kingboooback.herokuapp.com/provider/'+localStorage.getItem("provider")).then(function (response) {providerReserva = response.data;}).catch(function (error) { console.log(error);});
			console.log(document.getElementById("hora").textContent.split('-')[0]);
			setTimeout(function() {
				const reserva={
					 fecha: document.getElementById("date").value,
					 hora: document.getElementById("hora").textContent.split('-')[0],
					 servicios: services,
					 comentario: document.getElementById("tel").value,
					 encargado: " ",
					 user: userReserva,
					 provider: providerReserva
				}
				console.log(reserva);
				newReserva(reserva);
			}.bind(this), 1200);

		}

    };
	const handlechangehope= e =>{
		console.log(e.target.value);
		var  tempo = document.getElementById("alfa");
		var data = axios.get('https://kingboooback.herokuapp.com/reservas/provider/'+localStorage.getItem("provider")+'/date/'+e.target.value+'/getcupos').then(function (response) {data=response.data;}).catch(function (error) { console.log(error);});
		const myelement = React.createElement('h1', {}, 'I do not use JSX!');
		setTimeout(function() {
			ReactDOM.render(<div> <InputLabel id="demo-simple-select-outlined-label">Horarios</InputLabel>
			<Select
			  id="hora"
			  label="Horarios"
			  width="100px"
			  defaultValue={data[0]}
			>
			{console.log(data)}
			{data.map(hora => (
						<MenuItem value={hora}>{hora}</MenuItem>					
			))}
			</Select> </div>,tempo);
				

		}.bind(this), 1000);

	}
	const handleChangeChk = e => {
		console.log(e.target.value);
		if(!(services.includes(e.target.value))){
			services.push(e.target.value);
		}
		else{
			services.splice(services.indexOf(e.target.value), 1);
		}
		console.log(services);
	}

    return (
      <Fragment>
      <Title hasMargin={false} pageTitle="Mis Reservas" />
      <div className='card reserv' >
        <Container component="main" maxWidth="xs">
          <div className='card reserv' >
                <form className={classes.form}
				onSubmit={handleSubmit} >
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="date"
                                label="Fecha"
                                type="date"
								onChange={handlechangehope}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Grid>
            						<div id="alfa">
            						</div>
                        <Grid item xs={12}>
                            <List  style={{display:'block'}}
                            component="nav" id="hope" aria-label="nested-list-subheader"  subheader={
                              <Typography component="h1" variant="h5">
                                  <b>¿Qué servicios necesitas?</b>
                              </Typography>
                                }
                                >

								{

										localStorage.getItem("servicesPro").split(',').map(serv => (
											<ListItem button key={serv}>
												<ListItemText primary={serv} />
												<Checkbox  label={serv} edge="start" value={serv}  tabIndex={-1} disableRipple  onChange={handleChangeChk} />
											</ListItem>
										))






								}




                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="tel"
                                id="tel"
                                label="Comentarios"
                                name="Comentarios"
                                autoComplete="Comentarios"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="parqueadero" color="primary" />}
                                label="¿Necesitas un parqueadero?"
                            />
                        </Grid>

                    </Grid>
                    <Button className={classes.submit} type="submit"> Reservar </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/proveedoruser" variant="body2">
                                {"Regresar"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                </div>
              </Container>
            </div>
            <Box mt={2}>
                <Copyright />
            </Box>
        </Fragment>
    );
}
