import React from 'react';
import StatsView from './../views/statsView';
import ResponsiveDrawerProveedor from './ResponsiveDrawerProveedor';

export class StatsProvider extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const myComponent = <StatsView />
		return (
			<ResponsiveDrawerProveedor childComponent={myComponent} />

		);
	}
}
