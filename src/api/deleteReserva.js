import axios from "axios";
import Swal from 'sweetalert2';

const axiosHeader = axios.create({
  baseURL: "https://kingboooback.herokuapp.com",
  timeout: 8000,
  headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const deleteReserva = deleteres => {
  console.log("prueba: " + deleteres.reservaId);
  axios.post('https://kingboooback.herokuapp.com/reservas/deletereserva', {
    reservaId: deleteres.reservaId
  })
    .then(function (response) {
      Swal.fire({
        icon: 'success',
        title: 'Reserva cancelada satisfactoriamente',
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
        'No se pudo realizar la cancelación de la reserva.',
        'error'
      )
    });
};

export {
  deleteReserva,
};

