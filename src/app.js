import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Ui from './components/ui/ui.js';
import Container from './components/containers/test';

const layout = <Container>
				<Ui name="your name here"/>
			</Container>





ReactDOM.render(layout, document.getElementById('app')) 