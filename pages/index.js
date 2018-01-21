import React, { Component } from 'react'

import withColorScroller from '../components/ColorScroller'

import Title from '../components/Title'

class Index extends Component {
	render() {
		const { opacityRatios } = this.props
		return (
			<div>
				<Title />
			</div>
		)
	}
}

export default Index
