import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import axios from "axios";

export const PrivateRoute = ({ component: Component, ...rest }) => {


	return (
		<Route {...rest}  render={props => {
			if(localStorage.getItem("user")!== null && localStorage.getItem("roluser")!== null ){
					if(localStorage.getItem("roluser") ==="cli"){
						return (<Component {...props} />);
				    }
				    else{
						return (<Redirect to="/OpcionesProveedor" />);
					}
			}
			else{
				 return (<Redirect to="/login" />)
			}
		}}/>
	);	
}


