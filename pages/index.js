import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

export default class extends Component {
	state = {
		visible: true,
		title: "Hi, I'm Cosmin Serdean and I'm a software developer.",
		remove: 4
	}

	onPress({ keyCode }) {
		let { remove } = this.state
		const { title, visible } = this.state
		if (!visible) return
		if (keyCode == 8) {
			console.log(keyCode)
			remove = remove >= title.length ? remove : remove + 1
		} else {
			remove = remove > 0 ? remove - 1 : remove
		}

		this.setState({ remove })
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onPress.bind(this), false)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.onPress.bind(this), false)
	}

	render() {
		const { title, remove } = this.state

		const shortenedTitle = title.slice(0, title.length - remove)

		const titleP1 = shortenedTitle.slice(0, 8)

		const titleBold = shortenedTitle.slice(8, 22)

		const titleP2 = shortenedTitle.slice(22)

		return (
			<div>
				<VisibilitySensor
					partialVisibility
					onChange={visible => this.setState({ visible })}
				>
					<div className="container">
						<a
							href="https://github.com/c0z0/cserdean.me"
							className="src"
							target="_blank"
						>
							[src]
						</a>
						<div className="titleContainer">
							<p className="title">
								{titleP1}
								<span>{titleBold}</span>
								{titleP2}
							</p>
							<div className="block" />
						</div>
						{style}
					</div>
				</VisibilitySensor>
			</div>
		)
	}
}

const style = (
	<style jsx>{`
		.src {
			text-decoration: none;
			position: absolute;
			top: 16px;
			left: 16px;
			opacity: 0.5;
			color: #ff00f1 !important;
			transition: all 0.2s;
		}

		.src:hover {
			opacity: 1;
		}

		.titleContainer {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}

		.block {
			width: 1px;
			height: 1.5em;
			margin-left: 1px;
			background: #484848;
			display: inline-block;
			animation: cursor 1s infinite;
		}

		.title span {
			/*font-weight: 800;*/
			font-family: Menlo;
			text-decoration: underline;
		}
		.title {
			white-space: nowrap;
			overflow: hidden;
			display: inline-block;
			font-weight: normal;
		}
		.container {
			position: relative;
			height: 100vh;
			color: #484848;
			font-family: Lato;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		@keyframes cursor {
			0% {
				opacity: 0;
			}
			40% {
				opacity: 0;
			}
			50% {
				opacity: 1;
			}
			90% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
	`}</style>
)
