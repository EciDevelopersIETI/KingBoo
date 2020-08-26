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


export default function Proveedor() {
    return (
        <Container>
            <CssBaseline />
                <header className="App-header">
                    <br/>
                    <Typography component="div" variant="h2">
                        Peluqueria Las Mañas de Luis
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
                        </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                <Typography variant="h5">
                                     Imagenes
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                             <p>La mejor peluqueria de toda Neiva.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper >imagen 1</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper >imagen 2</Paper>
                         </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                 <Typography variant="h5">
                                      Caracteristicas principales
                                 </Typography>
                             </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper class="outlinenone">
                                 <Typography variant="h5">
                                      Ubicaciones :
                                 </Typography>
                             </Paper>
                        </Grid>
                   </Grid>
                   <br/>
                   <br/>



                   <Button
                       type="submit"
                       fullWidth
                       variant="contained"
                       color="primary"
                   >
                      Haz tu reserva
                   </Button>
                    <br/>
                    <br/>
                   <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="second"
                   >
                     Agregar otro servicio
                   </Button>
               <Box mt={5} component="h3" >
                    KingBoo
               </Box>
        </Container>
    );
}
