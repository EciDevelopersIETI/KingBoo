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
import {newUser} from './../api/createUser';
import Title from '../components/title'

//import SignUpShop from './SignUpShop';

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
    //marginTop: theme.spacing(8),
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

export default function SignUp() {
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(document.getElementById("firstName").value);
    const user = {
      firstName: document.getElementById("firstName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      telefono: (document.getElementById("telefono").value).toString(),
      provider: {
        organizationName: null,
        nit: null,
        address: null,
        servicios: null,
        capacity: null
    }
    };
    newUser(user);
    setTimeout(function() {
      window.location.href="/login";
    }.bind(this), 1000);

  };


  return (
    <div className="container-fluid">
      <Title hasMargin={false} pageTitle="Registro Cliente" />
      <CssBaseline />
      <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form className={classes.form}
           onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre de usuario"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
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
                label="Contraseña"
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
                  label="Teléfono"
                  name="telefono"
                  autoComplete="Telefono"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quiero recibir promociones via email."
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
            Registrarte
          </Button>
          <Grid container justify="flex-end">
            <Grid item>

              <Link href={"/signUpView"}>
                {"¿Quieres ser un proveedor? ¡Registrate!"}
              </Link>

            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                {"Inicio"}
              </Link>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
                <Link href="/login" variant="body2">
                    {"Iniciar sesión"}
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Container>
    </div>
  );
}
