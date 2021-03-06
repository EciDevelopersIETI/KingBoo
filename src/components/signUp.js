import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import Title from '../components/title';
import { newUser } from './../api/createUser';
import ImageUpload from "./imageUpload";

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
    // marginTop: theme.spacing(8),
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
        capacity: null,
        provImgUrl: null,
      },
      imgUrl: localStorage.getItem("urlimgprofile")
    };
    newUser(user);

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
            <b>Registrarse</b>
          </Typography>
          <form className={classes.form}
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
            </Grid>
            <br></br>
            <h4><b>Foto de perfil:</b></h4>
            <ImageUpload />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
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
