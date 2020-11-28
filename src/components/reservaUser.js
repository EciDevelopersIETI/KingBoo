import React from 'react';
import Reserva from './reserva';
import ResponsiveDrawer from './ResponsiveDrawer';

export class ReservaUser extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const myComponent = <Reserva />
		return(
			<ResponsiveDrawer childComponent={myComponent}/>

		);
	}
}