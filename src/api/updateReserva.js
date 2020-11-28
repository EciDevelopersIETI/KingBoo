import axios from "axios";
import Swal from 'sweetalert2'

const axiosHeader = axios.create({
  baseURL: "https://kingboooback.herokuapp.com",
  timeout: 8000,
  headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const updateReserva = update => {
  console.log("prueba: " + update.reservaId);
  console.log("prueba: " + update.encargado);
  axios.post('https://kingboooback.herokuapp.com/reservas/updatereserva', {
    encargado: update.encargado,
    reservaId: update.reservaId
  })
    .then(function (response) {
      Swal.fire({
        icon: 'success',
        title: 'Se realizo la actualización satisfactoriamente',
        showConfirmButton: true,
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire(
        'ERROR!!',
        'No se pudo realizar la actualización de la reserva.',
        'error'
      )
    });
};

export {
  updateReserva,
}