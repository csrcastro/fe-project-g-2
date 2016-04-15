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
	componentWillReceiveProps(nextProps){
		this.setState({
			loading: true
		});

		Axios.get(Config.apiUrl + 'pages?slug=='+ nextProps.routeParams.page).then((page)=>{
			this.setState({
				loading: false,
				page: page.data
			});
		});

	},
	componentDidMount(){

		Axios.get(Config.apiUrl + 'pages?slug=='+ this.props.routeParams.page).then((page)=>{
			this.setState({
				loading: false,
				page: page.data
			});
		});
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