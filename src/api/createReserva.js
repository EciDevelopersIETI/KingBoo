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
        alert("Registro de reserva exitosa !!!!!!!!!!!")
		window.location.href="homeuser";
      })
      .catch(function (error) { 
		console.log(error);
        alert("No se pudo realizar la reserva debido a que no hay suficientes cupos en la fecha que eligio para todos los servicios que desea reservar ,Por favor revise los horarios disponibles y realize la reserva en esos horarios");
      });

};

export {
    newReserva,
}
