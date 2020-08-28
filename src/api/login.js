import axios from "axios";

const axiosHeader = axios.create({
    baseURL: "localhost:8080",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const loginUser = user => {
	console.log('llega auiiiiiiiiiiiiii');
	console.log(user);
    axios.post('http://localhost:8080/users/login', {
             email: user.email,
             password: user.password
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