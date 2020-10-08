import React, {Component} from 'react';
import Proveedor from './proveedor';
import ResponsiveDrawer from './ResponsiveDrawer';

export class ProveedorUser extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const myComponent = <Proveedor />
		return(
			<ResponsiveDrawer childComponent={myComponent}/>

		);
	}
}