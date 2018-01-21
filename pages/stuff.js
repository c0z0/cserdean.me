import React, { Component } from 'react'

import Link from 'next/link'

export default class Stuff extends Component {
	render() {
		return (
			<h1>
				Stuff <Link href="/">Hello</Link>{' '}
			</h1>
		)
	}
}
