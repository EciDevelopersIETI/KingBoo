import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Title from '../components/title'
import Button from 'react-bootstrap/Button'
import Image2 from '../img/peluqueria2.jpg'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

const datos = [
    {
      nombreNegocio: "Peluqueria",
      descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
      "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
      "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" +
      "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      direccion: "Cra 67 # 12-52",
      imagen:
        "./img/peluqueria2.jpg",
      servicios: [
        {
            tipo: "Corte de cabello",
        },
        {
            tipo: "Barba",
        },
        {
            tipo: "Manicura",
        },
        {
            tipo: "Depilacion",
        }
    ]
    }   
  ];

export default function Proveedor() {
    return (
        <Fragment>
            <Title pageTitle="Peluqueria" />
            <br></br>
            <div>
                {datos.map((dato, i) => {
                return (
                    <div key={i} className="card reserv padding-60px">
                        <div className="lista-datos">
                            <span><h3>Descripción: </h3></span>
                            <label>{dato.descripcion}</label>
                            <br></br>
                            <li>
                            <span>Dirección:</span>{dato.direccion}
                            </li>
                            <br></br>
                            <div>
                                <TableContainer component={Paper} >
                                    <Table size="medium" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                            <TableCell ><span>Servicios</span></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {dato.servicios.map((servicios, index) => (
                                            <TableRow key={index}>
                                                <TableCell >
                                                {servicios.tipo}
                                                </TableCell>
                                            </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <br></br>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Button className="btn btn-primary" href="/reservauser"> Haz tu reserva </Button>
                                </Grid>              
                            </Grid> 
                        </div>
                        <img src={Image2} alt={dato.nombreNegocio}></img>
                    </div>
                );
                })}
            </div>
            <p></p>
            <Copyright></Copyright>
            <br></br>
        </Fragment>
    );
}
