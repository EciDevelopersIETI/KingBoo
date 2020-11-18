import React,{Component} from 'react';
import StatsView from './../views/statsView';
import ResponsiveDrawerProveedor from './ResponsiveDrawerProveedor';
import axios from "axios";

export class StatsProvider extends React.Component{
  constructor(props) {
		super(props);
	}
	render(){
		const myComponent = <StatsView />
		return(
			<ResponsiveDrawerProveedor childComponent={myComponent}/>

		);
	}
}
