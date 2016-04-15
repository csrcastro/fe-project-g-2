import React from 'react';
import Axios from 'axios';
import Config from '../../config/config';

import NavItem from '../ui/navItem';


export default React.createClass({
	getInitialState(){
		return{
			loading: true,
			pages: []
		}
	},
	componentWillMount(){
		Axios.get(Config.apiUrl + 'pages').then((pages)=>{
			this.setState({
				loading: false,
				pages: pages.data
			});
		})
	},
	render(){

		const pages = this.state.loading ? <li>loading</li> : this.state.pages.map((page)=>{
								return <NavItem key={page.id} path={page.slug} name={page.title.rendered}/>
							});

		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav">
					<NavItem path="list" name="List" />
					{pages}
				</ul>
			</nav>
		)
	}
})