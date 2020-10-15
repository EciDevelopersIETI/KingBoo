import axios from "axios";

const axiosHeader = axios.create({
    baseURL: "https://kingboooback.herokuapp.com",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const updateReserva = update =>{
    console.log("prueba: "+update.reservaId);
    console.log("prueba: "+update.encargado);
      axios.post('https://kingboooback.herokuapp.com/reservas/updatereserva',{
        encargado: update.encargado,
        reservaId: update.reservaId
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
      updateReserva,
  }