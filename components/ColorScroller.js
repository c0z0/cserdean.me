import React, { Component } from 'react'

import colorAverage from '../utils/colorAverage'
import averageColors from '../utils/colorAverage'

export default function withColorScroller(WrappedComponent, colors) {
	return class ColorScroller extends Component {
		state = { color: colors[0] }

		componentDidMount() {
			document.addEventListener('scroll', this.scroll.bind(this), false)
		}

		componentWillUnmount() {
			document.removeEventListener('scroll', this.scroll.bind(this), false)
		}

		scroll() {
			const h = document.documentElement,
				b = document.body,
				st = 'scrollTop',
				sh = 'scrollHeight'

			const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)

			this.setState({ color: averageColors(colors[0], colors[1], 1 - percent) })
		}
		render() {
			return (
				<div>
					<WrappedComponent {...this.props} />
					<style jsx global>{`
						body {
							background: ${this.state.color};
							margin: 0;
						}
					`}</style>
				</div>
			)
		}
	}
}
