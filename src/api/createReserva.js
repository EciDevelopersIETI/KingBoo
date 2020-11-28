import axios from "axios";
import Swal from 'sweetalert2'

const axiosHeader = axios.create({
    baseURL: "https://kingboooback.herokuapp.com",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const newReserva = reserva => {
	console.log('llega auiiiiiiiiiiiiii');
	console.log(reserva);
    axios.post('https://kingboooback.herokuapp.com/reservas/newreserva', {
			 reservaId: reserva.provider.providerName+reserva.fecha.toString()+reserva.hora.toString(),
             fecha: reserva.fecha,
             hora: reserva.hora,
             servicios: reserva.servicios,
             comentario: reserva.comentario,
			 encargado: reserva.encargado,
			 user: reserva.user,
			 provider: reserva.provider
			 
     })
	
      .then(function (response) {
        Swal.fire({
            icon: 'success',
            title: 'Registro de reserva exitoso!',
            showConfirmButton: true,
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href="homeuser";
            }	
          })
      })
      .catch(function (error) { 
		console.log(error);
        Swal.fire(
            'ERROR!!',
            'No se pudo realizar la reserva debido a que no hay suficientes cupos en la fecha que eligió para todos los servicios que desea reservar. Por favor revise los horarios disponibles y realice la reserva en esos horarios.',
            'error'
          )
      });

};

export {
    newReserva,
}
