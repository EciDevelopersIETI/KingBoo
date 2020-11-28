import axios from "axios";
import Swal from 'sweetalert2';

const axiosHeader = axios.create({
  baseURL: "https://kingboooback.herokuapp.com",
  timeout: 8000,
  headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const updateUser = user => {
  console.log('llega auiiiiiiiiiiiiii');
  console.log(user);
  axios.post('https://kingboooback.herokuapp.com/users/updateprovider', {
    email: user.email,
    password: user.password,
    telefono: user.telefono,
    userName: user.firstName,
    provider: user.provider,
    imgUrl: user.imgUrl,

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
        'No se pudo realizar la actualización del usuario.',
        'error'
      )
    });

};

export {
  updateUser,
};

