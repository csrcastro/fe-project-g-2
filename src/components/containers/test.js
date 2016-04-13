var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Container</h1>
				<div>{this.props.children}</div>
			</div>
		)
	}
});