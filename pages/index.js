import React, { Component } from 'react'

import isMobile from '../utils/isMobile'
import Title from '../components/Title'

class Index extends Component {
	static async getInitialProps({ req }) {
		return { isMobile: isMobile(req ? req.headers : {}) }
	}

	render() {
		return <Title isMobile={this.props.isMobile} />
	}
}

export default Index
