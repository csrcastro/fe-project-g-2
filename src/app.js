import React from 'react';
import ReactDOM from 'react-dom';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // Look at that, we are importing a css file... Is this real? No, it's Webpack

//Components
import Ui from './components/ui/ui.js';
import Container from './components/containers/test';

const layout = <Container>
				<Ui name="your name here"/>
			</Container>





ReactDOM.render(layout, document.getElementById('app')) 