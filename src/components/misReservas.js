import React, { Fragment } from "react";

import Title from "./title";
import Header from "./header";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const MisReservas = () => {
  const datos = [
    {
      nombreNegocio: "Peluqueria Florecita",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor " +
        "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
        " ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" +
        " non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      direccion: "Cra 57a #4B-85",
      imagen:
        "https://www.logopik.com/wp-content/uploads/edd/2018/11/Beauty-Salon-Logo-Vector.png",
      reservas: [
        {
          fechaReserva: "20/12/2020",
          horaReserva: "10:00 AM",
          tipoServicio: "Manicure",
        },
        {
          fechaReserva: "08/04/2020",
          horaReserva: "10:00 PM",
          tipoServicio: "Pedicure",
        },
      ],
    },
    {
      nombreNegocio:
        "Parqueadero Donde Juanito",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor " +
        "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
        " ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" +
        " non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      direccion: "Diag 77b #116B-42",
      imagen:
        "https://ccoutletfactory.com/wp-content/uploads/2018/07/city-parking-marcas-outlet-factory.jpg",
      reservas: [
        {
          fechaReserva: "20/03/2020",
          horaReserva: "12:00 AM",
          tipoServicio: "Parqueadero",
        },
        {
          fechaReserva: "08/04/2020",
          horaReserva: "01:00 PM",
          tipoServicio: "Parqueadero",
        },
        {
          fechaReserva: "20/08/2020",
          horaReserva: "04:00 AM",
          tipoServicio: "Parqueadero",
        },
        {
          fechaReserva: "08/10/2020",
          horaReserva: "10:00 PM",
          tipoServicio: "Parqueadero",
        },
      ],
    },
  ];

  return (
    <Fragment>
      <Header></Header>
      <Title pageTitle="Mis Reservas" />
      <div>
        {datos.map((dato, i) => {
          return (
            <div key={i} className="card reserv padding-60px">
              <div className="lista-datos">
                <h2>
                  <span>{dato.nombreNegocio}</span>
                </h2>
                <label>{dato.descripcion}</label>
                <br></br>
                <li>
                  <span>Direccion:</span> {dato.direccion}
                </li>
                <br></br>
                <div>
                  <TableContainer component={Paper} >
                    <Table size="medium" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell ><span>Servicio</span></TableCell>
                          <TableCell ><span>Fecha y Hora Reserva</span></TableCell>
                          <TableCell ><span>Cancelar Reserva</span></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dato.reservas.map((reserva, index) => (
                          <TableRow key={index}>
                              <TableCell >
                              {reserva.tipoServicio}
                            </TableCell>
                            <TableCell >
                              {reserva.fechaReserva} - {reserva.horaReserva}
                            </TableCell>
                            <TableCell>
                               <button className="btn btn-secondary">Cancelar datos</button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
              <img src={dato.imagen} alt={dato.nombreNegocio}></img>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default MisReservas;
