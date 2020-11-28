import axios from "axios";
import Swal from 'sweetalert2'

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
      localStorage.setItem("imgUrl",user2.imgUrl);
			if(user2.rol === "cli"){
				window.location.href = "/homeuser";
			}
			else{
				localStorage.setItem("providerUser",user2.provider.providerName);
				window.location.href = "/homeProveedor";
			}

		})
		.catch(function (error)
		{ console.log(error);});

      })
      .catch(function (error) {
		console.log(error);
        Swal.fire(
			'ERROR!!',
			'Verificar credenciales',
			'error'
		  ) 
      });

  };

export {
    loginUser,
}
