import axios from "axios";

const axiosHeader = axios.create({
    baseURL: "https://kingboooback.herokuapp.com",
    timeout: 8000,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
});

const loginUser = user => {
	console.log('llega auiiiiiiiiiiiiii');
	console.log(user);
    axios.post('https://kingboooback.herokuapp.com/users/login', {
             email: user.email,
             password: user.password
     })
	
      .then(function (response) {
        window.location.href = "/homeuser";
      })
      .catch(function (error) { 
		console.log(error);
        alert("Check credentials");
      });

  };

export {
    loginUser,
} 