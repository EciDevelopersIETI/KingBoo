import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {reserva} from './reserva'
import Title from '../components/title'
import Header from '../components/header';
import Button from 'react-bootstrap/Button'
import Image1 from '../img/salonbelleza1.jpg'
import Image2 from '../img/peluqueria2.jpg'

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

export default function Proveedor() {
    return (
        <div>
            <Header></Header>
            <br/>
            <Title pageTitle="Peluqueria"/>
            <Container>
                <br/>
                <br/>
                <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                <Typography variant="h3">
                                    Descripción
                                </Typography>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <p>La mejor peluqueria de todo Neiva.
                                    Tenemos a los mejores estilistas de la 
                                    ciudad a un excelente precio. Con descuentos
                                    para nuestros clientes habituales</p>
                                </Paper>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                <Typography variant="h3">
                                    Imágenes
                                </Typography>
                            </Paper>
                            <br/>
                            <Paper class="ontlineimg">
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <img class="imagen" src={Image2}></img>
                                        <img class="imagen" src={Image2}></img>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img class="imagen" src={Image1}></img>
                                        <img class="imagen" src={Image1}></img>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <br/>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                <Typography variant="h3">
                                    Servicios
                                </Typography>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography >
                                        Corte de cabello
                                    </Typography>
                                </Paper>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography>
                                        Manicura
                                    </Typography>
                                </Paper>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography>
                                        Barba
                                    </Typography>
                                </Paper>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography>
                                        Depilacion
                                    </Typography>
                                </Paper>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                <Typography variant="h3">
                                    Ubicaciones
                                </Typography>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography >
                                        Carrera 67 # 123-52
                                    </Typography>
                                </Paper>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Button  href="/reserva"> Haz tu reserva </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button> Agregar otro servicio </Button>
                            </Grid>                
                    </Grid>  
                <Box mt={5}>
                        <Copyright />
                </Box>
            </Container>
        </div>
    );
}
