import axios from "axios";

const axiosHeader = axios.create({
    baseURL: "localhost:8080",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const loginUser = user => {
    axiosHeader.post('/users/login', {
      email: user.email.value,
      password: user.password.value
    })
	
      .then(function (response) {
        window.location.href = "/home";
      })
      .catch(function (error) { 
		console.log(error);
        alert("Check credentials");
      });

  };

export {
    loginUser,
} 