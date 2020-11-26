import axios from "axios";
import Swal from 'sweetalert2'

const axiosHeader = axios.create({
    baseURL: "https://kingboooback.herokuapp.com",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const newUser = user => {
	console.log('llega auiiiiiiiiiiiiii');
	console.log(user);
    axios.post('https://kingboooback.herokuapp.com/users/newuser', {
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
          title: 'Creación exitosa!',
          showConfirmButton: true,
        })
      })
      .catch(function (error) { 
        console.log(error);
        Swal.fire(
          'ERROR!!',
          'No se pudo crear el usuario.',
          'error'
        )
      });

  };

export {
    newUser,
}