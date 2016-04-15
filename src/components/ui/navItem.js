import React from 'react'
import {Link} from 'react-router'

const Item = (props) => (
		<Link to={props.path} className="btn btn-default navbar-btn text-uppercase" activeClassName="active">
		{props.name}
		</Link>
)

Item.propTypes = {
	path: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired
}

export default Item