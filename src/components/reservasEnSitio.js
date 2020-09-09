import React, { Fragment } from 'react';

import Title from './title';
import Header from './header';

const ReservasEnSitio = ()=> {

  const datos = [
    {
      nombre: 'Alejandra Gomez',
      cc: '1234567890',
      fechaReserva: '20/08/2018',
      horaReserva: '10:00',
      tipoServicio: 'Manicure',
      asignarA: 'Baran',

    },
    {
      nombre: 'Maria Gonzales',
      cc: '0987654321',
      fechaReserva: '20/08/2018',
      horaReserva: '12:00',
      tipoServicio: 'Depilacion',
      asignarA: 'Paquita',

    },
    {
      nombre: 'Maria Gonzales',
      cc: '0987654321',
      fechaReserva: '20/08/2018',
      horaReserva: '13:00',
      tipoServicio: 'Manicure',
      asignarA: 'Marcela',

    }
  ]

  return (

    <Fragment>
      <Header></Header>
      <Title pageTitle="Reservas Sitio X"/>
      <div >
        {datos.map((dato, i) =>{
          return(
            <div key={i} className='card reserv' >
              <div className='lista-datos'>
                <h2><span>Reserva:</span> {i+1}</h2>
                <li><span>Nombre:</span> {dato.nombre}</li>
                <li><span>Cedula:</span> {dato.cc}</li>
                <li><span>Fecha Reserva:</span> {dato.fechaReserva}</li>
                <li><span>Hora de Reserva:</span> {dato.horaReserva}</li>
                <li><span>Tipo de Servicio:</span> {dato.tipoServicio}</li>
                <label> <span>Asignar cliente a: </span> </label>
                <select id='Empleados'>
                  <option value='...'>...</option>
                  <option value='pedro'>pedro</option>
                  <option value='juan'>juan</option>
                  <option value='maria'>maria</option>
                </select>
              </div>
              <div className='botones'>
                <button className='btn btn-success'>Enviar datos</button>
                <button className='btn btn-secondary'>Cancelar datos</button>
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  );

}

export default ReservasEnSitio;