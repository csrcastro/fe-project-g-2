import React from 'react';

export default React.createClass({
	render(){
		return(
			<p>{this.props.routeParams.page}</p>
		)
	}
})