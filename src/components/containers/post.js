import React from 'react';

export default React.createClass({

	componentDidMount(){
		console.log(this.props.routeParams.post)
	},
	render(){
		return(
			<div></div>
		)
	}

})