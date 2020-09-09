import axios from "axios";

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
             userName: user.firstName
     })
	
      .then(function (response) {
        alert("Creacion exitosa !!!!!!!!!!!")
      })
      .catch(function (error) { 
		console.log(error);
        alert("Error al crear USER");
      });

  };

export {
    newUser,
}