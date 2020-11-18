import React, {Component} from 'react';
import {ReservasEnSitio} from './reservasEnSitio';
import ResponsiveDrawerProveedor from './ResponsiveDrawerProveedor';

import axios from "axios";

export class HomeProveedor extends React.Component{
	constructor(props) {
		super(props);
		this.email = localStorage.getItem('user');
		this.provider = localStorage.getItem('provider');
	}

	render(){
		var path = axios.get('https://kingboooback.herokuapp.com/reservas/getEstadisticasByProvider/'+localStorage.getItem('providerUser'))
		.then(function (response) {localStorage.setItem("estadisticas",JSON.stringify(response.data));})
		.catch(function (error) { console.log(error);} );
		let	servicesHope =  axios.get('https://kingboooback.herokuapp.com/users/'+ this.email)
		.then(function (response) {localStorage.setItem("provider",JSON.stringify(response.data));})
		.catch(function (error) { console.log(error);} );
		const myComponent = <ReservasEnSitio />
		return(
			<ResponsiveDrawerProveedor childComponent={myComponent}/>

		);
	}
}
