import React from 'react'
import {Link} from 'react-router'

const Item = (props) => (
	<li>
		<Link to={props.path}>{props.name}</Link>
	</li>
)

Item.propTypes = {
	path: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired
}

export default Item