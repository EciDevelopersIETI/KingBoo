import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute2 = ({ component: Component, ...rest }) => {


	return (
		<Route {...rest} render={props => {
			if (localStorage.getItem("user") !== null && localStorage.getItem("roluser") !== null) {
				if (localStorage.getItem("roluser") === "pro") {
					return (<Component {...props} />);
				}
				else {
					return (<Redirect to="/homeuser" />);
				}
			}
			else {
				return (<Redirect to="/login" />)
			}
		}} />
	);
}