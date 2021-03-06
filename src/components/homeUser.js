import axios from "axios";
import React from 'react';
import { MisReservas } from './misReservas';
import ResponsiveDrawer from './ResponsiveDrawer';


export class HomeUser extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let servicesHope = axios.get('https://kingboooback.herokuapp.com/provider')
			.then(function (response) { localStorage.setItem("listaProviders", JSON.stringify(response.data)); console.log(response.data); })
			.catch(function (error) { console.log(error); });
		const myComponent = <MisReservas />
		return (
			<ResponsiveDrawer childComponent={myComponent} />

		);
	}
}
