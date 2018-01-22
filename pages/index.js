import React, { Component } from 'react'

import isMobile from '../utils/isMobile'
import Title from '../components/Title'

class Index extends Component {
	static async getInitialProps({ req }) {
		return { isMobile: isMobile(req ? req.headers : {}) }
	}

	render() {
		const { opacityRatios } = this.props
		return (
			<div>
				<Title isMobile={this.props.isMobile} />
			</div>
		)
	}
}

export default Index
