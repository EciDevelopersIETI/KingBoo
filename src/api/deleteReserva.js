import axios from "axios";

const axiosHeader = axios.create({
    baseURL: "https://kingboooback.herokuapp.com",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const deleteReserva = deleteres =>{
    console.log("prueba: "+deleteres.reservaId);
      axios.post('https://kingboooback.herokuapp.com/reservas/deletereserva',{
        reservaId: deleteres.reservaId
      })
      .then(function (response) {
        alert("Cancelo la reserva")
      })
      .catch(function (error) { 
    console.log(error);
        alert("Error al cancelar");
      });
  };
  
  export {
      deleteReserva,
  }