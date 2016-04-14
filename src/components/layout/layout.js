import React from 'react';

import Sidebar from '../containers/sidebar.js'
import Nav from './nav'

export default React.createClass({
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h1 className="text-center text-uppercase">Group Project 2</h1>
					</div>
				</div>
				<div className="row">
					<Nav />
				</div>
				<div className="row">
					<div className="col-md-4">
						<Sidebar />
					</div>
					<div className="col-md-8">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
})