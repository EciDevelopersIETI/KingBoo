import React, { Fragment, Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { newUser } from '../api/createUser';
import Title from '../components/title';
import { Row, Col, Form } from 'react-bootstrap';
import { storage } from '../api/firebase';
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


export default class SignUpShop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            services: [],
            prices: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
		e.preventDefault();
        if (e.target.files[0]) {
            const image = e.target.files[0];
            console.log(image.name);
			this.handleUpload(image);
            
        }
    }

    handleUpload(image) {
        const uploadTask = storage.ref('images/'.concat(image.name)).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({progress});
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(
                    url => {
                        console.log(url);
						localStorage.setItem("urlimgsite",url);
                    }

                )
            }
		)	
    }
    handleChangeChk = e => {
        console.log(e.target.value);
        if (!(this.state.services.includes(e.target.value))) {
            //console.log(document.getElementById(e.target.value));
            if (document.getElementById(e.target.value).value !== "") {
                this.state.services.push((e.target.value));
                this.state.prices.push((e.target.value) + " ($" + (document.getElementById(e.target.value).value) + ")");
            } else {
                e.target.click();
                //alert("Se requiere ingresar el precio")
            }
        }
        else {
            this.state.services.splice(this.state.services.indexOf(e.target.value), 1);
            this.state.prices.splice(this.state.services.indexOf((e.target.value) + " ($" + (document.getElementById(e.target.value).value) + ")"), 1);
        }
        console.log(this.state.services);
        console.log(this.state.prices);
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.services.length === 0) {
            alert("Porfavor seleccione almenos un servico");
        } else {
            console.log(this.state.services)
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
                    services: this.state.prices,
                    provImgUrl: localStorage.getItem("urlimgsite"),
                },
				imgUrl: localStorage.getItem("urlimgprofile")
            }; newUser(user);
            setTimeout(function () {
                window.location.href = "/login";
            }.bind(this), 1200);
        }



    };

    render() {

        return (
            <Fragment>
                <Title hasMargin={false} pageTitle="Registro Proveedor" />
                <div className='row row-icono flex-column align-items-center'>
                    <Avatar className="icono-fondo-rojo">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        <b>Registrarse</b>
                    </Typography>
                </div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div >
                        <br></br>
                        <br></br>

                        <form onSubmit={this.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        autoComplete="oname"
                                        name="organizationName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="orgName"
                                        label="Nombre de la empresa"
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
                                        label="Dirección"
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
                                        label="Capacidad del sitio"
                                        name="capacity"
                                        autoComplete="capacidad"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <List style={{ display: 'block' }}
                                        component="nav" id="hope" aria-label="nested-list-subheader" subheader={
                                            <Typography component="h1" variant="h5">
                                                <b>¿Qué servicios prestas?</b>
                                            </Typography>
                                        }
                                    >
                                        <ListItem button>
                                            <ListItemText primary="Corte de cabello" />
                                            <TextField
                                                type="number"
                                                id="Corte de Cabello"
                                                label="Precio:"
                                                name="pcorte"
                                            />
                                            <Checkbox id="pcorte" label="Corte de Cabello" edge="start" value="Corte de Cabello" tabIndex={-1} disableRipple onChange={this.handleChangeChk} />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Barba" />
                                            <TextField
                                                type="number"
                                                id="Barba"
                                                label="Precio:"
                                                name="pbarba"
                                            />
                                            <Checkbox id="pbarba" edge="start" value="Barba" tabIndex={-1} disableRipple onChange={this.handleChangeChk} />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Manicura" />
                                            <TextField
                                                type="number"
                                                id="Manicura"
                                                label="Precio:"
                                                name="pmani"
                                            />
                                            <Checkbox id="pmani" edge="start" tabIndex={-1} value="Manicura" disableRipple onChange={this.handleChangeChk} />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Depilación" />
                                            <TextField
                                                type="number"
                                                id="Depilacion"
                                                label="Precio:"
                                                name="pdepil"
                                            />
                                            <Checkbox id="pdepil" edge="start" tabIndex={-1} value="Depilacion" disableRipple onChange={this.handleChangeChk} />
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
                                        label="Descripción"
                                        name="description"
                                        autoComplete="description"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Form.Group as={Row} controlId="formImgNegocio">
                                        <Form.Label column className="ml-auto">
                                            <h4><b>Imagen del Negocio:</b></h4>
                                        </Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formImg">
                                        <Col className="mr-auto">
                                            <input type="file" onChange={this.handleChange} />
                                        </Col>
                                    </Form.Group>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography component="h1" variant="h5">
                                        Datos del responsable
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
							<ImageUpload/>;
							<br></br>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"

                            >
                                Registrarte
                    </Button>
                            <br></br>
                            <br></br>
                            <Grid container justify="flex-end">
                                <Grid item>

                                    <Link href="/sign-up" variant="body2">
                                        {"Regresar"}
                                    </Link>

                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
                <p></p>
                <Copyright></Copyright>
                <br></br>
            </Fragment>
        );
    }
}
