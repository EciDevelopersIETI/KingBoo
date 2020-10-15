import React, {Component} from 'react';
import Proveedor from './proveedor';
import ResponsiveDrawer from './ResponsiveDrawer';
import axios from "axios";

export class ProveedorUser extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const myComponent = <Proveedor />
		localStorage.setItem("provider","Luis Shop");
		let	servicesHope = axios.get('https://kingboooback.herokuapp.com/provider/'+localStorage.getItem("provider")+'/service').then(function (response) {localStorage.setItem("servicesPro",response.data);}).catch(function (error) { console.log(error);});
		return(
			<ResponsiveDrawer childComponent={myComponent}/>

		);
	}
}