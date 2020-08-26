import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
        <Container>
            <CssBaseline />
                <header className="App-header">
                    <br/>
                    <Typography component="div" variant="h2">
                        Peluqueria Alejandra
                    </Typography>
                    <br/>
                </header>
                <br/>
                   <br/>
                   <br/>
                   <Grid container spacing={1}>
                        <Grid item xs={6}>
                             <Paper class="outlinenone">
                                <Typography variant="h5">
                                     Descripción
                                </Typography>
                             </Paper>
                             <p>La mejor peluqueria de todo Neiva.
                             Tenemos a los mejores estilistas de la 
                             ciudad a un excelente precio. Con descuentos
                             para nuestros clientes habituales</p>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                <Typography variant="h5">
                                     Imagenes
                                </Typography>
                            </Paper>
                            <br/>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Paper class="outlinenone-second" >imagen 1</Paper>
                                    <br/>
                                    <Paper class="outlinenone-second" >imagen 2</Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper class="outlinenone-second" >imagen 3</Paper>
                                    <br/>
                                    <Paper class="outlinenone-second" >imagen 4</Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                 <Typography variant="h5">
                                      Caracteristicas principales
                                 </Typography>
                            </Paper>
                            <br/>
                            <Grid item>
                                <Paper class="outlinenone-second">
                                    <Typography variant="h6">
                                        Corte de cabello
                                    </Typography>
                                </Paper>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography variant="h6">
                                        Manicura
                                    </Typography>
                                </Paper>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography variant="h6">
                                        Barba
                                    </Typography>
                                </Paper>
                                <br/>
                                <Paper class="outlinenone-second">
                                    <Typography variant="h6">
                                        Depilacion
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                 <Typography variant="h5">
                                      Ubicaciones :
                                 </Typography>
                             </Paper>
                             <p>Diagonal 123 # 4b-5h, Neiva</p>
                        </Grid>
                   </Grid>
                   <br/>
                   <br/>
                   <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Button  href="/reserva" variant="body2" type="submit" variant="contained" color="primary"> Haz tu reserva </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button type="submit"  variant="contained" color="second"> Agregar otro servicio </Button>
                        </Grid>                
                   </Grid>  
               <Box mt={5}>
                    <Copyright />
               </Box>
        </Container>
    );
}
