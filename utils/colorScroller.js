import React, { Component } from 'react'

import colorAverage from '../utils/colorAverage'
import averageColors from '../utils/colorAverage'

export default function withColorScroller(WrappedComponent, colors) {
	colors = colors.map(c => {
		if (c.length === 7) return c
		return '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3]
	})

	return class ColorScroller extends Component {
		state = {
			color: colors[0],
			opacityRatios: Array(colors.length)
				.fill(1)
				.fill(0, 1)
		}

		componentDidMount() {
			this.scroll()
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

			const scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)

			const color1Index = Math.floor(scroll * (colors.length - 1))
			const color2Index = Math.ceil(scroll * (colors.length - 1))

			const color1 = colors[color1Index]
			const color2 = colors[color2Index]

			const ratio =
				1 -
				(scroll * (colors.length - 1) -
					Math.floor(scroll * (colors.length - 1)))

			const color = averageColors(color1, color2, ratio)

			const { opacityRatios } = this.state

			opacityRatios.fill(0)
			if (color1Index === color2Index) {
				opacityRatios[color1Index] = 1
			} else {
				opacityRatios[color1Index] = ratio
				opacityRatios[color2Index] = 1 - ratio
			}
			this.setState({ color, opacityRatios })
		}
		render() {
			return (
				<div>
					<WrappedComponent
						{...this.props}
						opacityRatios={this.state.opacityRatios}
					/>
					<style jsx global>{`
						body {
							background: ${this.state.color};
						}
					`}</style>
				</div>
			)
		}
	}
}
