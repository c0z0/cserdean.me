import React, { Component } from 'react'

import withColorScroller from '../components/ColorScroller'

import Title from '../components/Title'
import WebDevScreen from '../components/WebDevScreen'
import MLScreen from '../components/MLScreen'

class Index extends Component {
	render() {
		const { opacityRatios } = this.props
		return (
			<div>
				<Title opacity={opacityRatios[0]} />
				{/* <WebDevScreen opacity={opacityRatios[1]} /> */}
				{/* <MLScreen opacity={opacityRatios[1]} /> */}
			</div>
		)
	}
}

export default withColorScroller(Index, ['#ffffff', '#ffffff'])
// export default withColorScroller(Index, ['#ffffff', '#79ffe1', '#ff00f1'])
