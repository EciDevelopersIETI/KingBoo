import axios from "axios";

const axiosHeader = axios.create({
    baseURL: "https://kingboooback.herokuapp.com",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const newReserva = reserva => {
	console.log('llega auiiiiiiiiiiiiii');
	console.log(reserva);
    axios.post('https://kingboooback.herokuapp.com/reservas/newreserva', {
             fecha: reserva.fecha,
             hora: reserva.hora,
             servicios: reserva.servicios,
             comentario: reserva.comentario,
			 encargado: reserva.encargado,
			 user: reserva.user
			 
     })
	
      .then(function (response) {
        alert("Registro de reserva exitosa !!!!!!!!!!!")
      })
      .catch(function (error) { 
		console.log(error);
        alert("Error al crear reserva");
      });

  };

export {
    newReserva,
}