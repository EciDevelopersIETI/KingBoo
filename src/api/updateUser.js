import axios from "axios";

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
            provider: user.provider

     })
      .then(function (response) {
        alert("Good Update !!!!!!!!!!!")
      })
      .catch(function (error) {
		    console.log(error);
        alert("Error al actualizar USER");
      });

  };

export {
    updateUser,
}
