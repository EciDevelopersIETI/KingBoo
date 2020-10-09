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
      })
      .catch(function (error) { 
		console.log(error);
        alert("Error al crear reserva");
      });

};

const updateReserva = update =>{
  console.log("prueba: "+update.reservaId);
  console.log("prueba: "+update.encargado);
    axios.post('https://kingboooback.herokuapp.com/reservas/updatereserva',{
      name: update.encargado,
      id:  update.reservaId
    })
    .then(function (response) {
      alert("Realizo el update")
    })
    .catch(function (error) { 
  console.log(error);
      alert("Error al actulizar");
    });
};

export {
    newReserva,
    updateReserva,
}