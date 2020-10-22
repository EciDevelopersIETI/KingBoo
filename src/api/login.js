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
		localStorage.setItem("user",user.email);
		let user2 = axios.get('https://kingboooback.herokuapp.com/users/'+localStorage.getItem("user"))
		.then(function (response) 
		{	user2 = response.data;
			localStorage.setItem("username",user2.userName);
			localStorage.setItem("roluser",user2.rol);
			if(user2.rol === "cli"){
				window.location.href = "/homeuser";
			}
			else{
				window.location.href = "/OpcionesProveedor";
			}
			
		})
		.catch(function (error)
		{ console.log(error);});	
		
      })
      .catch(function (error) { 
		console.log(error);
        alert("Check credentials");
      });

  };

export {
    loginUser,
} 