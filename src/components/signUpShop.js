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
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
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
                                name="Nit"
                                autoComplete="Nit"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="web"
                                type="url"
                                label="Pagina Web"
                                name="web"
                                autoComplete="web"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="direccion"
                                label="Direccion"
                                name="dir"
                                autoComplete="dir"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <List 
                            component="nav" aria-label="nested-list-subheader"  subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                Que servicios Prestas ?
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
                                multiline
                                rows={5}
                                required
                                fullWidth
                                type="tel"
                                id="comentarios"
                                label="Comentarios"
                                name="Comentarios"
                                autoComplete="Comentarios"
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <Typography component="h6" variant="h6">
                                Datos del Responsable
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="nombre"
                                name="nombre"
                                variant="outlined"
                                required
                                fullWidth
                                id="nombre"
                                label="Nombre"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="apellido"
                                label="Apellido"
                                name="apellido"
                                autoComplete="apeliido"
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
                                type="number"
                                id="tel"
                                label="Telefono"
                                name="Telefono"
                                autoComplete="Telefono"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                required={true}
                                control={<Checkbox value="condiciones" color="primary" />}
                                label="Acepto los terminos y condiciones."
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