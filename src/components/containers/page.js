import React from 'react';
import Axios from 'axios';

import Config from '../../config/config';

import {Dump} from '../../helpers/development';

import Loading from '../ui/loading'

export default React.createClass({
	getInitialState(){
		return {
			loading: true,
			page: {}
		}
	},

	fetchPage(slug){

		Axios.get(Config.apiUrl + 'pages?slug=='+ slug).then((page)=>{
			this.setState({
				loading: false,
				page: page.data
			});
		});
		
	},

	checkPage(props){

		if(props.location.state.page){
			this.setState({
				loading: false,
				page: props.location.state.page
			});
			return;
		}

		this.setState({
			loading: true
		});
		this.fetchPage(props.routeParams.page);

	},
	componentWillReceiveProps(nextProps){

		this.checkPage(nextProps)

	},
	componentWillMount(){

		this.checkPage(this.props)

	},
	render(){

		if(this.state.loading){
			return <Loading />
		}

		return(
			<div>
				<p>I am a Page ({this.props.routeParams.page})</p>
				<p>Build my ui component at src/components/ui/page.js</p>
				<p>Data:</p> 
				{Dump(this.state.page)}
			</div>
		)
	}
})