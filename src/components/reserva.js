import React from 'react';
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
import Header from '../components/header';


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

    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h2">
                    Haz tu reserva
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="date"
                                label="Fecha"
                                type="date"
                                defaultValue="2020-09-29"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="time"
                                label="Hora"
                                type="time"
                                defaultValue="07:30"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <List 
                            component="nav" aria-label="nested-list-subheader"  subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                Que servicio quieres
                                </ListSubheader>
                                }
                                >
                                <ListItem button>
                                    <ListItemText primary="Corte de Cabello" />
                                    <Checkbox edge="start" tabIndex={-1} disableRipple/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Barba" />
                                    <Checkbox edge="start" tabIndex={-1} disableRipple/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Manicura" />
                                    <Checkbox edge="start" tabIndex={-1} disableRipple/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Depilacion" />
                                    <Checkbox edge="start" tabIndex={-1} disableRipple/>
                                </ListItem>
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
                                label="Necesitas un parqueador"
                            />
                        </Grid>

                    </Grid>
                    <Button className={classes.submit}> Listo </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/proveedor" variant="body2">
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