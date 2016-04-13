var React = require('react');
var ReactDOM = require('react-dom');


var Ui = require('./components/ui/ui.js');

var Container = require('./components/containers/test');

var layout = <Container>
				<Ui name="cesar"/>
			</Container>





ReactDOM.render(layout, document.getElementById('app')) 