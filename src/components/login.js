import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './img/logo.PNG';
import logo2 from './img/logo2.PNG';
import logo5 from './img/logo5.PNG';
import { loginUser } from './../api/login';

import Spinner from 'react-bootstrap/Spinner'
import axios from "axios";

import Swal from 'sweetalert2'


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

const axiosHeader = axios.create({
  baseURL: "https://kingboooback.herokuapp.com",
  timeout: 8000,
  headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  image: {
    backgroundImage: 'url(https://github.com/EciDevelopersIETI/KingBoo-Front-End/blob/master/img/logo.PNG?raw=true)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);

  const loginUserP = user => {
    console.log('llega auiiiiiiiiiiiiii');
    console.log(user);
    axios.post('https://kingboooback.herokuapp.com/users/login', {
      email: user.email,
      password: user.password
    })

      .then(function (response) {
        localStorage.setItem("user", user.email);
        let user2 = axios.get('https://kingboooback.herokuapp.com/users/' + localStorage.getItem("user"))
          .then(function (response) {
            user2 = response.data;
            localStorage.setItem("username", user2.userName);
            localStorage.setItem("roluser", user2.rol);
            Swal.fire({
              icon: 'success',
              title: 'Credenciales correctas!',
              showConfirmButton: false,
              timer: 1500
            })
            if (user2.rol === "cli") {
              window.location.href = "/homeuser";
            }
            else {
              localStorage.setItem("providerUser", user2.provider.providerName);
              window.location.href = "/homeProveedor";
            }

          })
          .catch(function (error) { console.log(error); setLoading(false) });

      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
        Swal.fire(
          'ERROR!!',
          'Verificar credenciales',
          'error'
        ) 
      });

  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(e);
    const user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    }
    console.log(user);
    loginUserP(user)

  };

  return (
    <Box m="auto">
      <Grid container component="main" justify='center' alignItems='center' style={{ backgroundColor: '#f5a623' }} className={classes.root}>
        <CssBaseline />
        <img src={logo2} style={{ height: '100%', width: '20%' }} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <img src={logo} style={{ height: '100%', width: '85%' }} />
          <div className={classes.paper} border='1px solid red'>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión
          </Typography>
            {localStorage.clear()}
            <form className={classes.form}
              onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading}
              >
                {loading && <Spinner
                  as="span"
                  animation="border"
                  role="status"
                  aria-hidden="true"
                />}
              Acceder
            </Button>
              <Grid container>
                <Grid container justify="flex-end">
                  <Link href="/" variant="body2">
                    {"Inicio"}
                  </Link>
                </Grid>
                <Grid container justify="flex-end">
                  <Link href="/sign-up" variant="body2">
                    {"¿No tienes una cuenta? Regístrate"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={7}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
        <img src={logo5} style={{ height: '100%', width: '20%' }} />
      </Grid>
    </Box>

  );
}
