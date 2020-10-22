import React, {Component} from 'react';
import {ReservasEnSitio} from './reservasEnSitio';
import ResponsiveDrawerProveedor from './ResponsiveDrawerProveedor';

import axios from "axios";

export class HomeProveedor extends React.Component{
	constructor(props) {
		super(props);	
	}

	render(){
		let	servicesHope =  axios.get('https://kingboooback.herokuapp.com/provider')
		.then(function (response) {localStorage.setItem("listaProviders",JSON.stringify(response.data));})
		.catch(function (error) { console.log(error);} );
		const myComponent = <ReservasEnSitio />
		return(
			<ResponsiveDrawerProveedor childComponent={myComponent}/>

		);
	}
}
