import React, {Component} from 'react';
import Categoria from '../views/categoria';
import ResponsiveDrawer from './ResponsiveDrawer';

export class CategoriaUser extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const myComponent = <Categoria />
		return(
			<ResponsiveDrawer childComponent={myComponent}/>

		);
	}
}