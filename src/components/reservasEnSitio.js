import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { Container, Row, Col } from 'reactstrap';
import Header from './header';
import Title from './title';

export default function reservasEnSitio() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nombre', field: 'nombre' },
      { title: 'ID', field: 'id' },
      { title: 'Fecha reserva', field: 'fechaReserva' },
      {title: 'Hora reserva', field: 'horaReserva'},
      {title: 'Tipo servicio', field: 'tipoServicio'},
      {title: 'Asignar a', field: 'asignarA'},
    ],
    data: [
      {
        nombre: 'Alejandra Gomez',
        id: '1234567890',
        fechaReserva: '20/08/2018',
        horaReserva: '10:00',
        tipoServicio: 'Manicure',
        asignarA: 'Baran',

      },
      {
        nombre: 'Maria Gonzales',
        id: '0987654321',
        fechaReserva: '20/08/2018',
        horaReserva: '12:00',
        tipoServicio: 'Depilacion',
        asignarA: 'Paquita',

      },
      {
        nombre: 'Maria Gonzales',
        id: '0987654321',
        fechaReserva: '20/08/2018',
        horaReserva: '13:00',
        tipoServicio: 'Manicure',
        asignarA: 'Marcela',

      },
    ],
  });

  return (
    <div>
        <Header></Header>
        <Title pageTitle="Reservas"/>
        <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        editable={{
            onRowAdd: (newData) =>
            new Promise((resolve) => {
                setTimeout(() => {
                resolve();
                setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                });
                }, 600);
            }),
            onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
                setTimeout(() => {
                resolve();
                if (oldData) {
                    setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                    });
                }
                }, 600);
            }),
            onRowDelete: (oldData) =>
            new Promise((resolve) => {
                setTimeout(() => {
                resolve();
                setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                });
                }, 600);
            }),
        }}
        />
    </div>
  );
}
