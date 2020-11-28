import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { Component, Fragment } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import { storage } from '../api/firebase';
import { updateUser } from '../api/updateUser';
import Title from '../components/title';


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
    displayblock: {
        display: 'block'
    }
}));

export default class editarRegistro extends Component {
    //const classes = useStyles();
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            services: [],
            prices: [],
            loading: false,
            lisProv: []

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.setState({ loading: true })
        console.log("Im in comp")
        fetch('https://kingboooback.herokuapp.com/users/' + localStorage.getItem("user"))
            .then(response => response.json())
            .then(result => {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 500);
                this.setState({
                    datos: result,
                });
                //console.log(this.state.datos);
            })
    }
    handleChangeChk(e) {
        console.log(e.target.value);
        if (!(this.state.services.includes(e.target.value))) {
            if (document.getElementById(e.target.value).value !== "") {
                this.state.services.push((e.target.value));
                this.state.prices.push((e.target.value) + " ($" + (document.getElementById(e.target.value).value) + ")");
            } else {
                e.target.click();
                // Swal.fire(
                //   'ERROR!!',
                //   'Es necesario que ingrese el precio del servicio',
                //   'error'
                // )
            }
        }
        else {
            this.state.services.splice(this.state.services.indexOf(e.target.value), 1);
            this.state.prices.splice(this.state.services.indexOf((e.target.value) + " ($" + (document.getElementById(e.target.value).value) + ")"), 1);
        }
        console.log(this.state.services);
        console.log(this.state.prices);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.services);
        console.log(this.state.prices);
        if (this.state.services.length === 0) {
            Swal.fire(
                'ERROR!!',
                'Por favor, seleccione al menos un servicio',
                'error'
            )
        } else {
            console.log(this.state.services)
            const user = {
                firstName: this.state.datos.userName,
                email: this.state.datos.email,
                password: this.state.datos.password,
                telefono: (document.getElementById("telefono").value).toString(),
                provider: {
                    providerName: this.state.lisProv[0],
                    nit: (this.state.lisProv[1]).toString(),
                    description: document.getElementById("description").value,
                    address: document.getElementById("address").value,
                    capacity: (document.getElementById("capacity").value).toString(),
                    services: this.state.prices,
                    provImgUrl: localStorage.getItem("urlimgsite"),
                },
                imgUrl: localStorage.getItem("imgUrl")
            }; updateUser(user); //Vamos a crear uno para update
        }
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
                this.setState({ progress });
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(
                    url => {
                        console.log(url);
                        localStorage.setItem("urlimgsite", url);
                    }

                )
            }
        )
    }



    render() {
        var provider = this.state.datos.provider;
        for (var i in provider) {
            this.state.lisProv.push(provider[i])
            //console.log(provider[i]);
        }
        return this.state.loading ? (
            <div style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                <Spinner
                    as="span"
                    animation="border"
                    role="status"
                    aria-hidden="true"
                    style={{ width: 80, height: 80 }}
                />
                <span style={{ marginLeft: 25, fontSize: 30, fontWeight: "bold" }}>Cargando...</span>
            </div>) : (
                <div>
                    <Fragment>
                        <Title hasMargin={false} pageTitle="Editar Información" />
                        <div className='card reserv'>
                            <Container component="main" maxWidth="xs">
                                <CssBaseline />
                                <div className='card reserv'>
                                    <br></br>
                                    <br></br>

                                    <form
                                        onSubmit={this.handleSubmit}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} >
                                                <h3>
                                                    <b>Nombre de la empresa:</b> <p></p>{this.state.lisProv[0]}
                                                </h3>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <h5>
                                                    <b>NIT:</b> {this.state.lisProv[1]}
                                                </h5>
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
                                                    label="Capacidad del lugar"
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
                                                        <Checkbox label="Corte de Cabello" edge="start" value="Corte de Cabello" tabIndex={-1} disableRipple onChange={this.handleChangeChk} />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Barba" />
                                                        <TextField
                                                            type="number"
                                                            id="Barba"
                                                            label="Precio:"
                                                            name="pbarba"
                                                        />
                                                        <Checkbox edge="start" value="Barba" tabIndex={-1} disableRipple onChange={this.handleChangeChk} />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Manicura" />
                                                        <TextField
                                                            type="number"
                                                            id="Manicura"
                                                            label="Precio:"
                                                            name="pmani"
                                                        />
                                                        <Checkbox edge="start" tabIndex={-1} value="Manicura" disableRipple onChange={this.handleChangeChk} />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Depilación" />
                                                        <TextField
                                                            type="number"
                                                            id="Depilacion"
                                                            label="Precio:"
                                                            name="pdepil"
                                                        />
                                                        <Checkbox edge="start" tabIndex={-1} value="Depilacion" disableRipple onChange={this.handleChangeChk} />
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
                                                    <b>Datos del responsable</b>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <h5>
                                                    <b>Nombre:</b> {this.state.datos.userName}
                                                </h5>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <h5>
                                                    <b>Correo:</b> {this.state.datos.email}
                                                </h5>
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
                                        <br />
                                        <Button
                                            type="submit"
                                            class="btn btn-warning"
                                            fullWidth
                                            variant="contained"
                                        >
                                            Actualizar
            </Button>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p></p>
                        <Copyright></Copyright>
                        <br></br>
                    </Fragment>
                </div>
            );
    }
}
