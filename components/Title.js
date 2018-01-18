import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

export default class Title extends Component {
	state = {
		visible: true,
		title: "Hi, I'm Cosmin Serdean and I'm a software developer.",
		remove: 4,
		typed: false,
		tooltipVisible: false
	}

	onPress({ keyCode, key }) {
		let { remove, typed } = this.state
		const { title, visible } = this.state
		if (!visible) return
		if (keyCode == 8) {
			typed = true
			remove = remove >= title.length ? remove : remove + 1
		} else if (
			title.toLowerCase().search(key) !== -1 ||
			(key >= 'a' && key <= 'z')
		) {
			remove = remove > 0 ? remove - 1 : remove
			typed = true
		}

		this.setState({ remove, typed })
	}

	componentDidMount() {
		setTimeout(() => this.setState({ tooltipVisible: true }), 5 * 1000)
		document.addEventListener('keydown', this.onPress.bind(this), false)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.onPress.bind(this), false)
	}

	render() {
		const { title, remove, typed, tooltipVisible } = this.state

		const showTooltip = tooltipVisible && !typed

		// Slice to display only the tiped part of the title
		const shortenedTitle = title.slice(0, title.length - remove)

		// Text before name
		const titleP1 = shortenedTitle.slice(0, 8)

		// Name
		const titleBold = shortenedTitle.slice(8, 22)

		// Text after name
		const titleP2 = shortenedTitle.slice(22)

		return (
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
					<p className="title">
						{titleP1}
						<span className="name">{titleBold}</span>
						{titleP2}
						<span className="block">|</span>
					</p>
					<p className={`tooltip ${showTooltip ? 'visible' : ''}`}>
						try typing
					</p>
					<p className="title mobile">{title}</p>
					<div className="menu">
						<a href="mailto:cosmoserdean@gmail.com">Email</a>
						<a href="/static/cv_cosmin_serdean.pdf">CV</a>
						<a href="https://github.com/c0z0" target="_blank">
							GitHub
						</a>
					</div>
					<style jsx>{`

						@media (min-width: 448px) {
							.titleContainer {
								display: flex !important;
							}

							.tooltip {
								display: block !important;
							}

							.title.mobile {
								display: none;
							}
						}

						.menu {
							position: absolute;
							bottom: 16px;
						}

						.menu a:hover {
							opacity: 1;
						}

						.menu a {
							margin: 0 16px;
							font-size: .8em;
							text-decoration: none;
							opacity: 0.5;
							color: #ff00f1 !important;
							transition: all 0.2s;
							font-family: Menlo;
						}

						.tooltip.visible {
							opacity: 0.4;
							animation: fadein 0.5s;
						}

						.tooltip {
							display: none;
							margin: 0;
							font-size: 0.8em;
							opacity: 0;
						}

						.src {
							font-size: .8em;
							text-decoration: none;
							position: absolute;
							top: 16px;
							left: 16px;
							opacity: 0.5;
							color: #ff00f1 !important;
							transition: all 0.2s;
							font-family: Menlo;
						}

						.src:hover {
							opacity: 1;
						}

						.titleContainer {
							display: none;
							flex-wrap: wrap;
						}

						.block {
							font: Menlo;
							color: #ff00f1;
							font-size: 1.1em;
							animation: cursor 1s infinite;
						}

						.name {
							font-family: Menlo;
							text-decoration: underline;
						}

						.title {
							display: inline-block;
							font-weight: normal;
						}

						.container {
							opacity: ${this.props.opacity}
							position: relative;
							height: 100vh;
							color: #484848;
							font-family: Lato;
							display: flex;
							align-items: center;
							justify-content: center;
							flex-direction: column;
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

						@keyframes fadein {
							0% {
								opacity: 0;
							}

							100% {
								opacity: 0.4;
							}
						}
					`}</style>
				</div>
			</VisibilitySensor>
		)
	}
}
