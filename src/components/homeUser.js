import React, {Component} from 'react';
import MisReservas from './misReservas';
import ResponsiveDrawer from './ResponsiveDrawer';

export class HomeUser extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const myComponent = <MisReservas />
		return(
			<ResponsiveDrawer childComponent={myComponent}/>

		);
	}
}