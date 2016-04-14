import React from 'react';
import Axios from 'axios';

import Config from '../../config/config';
import Loading from '../ui/loading'


export default React.createClass({

	getInitialState(){
		return{
			loading: true,
			list: []
		}
	},
	componentDidMount(){

		Axios.get(Config.apiUrl + 'posts').then((posts)=>{
			this.setState({
				loading: false,
				list: posts.data
			});
		})

	},
	render(){

		if(this.state.loading){
			return <Loading />
		}

		return (
			<div>
				<h2>Awesome Post list</h2>
				<ul>
					{
						this.state.list.map((post)=>{
							return(
								<li key={post.id}>I am a list item, build me at src/components/ui/listItem.js</li>
							)
						})
					}
				</ul>
			</div>
		)
		
	}

})