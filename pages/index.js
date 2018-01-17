import React, { Component } from 'react'

import withColorScroller from '../components/ColorScroller'

import Title from '../components/Title'

const Index = ({ opacityRatios }) => (
	<div>
		<Title opacity={opacityRatios[0]} />
	</div>
)

export default withColorScroller(Index, ['#ffffff'])
//export default withColorScroller(Index, ['#ffffff', '#ff00f1', '#79ffe1'])
